import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'

export const metadata: Metadata = generatePageMeta({
  title: 'Ürünler — El Yapımı Bohemian Otel Dekor',
  description:
    'Lüks oteller için el yapımı makrome, dokuma duvar sanatı, bohemian mobilya ve dış mekan dekor koleksiyonlarını keşfedin. Etsy ve Shopify üzerinden sipariş verebilirsiniz.',
  path: '/urunler',
})

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: 'makrome', label: 'Makrome' },
  { id: 'mobilya', label: 'Mobilya' },
  { id: 'tekstil', label: 'Tekstil' },
  { id: 'enstalasyon', label: 'Enstalasyon' },
]

const products = [
  {
    id: 1,
    title: 'Coastal Macramé Wall Art',
    subtitle: 'Duvar Sanatı',
    category: 'makrome',
    description: 'El bükülmüş iplerle üretilen, her boyut ve renkte özelleştirilebilir duvar sanatı.',
    price: 'Fiyat talebi',
    tags: ['Özelleştirilebilir', 'El Yapımı'],
    featured: true,
  },
  {
    id: 2,
    title: 'Bohemian Swing Chair',
    subtitle: 'Asma Sandalye',
    category: 'mobilya',
    description: 'Dış mekan ve iç mekan kullanımına uygun, UV dayanımlı iplerle üretilen asma sandalye.',
    price: 'Fiyat talebi',
    tags: ['Dış Mekan', 'UV Dayanımlı'],
    featured: true,
  },
  {
    id: 3,
    title: 'Woven Canopy System',
    subtitle: 'Gölgelik Sistemi',
    category: 'enstalasyon',
    description: 'Havuz ve teras alanları için modüler, kurulum dahil özel gölgelik sistemi.',
    price: 'Proje bazlı',
    tags: ['Modüler', 'Proje'],
    featured: false,
  },
  {
    id: 4,
    title: 'Terra Hammock',
    subtitle: 'Hamak',
    category: 'mobilya',
    description: 'Meksika dokuması tekniğiyle üretilen, çift kişilik lüks hamak.',
    price: 'Fiyat talebi',
    tags: ['Çift Kişilik', 'Meksika Dokuması'],
    featured: false,
  },
  {
    id: 5,
    title: 'Hotel Lobby Installation',
    subtitle: 'Lobi Enstalasyonu',
    category: 'enstalasyon',
    description: 'Zemin-tavan arası özel makrome enstalasyon. Ölçü ve tasarım tamamen size özel.',
    price: 'Proje bazlı',
    tags: ['Özel Tasarım', 'Büyük Ölçek'],
    featured: true,
  },
  {
    id: 6,
    title: 'Woven Table Runner Set',
    subtitle: 'Sofra Tekstili',
    category: 'tekstil',
    description: 'Restoran ve açık büfe alanları için el dokuma sofra takımı. Toplu sipariş indirimi mevcuttur.',
    price: 'Fiyat talebi',
    tags: ['Toplu Sipariş', 'Restoran'],
    featured: false,
  },
  {
    id: 7,
    title: 'Boho Planter Basket Set',
    subtitle: 'Saksı Örtüsü',
    category: 'tekstil',
    description: 'İç ve dış mekan bitkileri için örgü saksı örtüsü seti. Çeşitli boyut seçenekleri.',
    price: 'Fiyat talebi',
    tags: ['Set', 'Aksesuar'],
    featured: false,
  },
  {
    id: 8,
    title: 'Premium Macramé Curtain',
    subtitle: 'Makrome Perde',
    category: 'makrome',
    description: 'Oda ve lobi alanları için doğal pamuk makrome perde. Özelleştirilebilir boyut.',
    price: 'Fiyat talebi',
    tags: ['Perde', 'Doğal Pamuk'],
    featured: false,
  },
]

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dimare Design Ürün Koleksiyonu',
  description: 'Lüks oteller için el yapımı bohemian dekor ürünleri',
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
      },
    },
  })),
}

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
              <span className="w-6 h-px bg-gold" />
              Koleksiyonlar
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-cream-light leading-tight mb-6">
              El Yapımı
              <br />
              <em className="text-gold/70 not-italic">Bohemian Koleksiyonu</em>
            </h1>
            <p className="text-cream/40 text-sm font-light max-w-md leading-relaxed mb-8">
              Her ürün, otelinizin ruhuna göre özelleştirilebilir. Renk, boyut ve malzeme seçenekleri için bize ulaşın.
            </p>

            {/* Shop links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.etsy.com/shop/dimaredesign"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[10px]"
              >
                Etsy'de Alışveriş Yap
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="https://www.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-[10px]"
              >
                Shopify Mağazası
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-widest uppercase text-gold/50 mb-10">Öne Çıkan Ürünler</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
            {products.filter(p => p.featured).map((product, i) => (
              <AnimateOnScroll key={product.id} delay={i * 100}>
                <div className="group bg-obsidian">
                  <div className="img-reveal aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sand/30 to-obsidian flex items-center justify-center">
                      <span className="font-serif text-8xl text-gold/10">{product.id}</span>
                    </div>
                  </div>
                  <div className="p-6 border-b border-gold/10">
                    <p className="text-[9px] tracking-widest uppercase text-gold/50 mb-2">{product.subtitle}</p>
                    <h2 className="font-serif text-xl text-cream-light font-light mb-3">{product.title}</h2>
                    <p className="text-cream/40 text-xs font-light leading-relaxed mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {product.tags.map(tag => (
                          <span key={tag} className="text-[8px] tracking-wide uppercase text-gold/40 border border-gold/15 px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                      <Link href="/iletisim" className="text-[9px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300">
                        Teklif Al →
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* All products */}
      <section className="section-padding">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-widest uppercase text-gold/50 mb-10">Tüm Koleksiyon</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.id} delay={i * 60}>
                <div className="group bg-obsidian">
                  <div className="img-reveal aspect-square relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sand/20 to-obsidian flex items-center justify-center">
                      <span className="font-serif text-7xl text-gold/10">{product.id}</span>
                    </div>
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[8px] tracking-widest uppercase text-gold/60 bg-obsidian/70 px-2 py-0.5">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 border-b border-gold/10">
                    <h3 className="font-serif text-lg text-cream-light font-light mb-1 group-hover:text-gold transition-colors duration-400">
                      {product.title}
                    </h3>
                    <p className="text-[9px] tracking-widest uppercase text-gold/40 mb-3">{product.price}</p>
                    <Link href="/iletisim" className="text-[9px] tracking-widest uppercase text-cream/30 hover:text-gold transition-colors duration-300">
                      Bilgi Al →
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Custom order CTA */}
      <section className="section-padding border-t border-gold/10 bg-sand/10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <span className="gold-line mb-5" />
            <h2 className="font-serif text-4xl font-light text-cream-light mb-4">
              Standart koleksiyonda
              <br />
              <em className="text-gold not-italic">aradığınızı bulamadınız mı?</em>
            </h2>
            <p className="text-cream/40 text-sm font-light leading-relaxed">
              Tüm ürünlerimiz özelleştirilebilir. Boyut, renk, malzeme ve tasarım konularında ekibimizle konuşun.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <Link href="/iletisim" className="btn-outline w-full md:w-auto justify-center">
              Özel Tasarım Talebi
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
