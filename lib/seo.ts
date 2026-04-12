export const siteConfig = {
  name: 'Dimare Design',
  tagline: 'Contract-Grade Artisan Décor for Premier Hotels & Resorts',
  description:
    'Dimare Design crafts bespoke macramé, handwoven textiles and bohemian furniture for premier hotels and resorts worldwide. Trusted by Rixos, TUI, Regnum Carya and leading Mediterranean hospitality brands.',
  url: 'https://www.dimare.design',
  locale: 'tr_TR',
  localeAlt: 'en_US',
  ogImage: 'https://www.dimare.design/opengraph-image',
  twitter: '@dimaredesign',
  address: {
    country: 'Turkey',
    region: 'TR',
  },
  keywords: [
    'lüks otel dekor',
    'makrome otel',
    'bohemian otel dekorasyonu',
    'luxury hotel decor',
    'handcrafted macrame',
    'bohemian furniture hotel',
    'resort dekor tasarım',
    'artisan hotel decor turkey',
    'otel dış mekan dekorasyonu',
    'macrame wall art hotel',
    'Rixos dekor',
    'lüks resort dekorasyon',
    'el yapımı otel mobilyası',
    'dimare design',
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  sameAs: [
    'https://www.instagram.com/dimaredesign',
    'https://www.etsy.com/shop/dimaredesign',
    'https://www.pinterest.com/dimaredesign',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Turkish', 'English'],
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  image: siteConfig.ogImage,
  description: siteConfig.description,
  url: siteConfig.url,
  priceRange: '$$$',
  currenciesAccepted: 'USD, EUR, TRY',
  paymentAccepted: 'Credit Card, Bank Transfer',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Luxury Hotel Decor',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Handcrafted Macramé' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Bohemian Outdoor Furniture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Woven Wall Art' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hotel Lobby Installations' } },
    ],
  },
}

export function generatePageMeta(options: {
  title: string
  description: string
  path?: string
  image?: string
}) {
  const url = `${siteConfig.url}${options.path ?? ''}`
  return {
    title: `${options.title} | ${siteConfig.name}`,
    description: options.description,
    alternates: { canonical: url },
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: options.image ?? siteConfig.ogImage, width: 1200, height: 630 }],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [options.image ?? siteConfig.ogImage],
    },
  }
}
