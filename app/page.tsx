import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

const clients = [
  'Rixos Hotels', 'TUI', 'Regnum Carya', 'Vogue Supreme Bodrum',
  'Gloria Hotels', 'Hilton', 'Marriott', 'Kempinski',
  'Rixos Hotels', 'TUI', 'Regnum Carya', 'Vogue Supreme Bodrum',
]

const products = [
  { id: 1, title: 'Coastal Macramé', subtitle: 'Duvar Sanatı', image: '/images/product-1.avif' },
  { id: 2, title: 'Bohemian Swing', subtitle: 'Dış Mekan', image: '/images/product-2.avif' },
  { id: 3, title: 'Woven Canopy', subtitle: 'Tavan Örtüsü', image: '/images/product-3.avif' },
  { id: 4, title: 'Terra Hammock', subtitle: 'Hamak Serisi', image: '/images/product-4.avif' },
]

const projects = [
  {
    id: 1,
    name: 'Vogue Supreme Bodrum',
    category: 'Pool Deck & Cabanas',
    image: '/images/project-1.avif',
    year: '2024',
  },
  {
    id: 2,
    name: 'Rixos Premium',
    category: 'Lobby & Spa Installation',
    image: '/images/project-2.avif',
    year: '2023',
  },
  {
    id: 3,
    name: 'Regnum Carya',
    category: 'Beach Club Decor',
    image: '/images/project-3.avif',
    year: '2023',
  },
]

const stats = [
  { value: '150+', label: 'Tamamlanan Proje' },
  { value: '40+', label: 'Lüks Otel' },
  { value: '12', label: 'Ülke' },
  { value: '8', label: 'Yıl Deneyim' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Lüks oteller için özel makrome sipariş verebilir miyim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. Dimare Design, lüks otel ve tatil köyleri için tamamen özelleştirilmiş makrome ve bohemian dekor projeleri üretmektedir. Ölçü, renk ve malzeme seçenekleri için bizimle iletişime geçin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hangi oteller ile çalıştınız?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rixos Hotels, TUI, Regnum Carya, Vogue Supreme Bodrum, Gloria Hotels gibi önde gelen lüks otel zincirleriyle projeler gerçekleştirdik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Teslimat süresi ne kadardır?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proje büyüklüğüne göre değişmekle birlikte ortalama 4-8 hafta üretim ve teslimat süresi öngörülmektedir. Acil projeler için özel çözümler sunmaktayız.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.avif"
            alt="Dimare Design lüks otel dekor — bohemian makrome ve el yapımı mobilya"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <AnimateOnScroll delay={200}>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-8">
                <span className="w-8 h-px bg-gold" />
                Handcrafted in Turkey
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={350}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-cream-light mb-8">
                Lüks Oteller
                <br />
                <em className="gold-text not-italic">İçin Sanat.</em>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500}>
              <p className="text-cream/50 text-sm md:text-base font-light leading-relaxed mb-12 max-w-md">
                El yapımı makrome, dokuma tekstil ve bohemian mobilyalarla mekânınızı unutulmaz kılıyoruz. Her parça, markanızın ruhunu yansıtır.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={650}>
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/projeler" className="btn-primary">
                  Projelerimizi Gör
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                  </svg>
                </Link>
                <Link href="/iletisim" className="btn-outline">
                  Proje Başlat
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-widest3 uppercase text-cream/30 rotate-90 origin-center mb-6">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── CLIENT MARQUEE ───────────────────────────────────────── */}
      <section className="py-10 border-y border-gold/10 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span key={i} className="text-[11px] tracking-widest2 uppercase text-cream/25 font-light flex-shrink-0 flex items-center gap-16">
              {client}
              <span className="w-1 h-1 rounded-full bg-gold/30" />
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 100}>
                <div className="text-center md:text-left">
                  <span className="font-serif text-5xl md:text-6xl font-light gold-text block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[11px] tracking-widest uppercase text-cream/40 font-light">
                    {stat.label}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────── */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="gold-line mb-4" />
                <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light">
                  Öne Çıkan
                  <br />
                  <em className="text-gold/80 not-italic">Ürünler</em>
                </h2>
              </div>
              <Link
                href="/urunler"
                className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300"
              >
                Tümünü Gör
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.id} delay={i * 100}>
                <Link href="/urunler" className="group block bg-obsidian">
                  <div className="img-reveal aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/0 transition-colors duration-700 z-10" />
                    {/* Placeholder — replace with real Image when photos are ready */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sand via-obsidian-light to-obsidian flex items-center justify-center">
                      <span className="font-serif text-6xl text-gold/20">D</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <p className="text-[9px] tracking-widest uppercase text-gold/60 mb-1">{product.subtitle}</p>
                      <p className="font-serif text-xl text-cream-light font-light">{product.title}</p>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────── */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="gold-line mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light">
                Seçilmiş
                <br />
                <em className="text-gold/80 not-italic">Projeler</em>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.id} delay={i * 120}>
                <Link href="/projeler" className="group block bg-obsidian">
                  <div className="img-reveal aspect-[4/5] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent z-10" />
                    {/* Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sand/30 to-obsidian" />
                    <div className="absolute top-6 right-6 z-20">
                      <span className="text-[9px] tracking-widest uppercase text-gold/50">{project.year}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <p className="text-[9px] tracking-widest uppercase text-gold/60 mb-2">{project.category}</p>
                      <h3 className="font-serif text-2xl text-cream-light font-light">{project.name}</h3>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <div className="mt-12 text-center">
              <Link href="/projeler" className="btn-outline">
                Tüm Projeleri Gör
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────────── */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="aspect-square relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sand/40 via-obsidian-light to-obsidian flex items-center justify-center">
                <span className="font-serif text-[150px] text-gold/10 leading-none select-none">D</span>
              </div>
              {/* Gold frame accent */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t border-l border-gold/30" />
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-gold/30" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light mb-8 leading-tight">
                El sanatının
                <br />
                <em className="text-gold not-italic">lüksle</em> buluşması.
              </h2>
              <p className="text-cream/50 text-sm leading-relaxed mb-6 font-light">
                Dimare Design, el yapımı bohemian dekorun lüks otel deneyimiyle buluştuğu bir tasarım stüdyosudur. Rixos, TUI ve Regnum Carya gibi dünyanın önde gelen otellerinin güvendiği markayız.
              </p>
              <p className="text-cream/50 text-sm leading-relaxed mb-10 font-light">
                Her proje; otelin ruhunu, misafirin hissedeceği deneyimi ve mekânın getirdiği sınırları anlayarak şekillenir. Standart ürün yoktur — her şey sizin için tasarlanır.
              </p>
              <Link href="/hakkimizda" className="btn-outline">
                Hikayemiz
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sand/20 to-obsidian" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

        <div className="relative max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-8">
              <span className="w-6 h-px bg-gold" />
              Projenizi Konuşalım
              <span className="w-6 h-px bg-gold" />
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream-light mb-8 leading-tight">
              Oteliniz için
              <br />
              <em className="gold-text not-italic">özel bir eser</em> yapalım.
            </h2>
            <p className="text-cream/40 text-sm font-light mb-12 max-w-md mx-auto">
              Brief gönderin, ücretsiz danışmanlık için ilk adımı atın.
            </p>
            <Link href="/iletisim" className="btn-primary text-sm">
              Proje Talebi Gönder
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
