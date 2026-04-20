import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'
import { getAllProducts, getSiteSettings } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'

export const revalidate = 300

export const metadata: Metadata = generatePageMeta({
  title: 'Products — Handcrafted Hotel Décor Collections',
  description:
    'Dimare Design\'s bespoke macramé, woven textiles, and bohemian furniture for premier hotels and resorts. Shop on Etsy or Shopify — or enquire for custom orders.',
  path: '/urunler',
})

type Product = {
  _id: string
  title: string
  subtitle?: string
  category?: string
  description?: string
  tags?: string[]
  featured?: boolean
  image?: object | null
  slug: { current: string }
  etsyUrl?: string
  shopifyUrl?: string
}

const CATEGORY_META: Record<string, { label: string; en: string; icon: string; desc: string }> = {
  'havuz-plaj': {
    label: 'Havuz & Plaj',
    en: 'Pool & Beach',
    icon: '◈',
    desc: 'Cabanas, shade structures, hammocks, swings and outdoor cushion collections for hotel pool decks and beach areas.',
  },
  'oda-suite': {
    label: 'Oda & Suite',
    en: 'Room & Suite',
    icon: '◇',
    desc: 'Headboards, curtain panels, rugs, lighting and cushion collections crafted for hotel room and suite interiors.',
  },
  'lobi-ortak': {
    label: 'Lobi & Ortak Alan',
    en: 'Lobby & Common Areas',
    icon: '◆',
    desc: 'Wall installations, room dividers, basket sets and furniture for hotel lobbies, restaurants, and shared spaces.',
  },
  'spa-wellness': {
    label: 'Spa & Wellness',
    en: 'Spa & Wellness',
    icon: '◉',
    desc: 'Privacy curtains, canopy structures, partition screens and relaxation furniture for hotel spa and wellness zones.',
  },
}

const CATEGORY_ORDER = ['havuz-plaj', 'oda-suite', 'lobi-ortak', 'spa-wellness']

