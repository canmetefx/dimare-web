import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getProjectBySlug, getAllProjectSlugs } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'
import { siteConfig } from '@/lib/seo'

export const revalidate = 300

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.metaTitle ?? `${project.name} — Dimare Design`,
    description: project.metaDescription ?? project.description ?? siteConfig.description,
    alternates: { canonical: `${siteConfig.url}/projeler/${params.slug}` },
    openGraph: {
      title: project.metaTitle ?? project.name,
      description: project.metaDescription ?? project.description ?? '',
      url: `${siteConfig.url}/projeler/${params.slug}`,
      images: project.coverImage ? [{ url: sanityImageUrl(project.coverImage, 1200, 630) }] : [],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)
  if (!project) notFound()

  const coverUrl = project.coverImage ? sanityImageUrl(project.coverImage, 1600, 900) : null

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    dateCreated: project.year,
    creator: { '@type': 'Organization', name: 'Dimare Design', url: siteConfig.url },
    locationCreated: project.location ? { '@type': 'Place', name: project.location } : undefined,
    url: `${siteConfig.url}/projeler/${params.slug}`,
    image: coverUrl ?? undefined,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-16 overflow-hidden bg-linen-dark">
        {coverUrl ? (
          <Image src={coverUrl} alt={project.name} fill priority className="object-cover" sizes="100vw" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-espresso to-linen-dark" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 w-full">
          <AnimateOnScroll>
            {project.category && (
              <p className="text-[10px] tracking-widest uppercase text-gold mb-3">{project.category}</p>
            )}
            <h1 className="font-serif text-4xl md:text-6xl font-light text-cream-light leading-tight mb-4">
              {project.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[10px] text-cream/40 tracking-widest uppercase">
              {project.location && <span>{project.location}</span>}
              {project.year && <span>{project.year}</span>}
              {project.rooms && <span>{project.rooms} rooms</span>}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-linen-light">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main */}
            <div className="lg:col-span-2">
              {project.description && (
                <AnimateOnScroll>
                  <p className="text-espresso/60 text-base font-light leading-relaxed mb-10 max-w-xl">
                    {project.description}
                  </p>
                </AnimateOnScroll>
              )}

              {/* Gallery */}
              {project.gallery?.length > 0 && (
                <AnimateOnScroll>
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {project.gallery.map((img: object, i: number) => {
                      const url = sanityImageUrl(img, 800, 600)
                      return url ? (
                        <div key={i} className={`relative overflow-hidden bg-linen-dark ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-[4/3]'}`}>
                          <Image src={url} alt={`${project.name} — image ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 50vw" />
                        </div>
                      ) : null
                    })}
                  </div>
                </AnimateOnScroll>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <AnimateOnScroll delay={100}>
                <div className="bg-cream p-8 border border-espresso/10">
                  <p className="text-[9px] tracking-widest uppercase text-gold mb-6">Project Details</p>
                  <dl className="space-y-4 text-sm">
                    {project.category && (
                      <div>
                        <dt className="text-[9px] tracking-widest uppercase text-espresso/30 mb-1">Category</dt>
                        <dd className="text-espresso font-light">{project.category}</dd>
                      </div>
                    )}
                    {project.location && (
                      <div>
                        <dt className="text-[9px] tracking-widest uppercase text-espresso/30 mb-1">Location</dt>
                        <dd className="text-espresso font-light">{project.location}</dd>
                      </div>
                    )}
                    {project.year && (
                      <div>
                        <dt className="text-[9px] tracking-widest uppercase text-espresso/30 mb-1">Year</dt>
                        <dd className="text-espresso font-light">{project.year}</dd>
                      </div>
                    )}
                    {project.scope && (
                      <div>
                        <dt className="text-[9px] tracking-widest uppercase text-espresso/30 mb-1">Scope</dt>
                        <dd className="text-espresso font-light">{project.scope}</dd>
                      </div>
                    )}
                    {project.materials?.length > 0 && (
                      <div>
                        <dt className="text-[9px] tracking-widest uppercase text-espresso/30 mb-1">Materials</dt>
                        <dd className="text-espresso font-light">{project.materials.join(', ')}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </AnimateOnScroll>

              {project.tags?.length > 0 && (
                <AnimateOnScroll delay={150}>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="text-[9px] tracking-wide uppercase text-espresso/30 border border-espresso/15 px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimateOnScroll>
              )}

              {project.pinterestBoardUrl && (
                <AnimateOnScroll delay={200}>
                  <a href={project.pinterestBoardUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-colors duration-300">
                    View Pinterest Board
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                    </svg>
                  </a>
                </AnimateOnScroll>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-espresso text-center">
        <AnimateOnScroll>
          <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
            <span className="w-6 h-px bg-gold" />
            Inspired?
            <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-light mb-6">
            Let&apos;s create something like this<br />
            <em className="gold-text not-italic">for your hotel.</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/iletisim" className="btn-primary">Send Project Brief</Link>
            <Link href="/projeler" className="btn-outline border-cream/30 text-cream hover:border-cream">
              ← All Projects
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  )
}
