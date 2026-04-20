/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // EN → TR redirects (permanent, for Google Ads + SEO)
      { source: '/projects',  destination: '/projeler',    permanent: true },
      { source: '/projects/:slug', destination: '/projeler/:slug', permanent: true },
      { source: '/products',  destination: '/urunler',     permanent: true },
      { source: '/products/:slug', destination: '/urunler/:slug', permanent: true },
      { source: '/about',     destination: '/hakkimizda',  permanent: true },
      { source: '/contact',   destination: '/iletisim',    permanent: true },
      { source: '/quote',     destination: '/teklif',      permanent: true },
      { source: '/catalog',   destination: '/katalog-2026', permanent: true },
      { source: '/privacy',   destination: '/gizlilik',    permanent: true },
      { source: '/terms',     destination: '/kullanim-kosullari', permanent: true },
      { source: '/thank-you', destination: '/tesekkurler', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
