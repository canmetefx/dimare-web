import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { siteConfig } from '@/lib/seo'
import { getFeaturedProducts, getFeaturedProjects, getSiteSettings } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'

export const revalidate = 300

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}


const fallbackStats = [
  { value: '90+', label: 'Completed Projects' },
  { value: '20', label: 'Premier Hotels' },
  { value: '3', label: 'Countries' },
  { value: '8', label: 'Years Experience' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I order custom macramé for my luxury hotel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dimare Design creates fully customised macramé and bohemian décor for luxury hotels and resorts. Contact us with your dimensions, colour palette, and material preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which hotels have you worked with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have completed projects for leading luxury hotel groups including Rixos Hotels, TUI, Regnum Carya, Vogue Supreme Bodrum, and Gloria Hotels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the lead time for a bespoke project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lead times vary by project scope, but we typically estimate 4–8 weeks for production and delivery. Rush solutions are available for urgent projects.',
      },
    },
  ],
}

export default async function HomePage() {
  const [settings, featuredProducts, featuredProjects] = await Promise.all([
    getSiteSettings(),
    getFeaturedProducts(),
    getFeaturedProjects(),
  ])

  const stats = settings?.stats?.length ? settings.stats : fallbackStats

  const heroImageUrl = settings?.heroImage
    ? sanityImageUrl(settings.heroImage, 1920, 1080)
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden bg-linen">
        <div className="absolute inset-0">
          {heroImageUrl ? (
            <Image
              src={heroImageUrl}
              alt="Dimare Design luxury hotel décor — bohemian macramé and handcrafted furniture"
              fill priority className="object-cover object-center" sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-light to-linen-dark" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <AnimateOnScroll delay={200}>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold-light mb-8">
                <span className="w-8 h-px bg-gold-light" />
                Handcrafted in Turkey
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={350}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-cream-light mb-8">
                Artisan Décor
                <br />
                <em className="gold-text not-italic">for Hospitality.</em>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={500}>
              <p className="text-cream/60 text-sm md:text-base font-light leading-relaxed mb-12 max-w-md">
                Handcrafted macramé, woven textiles, and bohemian furniture — transforming hotel spaces into unforgettable experiences.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={650}>
              <div className="flex flex-wrap items-center gap-5">
                <Link href="/projeler" className="btn-primary bg-gold hover:bg-gold-light text-cream-light">
                  View Our Projects
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
                </Link>
                <Link href="/iletisim" className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase text-cream-light border border-cream-light/40 hover:border-cream-light hover:bg-cream-light/5 transition-all duration-500" style={{letterSpacing:'0.2em'}}>
                  Start a Project
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-widest3 uppercase text-cream/30 rotate-90 origin-center mb-6">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── REFERANS OTELLER ─────────────────────────────────────── */}
      <section className="py-14 px-6 md:px-12 border-y border-espresso/10 bg-linen-dark">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[9px] tracking-widest3 uppercase text-espresso/25 text-center mb-10">
            Trusted By
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-px bg-espresso/8">
            {[
              { name: 'Rixos Hotels', sub: 'Antalya' },
              { name: 'Regnum Carya', sub: 'Belek' },
              { name: 'Vogue Supreme', sub: 'Bodrum' },
              { name: 'Phaselis Bay', sub: 'Kemer' },
              { name: 'TUI Magic Life', sub: 'Antalya' },
              { name: 'Ethno Hotels', sub: 'Belek' },
              { name: 'Regnum Crown', sub: 'Belek' },
              { name: 'IVY Sailing', sub: 'Ayvalık' },
            ].map((hotel) => (
              <div key={hotel.name} className="bg-linen-dark px-4 py-5 flex flex-col items-center justify-center text-center gap-1">
                <span className="font-serif text-[13px] text-espresso/50 font-light leading-snug">{hotel.name}</span>
                <span className="text-[8px] tracking-widest uppercase text-gold/40">{hotel.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="section-padding border-b border-espresso/10 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat: { value: string; label: string }, i: number) => (
              <AnimateOnScroll key={stat.label} delay={i * 100}>
                <div className="text-center md:text-left">
                  <span className="font-serif text-5xl md:text-6xl font-light gold-text block mb-2">{stat.value}</span>
                  <span className="text-[11px] tracking-widest uppercase text-espresso/40 font-light">{stat.label}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────── */}
      <section className="section-padding border-b border-espresso/10 bg-linen">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="gold-line mb-4" />
                <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
                  Featured<br />
                  <em className="text-gold not-italic">Products</em>
                </h2>
              </div>
              <Link href="/urunler" className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300">
                View All
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/10">
            {featuredProducts.length > 0 ? featuredProducts.map((product: {
              _id: string; title: string; subtitle?: string; slug: { current: string };
              category?: string; image?: object
            }, i: number) => {
              const imgUrl = sanityImageUrl(product.image, 600, 800)
              return (
                <AnimateOnScroll key={product._id} delay={i * 100}>
                  <Link href={`/urunler/${product.slug.current}`} className="group block bg-linen">
                    <div className="img-reveal aspect-[3/4] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 bg-linen-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                      {imgUrl ? (
                        <Image src={imgUrl} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-linen-dark via-cream to-linen flex items-center justify-center">
                          <span className="font-serif text-6xl text-gold/20 italic">D</span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <p className="text-[9px] tracking-widest uppercase text-gold mb-1">{product.category ?? product.subtitle ?? ''}</p>
                        <p className="font-serif text-xl text-cream-light font-light">{product.title}</p>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              )
            }) : (
              // Placeholders when Sanity has no featured products yet
              [1,2,3,4].map((n, i) => (
                <AnimateOnScroll key={n} delay={i * 100}>
                  <Link href="/urunler" className="group block bg-linen">
                    <div className="img-reveal aspect-[3/4] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-linen-dark via-cream to-linen flex items-center justify-center">
                        <span className="font-serif text-6xl text-gold/20 italic">D</span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────── */}
      <section className="section-padding border-b border-espresso/10 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <span className="gold-line mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
                Selected<br />
                <em className="text-gold not-italic">Projects</em>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-espresso/10">
            {featuredProjects.length > 0 ? featuredProjects.map((project: {
              _id: string; name: string; slug: { current: string };
              category?: string; year?: string; coverImage?: object
            }, i: number) => {
              const imgUrl = sanityImageUrl(project.coverImage, 800, 1000)
              return (
                <AnimateOnScroll key={project._id} delay={i * 120}>
                  <Link href={`/projeler/${project.slug.current}`} className="group block bg-cream">
                    <div className="img-reveal aspect-[4/5] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-espresso/5 to-transparent z-10" />
                      {imgUrl ? (
                        <Image src={imgUrl} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-linen-dark/50 to-cream-dark" />
                      )}
                      <div className="absolute top-6 right-6 z-20">
                        <span className="text-[9px] tracking-widest uppercase text-cream/50">{project.year}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                        <p className="text-[9px] tracking-widest uppercase text-gold mb-2">{project.category}</p>
                        <h3 className="font-serif text-2xl text-cream-light font-light">{project.name}</h3>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              )
            }) : (
              // Placeholders when Sanity has no featured projects yet
              [1,2,3].map((n, i) => (
                <AnimateOnScroll key={n} delay={i * 120}>
                  <Link href="/projeler" className="group block bg-cream">
                    <div className="img-reveal aspect-[4/5] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-linen-dark/50 to-cream-dark" />
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))
            )}
          </div>

          <AnimateOnScroll delay={200}>
            <div className="mt-12 text-center">
              <Link href="/projeler" className="btn-outline">View All Projects</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────────── */}
      <section className="section-padding border-b border-espresso/10 bg-linen">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="aspect-square relative overflow-hidden bg-linen-dark">
              {settings?.aboutImage ? (
                <Image
                  src={sanityImageUrl(settings.aboutImage, 800, 800)}
                  alt="Dimare Design studio — handcrafted bohemian décor"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[150px] text-gold/10 leading-none select-none italic">D</span>
                </div>
              )}
              <div className="absolute top-6 left-6 w-20 h-20 border-t border-l border-gold/30" />
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-gold/30" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <span className="gold-line mb-6" />
              <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso mb-8 leading-tight">
                Where craft meets
                <br />
                <em className="text-gold not-italic">hospitality.</em>
              </h2>
              <p className="text-espresso/50 text-sm leading-relaxed mb-6 font-light">
                Dimare Design is a contract-grade artisan studio creating bespoke bohemian décor for premier hotels and resorts. Trusted by leading hospitality brands worldwide — Rixos, TUI, Regnum Carya, and beyond.
              </p>
              <p className="text-espresso/50 text-sm leading-relaxed mb-10 font-light">
                Every project is shaped by understanding the hotel&apos;s identity, the experience your guests will feel, and the constraints the space brings. Nothing is standard — everything is designed for you.
              </p>
              <Link href="/hakkimizda" className="btn-outline">Our Story</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden bg-espresso">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />
        <div className="relative max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-8">
              <span className="w-6 h-px bg-gold" />
              Let&apos;s Talk About Your Project
              <span className="w-6 h-px bg-gold" />
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream-light mb-8 leading-tight">
              Let&apos;s create something
              <br />
              <em className="gold-text not-italic">extraordinary.</em>
            </h2>
            <p className="text-cream/40 text-sm font-light mb-12 max-w-md mx-auto">
              Send us a brief and take the first step toward a free consultation.
            </p>
            <Link href="/iletisim" className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase bg-gold text-cream-light hover:bg-gold-light transition-all duration-500" style={{letterSpacing:'0.2em'}}>
              Send Project Brief
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
