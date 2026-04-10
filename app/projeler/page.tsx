import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'

export const metadata: Metadata = generatePageMeta({
  title: 'Projeler — Lüks Otel Dekor Projeleri',
  description:
    'Dimare Design olarak Rixos, TUI, Regnum Carya gibi lüks oteller için gerçekleştirdiğimiz makrome ve bohemian dekor projelerini keşfedin.',
  path: '/projeler',
})

const projects = [
  {
    id: 1,
    name: 'Vogue Supreme Bodrum',
    category: 'Pool Deck & Cabanas',
    location: 'Bodrum, Türkiye',
    year: '2024',
    description:
      'Otelin havuz güvertesi ve cabana alanları için 60+ parça özel makrome koleksiyonu tasarlandı.',
    tags: ['Makrome', 'Havuz Alanı', 'Cabana'],
  },
  {
    id: 2,
    name: 'Rixos Premium Belek',
    category: 'Lobby & Spa Installation',
    location: 'Antalya, Türkiye',
    year: '2024',
    description:
      'Spa giriş holü için zemin-tavan 4 metre anıt makrome enstalasyon ve 12 adet tamamlayıcı parça.',
    tags: ['Enstalasyon', 'Spa', 'Lobby'],
  },
  {
    id: 3,
    name: 'Regnum Carya Golf & Spa',
    category: 'Beach Club Decor',
    location: 'Belek, Türkiye',
    year: '2023',
    description:
      'Beach club\'ın tüm dış mekan alanları için bohemian mobilya koleksiyonu ve duvar sanatı.',
    tags: ['Beach Club', 'Dış Mekan', 'Bohemian'],
  },
  {
    id: 4,
    name: 'TUI Blue Palm Garden',
    category: 'Garden & Terrace',
    location: 'Alanya, Türkiye',
    year: '2023',
    description:
      'Teras ve bahçe alanları için 30+ parça özel üretim dokuma mobilya ve dekoratif aksesuar.',
    tags: ['Bahçe', 'Teras', 'Tekstil'],
  },
  {
    id: 5,
    name: 'Gloria Hotels & Resorts',
    category: 'Suite & Villa Collection',
    location: 'Antalya, Türkiye',
    year: '2022',
    description:
      'Lüks villa ve süit odaları için kişiselleştirilmiş makrome ve dokuma sanat koleksiyonu.',
    tags: ['Villa', 'Süit', 'Kişisel Tasarım'],
  },
  {
    id: 6,
    name: 'Özel Proje — Mykonos',
    category: 'Boutique Hotel',
    location: 'Mykonos, Yunanistan',
    year: '2022',
    description:
      'Ege estetiğini bohemian çizgiyle harmanlayan butik otel için özel koleksiyon.',
    tags: ['Butik Otel', 'Akdeniz', 'Özel'],
  },
]

const projectSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Dimare Design — Otel Dekor Projeleri',
  description: 'Dimare Design tarafından tasarlanan lüks otel dekor projeleri',
  url: 'https://www.dimare.design/projeler',
  mainEntity: projects.map((p) => ({
    '@type': 'CreativeWork',
    name: p.name,
    description: p.description,
    locationCreated: { '@type': 'Place', name: p.location },
    dateCreated: p.year,
  })),
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
              <span className="w-6 h-px bg-gold" />
              Portfolio
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-cream-light leading-tight mb-6">
              Lüks Oteller
              <br />
              <em className="text-gold/70 not-italic">için Projeler</em>
            </h1>
            <p className="text-cream/40 text-sm font-light max-w-md leading-relaxed">
              150+ tamamlanan projemizden öne çıkanları keşfedin. Her biri, otel misafirlerine unutulmaz bir deneyim sunmak için özelleştirilmiştir.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.id} delay={i * 80}>
                <article className="group bg-obsidian">
                  {/* Image */}
                  <div className="img-reveal aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sand/20 to-obsidian" />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="text-[9px] tracking-widest uppercase text-gold/50 bg-obsidian/60 px-2 py-1">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 border-b border-gold/10">
                    <p className="text-[9px] tracking-widest uppercase text-gold/50 mb-3">{project.category}</p>
                    <h2 className="font-serif text-2xl text-cream-light font-light mb-2 group-hover:text-gold transition-colors duration-500">
                      {project.name}
                    </h2>
                    <p className="text-[10px] text-cream/30 mb-4 flex items-center gap-2">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M5 11C5 11 1 7.5 1 4.5a4 4 0 018 0C9 7.5 5 11 5 11z" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5"/>
                        <circle cx="5" cy="4.5" r="1.5" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5"/>
                      </svg>
                      {project.location}
                    </p>
                    <p className="text-cream/40 text-xs font-light leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-wide uppercase text-gold/40 border border-gold/15 px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-gold/10">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light mb-6">
              Oteliniz için bir
              <br />
              <em className="gold-text not-italic">proje hayal ediyorsunuz?</em>
            </h2>
            <p className="text-cream/40 text-sm font-light mb-10 max-w-sm mx-auto">
              Ücretsiz proje danışmanlığı için bize ulaşın.
            </p>
            <Link href="/iletisim" className="btn-primary">
              Proje Talebi Gönder
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
