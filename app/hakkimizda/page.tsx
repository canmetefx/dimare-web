import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'

export const metadata: Metadata = generatePageMeta({
  title: 'Hakkımızda — Dimare Design Hikayesi',
  description:
    'Dimare Design, lüks otel ve tatil köyleri için el yapımı bohemian dekor üreten bir Türk tasarım stüdyosudur. 8 yıllık deneyim, 150+ proje, 40+ lüks otel.',
  path: '/hakkimizda',
})

const values = [
  {
    title: 'El Sanatı',
    description:
      'Her ürün, ustalarımız tarafından geleneksel tekniklerle üretilir. Makine yoktur — sadece eller, sabır ve deneyim.',
  },
  {
    title: 'Özelleştirme',
    description:
      'Standart ürün anlayışı yoktur. Otelinizin kimliğini, renk paletini ve mekanını anlayarak tasarım yaparız.',
  },
  {
    title: 'Sürdürülebilirlik',
    description:
      'Doğal lif, geri dönüştürülmüş malzeme ve yerel tedarikçi ağı — çevreye ve insana duyarlı üretim.',
  },
  {
    title: 'Uzun Ömür',
    description:
      'Otel koşullarının sertliğine dayanacak kalitede üretim. Dış mekan ürünlerimiz UV ve nem testlerinden geçer.',
  },
]

const timeline = [
  { year: '2016', event: 'İlk atölye açıldı, ilk otel siparişi alındı.' },
  { year: '2018', event: 'Rixos Hotels ile ilk kurumsal anlaşma.' },
  { year: '2020', event: 'Dijital satış kanalları açıldı; Etsy ve Shopify mağazaları başlatıldı.' },
  { year: '2022', event: 'Uluslararası projeler: Yunanistan, Dubai ve Almanya.' },
  { year: '2024', event: '150+ proje, 40+ lüks otel, 12 ülke.' },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Dimare Design Hakkımızda',
  description: 'Dimare Design tasarım stüdyosunun hikayesi ve değerleri',
  url: 'https://www.dimare.design/hakkimizda',
  mainEntity: {
    '@type': 'Organization',
    name: 'Dimare Design',
    foundingDate: '2016',
    description:
      'Lüks otel ve tatil köyleri için el yapımı bohemian dekor üreticisi Türk tasarım stüdyosu.',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
    areaServed: 'Worldwide',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 md:px-12 border-b border-gold/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sand/10 to-transparent pointer-events-none" />
        <div className="max-w-screen-xl mx-auto relative">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-8">
              <span className="w-6 h-px bg-gold" />
              Hikayemiz
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream-light leading-[0.9] mb-12">
              Eller,
              <br />
              <em className="text-gold not-italic">İpler</em>
              <br />
              ve Lüks.
            </h1>
            <p className="text-cream/50 text-base font-light leading-relaxed max-w-xl">
              2016'dan bu yana, el sanatının lüks otel deneyimiyle buluştuğu noktada çalışıyoruz. Her ürün bir hikaye taşır — malzemenin kökeni, ustanın eli, otel misafirinin hissi.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <AnimateOnScroll direction="left">
            <div className="aspect-[4/5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sand/30 via-obsidian-light to-obsidian flex items-center justify-center">
                <span className="font-serif text-[200px] text-gold/5 leading-none select-none">D</span>
              </div>
              <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/30" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/30" />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-obsidian">
                <span className="font-serif text-3xl text-gold/60 font-light italic">"Her ip, bir anı taşır."</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="flex flex-col justify-center">
              <span className="gold-line mb-8" />
              <h2 className="font-serif text-4xl font-light text-cream-light mb-8 leading-tight">
                Küçük bir atölyeden
                <br />
                <em className="text-gold not-italic">40+ lüks otele</em>
              </h2>
              <div className="space-y-5 text-cream/45 text-sm font-light leading-relaxed">
                <p>
                  2016 yılında küçük bir atölyede başladı her şey. İlk sipariş tek bir butik oteldi. O günden bu yana, Rixos'tan TUI'ye, Regnum Carya'dan Yunanistan'a uzanan bir yolculuk oldu bu.
                </p>
                <p>
                  Bizi farklı kılan şey basit: standart katalog sunmuyoruz. Her otel, kendi kimliğini yansıtması gereken özgün bir mekandır. Bizim işimiz o kimliği elle dokumak.
                </p>
                <p>
                  Atölyemizde doğal lif, geleneksel makrome teknikleri ve modern tasarım anlayışı bir araya gelir. Sonuç; yıllarca kullanılabilecek, göz yorulmayan, anlam taşıyan objeler.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="gold-line mb-5" />
            <h2 className="font-serif text-4xl font-light text-cream-light mb-16">Değerlerimiz</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 80}>
                <div className="bg-obsidian p-8 border-t-2 border-gold/20 hover:border-gold transition-colors duration-500 group">
                  <span className="font-serif text-5xl text-gold/10 font-light block mb-6 group-hover:text-gold/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[10px] tracking-widest uppercase text-gold mb-4">{value.title}</h3>
                  <p className="text-cream/40 text-xs font-light leading-relaxed">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="gold-line mb-5" />
            <h2 className="font-serif text-4xl font-light text-cream-light mb-16">Yolculuğumuz</h2>
          </AnimateOnScroll>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gold/10" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimateOnScroll key={item.year} delay={i * 100} direction="left">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="font-serif text-2xl text-gold/40 font-light">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-px relative">
                      <div className="w-3 h-3 rounded-full border border-gold/40 bg-obsidian absolute -left-1 -top-1" />
                    </div>
                    <p className="text-cream/50 text-sm font-light leading-relaxed pt-0.5">{item.event}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light mb-6">
              Birlikte bir şey
              <br />
              <em className="gold-text not-italic">yapalım.</em>
            </h2>
            <p className="text-cream/40 text-sm font-light mb-10">Projenizi konuşmak ister misiniz?</p>
            <Link href="/iletisim" className="btn-primary">
              İletişime Geç
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
