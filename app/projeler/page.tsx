import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { generatePageMeta } from '@/lib/seo'
import { getAllProjects } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'

export const revalidate = 300

export const metadata: Metadata = generatePageMeta({
  title: 'Projects — Luxury Hotel Décor Portfolio',
  description:
    'Explore DiMare Design projects for luxury hotels including Rixos, TUI, and Regnum Carya — bespoke macramé installations, woven textiles, and bohemian furniture.',
  path: '/projeler',
})

const fallbackProjects = [
  {
    _id: '1', name: 'Vogue Supreme Bodrum', category: 'Pool Deck & Cabanas',
    location: 'Bodrum, Turkey', year: '2024', slug: { current: '' },
    description: '60+ custom macramé pieces designed for the hotel pool deck and cabana areas.',
    tags: ['Macramé', 'Pool Area', 'Cabana'], coverImage: null,
  },
  {
    _id: '2', name: 'Rixos Premium Belek', category: 'Lobby & Spa Installation',
    location: 'Antalya, Turkey', year: '2024', slug: { current: '' },
    description: 'A monumental floor-to-ceiling 4-metre macramé installation and 12 accent pieces for the spa lobby.',
    tags: ['Installation', 'Spa', 'Lobby'], coverImage: null,
  },
  {
    _id: '3', name: 'Regnum Carya Golf & Spa', category: 'Beach Club Decor',
    location: 'Belek, Turkey', year: '2023', slug: { current: '' },
    description: 'Bohemian furniture collection and wall art for all outdoor areas of the beach club.',
    tags: ['Beach Club', 'Outdoor', 'Bohemian'], coverImage: null,
  },
  {
    _id: '4', name: 'TUI Blue Palm Garden', category: 'Garden & Terrace',
    location: 'Alanya, Turkey', year: '2023', slug: { current: '' },
    description: '30+ custom woven furniture pieces and decorative accessories for terrace and garden areas.',
    tags: ['Garden', 'Terrace', 'Textile'], coverImage: null,
  },
  {
    _id: '5', name: 'Gloria Hotels & Resorts', category: 'Suite & Villa Collection',
    location: 'Antalya, Turkey', year: '2022', slug: { current: '' },
    description: 'Personalised macramé and woven art collection for luxury villas and suites.',
    tags: ['Villa', 'Suite', 'Custom'], coverImage: null,
  },
  {
    _id: '6', name: 'Boutique Project — Mykonos', category: 'Boutique Hotel',
    location: 'Mykonos, Greece', year: '2022', slug: { current: '' },
    description: 'A bespoke collection blending Aegean aesthetics with bohemian lines.',
    tags: ['Boutique', 'Mediterranean', 'Bespoke'], coverImage: null,
  },
]

export default async function ProjectsPage() {
  const sanityProjects = await getAllProjects()
  const projects = sanityProjects?.length ? sanityProjects : fallbackProjects

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'DiMare Design — Hotel Décor Projects',
    description: 'Luxury hotel décor projects designed by DiMare Design',
    url: 'https://www.dimare.design/projeler',
    mainEntity: projects.map((p: { name: string; description?: string; location?: string; year?: string }) => ({
      '@type': 'CreativeWork',
      name: p.name,
      description: p.description,
      locationCreated: { '@type': 'Place', name: p.location },
      dateCreated: p.year,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-espresso/10 bg-linen-light">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
              <span className="w-6 h-px bg-gold" />
              Portfolio
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-espresso leading-tight mb-6">
              Luxury Hotel
              <br />
              <em className="text-gold not-italic">Projects</em>
            </h1>
            <p className="text-espresso/50 text-sm font-light max-w-md leading-relaxed">
              Discover selected works from our 150+ completed projects — each one crafted to create an unforgettable experience for hotel guests.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-linen-light">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-espresso/10">
            {projects.map((project: {
              _id: string; name: string; category?: string; location?: string; year?: string;
              description?: string; tags?: string[]; coverImage?: object | null;
              slug: { current: string }
            }, i: number) => {
              const imgUrl = project.coverImage ? sanityImageUrl(project.coverImage, 800, 600) : null
              const href = project.slug?.current ? `/projeler/${project.slug.current}` : '#'
              return (
                <AnimateOnScroll key={project._id} delay={i * 80}>
                  <article className="group bg-linen-light">
                    <div className="img-reveal aspect-[4/3] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent z-10" />
                      {imgUrl ? (
                        <Image src={imgUrl} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-linen-dark to-cream" />
                      )}
                      {project.year && (
                        <div className="absolute top-4 right-4 z-20">
                          <span className="text-[9px] tracking-widest uppercase text-espresso/40 bg-linen/80 px-2 py-1">
                            {project.year}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-8 border-b border-espresso/10">
                      <p className="text-[9px] tracking-widest uppercase text-gold mb-3">{project.category}</p>
                      <h2 className="font-serif text-2xl text-espresso font-light mb-2 group-hover:text-gold transition-colors duration-500">
                        {project.name}
                      </h2>
                      {project.location && (
                        <p className="text-[10px] text-espresso/30 mb-4 flex items-center gap-2">
                          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M5 11C5 11 1 7.5 1 4.5a4 4 0 018 0C9 7.5 5 11 5 11z" stroke="#B8894A" strokeWidth="0.8" opacity="0.5"/>
                            <circle cx="5" cy="4.5" r="1.5" stroke="#B8894A" strokeWidth="0.8" opacity="0.5"/>
                          </svg>
                          {project.location}
                        </p>
                      )}
                      {project.description && (
                        <p className="text-espresso/50 text-xs font-light leading-relaxed mb-5">
                          {project.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag: string) => (
                            <span key={tag} className="text-[9px] tracking-wide uppercase text-espresso/30 border border-espresso/15 px-2.5 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {project.slug?.current && (
                          <Link href={href} className="text-[9px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 ml-4 flex-shrink-0">
                            View →
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-espresso/10 bg-cream">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso mb-6">
              Imagining something
              <br />
              <em className="gold-text not-italic">extraordinary for your hotel?</em>
            </h2>
            <p className="text-espresso/40 text-sm font-light mb-10 max-w-sm mx-auto">
              Reach out for a free project consultation.
            </p>
            <Link href="/iletisim" className="btn-primary">
              Send Project Brief
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
