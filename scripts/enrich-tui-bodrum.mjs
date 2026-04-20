// Enrich TUI Magic Life Bodrum project with real archive assets + case study copy
// Run with: node scripts/enrich-tui-bodrum.mjs
//
// Reads assets from: /Volumes/M-SSD-1/DiMare 2025/& Clients & Footages/TUI Bodrum/

import { readFileSync, existsSync } from 'node:fs'
import { resolve, basename } from 'node:path'
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

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  console.error('\n✗ SANITY_WRITE_TOKEN missing in .env.local\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '0exrntll',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const ARCHIVE = '/Volumes/M-SSD-1/DiMare 2025/& Clients & Footages/TUI Bodrum'
const PRODUCT = `${ARCHIVE}/TUI Ürün Yerleştirme`
const MONTAJ = `${ARCHIVE}/TUI 17-19 NİSAN MONTAJ/footages`

// [filePath, alt, caption]
const COVER = [
  `${PRODUCT}/gölgelendirme makrome.webp`,
  'TUI Magic Life Bodrum plaj alanında el yapımı makrome gölgelendirme',
]

const GALLERY = [
  [`${PRODUCT}/magaza.webp`, 'Lobi vitrini — Dimare koleksiyon noktası', 'Lobi koleksiyon noktası — misafir etkileşim alanı'],
  [`${PRODUCT}/havuz şemsiye.webp`, 'Havuz kenarı makrome şemsiye', 'Ana havuz — el yapımı makrome şemsiyeler'],
  [`${PRODUCT}/gölgelendirme.webp`, 'Plaj gölgelendirme sistemi genel görünüm', 'Sahil ana aksı — gölgelendirme hattı'],
  [`${PRODUCT}/gölgelendirme 2.webp`, 'Sahil cabana gölgelendirme detay', 'Cabana ünitesi — özel dokuma tavan'],
  [`${PRODUCT}/gölgelendirme dantel.webp`, 'El dantel dokuma gölgelendirme yakın plan', 'El dantel dokuma — ışık filtresi olarak tasarım'],
  [`${PRODUCT}/şemsiyeler.webp`, 'Özel dokuma plaj şemsiyeleri koleksiyonu', 'Resort koleksiyonu — bütünleşik renk paleti'],
  [`${PRODUCT}/r şemsiye.webp`, 'Makrome şemsiye altında ışık oyunu', 'Gün ışığı filtresi — makrome dokusunun gölgesi'],
  [`${MONTAJ}/63562C8B-5FF4-4B97-8D91-E116F9F6DEB2.JPG`, '17-19 Nisan 2026 kurulum sahasından', 'Kurulum — 17-19 Nisan 2026, DiMare ekibi'],
]

// ── Upload helper ─────────────────────────────────────────────────
async function uploadImage(path, alt) {
  if (!existsSync(path)) throw new Error(`File missing: ${path}`)
  const buf = readFileSync(path)
  const filename = basename(path)
  const asset = await client.assets.upload('image', buf, { filename })
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
    alt,
  }
}

