import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getProjectBySlug, getAllProjectSlugs, getRelatedProjects } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'
import { siteConfig } from '@/lib/seo'

export const revalidate = 300

interface Props {
  params: { slug: string }
}

interface Deliverable {
  title: string
  quantity?: string
  note?: string
}

interface Testimonial {
  quote?: string
  author?: string
  role?: string
  company?: string
}

interface GalleryImage {
  asset?: { _id: string; url: string }
  alt?: string
  caption?: string
}

interface RelatedProject {
  _id: string
  name: string
  slug: { current: string }
  category?: string
  location?: string
  year?: string
  coverImage?: object
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.metaTitle ?? `${project.name} — Dimare Design Case Study`,
    description: project.metaDescription ?? project.description ?? siteConfig.description,
    alternates: { canonical: `${siteConfig.url}/projeler/${params.slug}` },
    openGraph: {
      title: project.metaTitle ?? project.name,
      description: project.metaDescription ?? project.description ?? '',
      url: `${siteConfig.url}/projeler/${params.slug}`,
      images: project.coverImage ? [{ url: sanityImageUrl(project.coverImage, 1200, 630) }] : [],
      type: 'article',
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)
  if (!project) notFound()

  const related: RelatedProject[] = await getRelatedProjects(params.slug, project.category)

  const coverUrl = project.coverImage ? sanityImageUrl(project.coverImage, 1920, 1080) : null
  const gallery: GalleryImage[] = project.gallery ?? []
  const deliverables: Deliverable[] = project.deliverables ?? []
  const testimonial: Testimonial | undefined = project.testimonial?.quote ? project.testimonial : undefined

