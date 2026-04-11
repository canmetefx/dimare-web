import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { getProductBySlug, getAllProductSlugs } from '@/sanity/queries'
import { sanityImageUrl } from '@/lib/sanity-image'
import { siteConfig } from '@/lib/seo'

export const revalidate = 300

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs()
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.metaTitle ?? `${product.title} — DiMare Design`,
    description: product.metaDescription ?? product.description ?? siteConfig.description,
    alternates: { canonical: `${siteConfig.url}/urunler/${params.slug}` },
    openGraph: {
      title: product.metaTitle ?? product.title,
      description: product.metaDescription ?? product.description ?? '',
      url: `${siteConfig.url}/urunler/${params.slug}`,
      images: product.image ? [{ url: sanityImageUrl(product.image, 1200, 630) }] : [],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug(params.slug)
  if (!product) notFound()

  const mainImageUrl = product.image ? sanityImageUrl(product.image, 1200, 1200) : null

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    brand: { '@type': 'Brand', name: 'DiMare Design' },
    image: mainImageUrl ? [mainImageUrl] : [],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'DiMare Design' },
    },
    url: `${siteConfig.url}/urunler/${params.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="pt-32 pb-20 bg-linen-light">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <AnimateOnScroll direction="left">
              <div className="sticky top-32">
                {/* Main image */}
                <div className="aspect-square relative overflow-hidden bg-linen-dark mb-3">
                  {mainImageUrl ? (
                    <Image src={mainImageUrl} alt={product.title} fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-[150px] text-gold/10 italic">D</span>
                    </div>
                  )}
                </div>
                {/* Gallery thumbnails */}
                {product.gallery?.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.gallery.slice(0, 4).map((img: object, i: number) => {
                      const url = sanityImageUrl(img, 300, 300)
                      return url ? (
                        <div key={i} className="aspect-square relative overflow-hidden bg-linen-dark">
                          <Image src={url} alt={`${product.title} — ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="100px" />
                        </div>
                      ) : null
                    })}
                  </div>
                )}
              </div>
            </AnimateOnScroll>

            {/* Details */}
            <AnimateOnScroll direction="right">
              <div>
                {product.category && (
                  <p className="text-[10px] tracking-widest uppercase text-gold mb-4">{product.category}</p>
                )}
                <h1 className="font-serif text-4xl md:text-5xl font-light text-espresso mb-2 leading-tight">
                  {product.title}
                </h1>
                {product.subtitle && (
                  <p className="text-espresso/40 text-sm mb-8">{product.subtitle}</p>
                )}

                {product.description && (
                  <p className="text-espresso/60 text-sm font-light leading-relaxed mb-8 max-w-md">
                    {product.description}
                  </p>
                )}

                <div className="space-y-4 mb-10">
                  {product.materials?.length > 0 && (
                    <div className="flex gap-4 text-sm">
                      <span className="text-[9px] tracking-widest uppercase text-espresso/30 w-24 flex-shrink-0 pt-0.5">Materials</span>
                      <span className="text-espresso/60 font-light">{product.materials.join(', ')}</span>
                    </div>
                  )}
                  {product.leadTime && (
                    <div className="flex gap-4 text-sm">
                      <span className="text-[9px] tracking-widest uppercase text-espresso/30 w-24 flex-shrink-0 pt-0.5">Lead Time</span>
                      <span className="text-espresso/60 font-light">{product.leadTime}</span>
                    </div>
                  )}
                </div>

                {product.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {product.tags.map((tag: string) => (
                      <span key={tag} className="text-[9px] tracking-wide uppercase text-espresso/30 border border-espresso/15 px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Purchase / enquiry */}
                <div className="space-y-4">
                  {product.etsyUrl && (
                    <a href={product.etsyUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-primary w-full justify-center">
                      Buy on Etsy
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                      </svg>
                    </a>
                  )}
                  {product.shopifyUrl && (
                    <a href={product.shopifyUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-outline w-full justify-center">
                      Buy on Shopify
                    </a>
                  )}
                  <Link href="/iletisim" className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 text-[10px] tracking-widest uppercase text-espresso/50 border border-espresso/20 hover:border-gold hover:text-gold transition-all duration-300">
                    Request Custom Order
                  </Link>
                </div>

                {product.pinterestPinUrl && (
                  <div className="mt-8">
                    <a href={product.pinterestPinUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-colors duration-300">
                      Save to Pinterest
                    </a>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6 md:px-12 border-t border-espresso/10 bg-linen-light">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link href="/urunler" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-espresso/40 hover:text-gold transition-colors duration-300">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 4H1M5 1L1 4l4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
            All Products
          </Link>
          <Link href="/iletisim" className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300">
            Start a Project
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M9 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
