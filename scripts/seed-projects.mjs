/**
 * DiMare Design — Hotel Projects Seed Script
 * Populates Sanity with all 15 hotel project documents.
 *
 * Run: node scripts/seed-projects.mjs
 */
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '0exrntll',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk4XTcyozQS8OIq9lkTrlDBNV070VkHQbdravOeuob7qCMOOiOwyAQC7dBQEAkS1hlAlJgIawJSXpPvwv',
  useCdn: false,
})

const projects = [
  {
    _type: 'project',
    name: 'Phaselis Bay by NG Hotels',
    slug: { _type: 'slug', current: 'phaselis-bay-ng-hotels' },
    category: 'Pool Deck & Cabana',
    location: 'Kemer, Antalya',
    year: '2022',
    rooms: 40,
    scope: 'Custom macramé canopy installations for 40+ premium pool cabanas, woven wall art panels, and handcrafted hanging pendants throughout outdoor areas.',
    materials: ['Cotton rope', 'Teak wood frames', 'Linen cord', 'Natural jute'],
    featured: true,
    order: 1,
    description:
      'A landmark collaboration with NG Hotels at their flagship Phaselis Bay resort in Kemer. DiMare Design crafted bespoke macramé canopy structures for 40 pool cabanas, creating an immersive bohemian outdoor environment that became a defining element of the resort aesthetic.',
    tags: ['Pool Deck', 'Macramé', 'Cabana', 'Outdoor', 'Kemer', '5-Star'],
    metaTitle: 'Phaselis Bay NG Hotels — Bespoke Macramé Cabana Project | DiMare Design',
    metaDescription:
      'DiMare Design crafted custom macramé canopy installations for 40 premium pool cabanas at Phaselis Bay by NG Hotels, Kemer. Bespoke handcrafted décor for a 5-star resort outdoor transformation.',
  },
  {
    _type: 'project',
    name: 'Rixos Hotels',
    slug: { _type: 'slug', current: 'rixos-hotels' },
    category: 'Lobby & Suite Collection',
    location: 'Antalya, Turkey',
    year: '2021',
    rooms: 120,
    scope: 'Bespoke macramé wall installations for hotel lobby, handwoven textile headboards for premium suites, and custom cushion collections across 120 rooms.',
    materials: ['Merino wool', 'Cotton macramé cord', 'Drift wood', 'Organic linen'],
    featured: true,
    order: 2,
    description:
      'One of DiMare Design\'s most prestigious collaborations — a multi-property project for Rixos Hotels spanning lobby installations and in-room textile collections. Each piece was custom-designed to complement the Rixos brand identity while adding artisan warmth to ultra-luxury spaces.',
    tags: ['Lobby', 'Suite', 'Wall Art', 'Textile', '5-Star', 'Ultra All-Inclusive'],
    metaTitle: 'Rixos Hotels — Custom Macramé & Textile Collaboration | DiMare Design',
    metaDescription:
      'DiMare Design created bespoke macramé lobby installations and handwoven suite textile collections for Rixos Hotels, Turkey. Premium artisan décor for one of Turkey\'s leading 5-star hotel groups.',
  },
  {
    _type: 'project',
    name: 'Regnum Carya Golf & Spa Resort',
    slug: { _type: 'slug', current: 'regnum-carya' },
    category: 'Spa & Golf Clubhouse',
    location: 'Belek, Antalya',
    year: '2023',
    rooms: 60,
    scope: 'Custom bohemian textile décor for spa relaxation zones, woven room dividers for treatment areas, and statement macramé art for the golf clubhouse.',
    materials: ['Sea grass', 'Cotton rope', 'Bamboo', 'Linen canvas'],
    featured: true,
    order: 3,
    description:
      'Regnum Carya is one of Turkey\'s most awarded golf and spa resorts. DiMare Design was commissioned to create a cohesive artisan décor narrative across the spa and golf clubhouse — a collection of woven dividers, hanging textile art, and bespoke seating cushions that bring natural warmth to the resort\'s premium amenities.',
    tags: ['Spa', 'Golf', 'Belek', 'Textile Art', 'Relaxation Zone', '5-Star'],
    metaTitle: 'Regnum Carya — Spa & Golf Club Artisan Décor | DiMare Design',
    metaDescription:
      'DiMare Design crafted bespoke macramé and woven textile décor for Regnum Carya Golf & Spa Resort in Belek. Custom room dividers, spa hangings, and artisan cushion collections for a world-class resort.',
  },
  {
    _type: 'project',
    name: 'Vogue Hotel Supreme Bodrum',
    slug: { _type: 'slug', current: 'vogue-hotel-supreme-bodrum' },
    category: 'Boutique Suite & Pool Bar',
    location: 'Bodrum, Muğla',
    year: '2022',
    rooms: 30,
    scope: 'Hand-knotted macramé headboards for all suites, bohemian pool bar canopy installation, and custom wall art for public areas.',
    materials: ['Cotton cord', 'Rattan', 'Hand-dyed linen', 'Ceramic beads'],
    featured: false,
    order: 4,
    description:
      'Vogue Hotel Supreme Bodrum\'s distinctive personality demanded an equally distinct design approach. DiMare Design created hand-knotted macramé headboards as the centrepiece of each suite, alongside a sweeping pool bar canopy installation that became one of the hotel\'s most photographed features.',
    tags: ['Boutique', 'Suite', 'Headboard', 'Bodrum', 'Pool Bar', 'Macramé'],
    metaTitle: 'Vogue Hotel Supreme Bodrum — Macramé Suite & Pool Bar Décor | DiMare Design',
    metaDescription:
      'Bespoke macramé headboards and a signature pool bar canopy installation designed by DiMare Design for Vogue Hotel Supreme Bodrum. Handcrafted artisan décor for a boutique luxury hotel.',
  },
  {
    _type: 'project',
    name: 'TUI Magic Life',
    slug: { _type: 'slug', current: 'tui-magic-life' },
    category: 'Resort Outdoor & Pool Areas',
    location: 'Antalya, Turkey',
    year: '2021',
    rooms: 200,
    scope: 'Large-scale macramé shade sail structures for pool zones, outdoor hammock installations, and a complete woven textile collection for sun terraces.',
    materials: ['UV-resistant polyester cord', 'Cotton macramé', 'Teak', 'Outdoor linen'],
    featured: false,
    order: 5,
    description:
      'TUI Magic Life\'s expansive resort called for large-scale artisan installations that could hold their own across wide outdoor spaces. DiMare Design responded with custom macramé shade sails, hammock gardens, and a cohesive terrace textile collection — transforming functional areas into experiential destinations for resort guests.',
    tags: ['Resort', 'Outdoor', 'Pool Area', 'Hammock', 'Shade Structure', 'TUI'],
    metaTitle: 'TUI Magic Life — Resort Outdoor Macramé & Textile Collection | DiMare Design',
    metaDescription:
      'DiMare Design created large-scale macramé shade structures, hammock gardens, and outdoor textile décor for TUI Magic Life Turkey. Artisan resort décor built for scale and durability.',
  },
  {
    _type: 'project',
    name: 'Regnum The Crown',
    slug: { _type: 'slug', current: 'regnum-the-crown' },
    category: 'VIP Lounge & Presidential Suite',
    location: 'Belek, Antalya',
    year: '2023',
    rooms: 15,
    scope: 'Exclusive handcrafted textile installations for presidential suite, VIP reception lounge, and private terrace furnishing.',
    materials: ['Merino wool blend', 'Silk-cotton cord', 'Hand-beaten brass', 'Natural cashmere'],
    featured: false,
    order: 6,
    description:
      'The Crown is Regnum\'s most exclusive property — a resort within a resort for VIP guests. DiMare Design was entrusted to create the highest level of bespoke artisan furnishing: each piece hand-selected for material provenance, crafted to precise spatial specifications, and finished to a standard befitting the most discerning hospitality guests.',
    tags: ['VIP', 'Presidential Suite', 'Belek', 'Exclusive', 'Bespoke', 'Premium'],
    metaTitle: 'Regnum The Crown — VIP Bespoke Artisan Décor | DiMare Design',
    metaDescription:
      'DiMare Design created exclusive handcrafted textile décor for Regnum The Crown presidential suites and VIP lounge in Belek. The highest standard of bespoke artisan furnishing for ultra-premium hospitality.',
  },
  {
    _type: 'project',
    name: 'Lucky Monkey Hotel',
    slug: { _type: 'slug', current: 'lucky-monkey-hotel' },
    category: 'Full-Concept Boutique Interior',
    location: 'Alanya, Antalya',
    year: '2023',
    rooms: 25,
    scope: 'Complete bohemian concept interior — custom macramé swing installations, woven wall art gallery, ceiling hangings, and bespoke textile accessories throughout.',
    materials: ['Natural jute', 'Cotton macramé', 'Driftwood', 'Rattan', 'Coloured cord'],
    featured: false,
    order: 7,
    description:
      'Lucky Monkey Hotel is a concept-driven boutique property with a bold personality. DiMare Design delivered a complete bohemian interior package — from statement swing installations in the bar to an immersive wall art gallery running through the corridors. The result is a space that guests photograph, share, and remember.',
    tags: ['Boutique', 'Concept Hotel', 'Swing', 'Wall Art', 'Full Interior', 'Alanya'],
    metaTitle: 'Lucky Monkey Hotel — Full Bohemian Interior by DiMare Design',
    metaDescription:
      'DiMare Design delivered a complete bohemian interior for Lucky Monkey Hotel — macramé swings, wall art galleries, and woven textile installations that define the hotel\'s bold concept identity.',
  },
  {
    _type: 'project',
    name: 'So Beach',
    slug: { _type: 'slug', current: 'so-beach' },
    category: 'Beach Club & Lounge',
    location: 'Antalya, Turkey',
    year: '2022',
    rooms: 50,
    scope: 'Beach cabana macramé curtain systems, hammock garden installation, and woven lounge cushion collection for 50 premium beach-side units.',
    materials: ['Salt-resistant cotton cord', 'Rattan frame', 'Outdoor linen', 'Driftwood'],
    featured: false,
    order: 8,
    description:
      'So Beach needed artisan installations that could withstand the demanding coastal environment while delivering a premium aesthetic. DiMare Design engineered salt-resistant macramé curtain systems for beach cabanas and a hammock garden — combining craft and durability for a high-footfall beach club.',
    tags: ['Beach Club', 'Hammock', 'Cabana', 'Coastal', 'Outdoor', 'Lounge'],
    metaTitle: 'So Beach Club — Coastal Macramé & Hammock Installation | DiMare Design',
    metaDescription:
      'DiMare Design created salt-resistant macramé cabana curtains, a hammock garden, and woven lounge textiles for So Beach club. Artisan décor engineered for coastal hospitality environments.',
  },
  {
    _type: 'project',
    name: 'Ethno Hotels Belek',
    slug: { _type: 'slug', current: 'ethno-hotels-belek' },
    category: 'Ethnic-Concept Public Areas',
    location: 'Belek, Antalya',
    year: '2022',
    rooms: 80,
    scope: 'Ethnically-inspired handwoven textile collection for all public areas — lobby, restaurant, spa, and exterior terraces.',
    materials: ['Hand-dyed wool', 'Kilim-inspired cotton', 'Natural dyes', 'Traditional jute'],
    featured: false,
    order: 9,
    description:
      'Ethno Hotels Belek\'s concept is rooted in Anatolian cultural heritage — and DiMare Design\'s artisan approach was a natural fit. The project covered every public touchpoint: lobby kilim-inspired wall art, restaurant macramé dividers, spa textile hangings, and exterior terrace cushion collections, all designed to honour and extend the hotel\'s ethnic narrative.',
    tags: ['Ethnic Concept', 'Anatolian', 'Belek', 'Lobby', 'Restaurant', 'Spa', 'Kilim'],
    metaTitle: 'Ethno Hotels Belek — Anatolian-Inspired Textile Décor | DiMare Design',
    metaDescription:
      'DiMare Design created handwoven Anatolian-inspired textiles for Ethno Hotels Belek — kilim-style wall art, macramé dividers, and ethnic textile collections across all public areas.',
  },
  {
    _type: 'project',
    name: 'Caldeza Coffee & More',
    slug: { _type: 'slug', current: 'caldeza-coffee' },
    category: 'Café & Restaurant Interior',
    location: 'Antalya, Turkey',
    year: '2023',
    rooms: null,
    scope: 'Bohemian café interior — large-format macramé wall installation, hanging pendant garden, and custom textile seating accessories.',
    materials: ['Natural cotton cord', 'Recycled rope', 'Copper fittings', 'Linen fabric'],
    featured: false,
    order: 10,
    description:
      'DiMare Design brought the same artisan craftsmanship that defines its hotel work to Caldeza\'s café interior. The centrepiece is a large-format macramé wall installation that creates an immersive, Instagrammable backdrop — complemented by a suspended pendant garden and handwoven cushion accessories throughout the seating areas.',
    tags: ['Café', 'Restaurant', 'Wall Art', 'Pendant', 'Interior', 'Bohemian'],
    metaTitle: 'Caldeza Coffee & More — Bohemian Café Interior by DiMare Design',
    metaDescription:
      'DiMare Design crafted a bohemian café interior for Caldeza — a large macramé wall installation, hanging pendant garden, and handwoven textile accessories creating an immersive artisan atmosphere.',
  },
  {
    _type: 'project',
    name: 'MC Arancia Resort Hotel',
    slug: { _type: 'slug', current: 'mc-arancia-resort' },
    category: 'Pool Garden & Outdoor Areas',
    location: 'Side, Antalya',
    year: '2022',
    rooms: 70,
    scope: 'Complete outdoor décor package — macramé shade sails, hammock park, woven garden dividers, and a full outdoor cushion and pillow collection.',
    materials: ['UV-treated cotton', 'Teak wood', 'Outdoor jute', 'Weather-resistant linen'],
    featured: false,
    order: 11,
    description:
      'MC Arancia Resort Hotel commissioned DiMare Design for a comprehensive outdoor transformation. The project covered every outdoor zone: macramé shade sails over the pool gardens, a dedicated hammock park, woven dividers defining relaxation areas, and a cohesive cushion collection that ties the entire outdoor aesthetic together.',
    tags: ['Resort', 'Pool Garden', 'Hammock', 'Side', 'Outdoor', 'Full Package'],
    metaTitle: 'MC Arancia Resort — Complete Outdoor Artisan Décor | DiMare Design',
    metaDescription:
      'DiMare Design delivered a complete outdoor décor package for MC Arancia Resort Hotel in Side — macramé shade sails, hammock park, woven dividers, and full cushion collections.',
  },
  {
    _type: 'project',
    name: 'IVY Sailing Resort Ayvalık',
    slug: { _type: 'slug', current: 'ivy-sailing-resort-ayvalik' },
    category: 'Marina Resort & Boutique Rooms',
    location: 'Ayvalık, Balıkesir',
    year: '2023',
    rooms: 20,
    scope: 'Nautical-inspired macramé and natural textile décor for marina-side boutique rooms, terrace lounge, and guest arrival area.',
    materials: ['Marine-grade rope', 'Waxed cotton cord', 'Driftwood', 'Natural linen'],
    featured: false,
    order: 12,
    description:
      'IVY Sailing Resort\'s setting on the Aegean coast called for a design language drawn from the sea. DiMare Design interpreted this through marine-grade macramé rope work, natural driftwood accents, and linen textiles — creating a boutique resort atmosphere that feels as organic as its coastal surroundings.',
    tags: ['Marina', 'Sailing', 'Boutique', 'Ayvalık', 'Aegean', 'Coastal', 'Nautical'],
    metaTitle: 'IVY Sailing Resort Ayvalık — Nautical Artisan Décor | DiMare Design',
    metaDescription:
      'DiMare Design created nautical-inspired macramé and natural textile décor for IVY Sailing Resort in Ayvalık. Marine-grade rope work and driftwood installations for an Aegean boutique resort.',
  },
  {
    _type: 'project',
    name: 'Kalypso Beach Hotel',
    slug: { _type: 'slug', current: 'kalypso-beach-hotel' },
    category: 'Beach Hotel & Outdoor Lounge',
    location: 'Antalya, Turkey',
    year: '2021',
    rooms: 45,
    scope: 'Beachside macramé canopy structures for lounging areas, bohemian beach lounge décor, and handwoven accessories collection.',
    materials: ['Salt-resistant cord', 'Bamboo', 'Natural jute', 'Cotton canvas'],
    featured: false,
    order: 13,
    description:
      'Kalypso Beach\'s identity is centred on relaxed, natural beach living — and DiMare Design amplified this with bespoke canopy structures that define the beach lounging experience. The handwoven accessories and bohemian lounge décor create a coherent visual story from arrival to the waterline.',
    tags: ['Beach Hotel', 'Canopy', 'Lounge', 'Outdoor', 'Bohemian', 'Antalya'],
    metaTitle: 'Kalypso Beach Hotel — Bohemian Beach Décor by DiMare Design',
    metaDescription:
      'DiMare Design crafted custom macramé canopy structures and bohemian lounge décor for Kalypso Beach Hotel. Handwoven artisan installations that define the resort\'s natural beach identity.',
  },
  {
    _type: 'project',
    name: 'AVLU Boutique',
    slug: { _type: 'slug', current: 'avlu-boutique' },
    category: 'Boutique Hotel Courtyard',
    location: 'Antalya, Turkey',
    year: '2023',
    rooms: 15,
    scope: 'Courtyard transformation with custom macramé overhead installation, lantern hangings, woven room dividers, and bespoke textile accessories.',
    materials: ['Natural cotton cord', 'Iron rings', 'Hand-blown glass', 'Linen'],
    featured: false,
    order: 14,
    description:
      'AVLU (meaning "courtyard" in Turkish) is a boutique property built around its central outdoor space. DiMare Design created an overhead macramé installation that transforms the courtyard into a captivating evening gathering space — combined with hanging lanterns, woven dividers, and textile accessories that complete the boutique narrative.',
    tags: ['Boutique', 'Courtyard', 'Installation', 'Lantern', 'Antalya', 'Intimate'],
    metaTitle: 'AVLU Boutique — Courtyard Macramé Installation by DiMare Design',
    metaDescription:
      'DiMare Design transformed AVLU boutique hotel\'s central courtyard with a custom overhead macramé installation, lantern hangings, and woven textile accessories.',
  },
  {
    _type: 'project',
    name: 'Çakıl Beach Resort',
    slug: { _type: 'slug', current: 'cakil-beach-resort' },
    category: 'Beach Resort Full Package',
    location: 'Antalya, Turkey',
    year: '2022',
    rooms: 55,
    scope: 'Full resort décor package — beach cabana macramé installations, hammock terrace, outdoor cushion collection, and woven shade structures.',
    materials: ['Weather-resistant cotton', 'Teak', 'Marine rope', 'Outdoor canvas'],
    featured: false,
    order: 15,
    description:
      'Çakıl Beach Resort engaged DiMare Design to deliver a complete artisan décor transformation across all outdoor areas. The project spans from the first-row beach cabanas to the pool terraces — a cohesive bohemian collection that elevates every outdoor space guests encounter throughout their stay.',
    tags: ['Beach Resort', 'Full Package', 'Cabana', 'Hammock', 'Pool Terrace', 'Antalya'],
    metaTitle: 'Çakıl Beach Resort — Full Bohemian Outdoor Décor | DiMare Design',
    metaDescription:
      'DiMare Design delivered a complete bohemian outdoor décor package for Çakıl Beach Resort — macramé cabana installations, hammock terraces, and woven shade structures across all outdoor zones.',
  },
]

async function main() {
  console.log(`\nSeeding ${projects.length} hotel projects to Sanity...\n`)

  // Check for existing slugs to avoid duplicates
  const existing = await client.fetch(
    `*[_type == "project"]{ "slug": slug.current }`
  )
  const existingSlugs = new Set(existing.map((p) => p.slug))

  let created = 0
  let skipped = 0

  for (const project of projects) {
    const slug = project.slug.current
    if (existingSlugs.has(slug)) {
      console.log(`  ⤼ Skipped (exists):  ${project.name}`)
      skipped++
      continue
    }
    await client.create(project)
    console.log(`  ✓ Created:           ${project.name}`)
    created++
  }

  console.log(`\nDone. Created: ${created}  Skipped: ${skipped}\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
