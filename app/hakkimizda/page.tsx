import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'
import { getSiteSettings } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'

export const revalidate = 300

export const metadata: Metadata = generatePageMeta({
  title: 'About — DiMare Design Story',
  description:
    'DiMare Design is a Turkish artisan studio creating handcrafted bohemian décor for luxury hotels and resorts. 8 years of experience, 150+ projects, 40+ luxury hotels.',
  path: '/hakkimizda',
})

const values = [
  {
    title: 'Craftsmanship',
    description: 'Every piece is made by hand by our master artisans using traditional techniques. No machines — only hands, patience, and experience.',
  },
  {
    title: 'Customisation',
    description: "No off-the-shelf products. We design around your hotel's identity, colour palette, and space.",
  },
  {
    title: 'Sustainability',
    description: 'Natural fibre, recycled materials, and local supplier networks — production that respects people and the planet.',
  },
  {
    title: 'Durability',
    description: 'Built to withstand the rigours of hotel environments. Our outdoor products pass UV and moisture testing.',
  },
]

const timeline = [
  { year: '2016', event: 'First workshop opened and first hotel order placed.' },
  { year: '2018', event: 'First corporate contract signed with Rixos Hotels.' },
  { year: '2020', event: 'Digital sales channels launched — Etsy and Shopify stores opened.' },
  { year: '2022', event: 'International projects in Greece, Dubai, and Germany.' },
  { year: '2024', event: '150+ projects, 40+ luxury hotels, 12 countries.' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About DiMare Design',
  description: 'The story and values of DiMare Design studio',
  url: 'https://www.dimare.design/hakkimizda',
  mainEntity: {
    '@type': 'Organization',
    name: 'DiMare Design',
    foundingDate: '2016',
    description: 'Turkish artisan studio creating handcrafted bohemian décor for luxury hotels and resorts.',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
    areaServed: 'Worldwide',
  },
}

export default async function AboutPage() {
  const settings = await getSiteSettings()
  const aboutImageUrl = settings?.aboutImage ? sanityImageUrl(settings.aboutImage, 800, 1000) : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 md:px-12 border-b border-espresso/10 relative overflow-hidden bg-linen-light">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-linen-dark/20 to-transparent pointer-events-none" />
        <div className="max-w-screen-xl mx-auto relative">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-8">
              <span className="w-6 h-px bg-gold" />
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-espresso leading-[0.9] mb-12">
              Hands,
              <br />
              <em className="text-gold not-italic">Thread</em>
              <br />
              &amp; Hospitality.
            </h1>
            <p className="text-espresso/50 text-base font-light leading-relaxed max-w-xl">
              Since 2016, we have worked at the intersection of artisan craft and the premier hotel experience. Every piece carries a story — the origin of the material, the artisan&apos;s hand, the guest&apos;s feeling.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding border-b border-espresso/10 bg-linen-light">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <AnimateOnScroll direction="left">
            <div className="aspect-[4/5] relative overflow-hidden bg-linen-dark">
              {aboutImageUrl ? (
                <Image src={aboutImageUrl} alt="DiMare Design studio" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[200px] text-gold/5 leading-none select-none">D</span>
                </div>
              )}
              <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/30" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/30" />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-espresso/60">
                <span className="font-serif text-3xl text-cream/60 font-light italic">&ldquo;Every thread carries a memory.&rdquo;</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="flex flex-col justify-center">
              <span className="gold-line mb-8" />
              <h2 className="font-serif text-4xl font-light text-espresso mb-8 leading-tight">
                From a small workshop
                <br />
                <em className="text-gold not-italic">to 40+ premier hotels</em>
              </h2>
              <div className="space-y-5 text-espresso/50 text-sm font-light leading-relaxed">
                <p>
                  It all started in a small workshop in 2016. The first order was a single boutique hotel. Since then, it has become a journey stretching from Rixos to TUI, from Regnum Carya to Greece.
                </p>
                <p>
                  What sets us apart is simple: we don&apos;t offer a standard catalogue. Every hotel is a unique space that needs to reflect its own identity. Our job is to weave that identity by hand.
                </p>
                <p>
                  In our workshop, natural fibre, traditional macramé techniques, and a modern design sensibility come together. The result: objects that last for years, that don&apos;t tire the eye, that carry meaning.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-b border-espresso/10 bg-cream">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="gold-line mb-5" />
            <h2 className="font-serif text-4xl font-light text-espresso mb-16">Our Values</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/10">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 80}>
                <div className="bg-cream p-8 border-t-2 border-espresso/10 hover:border-gold transition-colors duration-500 group">
                  <span className="font-serif text-5xl text-espresso/10 font-light block mb-6 group-hover:text-gold/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[10px] tracking-widest uppercase text-gold mb-4">{value.title}</h3>
                  <p className="text-espresso/50 text-xs font-light leading-relaxed">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-espresso/10 bg-linen">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="gold-line mb-5" />
            <h2 className="font-serif text-4xl font-light text-espresso mb-16">Our Journey</h2>
          </AnimateOnScroll>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-espresso/10" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimateOnScroll key={item.year} delay={i * 100} direction="left">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-serif text-2xl text-gold font-light">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-px relative">
                      <div className="w-3 h-3 rounded-full border border-gold/40 bg-linen absolute -left-1 -top-1" />
                    </div>
                    <p className="text-espresso/50 text-sm font-light leading-relaxed pt-0.5">{item.event}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-espresso">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light mb-6">
              Let&apos;s create something
              <br />
              <em className="gold-text not-italic">together.</em>
            </h2>
            <p className="text-cream/40 text-sm font-light mb-10">Ready to talk about your project?</p>
            <Link href="/iletisim" className="btn-primary">
              Get in Touch
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
