import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'
import { getAllProjectSlugs, getAllProductSlugs } from '@/sanity/queries'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  const [projectSlugs, productSlugs] = await Promise.all([
    getAllProjectSlugs().catch(() => []),
    getAllProductSlugs().catch(() => []),
  ])

  const projectUrls: MetadataRoute.Sitemap = projectSlugs.map((s: { slug: string }) => ({
    url: `${baseUrl}/projeler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const productUrls: MetadataRoute.Sitemap = productSlugs.map((s: { slug: string }) => ({
    url: `${baseUrl}/urunler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/projeler`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/urunler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/teklif`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/katalog-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/hotel-decor/turkey`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/gizlilik`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/kullanim-kosullari`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...projectUrls,
    ...productUrls,
  ]
}
