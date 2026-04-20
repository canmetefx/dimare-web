import { ImageResponse } from 'next/og'
import { client, urlFor } from '@/sanity/client'

export const runtime = 'edge'
export const alt = 'Dimare Design — Ürün'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface ProductOG {
  title?: string
  subtitle?: string
  category?: string
  image?: unknown
}

export default async function ProductOGImage({ params }: { params: { slug: string } }) {
  const product = await client.fetch<ProductOG | null>(
    `*[_type == "product" && slug.current == $slug][0]{ title, subtitle, category, image }`,
    { slug: params.slug }
  )

  const title = product?.title ?? 'Dimare Design'
  const subtitle = product?.subtitle ?? ''
  const category = product?.category ?? ''

  let imageUrl: string | null = null
  try {
    if (product?.image) {
      imageUrl = urlFor(product.image).width(700).height(630).fit('crop').url()
    }
  } catch {
    imageUrl = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#F5F0E8',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Left content */}
        <div
          style={{
            width: '500px',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px 56px',
            background: '#F5F0E8',
          }}
        >
          {/* Top */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '36px', height: '1px', background: '#B8894A', display: 'flex' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8894A' }}>
                {category || 'Collection'}
              </span>
            </div>

            <div
              style={{
                fontSize: title.length > 26 ? '48px' : '58px',
                fontWeight: 300,
                color: '#2C1A0E',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                display: 'flex',
              }}
            >
              {title}
            </div>

            {subtitle && (
              <div
                style={{
                  marginTop: '20px',
                  fontSize: '18px',
                  color: 'rgba(44,26,14,0.55)',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  display: 'flex',
                  maxWidth: '400px',
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom brand */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(184,137,74,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '22px', letterSpacing: '0.18em', color: '#2C1A0E', display: 'flex' }}>
              DIMARE
            </span>
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8894A', display: 'flex' }}>
              Handcrafted · Turkey
            </span>
          </div>
        </div>

        {/* Right image */}
        <div
          style={{
            width: '700px',
            height: '630px',
            display: 'flex',
            background: '#2C1A0E',
            position: 'relative',
          }}
        >
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt=""
              width={700}
              height={630}
              style={{ width: '700px', height: '630px', objectFit: 'cover' }}
            />
          ) : (
            <div
              style={{
                width: '700px',
                height: '630px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px',
                color: 'rgba(196,162,101,0.2)',
              }}
            >
              ◈
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