  // Schema.org CreativeWork + Review
  const projectSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    dateCreated: project.year,
    creator: { '@type': 'Organization', name: 'Dimare Design', url: siteConfig.url },
    locationCreated: project.location ? { '@type': 'Place', name: project.location } : undefined,
    url: `${siteConfig.url}/projeler/${params.slug}`,
    image: coverUrl ?? undefined,
    keywords: project.tags?.join(', '),
  }
  if (testimonial) {
    projectSchema.review = {
      '@type': 'Review',
      reviewBody: testimonial.quote,
      author: {
        '@type': 'Person',
        name: testimonial.author,
        ...(testimonial.role && { jobTitle: testimonial.role }),
        ...(testimonial.company && { worksFor: { '@type': 'Organization', name: testimonial.company } }),
      },
    }
  }

  // Facts for the sidebar / hero ribbon
  const facts: { label: string; value: string }[] = []
  if (project.propertyType) facts.push({ label: 'Property', value: project.propertyType })
  if (project.rooms) facts.push({ label: 'Scope', value: `${project.rooms} ${project.rooms > 1 ? 'areas' : 'area'}` })
  if (project.timelineWeeks) facts.push({ label: 'Timeline', value: `${project.timelineWeeks} weeks` })
  if (project.year) facts.push({ label: 'Delivered', value: project.year })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[560px] flex items-end pb-16 overflow-hidden bg-espresso">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={project.coverImage?.alt ?? project.name}
            fill priority className="object-cover" sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso-light to-linen-dark" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 to-transparent" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 w-full">
          <AnimateOnScroll>
            <Link href="/projeler" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-cream/50 hover:text-gold transition-colors duration-300 mb-8">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 4H1M4 1L1 4l3 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
              All Projects
            </Link>
          </AnimateOnScroll>

          {project.category && (
            <AnimateOnScroll delay={100}>
              <p className="text-[10px] tracking-widest uppercase text-gold mb-4">
                <span className="inline-block w-8 h-px bg-gold mr-3 align-middle" />
                {project.category}
              </p>
            </AnimateOnScroll>
          )}

          <AnimateOnScroll delay={200}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream-light leading-[1.05] mb-6 max-w-4xl">
              {project.name}
            </h1>
          </AnimateOnScroll>

          {project.description && (
            <AnimateOnScroll delay={300}>
              <p className="text-cream/60 text-base md:text-lg font-light leading-relaxed max-w-xl">
                {project.description}
              </p>
            </AnimateOnScroll>
          )}

          {facts.length > 0 && (
            <AnimateOnScroll delay={450}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 pt-8 border-t border-cream/10 max-w-2xl">
                {facts.map(f => (
                  <div key={f.label}>
                    <p className="text-[9px] tracking-widest uppercase text-cream/30 mb-1.5">{f.label}</p>
                    <p className="font-serif text-xl text-cream-light font-light">{f.value}</p>
                  </div>
                ))}
                {project.location && (
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-cream/30 mb-1.5">Location</p>
                    <p className="font-serif text-xl text-cream-light font-light">{project.location}</p>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* ── BRIEF & APPROACH ─────────────────────────────────── */}
      {(project.brief || project.solution) && (
        <section className="section-padding bg-linen-light">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {project.brief && (
                <div className="lg:col-span-6">
                  <AnimateOnScroll>
                    <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-4">
                      <span className="w-6 h-px bg-gold" />
                      The Brief
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-8 leading-tight">
                      What the client needed.
                    </h2>
                    <p className="text-espresso/60 text-base font-light leading-relaxed whitespace-pre-line">
                      {project.brief}
                    </p>
                  </AnimateOnScroll>
                </div>
              )}
              {project.solution && (
                <div className="lg:col-span-6 lg:border-l lg:border-espresso/10 lg:pl-20">
                  <AnimateOnScroll delay={150}>
                    <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-4">
                      <span className="w-6 h-px bg-gold" />
                      Our Approach
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-8 leading-tight">
                      How we designed it.
                    </h2>
                    <p className="text-espresso/60 text-base font-light leading-relaxed whitespace-pre-line">
                      {project.solution}
                    </p>
                  </AnimateOnScroll>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── SCOPE & DELIVERABLES ─────────────────────────────── */}
      {(deliverables.length > 0 || project.materials?.length > 0 || project.scope) && (
        <section className="section-padding bg-cream border-t border-espresso/10">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              <div className="lg:col-span-5">
                <AnimateOnScroll>
                  <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-4">
                    <span className="w-6 h-px bg-gold" />
                    Scope of Work
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-6 leading-tight">
                    What we delivered.
                  </h2>
                  {project.scope && (
                    <p className="text-espresso/55 text-sm font-light leading-relaxed mb-8">
                      {project.scope}
                    </p>
                  )}
                  {project.materials?.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-espresso/10">
                      <p className="text-[9px] tracking-widest uppercase text-espresso/40 mb-4">Materials Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.materials.map((m: string) => (
                          <span key={m} className="text-[10px] uppercase tracking-wide text-espresso/60 border border-espresso/15 px-3 py-1.5 bg-linen-light">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </AnimateOnScroll>
              </div>

              {deliverables.length > 0 && (
                <div className="lg:col-span-7">
                  <AnimateOnScroll delay={120}>
                    <div className="border-t border-espresso/20">
                      {deliverables.map((d, i) => (
                        <div
                          key={`${d.title}-${i}`}
                          className="grid grid-cols-12 gap-4 py-5 border-b border-espresso/10 items-baseline"
                        >
                          <span className="col-span-1 font-serif text-sm text-gold/50 font-light">{String(i + 1).padStart(2, '0')}</span>
                          <div className="col-span-7">
                            <p className="font-serif text-lg text-espresso font-light">{d.title}</p>
                            {d.note && <p className="text-[11px] text-espresso/45 mt-1 font-light">{d.note}</p>}
                          </div>
                          {d.quantity && (
                            <p className="col-span-4 text-right text-[11px] tracking-widest uppercase text-gold">
                              {d.quantity}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </AnimateOnScroll>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── GALLERY ──────────────────────────────────────────── */}
      {gallery.length > 0 && (
        <section className="bg-linen-light py-20">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 mb-12">
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-4">
                <span className="w-6 h-px bg-gold" />
                On Property
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
                Installed &amp; photographed.
              </h2>
            </AnimateOnScroll>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-12 gap-3">
              {gallery.map((img, i) => {
                const url = sanityImageUrl(img, 1600, 1200)
                // Bento pattern: 0 & every 5th = full-width; 1,2 & 3,4 pairs split 6/6
                const isHero = i % 5 === 0
                const span = isHero ? 'col-span-12 aspect-[16/9]' : 'col-span-12 md:col-span-6 aspect-[4/3]'
                return url ? (
                  <figure key={i} className={`relative overflow-hidden bg-linen-dark group ${span}`}>
                    <Image
                      src={url}
                      alt={img.alt ?? `${project.name} — installation photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
                      sizes={isHero ? '100vw' : '(max-width:768px) 100vw, 50vw'}
                    />
                    {img.caption && (
                      <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-espresso/70 to-transparent">
                        <p className="text-cream/80 text-xs font-light leading-relaxed">{img.caption}</p>
                      </figcaption>
                    )}
                  </figure>
                ) : null
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      {testimonial && (
        <section className="section-padding bg-espresso text-cream-light relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />
          <div className="max-w-3xl mx-auto text-center relative">
            <AnimateOnScroll>
              <span className="font-serif text-7xl md:text-8xl text-gold/20 leading-none block mb-4 select-none">&ldquo;</span>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-cream-light mb-10">
                {testimonial.quote}
              </blockquote>
              {(testimonial.author || testimonial.company) && (
                <footer className="text-[10px] tracking-widest uppercase text-cream/40">
                  {testimonial.author && <span className="text-gold">{testimonial.author}</span>}
                  {testimonial.role && <span> · {testimonial.role}</span>}
                  {testimonial.company && <span> · {testimonial.company}</span>}
                </footer>
              )}
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── TAGS / PINTEREST ─────────────────────────────────── */}
      {(project.tags?.length > 0 || project.pinterestBoardUrl) && (
        <section className="py-16 bg-linen-light border-t border-espresso/10">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {project.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[9px] tracking-wide uppercase text-espresso/40 border border-espresso/15 px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.pinterestBoardUrl && (
              <a
                href={project.pinterestBoardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-colors duration-300 self-start md:self-auto"
              >
                View Pinterest Board
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
              </a>
            )}
          </div>
        </section>
      )}

      {/* ── RELATED PROJECTS ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section-padding bg-cream border-t border-espresso/10">
          <div className="max-w-screen-xl mx-auto">
            <AnimateOnScroll>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-4">
                    <span className="w-6 h-px bg-gold" />
                    More Work
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
                    Related projects.
                  </h2>
                </div>
                <Link href="/projeler" className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300">
                  View All
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
                </Link>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-espresso/10">
              {related.map((p, i) => {
                const imgUrl = sanityImageUrl(p.coverImage, 800, 1000)
                return (
                  <AnimateOnScroll key={p._id} delay={i * 100}>
                    <Link href={`/projeler/${p.slug.current}`} className="group block bg-cream">
                      <div className="aspect-[4/5] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent z-10" />
                        {imgUrl ? (
                          <Image src={imgUrl} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-linen-dark/50 to-cream-dark" />
                        )}
                        <div className="absolute top-6 right-6 z-20">
                          <span className="text-[9px] tracking-widest uppercase text-cream/60">{p.year}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <p className="text-[9px] tracking-widest uppercase text-gold mb-2">{p.category}</p>
                          <h3 className="font-serif text-xl text-cream-light font-light">{p.name}</h3>
                          {p.location && <p className="text-[10px] text-cream/50 mt-1">{p.location}</p>}
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-padding bg-espresso text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />
        <div className="relative max-w-2xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-8">
              <span className="w-6 h-px bg-gold" />
              Inspired?
              <span className="w-6 h-px bg-gold" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream-light mb-8 leading-tight">
              Let&apos;s build something like this<br />
              <em className="gold-text not-italic">for your property.</em>
            </h2>
            <p className="text-cream/40 text-sm font-light leading-relaxed mb-12 max-w-md mx-auto">
              Send us a brief — floor plans, photos, or just a mood. We&apos;ll come back with a concept within 7–10 days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/teklif" className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase bg-gold text-cream-light hover:bg-gold-light transition-all duration-500" style={{ letterSpacing: '0.2em' }}>
                Request a Quote
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
              </Link>
              <Link href="/projeler" className="inline-flex items-center gap-3 px-8 py-4 text-xs uppercase border border-cream/30 text-cream hover:border-cream hover:bg-cream/5 transition-all duration-500" style={{ letterSpacing: '0.2em' }}>
                All Projects
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
