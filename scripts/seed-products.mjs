/**
 * DiMare Design — Product Seed Script
 * Creates 20 products across 4 mekan-based categories.
 * Etsy/Shopify URLs are placeholders — update in Sanity Studio after seeding.
 *
 * Run: node scripts/seed-products.mjs
 */
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '0exrntll',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk4XTcyozQS8OIq9lkTrlDBNV070VkHQbdravOeuob7qCMOOiOwyAQC7dBQEAkS1hlAlJgIawJSXpPvwv',
  useCdn: false,
})

const ETSY_BASE = 'https://www.etsy.com/shop/DiMareDesign'

const products = [

  // ── HAVUZ & PLAJ ──────────────────────────────────────────────

  {
    _type: 'product',
    title: 'Cabana Macramé Canopy',
    subtitle: 'Pool Cabana Shade',
    slug: { _type: 'slug', current: 'cabana-macrame-canopy' },
    category: 'havuz-plaj',
    description: 'Custom overhead macramé canopy for pool and beach cabanas. Salt-resistant UV-treated cotton cord, available in natural and bleached white. Fully customisable to your cabana dimensions.',
    materials: ['UV-treated cotton cord', 'Teak wood frame', 'Stainless steel fittings'],
    leadTime: '6-8 weeks',
    tags: ['Outdoor', 'UV-Resistant', 'Custom Size', 'Pool'],
    featured: true,
    order: 1,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Pool Cabana Macramé Canopy — Hotel Shade Structure | DiMare Design',
    metaDescription: 'Custom macramé canopy structures for hotel pool and beach cabanas. UV-resistant, salt-resistant cotton cord. Fully bespoke sizing for resort outdoor areas.',
  },
  {
    _type: 'product',
    title: 'Resort Hammock Double',
    subtitle: 'Double Hammock',
    slug: { _type: 'slug', current: 'resort-hammock-double' },
    category: 'havuz-plaj',
    description: 'Double hammock in premium hand-knotted cotton with teak spreader bars. Holds 200kg. Available in natural, white, and custom colour combinations. Suitable for indoor and outdoor hospitality use.',
    materials: ['Hand-knotted cotton cord', 'Teak wood spreader bars', 'Stainless steel hanging hardware'],
    leadTime: '4-6 weeks',
    tags: ['Double', 'Outdoor', 'Teak', 'Pool Area'],
    featured: true,
    order: 2,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Resort Double Hammock — Handcrafted Hotel Pool Hammock | DiMare Design',
    metaDescription: 'Premium double hammock for hotel pool and garden areas. Hand-knotted cotton, teak spreader bars, 200kg capacity. Customisable colours for resort outdoor décor.',
  },
  {
    _type: 'product',
    title: 'Boho Swing Chair',
    subtitle: 'Hanging Swing Chair',
    slug: { _type: 'slug', current: 'boho-swing-chair' },
    category: 'havuz-plaj',
    description: 'Freestanding or ceiling-mount swing chair in hand-woven macramé with a solid wood hoop frame. Suitable for pool decks, beach areas, and interior lounges. Custom colour options available.',
    materials: ['Cotton macramé cord', 'Solid wood hoop', 'Braided hanging rope'],
    leadTime: '3-5 weeks',
    tags: ['Swing', 'Freestanding', 'Indoor/Outdoor', 'Instagrammable'],
    featured: true,
    order: 3,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Boho Swing Chair for Hotels — Macramé Hanging Chair | DiMare Design',
    metaDescription: 'Hand-woven macramé swing chair for hotel pool decks and lounge areas. Solid wood hoop, custom colours. Freestanding and ceiling-mount options for hospitality use.',
  },
  {
    _type: 'product',
    title: 'VIP Loca Shade Sail',
    subtitle: 'VIP Area Shading',
    slug: { _type: 'slug', current: 'vip-loca-shade-sail' },
    category: 'havuz-plaj',
    description: 'Woven macramé shade sail for VIP pool lounge areas and loca zones. Creates dappled natural light while maintaining an open, airy feel. Engineered for high-footfall hospitality environments.',
    materials: ['UV-resistant polypropylene cord', 'Stainless steel tension cables', 'Powder-coated posts'],
    leadTime: '8-10 weeks',
    tags: ['VIP', 'Shade Structure', 'Pool Loca', 'Custom Installation'],
    featured: false,
    order: 4,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel VIP Loca Shade Sail — Macramé Shade Structure | DiMare Design',
    metaDescription: 'Custom woven shade sail for hotel VIP loca zones. UV-resistant macramé cord, stainless steel tensioning. Bespoke sizing for resort pool areas.',
  },
  {
    _type: 'product',
    title: 'Outdoor Lounge Cushion Set',
    subtitle: 'Pool & Beach Cushion',
    slug: { _type: 'slug', current: 'outdoor-lounge-cushion-set' },
    category: 'havuz-plaj',
    description: 'Handwoven outdoor cushion set for hotel sun loungers, pool-side seating, and beach furniture. Water-resistant covers, removable and washable. Available in sets of 10, 20, or custom quantity.',
    materials: ['Outdoor-grade woven fabric', 'Water-resistant inner padding', 'Woven cotton cover'],
    leadTime: '4-6 weeks',
    tags: ['Cushion Set', 'Bulk Order', 'Washable', 'Pool Side'],
    featured: false,
    order: 5,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Pool Cushion Set — Handwoven Outdoor Cushions | DiMare Design',
    metaDescription: 'Handwoven outdoor cushion sets for hotel pool and beach areas. Water-resistant, washable covers. Bulk orders for 10–200+ pieces. Custom colours for resort branding.',
  },

  // ── ODA & SUITE ───────────────────────────────────────────────

  {
    _type: 'product',
    title: 'Macramé Suite Headboard',
    subtitle: 'Woven Headboard',
    slug: { _type: 'slug', current: 'macrame-suite-headboard' },
    category: 'oda-suite',
    description: 'Hand-knotted macramé headboard designed to order for hotel suites. Natural cotton cord on a solid wood mount. Completely bespoke — width, height, pattern and colour match your suite specification.',
    materials: ['Natural cotton macramé cord', 'Solid oak or walnut dowel', 'Wall-mount hardware'],
    leadTime: '4-6 weeks',
    tags: ['Headboard', 'Bespoke', 'Suite', 'Natural Cotton'],
    featured: true,
    order: 6,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Suite Macramé Headboard — Bespoke Woven Headboard | DiMare Design',
    metaDescription: 'Hand-knotted macramé headboards for hotel suites. Natural cotton cord, solid wood mount. Fully bespoke sizing and pattern to match your suite design.',
  },
  {
    _type: 'product',
    title: 'Woven Curtain Panel',
    subtitle: 'Room Macramé Curtain',
    slug: { _type: 'slug', current: 'woven-curtain-panel' },
    category: 'oda-suite',
    description: 'Natural cotton macramé curtain panel for hotel rooms, suite dividers, and lobby spaces. Semi-transparent pattern allows natural light while adding privacy. Made to measure in any width or height.',
    materials: ['Natural cotton cord', 'Wooden curtain rod', 'Ring hooks'],
    leadTime: '3-5 weeks',
    tags: ['Curtain', 'Semi-Transparent', 'Custom Size', 'Natural Cotton'],
    featured: false,
    order: 7,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Macramé Curtain Panel — Room Divider & Window Drape | DiMare Design',
    metaDescription: 'Natural cotton macramé curtain panels for hotel rooms and suites. Made to measure, semi-transparent pattern. Custom sizing for any room or divider application.',
  },
  {
    _type: 'product',
    title: 'Artisan Woven Rug',
    subtitle: 'Handwoven Area Rug',
    slug: { _type: 'slug', current: 'artisan-woven-rug' },
    category: 'oda-suite',
    description: 'Flat-woven artisan rug in natural cotton and jute blend. Subtle geometric pattern inspired by Anatolian weaving tradition. Anti-slip backing included. Custom dimensions available for hotel rooms, suites, and corridors.',
    materials: ['Cotton warp', 'Jute weft', 'Anti-slip latex backing'],
    leadTime: '6-8 weeks',
    tags: ['Rug', 'Anatolian', 'Anti-Slip', 'Custom Size'],
    featured: false,
    order: 8,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Artisan Woven Rug — Anatolian-Inspired Area Rug | DiMare Design',
    metaDescription: 'Flat-woven artisan rugs in cotton-jute blend for hotel rooms and suites. Anti-slip backing, Anatolian geometric patterns. Custom dimensions for any hospitality space.',
  },
  {
    _type: 'product',
    title: 'Macramé Pendant Light',
    subtitle: 'Woven Lighting',
    slug: { _type: 'slug', current: 'macrame-pendant-light' },
    category: 'oda-suite',
    description: 'Hand-knotted macramé pendant light shade in natural cotton cord. Compatible with standard E27 fittings. Available as single pendant or in coordinated multi-pendant clusters for suites, restaurants, and lobbies.',
    materials: ['Natural cotton cord', 'Metal ring frame', 'E27 compatible fitting', 'Waxed cotton cable'],
    leadTime: '3-4 weeks',
    tags: ['Lighting', 'Pendant', 'E27', 'Cluster Option'],
    featured: true,
    order: 9,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Macramé Pendant Light for Hotels — Woven Light Shade | DiMare Design',
    metaDescription: 'Hand-knotted macramé pendant light shades for hotel rooms, suites and restaurants. E27 fitting, available in single or cluster arrangements. Natural cotton cord.',
  },
  {
    _type: 'product',
    title: 'Bohemian Cushion Collection',
    subtitle: 'Suite Cushion Set',
    slug: { _type: 'slug', current: 'bohemian-cushion-collection' },
    category: 'oda-suite',
    description: 'Hand-woven and macramé cushion covers for hotel suite beds and seating. Available in coordinated sets of 3, 5, or custom configurations. Removable covers, standard 50×50cm or bespoke sizing.',
    materials: ['Woven cotton cover', 'Macramé accent cord', 'Interior pad included'],
    leadTime: '2-3 weeks',
    tags: ['Cushion', 'Set', 'Suite', 'Removable Cover'],
    featured: false,
    order: 10,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Suite Cushion Collection — Woven & Macramé Cushions | DiMare Design',
    metaDescription: 'Hand-woven cushion sets for hotel suite beds and seating. Removable covers, sets of 3–5+, standard or bespoke sizing. Coordinated macramé and textile designs.',
  },

  // ── LOBİ & ORTAK ALAN ─────────────────────────────────────────

  {
    _type: 'product',
    title: 'Grand Lobby Wall Installation',
    subtitle: 'Statement Wall Art',
    slug: { _type: 'slug', current: 'grand-lobby-wall-installation' },
    category: 'lobi-ortak',
    description: 'Floor-to-ceiling macramé wall installation, the signature centrepiece for hotel lobbies and public areas. Each installation is unique — designed to the exact dimensions and brand aesthetic of your space. Includes on-site installation service.',
    materials: ['Cotton macramé cord', 'Drift wood branches', 'Wall anchor system'],
    leadTime: '8-12 weeks',
    tags: ['Large Scale', 'Custom', 'Installation Service', 'Lobby'],
    featured: true,
    order: 11,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Lobby Macramé Wall Installation — Large-Scale Art | DiMare Design',
    metaDescription: 'Bespoke floor-to-ceiling macramé wall installations for hotel lobbies. Designed to your exact dimensions and brand identity. Includes professional on-site installation.',
  },
  {
    _type: 'product',
    title: 'Woven Room Divider Screen',
    subtitle: 'Decorative Partition',
    slug: { _type: 'slug', current: 'woven-room-divider-screen' },
    category: 'lobi-ortak',
    description: 'Freestanding woven macramé room divider for lobbies, restaurants, and open-plan spaces. Solid wood frame, freestanding with adjustable feet. Defines zones while maintaining visual openness. Custom widths available.',
    materials: ['Cotton macramé cord', 'Solid wood frame', 'Adjustable stainless feet'],
    leadTime: '4-5 weeks',
    tags: ['Divider', 'Freestanding', 'Restaurant', 'Open Plan'],
    featured: false,
    order: 12,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Woven Room Divider — Macramé Partition Screen | DiMare Design',
    metaDescription: 'Freestanding macramé room divider for hotel lobbies and restaurants. Solid wood frame, custom widths. Defines zones while maintaining airy open aesthetics.',
  },
  {
    _type: 'product',
    title: 'Artisan Basket Collection',
    subtitle: 'Decorative Baskets',
    slug: { _type: 'slug', current: 'artisan-basket-collection' },
    category: 'lobi-ortak',
    description: 'Hand-woven seagrass and jute baskets for hotel lobbies, spa areas, and room amenities. Available in small, medium, and large. Sets of 3 coordinated sizes. Ideal for towel display, amenity organisation, and decorative accents.',
    materials: ['Sea grass', 'Natural jute', 'Cotton cord accents'],
    leadTime: '2-3 weeks',
    tags: ['Basket', 'Set of 3', 'Natural', 'Multi-Use'],
    featured: false,
    order: 13,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Artisan Basket Set — Woven Seagrass & Jute Baskets | DiMare Design',
    metaDescription: 'Hand-woven seagrass and jute basket sets for hotel lobbies, spas, and rooms. Available in 3 coordinated sizes for towel display and decorative storage.',
  },
  {
    _type: 'product',
    title: 'Macramé Coffee Table',
    subtitle: 'Woven Side Table',
    slug: { _type: 'slug', current: 'macrame-coffee-table' },
    category: 'lobi-ortak',
    description: 'Hand-crafted coffee table with macramé lower shelf and solid wood top. Combines artisan weaving with functional furniture. Suitable for hotel lounges, suite seating areas, and restaurant spaces. Custom dimensions available.',
    materials: ['Solid teak top', 'Macramé cord shelf weave', 'Iron frame base'],
    leadTime: '5-7 weeks',
    tags: ['Coffee Table', 'Furniture', 'Lounge', 'Teak'],
    featured: false,
    order: 14,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Macramé Coffee Table for Hotels — Woven Side Table | DiMare Design',
    metaDescription: 'Handcrafted coffee table with macramé shelf and solid teak top for hotel lounges and suites. Artisan weaving meets functional furniture. Custom dimensions.',
  },
  {
    _type: 'product',
    title: 'Decorative Wall Plate Set',
    subtitle: 'Woven Wall Décor',
    slug: { _type: 'slug', current: 'decorative-wall-plate-set' },
    category: 'lobi-ortak',
    description: 'Set of hand-woven decorative plates for hotel corridor and room walls. Rattan and bamboo frame with cotton cord weave in geometric patterns. Set of 3 in varied sizes. Lightweight wall-mount hanging.',
    materials: ['Rattan frame', 'Bamboo ring', 'Cotton cord', 'Wall mount'],
    leadTime: '2-3 weeks',
    tags: ['Wall Décor', 'Set of 3', 'Corridor', 'Rattan'],
    featured: false,
    order: 15,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Decorative Wall Plate Set — Woven Rattan Wall Décor | DiMare Design',
    metaDescription: 'Woven decorative wall plate sets in rattan and cotton for hotel corridors and rooms. Set of 3 in varied sizes, geometric patterns. Lightweight wall-mount design.',
  },

  // ── SPA & WELLNESS ────────────────────────────────────────────

  {
    _type: 'product',
    title: 'Spa Treatment Curtain',
    subtitle: 'Spa Privacy Divider',
    slug: { _type: 'slug', current: 'spa-treatment-curtain' },
    category: 'spa-wellness',
    description: 'Natural macramé privacy curtain for spa treatment rooms and relaxation zones. Open-weave pattern filters light while providing a calm, zen atmosphere. Anti-mould treated. Custom sizing for any treatment room dimension.',
    materials: ['Natural cotton cord', 'Anti-mould treatment', 'Wooden dowel rod'],
    leadTime: '3-4 weeks',
    tags: ['Spa', 'Privacy', 'Anti-Mould', 'Treatment Room'],
    featured: false,
    order: 16,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Spa Treatment Curtain — Natural Macramé Privacy Divider | DiMare Design',
    metaDescription: 'Natural cotton macramé curtains for hotel spa treatment rooms. Anti-mould treatment, open-weave pattern. Custom sizing for any spa environment.',
  },
  {
    _type: 'product',
    title: 'Meditation Corner Canopy',
    subtitle: 'Spa Relaxation Canopy',
    slug: { _type: 'slug', current: 'meditation-corner-canopy' },
    category: 'spa-wellness',
    description: 'Overhead macramé canopy creating an intimate relaxation corner within spa and wellness areas. Designed to define a calm zone without solid walls. Natural cotton, suspended from ceiling anchor points. Custom diameter: 150cm to 300cm.',
    materials: ['Natural cotton cord', 'Steel ceiling anchors', 'Adjustable suspension chain'],
    leadTime: '4-5 weeks',
    tags: ['Spa', 'Meditation', 'Canopy', 'Ceiling Mount', 'Wellness'],
    featured: true,
    order: 17,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Spa Meditation Canopy — Macramé Relaxation Corner | DiMare Design',
    metaDescription: 'Overhead macramé canopy for hotel spa and wellness relaxation corners. Defines calm zones without solid walls. Custom diameter 150–300cm, natural cotton.',
  },
  {
    _type: 'product',
    title: 'Spa Partition Screen Set',
    subtitle: 'Woven Spa Divider',
    slug: { _type: 'slug', current: 'spa-partition-screen-set' },
    category: 'spa-wellness',
    description: 'Set of 3 coordinated macramé partition panels for spa reception, relaxation lounges, and changing areas. Each panel 90cm wide × 200cm tall. Can be joined for wider configurations. Bamboo top rail included.',
    materials: ['Natural cotton macramé', 'Bamboo rail', 'Adjustable base foot'],
    leadTime: '4-6 weeks',
    tags: ['Partition', 'Set of 3', 'Spa', 'Modular'],
    featured: false,
    order: 18,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Spa Partition Screen Set — Woven Macramé Divider Panels | DiMare Design',
    metaDescription: 'Set of 3 macramé partition panels for hotel spa areas. 90×200cm each, modular joining, bamboo rail. Defines zones in relaxation lounges and changing rooms.',
  },
  {
    _type: 'product',
    title: 'Woven Floor Cushion & Puf Set',
    subtitle: 'Floor Seating',
    slug: { _type: 'slug', current: 'woven-floor-cushion-puf-set' },
    category: 'spa-wellness',
    description: 'Large handwoven floor cushion and matching puf set for spa relaxation areas, yoga studios, and hotel lounge spaces. Washable covers, firm inner padding. Natural cotton and linen blend in neutral tones.',
    materials: ['Woven cotton-linen blend', 'Firm interior pad', 'Zipper removable cover'],
    leadTime: '3-4 weeks',
    tags: ['Floor Cushion', 'Puf', 'Yoga', 'Spa Lounge', 'Set'],
    featured: false,
    order: 19,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Spa Floor Cushion & Puf Set — Woven Cotton Lounge Seating | DiMare Design',
    metaDescription: 'Handwoven floor cushion and puf sets for hotel spa lounges and yoga areas. Washable removable covers, firm padding, natural cotton-linen blend.',
  },
  {
    _type: 'product',
    title: 'Hammam Towel Holder',
    subtitle: 'Macramé Towel Display',
    slug: { _type: 'slug', current: 'hammam-towel-holder' },
    category: 'spa-wellness',
    description: 'Wall-mounted macramé towel display rack for hotel spa, pool areas, and bathrooms. Holds 4–6 towels. Driftwood rail with hand-knotted macramé loops. Available as single or double row.',
    materials: ['Cotton macramé cord', 'Driftwood rail', 'Wall mount screws'],
    leadTime: '2-3 weeks',
    tags: ['Towel Holder', 'Spa', 'Bathroom', 'Wall Mount', 'Driftwood'],
    featured: false,
    order: 20,
    etsyUrl: `${ETSY_BASE}`,
    metaTitle: 'Hotel Spa Towel Holder — Macramé Driftwood Towel Display | DiMare Design',
    metaDescription: 'Wall-mounted macramé towel display for hotel spa, pool, and bathrooms. Driftwood rail, holds 4–6 towels. Single or double row configurations.',
  },
]

async function main() {
  console.log(`\nSeeding ${products.length} products to Sanity...\n`)

  const existing = await client.fetch(`*[_type == "product"]{ "slug": slug.current }`)
  const existingSlugs = new Set(existing.map((p) => p.slug))

  let created = 0
  let skipped = 0

  for (const product of products) {
    const slug = product.slug.current
    if (existingSlugs.has(slug)) {
      console.log(`  ⤼ Skipped:  ${product.title}`)
      skipped++
      continue
    }
    await client.create(product)
    console.log(`  ✓ Created:  [${product.category.padEnd(12)}]  ${product.title}`)
    created++
  }

  console.log(`\nDone. Created: ${created}  Skipped: ${skipped}\n`)
  console.log('NOTE: Update Etsy/Shopify URLs for each product in Sanity Studio → Ürünler\n')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
