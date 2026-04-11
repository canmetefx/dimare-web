import { client } from './client'

const imageFields = `{ asset->{ _id, url }, hotspot, crop, alt }`

// ── Products ──────────────────────────────────────────────────

export async function getAllProducts() {
  return client.fetch(`
    *[_type == "product"] | order(order asc) {
      _id, title, subtitle, slug, category, description, tags,
      featured, etsyUrl, shopifyUrl, pinterestPinUrl, leadTime, materials,
      image ${imageFields}
    }
  `)
}

export async function getFeaturedProducts() {
  return client.fetch(`
    *[_type == "product" && featured == true] | order(order asc) [0...4] {
      _id, title, subtitle, slug, category, description,
      image ${imageFields}
    }
  `)
}

export async function getAllProductSlugs() {
  return client.fetch(`*[_type == "product"]{ "slug": slug.current }`)
}

export async function getProductBySlug(slug: string) {
  return client.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      _id, title, subtitle, slug, category, description, body,
      tags, materials, leadTime, etsyUrl, shopifyUrl, pinterestPinUrl,
      metaTitle, metaDescription,
      image ${imageFields},
      gallery[] ${imageFields}
    }
  `, { slug })
}

// ── Projects ──────────────────────────────────────────────────

export async function getAllProjects() {
  return client.fetch(`
    *[_type == "project"] | order(year desc) {
      _id, name, slug, category, location, year, description, tags, featured,
      rooms, scope, materials,
      coverImage ${imageFields}
    }
  `)
}

export async function getFeaturedProjects() {
  return client.fetch(`
    *[_type == "project" && featured == true] | order(order asc) [0...3] {
      _id, name, slug, category, location, year,
      coverImage ${imageFields}
    }
  `)
}

export async function getAllProjectSlugs() {
  return client.fetch(`*[_type == "project"]{ "slug": slug.current }`)
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id, name, slug, category, location, year, description, body,
      rooms, scope, materials, tags, pinterestBoardUrl,
      metaTitle, metaDescription,
      coverImage ${imageFields},
      gallery[] ${imageFields}
    }
  `, { slug })
}

// ── Site Settings ─────────────────────────────────────────────

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      stats,
      hotelClients[]{ name, url },
      contactEmail, whatsapp,
      instagramUrl, pinterestUrl, etsyUrl, shopifyUrl,
      heroImage ${imageFields},
      aboutImage ${imageFields}
    }
  `)
}
