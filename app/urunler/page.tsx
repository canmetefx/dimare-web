import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'
import { getAllProducts, getSiteSettings } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'

export const revalidate = 300

export const metadata: Metadata = generatePageMeta({
  title: 'Products — Handcrafted Bohemian Hotel Décor',
  description:
    'Explore DiMare Design\'s handcrafted macramé, woven wall art, bohemian furniture, and outdoor décor collections for luxury hotels. Order on Etsy or Shopify.',
  path: '/urunler',
})

const fallbackProducts = [
  {
    _id: '1', title: 'Coastal Macramé Wall Art', subtitle: 'Wall Art', category: 'Makrome',
    description: 'Hand-twisted wall art, customisable in any size and colour palette.',
    tags: ['Customisable', 'Handmade'], featured: true, image: null, slug: { current: '' },
  },
  {
    _id: '2', title: 'Bohemian Swing Chair', subtitle: 'Hanging Chair', category: 'Mobilya',
    description: 'Hanging chair in UV-resistant rope, suitable for indoor and outdoor use.',
    tags: ['Outdoor', 'UV-Resistant'], featured: true, image: null, slug: { current: '' },
  },
  {
    _id: '3', title: 'Woven Canopy System', subtitle: 'Shade Structure', category: 'Enstalasyon',
    description: 'Modular custom canopy system for pool and terrace areas — installation included.',
    tags: ['Modular', 'Project'], featured: false, image: null, slug: { current: '' },
  },
  {
    _id: '4', title: 'Terra Hammock', subtitle: 'Hammock', category: 'Mobilya',
    description: 'Luxury double hammock crafted in Mexican weave technique.',
    tags: ['Double', 'Mexican Weave'], featured: false, image: null, slug: { current: '' },
  },
  {
    _id: '5', title: 'Hotel Lobby Installation', subtitle: 'Lobby Installation', category: 'Enstalasyon',
    description: 'Floor-to-ceiling custom macramé installation. Dimensions and design entirely bespoke.',
    tags: ['Custom', 'Large Scale'], featured: true, image: null, slug: { current: '' },
  },
  {
    _id: '6', title: 'Woven Table Runner Set', subtitle: 'Table Textile', category: 'Tekstil',
    description: 'Hand-woven table linen for restaurant and buffet areas. Bulk order discounts available.',
    tags: ['Bulk Order', 'Restaurant'], featured: false, image: null, slug: { current: '' },
  },
  {
    _id: '7', title: 'Boho Planter Basket Set', subtitle: 'Plant Holder', category: 'Tekstil',
    description: 'Woven plant holder set for indoor and outdoor greenery. Multiple size options.',
    tags: ['Set', 'Accessory'], featured: false, image: null, slug: { current: '' },
  },
  {
    _id: '8', title: 'Premium Macramé Curtain', subtitle: 'Macramé Curtain', category: 'Makrome',
    description: 'Natural cotton macramé curtain for room and lobby dividers. Customisable sizing.',
    tags: ['Curtain', 'Natural Cotton'], featured: false, image: null, slug: { current: '' },
  },
]

