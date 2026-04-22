#!/usr/bin/env node
// Apply standard 4-folder structure to every hotel in 01-Hotels/
// - _social-ready/{reels,feed}/ + captions.md stub
// - final/
// - raw/  (all existing content moves here)
// - hotel.md template (if missing)
//
// Idempotent: if target subdirs exist, skip. Existing hotel.md not overwritten.
// Usage: node scripts/standardize-hotels.mjs

import { readdirSync, mkdirSync, renameSync, existsSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = '/Volumes/M-SSD-1/DiMare 2025/01-Hotels'
const STANDARD = ['_social-ready', '_social-ready/reels', '_social-ready/feed', 'final', 'raw']
const RESERVED = new Set(['_social-ready', 'final', 'raw', 'hotel.md', '.DS_Store'])

function hotelMdTemplate(slug, name) {
  return `---
name: ${name}
slug: ${slug}
location: _(doldur)_
brand: _(doldur)_
year: _(doldur)_
status: _(completed | in-progress | concept)_
featured: false
collections: []
scope: _(doldur — kısa scope cümlesi)_
area_sqm: 0
deliverables: []
materials: []
install_dates: _(doldur)_
lead_designer: _(doldur)_
testimonial: _(doldur)_
---

# ${name}

## Brief

_(Projenin başlangıç noktası. Müşteri neyi istedi, hangi sorunu çözüyorduk?)_

## Süreç

- **Kavram:** _(tarih)_
- **Üretim:** _(tarih aralığı)_
- **Kurulum:** _(tarih)_
- **Teslim:** _(tarih)_

## Dosya organizasyonu

- \`_social-ready/\` — anında paylaşılabilir içerik
- \`final/\` — pro foto + son kurgu video
- \`raw/\` — brief, konsept, üretim, kurulum ham dosyaları

## Sanity ID

_(doldur)_
`
}

function captionsTemplate(name) {
  return `# ${name} — Ready-to-Post Captions

## Instagram Reel (TR)

\`\`\`
${name} · _(hook cümlesi)_
_(3-4 satır açıklama)_

dimare.design/teklif

#dimaredesign #hoteldecor #handmade
\`\`\`

## Instagram Feed (EN)

\`\`\`
_(EN version)_
\`\`\`

## LinkedIn (B2B)

\`\`\`
_(delivered-X-sqm style post)_
\`\`\`

## TikTok (hook-first)

\`\`\`
_(şok edici bir sayı + hızlı anlatım)_
\`\`\`
`
}

const hotels = readdirSync(ROOT).filter(f => {
  if (f.startsWith('.') || f.startsWith('_')) return false
  return statSync(join(ROOT, f)).isDirectory()
})

let created = 0
let skipped = 0

for (const hotel of hotels) {
  const dir = join(ROOT, hotel)
  const slug = hotel.toLowerCase()
  const displayName = hotel.replace(/-/g, ' ')

  // 1. Ensure standard folders exist
  for (const sub of STANDARD) {
    const p = join(dir, sub)
    if (!existsSync(p)) mkdirSync(p, { recursive: true })
  }

  // 2. Move all non-reserved entries into raw/
  const entries = readdirSync(dir)
  for (const entry of entries) {
    if (RESERVED.has(entry) || entry.startsWith('._')) continue
    const src = join(dir, entry)
    const dest = join(dir, 'raw', entry)
    if (existsSync(dest)) {
      skipped++
      continue
    }
    renameSync(src, dest)
  }

  // 3. Write hotel.md (skip if exists)
  const mdPath = join(dir, 'hotel.md')
  if (!existsSync(mdPath)) {
    writeFileSync(mdPath, hotelMdTemplate(slug, displayName))
    created++
  }

  // 4. Write captions.md stub (skip if exists)
  const capPath = join(dir, '_social-ready', 'captions.md')
  if (!existsSync(capPath)) {
    writeFileSync(capPath, captionsTemplate(displayName))
  }

  console.log(`✓ ${hotel}`)
}

console.log(`\nDone. ${hotels.length} hotels standardized. ${created} new hotel.md files. ${skipped} name collisions skipped.`)
