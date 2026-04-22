#!/usr/bin/env node
// Read each hotel.md YAML frontmatter and patch the matching Sanity project doc.
// Usage: node scripts/sync-hotels-to-sanity.mjs [--dry] [--slug=tui-magic-life-bodrum]
//
// Fields synced: collections, scope, materials, location, year, featured,
//                deliverables (as strings), testimonial (quote only), tags.
// Does NOT touch: coverImage, gallery, brief, solution (managed separately).

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { createClient } from '@sanity/client'

// ── env.local loader ──────────────────────────────────────────────
try {
  const envPath = resolve(process.cwd(), '.env.local')
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  }
} catch {}

const args = process.argv.slice(2)
const DRY = args.includes('--dry')
const onlySlug = args.find((a) => a.startsWith('--slug='))?.split('=')[1]

const token = process.env.SANITY_WRITE_TOKEN
if (!token && !DRY) {
  console.error('\n✗ SANITY_WRITE_TOKEN missing in .env.local (use --dry to preview)\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0exrntll',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const HOTELS_DIR = '/Volumes/M-SSD-1/DiMare 2025/01-Hotels'

// Canonical collection slugs (must match schema)
const COLLECTION_SLUGS = new Set([
  'hotel-pool-shading',
  'hospitality-lobby-decor',
  'suite-macrame',
  'spa-wellness',
  'beach-club-design',
  'resort-restaurant',
  'hotel-signature-weaves',
  '2026-summer-collection',
])

function normalizeCollection(raw) {
  const s = String(raw).trim().toLowerCase().replace(/\s+/g, '-')
  return COLLECTION_SLUGS.has(s) ? s : null
}

// ── Minimal YAML frontmatter parser ───────────────────────────────
// Handles: scalar key: value, list items "  - item", nested objects one level.
function parseFrontmatter(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!m) return {}
  const lines = m[1].split('\n')
  const out = {}
  let currentKey = null
  let currentList = null

  for (const raw of lines) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue

    // List item
    const listMatch = raw.match(/^\s+-\s+(.*)$/)
    if (listMatch && currentList) {
      currentList.push(stripQuotes(listMatch[1].trim()))
      continue
    }

    // Key: value
    const kv = raw.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$/)
    if (kv) {
      const [, key, value] = kv
      const v = value.trim()
      if (v === '' || v === '[]') {
        // Start a list
        out[key] = []
        currentList = out[key]
        currentKey = key
      } else {
        out[key] = parseScalar(v)
        currentList = null
        currentKey = key
      }
    }
  }
  return out
}

function stripQuotes(s) {
  return s.replace(/^["'](.*)["']$/, '$1')
}

function parseScalar(v) {
  const s = stripQuotes(v)
  if (s === 'true') return true
  if (s === 'false') return false
  if (s === 'null' || s.startsWith('_(')) return null
  if (/^-?\d+$/.test(s)) return parseInt(s, 10)
  if (/^-?\d+\.\d+$/.test(s)) return parseFloat(s)
  return s
}

// ── Build patch from frontmatter ──────────────────────────────────
function buildPatch(fm) {
  const patch = {}
  const unset = []

  if (Array.isArray(fm.collections) && fm.collections.length > 0) {
    const cols = fm.collections.map(normalizeCollection).filter(Boolean)
    if (cols.length) patch.collections = cols
  }

  if (fm.location && typeof fm.location === 'string') patch.location = fm.location
  if (fm.year != null) patch.year = String(fm.year)
  if (typeof fm.featured === 'boolean') patch.featured = fm.featured
  if (fm.scope && typeof fm.scope === 'string') patch.scope = fm.scope

  if (Array.isArray(fm.materials) && fm.materials.length > 0) {
    patch.materials = fm.materials.filter((s) => typeof s === 'string' && s.trim())
  }

  if (Array.isArray(fm.deliverables) && fm.deliverables.length > 0) {
    patch.deliverables = fm.deliverables
      .filter((s) => typeof s === 'string' && s.trim())
      .map((title, i) => ({ _key: `d${i + 1}`, title }))
  }

  if (fm.testimonial && typeof fm.testimonial === 'string' && !fm.testimonial.startsWith('_(')) {
    patch.testimonial = { quote: fm.testimonial }
  }

  return { patch, unset }
}

// ── Resolve slug from hotel.md / dirname ──────────────────────────
function hotelSlugFromDir(dir, fm) {
  if (fm.slug && typeof fm.slug === 'string') return fm.slug
  return dir.toLowerCase()
}

// ── Main ──────────────────────────────────────────────────────────
async function main() {
  const hotels = readdirSync(HOTELS_DIR).filter((f) => !f.startsWith('.') && !f.startsWith('_'))

  let synced = 0
  let skipped = 0
  let missing = 0

  for (const hotel of hotels) {
    const mdPath = join(HOTELS_DIR, hotel, 'hotel.md')
    if (!existsSync(mdPath)) {
      skipped++
      continue
    }

    const fm = parseFrontmatter(readFileSync(mdPath, 'utf8'))
    const slug = hotelSlugFromDir(hotel, fm)

    if (onlySlug && slug !== onlySlug) continue

    const { patch } = buildPatch(fm)
    if (Object.keys(patch).length === 0) {
      console.log(`  · ${hotel}: no syncable fields yet (stub template)`)
      skipped++
      continue
    }

    // Find the project doc
    const existing = await client.fetch(
      `*[_type == "project" && slug.current == $slug][0]{ _id, name }`,
      { slug }
    )

    if (!existing) {
      console.log(`  ⚠ ${hotel}: no Sanity project with slug "${slug}"`)
      missing++
      continue
    }

    if (DRY) {
      console.log(`  → [dry] ${existing.name}:`, JSON.stringify(patch, null, 2))
    } else {
      await client.patch(existing._id).set(patch).commit()
      console.log(`  ✓ ${hotel} → ${existing.name} (${Object.keys(patch).join(', ')})`)
    }
    synced++
  }

  console.log(
    `\nDone. synced=${synced} skipped=${skipped} missing=${missing}${DRY ? ' (dry run, nothing written)' : ''}`
  )
}

main().catch((err) => {
  console.error('\n✗ Sync failed:', err.message)
  process.exit(1)
})