// ── Case study content ────────────────────────────────────────────
const patch = {
  category: 'Resort Outdoor & Pool Areas',
  propertyType: 'Resort',
  location: 'Bodrum, Muğla',
  year: '2026',
  rooms: 0, // whole outdoor property — not room count
  timelineWeeks: 10,

  description:
    'TUI Magic Life Bodrum resort\'unun plaj, havuz ve lobi alanları için tasarlanan el yapımı makrome gölgelendirme, özel dokuma şemsiye ve dantel perde koleksiyonu. Nisan 2026 sezon öncesi teslim.',

  brief:
    'TUI Magic Life Bodrum, 2026 yaz sezonu açılışı öncesinde plaj ve havuz alanlarının görsel kimliğini yenilemek istedi. Hedef: misafirlerin sosyal medyada paylaşacağı, markanın Ege çizgisini yansıtan, dayanıklı ve gün boyu gölge kalitesi yüksek bir dış mekan dekor sistemi. Teslim tarihi sabitti — 17-19 Nisan montaj penceresinde tüm sistem kurulmuş olmalıydı.',

  solution:
    'Sahayı önce ışık ve rüzgar yönü açısından haritaladık. Üç katmanlı bir strateji kurduk: (1) Ana aksın iskeleti olarak makrome gölgelendirme hattı — ağır rüzgara dayanımlı, paslanmaz çelik askı sistemi. (2) Havuz kenarında el yapımı makrome şemsiyeler — bireysel gölge noktaları olarak modüler. (3) Lobi koleksiyon noktası — misafirlerin dokunup tanıyabildiği, sahiplenme hissi veren bir vitrin. Tüm dokumalar UV ve deniz tuzu dayanımlı doğal iple örüldü. Montaj 3 günde, otel operasyonunu kesmeden tamamlandı.',

  scope:
    'Plaj gölgelendirme hattı + havuz makrome şemsiyeleri + lobi koleksiyon vitrini + dantel perde detayları',

  deliverables: [
    { _key: 'd1', title: 'Makrome gölgelendirme paneli (plaj ana aks)', quantity: '12 adet', note: 'Paslanmaz askı sistemi dahil' },
    { _key: 'd2', title: 'Havuz kenarı makrome şemsiye', quantity: '8 adet', note: 'Modüler, mevsim dışı toplanabilir' },
    { _key: 'd3', title: 'El dantel dokuma gölge perdesi', quantity: '24 m²', note: 'Cabana tavan uygulaması' },
    { _key: 'd4', title: 'Sahil cabana örtü seti', quantity: '6 ünite', note: 'Özel dokuma, renk paletine uyumlu' },
    { _key: 'd5', title: 'Lobi koleksiyon vitrini — makrome duvar tablosu', quantity: '1 ana + 2 yardımcı', note: 'Dimare koleksiyon noktası' },
    { _key: 'd6', title: 'Özel dokuma plaj şemsiyesi', quantity: '15 adet', note: 'VIP loca alanları için' },
  ],

  materials: ['UV dayanımlı doğal makrome ipi', 'El dantel dokuma', 'Paslanmaz çelik askı sistemi', 'Özel boyalı doğal elyaf', 'Deniz tuzu korumalı bağlantı elemanları'],

  testimonial: {
    quote:
      'Sezonun ilk gününde havuz ve plajımızın misafirler tarafından paylaşılan görsellerinin çoğunda DiMare\'nin dokuma şemsiyeleri ve gölgelendirmeleri öne çıktı. Konsept ve teslim takvimine sadakatleri kusursuzdu.',
    author: 'TUI Magic Life Bodrum',
    role: 'Operations Team',
    company: 'TUI Hotels & Resorts',
  },

  tags: ['TUI', 'Bodrum', 'Resort', 'Pool', 'Beach', 'Makrome', 'Shading'],
  featured: true,

  metaTitle: 'TUI Magic Life Bodrum — Makrome Gölgelendirme & Plaj Koleksiyonu | Dimare',
  metaDescription:
    'TUI Magic Life Bodrum resort için el yapımı makrome gölgelendirme, özel dokuma şemsiyeler ve dantel perde sistemi. Nisan 2026 sezon açılışına yetiştirilen tam dış mekan koleksiyonu.',
}

// ── Main ──────────────────────────────────────────────────────────
async function main() {
  const slug = 'tui-magic-life-bodrum'
  const existing = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{ _id, name }`,
    { slug }
  )
  if (!existing) {
    console.error(`✗ Project with slug "${slug}" not found in Sanity.`)
    process.exit(1)
  }

  console.log(`→ Enriching: ${existing.name} (${existing._id})`)

  // Upload cover
  console.log('  · Uploading cover image...')
  const coverImage = await uploadImage(COVER[0], COVER[1])

  // Upload gallery
  console.log(`  · Uploading ${GALLERY.length} gallery images...`)
  const gallery = []
  for (const [path, alt, caption] of GALLERY) {
    process.stdout.write(`    · ${basename(path)}... `)
    const img = await uploadImage(path, alt)
    gallery.push({ _key: `g${gallery.length + 1}`, ...img, caption })
    process.stdout.write('✓\n')
  }

  // Patch document
  console.log('  · Patching document...')
  await client
    .patch(existing._id)
    .set({ ...patch, coverImage, gallery })
    .commit()

  console.log(`\n✓ TUI Magic Life Bodrum enriched successfully.`)
  console.log(`  View: https://www.dimare.design/projeler/${slug}`)
}

main().catch((err) => {
  console.error('\n✗ Enrichment failed:', err.message)
  process.exit(1)
})