export default async function ProductsPage() {
  const [sanityProducts, settings] = await Promise.all([getAllProducts(), getSiteSettings()])
  const products = sanityProducts?.length ? sanityProducts : fallbackProducts

  const featuredProducts = products.filter((p: { featured?: boolean }) => p.featured)

  const etsyUrl = settings?.etsyUrl ?? 'https://www.etsy.com/shop/dimaredesign'
  const shopifyUrl = settings?.shopifyUrl ?? '#'

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DiMare Design Product Collection',
    description: 'Handcrafted bohemian décor products for luxury hotels',
    url: 'https://www.dimare.design/urunler',
    numberOfItems: products.length,
    itemListElement: products.map((p: { title: string; description?: string }, i: number) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.title,
        description: p.description,
        brand: { '@type': 'Brand', name: 'DiMare Design' },
        offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Page Header */}
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
              <em className="text-gold not-italic">Bohemian Collection</em>
            </h1>
            <p className="text-espresso/50 text-sm font-light max-w-md leading-relaxed mb-8">
              Every product is customisable to your hotel&apos;s identity. Contact us for colour, size, and material options.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-[10px]">
                Shop on Etsy
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
              </a>
              {shopifyUrl && shopifyUrl !== '#' && (
                <a href={shopifyUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-[10px]">
                  Shopify Store
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                  </svg>
                </a>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured */}
      {featuredProducts.length > 0 && (
        <section className="section-padding border-b border-espresso/10 bg-linen-light">
          <div className="max-w-screen-xl mx-auto">
            <AnimateOnScroll>
              <p className="text-[10px] tracking-widest uppercase text-gold mb-10">Featured Products</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-espresso/10">
              {featuredProducts.map((product: {
                _id: string; title: string; subtitle?: string; category?: string;
                description?: string; tags?: string[]; image?: object | null;
                slug: { current: string }
              }, i: number) => {
                const imgUrl = product.image ? sanityImageUrl(product.image, 600, 800) : null
                const href = product.slug?.current ? `/urunler/${product.slug.current}` : '/iletisim'
                return (
                  <AnimateOnScroll key={product._id} delay={i * 100}>
                    <div className="group bg-linen-light">
                      <div className="img-reveal aspect-[3/4] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent z-10" />
                        {imgUrl ? (
                          <Image src={imgUrl} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-linen-dark via-cream to-linen flex items-center justify-center">
                            <span className="font-serif text-8xl text-gold/10 italic">D</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 border-b border-espresso/10">
                        <p className="text-[9px] tracking-widest uppercase text-gold mb-2">{product.category ?? product.subtitle}</p>
                        <h2 className="font-serif text-xl text-espresso font-light mb-3 group-hover:text-gold transition-colors duration-500">{product.title}</h2>
                        {product.description && (
                          <p className="text-espresso/50 text-xs font-light leading-relaxed mb-4">{product.description}</p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {product.tags?.map((tag: string) => (
                              <span key={tag} className="text-[8px] tracking-wide uppercase text-espresso/30 border border-espresso/15 px-2 py-0.5">{tag}</span>
                            ))}
                          </div>
                          <Link href={href} className="text-[9px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 ml-2 flex-shrink-0">
                            Enquire →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* All products */}
      <section className="section-padding bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-widest uppercase text-gold mb-10">Full Collection</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/10">
            {products.map((product: {
              _id: string; title: string; category?: string; subtitle?: string;
              image?: object | null; slug: { current: string }
            }, i: number) => {
              const imgUrl = product.image ? sanityImageUrl(product.image, 400, 400) : null
              const href = product.slug?.current ? `/urunler/${product.slug.current}` : '/iletisim'
              return (
                <AnimateOnScroll key={product._id} delay={i * 60}>
                  <Link href={href} className="group block bg-cream">
                    <div className="img-reveal aspect-square relative overflow-hidden">
                      {imgUrl ? (
                        <Image src={imgUrl} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-linen-dark to-cream flex items-center justify-center">
                          <span className="font-serif text-7xl text-gold/10 italic">D</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[8px] tracking-widest uppercase text-espresso/50 bg-cream/80 px-2 py-0.5">
                          {product.category ?? product.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 border-b border-espresso/10">
                      <h3 className="font-serif text-lg text-espresso font-light mb-1 group-hover:text-gold transition-colors duration-300">
                        {product.title}
                      </h3>
                      <span className="text-[9px] tracking-widest uppercase text-gold">Enquire for pricing →</span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom order CTA */}
      <section className="section-padding border-t border-espresso/10 bg-linen">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <span className="gold-line mb-5" />
            <h2 className="font-serif text-4xl font-light text-espresso mb-4">
              Didn&apos;t find exactly
              <br />
              <em className="text-gold not-italic">what you&apos;re looking for?</em>
            </h2>
            <p className="text-espresso/50 text-sm font-light leading-relaxed">
              Every product is fully customisable. Talk to our team about dimensions, colour, material, and design.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <Link href="/iletisim" className="btn-outline w-full md:w-auto justify-center">
              Request Custom Design
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