export default async function ProductsPage() {
  const [sanityProducts, settings] = await Promise.all([getAllProducts(), getSiteSettings()])
  const products: Product[] = sanityProducts?.length ? sanityProducts : []

  const etsyShopUrl = settings?.etsyUrl ?? 'https://www.etsy.com/shop/DiMareDesign'
  const shopifyShopUrl = settings?.shopifyUrl ?? null

  // Group by category
  const grouped: Record<string, Product[]> = {}
  for (const cat of CATEGORY_ORDER) grouped[cat] = []
  for (const p of products) {
    const cat = p.category ?? ''
    if (grouped[cat]) grouped[cat].push(p)
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dimare Design Handcrafted Hotel Décor Collection',
    description: 'Bespoke macramé, woven textiles and bohemian furniture for premier hotels',
    url: 'https://www.dimare.design/urunler',
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.title,
        description: p.description,
        brand: { '@type': 'Brand', name: 'Dimare Design' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: p.etsyUrl ?? etsyShopUrl,
        },
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ── PAGE HEADER ───────────────────────────────────────────── */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-espresso/10 bg-linen-light">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
              <span className="w-6 h-px bg-gold" />
              Collections
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-espresso leading-tight mb-6">
              Handcrafted
              <br />
              <em className="text-gold not-italic">for Every Space</em>
            </h1>
            <p className="text-espresso/50 text-sm font-light max-w-lg leading-relaxed mb-10">
              Every product is customisable to your hotel&apos;s colour palette, dimensions, and materials.
              Browse by space type below, or shop ready-to-order pieces directly on Etsy.
            </p>

            {/* Shop CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href={etsyShopUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-widest uppercase bg-espresso text-cream hover:bg-gold transition-colors duration-500">
                Shop on Etsy
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
              </a>
              {shopifyShopUrl && (
                <a href={shopifyShopUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-widest uppercase border border-espresso/30 text-espresso hover:bg-espresso hover:text-cream transition-colors duration-500">
                  Shopify Store
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                  </svg>
                </a>
              )}
              <Link href="/iletisim"
                className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-widest uppercase border border-gold/40 text-gold hover:bg-gold hover:text-cream transition-colors duration-500">
                Custom Order
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Category nav pills */}
          <div className="flex flex-wrap gap-3 mt-12">
            {CATEGORY_ORDER.map((cat) => {
              const meta = CATEGORY_META[cat]
              return (
                <a key={cat} href={`#${cat}`}
                  className="text-[10px] tracking-widest uppercase px-5 py-2.5 border border-espresso/15 text-espresso/50 hover:border-gold hover:text-gold transition-colors duration-300">
                  {meta.icon} {meta.en}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ─────────────────────────────────────── */}
      {CATEGORY_ORDER.map((cat, catIdx) => {
        const meta = CATEGORY_META[cat]
        const catProducts = grouped[cat]
        if (catProducts.length === 0) return null

        return (
          <section
            key={cat}
            id={cat}
            className={`section-padding border-b border-espresso/10 ${catIdx % 2 === 0 ? 'bg-linen-light' : 'bg-cream'}`}
          >
            <div className="max-w-screen-xl mx-auto">
              {/* Section header */}
              <AnimateOnScroll>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                  <div>
                    <span className="text-[10px] tracking-widest3 uppercase text-gold block mb-3">
                      {meta.icon} {meta.en}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
                      {meta.label}
                    </h2>
                    <p className="text-espresso/40 text-xs font-light mt-3 max-w-md leading-relaxed">
                      {meta.desc}
                    </p>
                  </div>
                  <a href={etsyShopUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-300 flex-shrink-0 self-end flex items-center gap-2">
                    Browse All on Etsy
                    <svg width="12" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M1 4h12M9 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </AnimateOnScroll>

              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-espresso/10">
                {catProducts.map((product, i) => {
                  const imgUrl = product.image ? sanityImageUrl(product.image, 500, 600) : null
                  const detailHref = product.slug?.current ? `/urunler/${product.slug.current}` : null

                  return (
                    <AnimateOnScroll key={product._id} delay={i * 80}>
                      <div className={`group flex flex-col ${catIdx % 2 === 0 ? 'bg-linen-light' : 'bg-cream'}`}>
                        {/* Image */}
                        <div className="img-reveal aspect-[3/4] relative overflow-hidden">
                          {imgUrl ? (
                            <Image
                              src={imgUrl} alt={product.title} fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 20vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-linen-dark via-linen to-cream flex items-center justify-center">
                              <span className="font-serif text-7xl text-gold/10 italic select-none">D</span>
                              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/20" />
                              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/20" />
                            </div>
                          )}
                          {product.featured && (
                            <div className="absolute top-3 right-3 z-10">
                              <span className="text-[7px] tracking-widest uppercase bg-gold text-cream px-2 py-1">Featured</span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="p-5 flex flex-col gap-3 border-b border-espresso/10 flex-1">
                          <div>
                            <p className="text-[8px] tracking-widest uppercase text-gold/70 mb-1.5">{product.subtitle}</p>
                            <h3 className="font-serif text-base text-espresso font-light leading-snug group-hover:text-gold transition-colors duration-300">
                              {product.title}
                            </h3>
                          </div>

                          {product.description && (
                            <p className="text-espresso/40 text-[11px] font-light leading-relaxed line-clamp-2">
                              {product.description}
                            </p>
                          )}

                          {/* Tags */}
                          {product.tags && product.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {product.tags.slice(0, 3).map((tag) => (
                                <span key={tag} className="text-[7px] tracking-wide uppercase text-espresso/25 border border-espresso/12 px-1.5 py-0.5">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* CTAs */}
                          <div className="flex flex-col gap-2 mt-auto pt-1">
                            {product.etsyUrl ? (
                              <a
                                href={product.etsyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 text-[9px] tracking-widest uppercase bg-espresso text-cream hover:bg-gold transition-colors duration-400"
                              >
                                Buy on Etsy
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                                </svg>
                              </a>
                            ) : (
                              <a
                                href={etsyShopUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 text-[9px] tracking-widest uppercase bg-espresso text-cream hover:bg-gold transition-colors duration-400"
                              >
                                Shop on Etsy
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                                </svg>
                              </a>
                            )}
                            {product.shopifyUrl ? (
                              <a
                                href={product.shopifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 text-[9px] tracking-widest uppercase border border-espresso/20 text-espresso/60 hover:border-gold hover:text-gold transition-colors duration-400"
                              >
                                Buy on Shopify
                              </a>
                            ) : detailHref ? (
                              <Link
                                href={detailHref}
                                className="flex items-center justify-center gap-2 py-2.5 text-[9px] tracking-widest uppercase border border-espresso/20 text-espresso/60 hover:border-gold hover:text-gold transition-colors duration-400"
                              >
                                View Details
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── CUSTOM ORDER CTA ──────────────────────────────────────── */}
      <section className="section-padding bg-espresso">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
              <span className="w-6 h-px bg-gold" />
              Bespoke Orders
            </span>
            <h2 className="font-serif text-4xl font-light text-cream mb-4 leading-tight">
              Need something
              <br />
              <em className="text-gold not-italic">designed for you?</em>
            </h2>
            <p className="text-cream/40 text-sm font-light leading-relaxed">
              Every product can be customised to your hotel&apos;s exact specification — dimensions, colour palette, material, and quantity. Talk to our team for a complimentary brief.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="flex flex-col gap-4">
              <Link href="/iletisim"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-[10px] tracking-widest uppercase bg-gold text-cream hover:bg-gold-light transition-colors duration-500">
                Request Custom Design
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M1 4h12M9 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
              </Link>
              <a href={etsyShopUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-[10px] tracking-widest uppercase border border-cream/20 text-cream/60 hover:text-cream hover:border-cream/50 transition-colors duration-500">
                Browse Etsy Shop
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
