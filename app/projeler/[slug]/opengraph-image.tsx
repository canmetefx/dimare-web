import { ImageResponse } from 'next/og'
import { client, urlFor } from '@/sanity/client'

export const runtime = 'edge'
export const alt = 'Dimare Design — Otel Projesi'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface ProjectOG {
  name?: string
  location?: string
  year?: number
  category?: string
  coverImage?: unknown
}

export default async function ProjectOGImage({ params }: { params: { slug: string } }) {
  const project = await client.fetch<ProjectOG | null>(
    `*[_type == "project" && slug.current == $slug][0]{ name, location, year, category, coverImage }`,
    { slug: params.slug }
  )

  const name = project?.name ?? 'Dimare Design'
  const location = project?.location ?? ''
  const year = project?.year ?? ''
  const category = project?.category ?? ''

  let coverUrl: string | null = null
  try {
    if (project?.coverImage) {
      coverUrl = urlFor(project.coverImage).width(1200).height(630).fit('crop').url()
    }
  } catch {
    coverUrl = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          background: '#2C1A0E',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Background image */}
        {coverUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverUrl}
            alt=""
            width={1200}
            height={630}
            style={{ position: 'absolute', inset: 0, width: '1200px', height: '630px', objectFit: 'cover' }}
          />
        )}

        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(44,26,14,0.55) 0%, rgba(44,26,14,0.35) 45%, rgba(44,26,14,0.95) 100%)',
            display: 'flex',
          }}
        />

        {/* Corner ornaments */}
        <div style={{ position: 'absolute', top: 40, left: 40, width: 60, height: 60, borderTop: '1px solid rgba(196,162,101,0.55)', borderLeft: '1px solid rgba(196,162,101,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 40, right: 40, width: 60, height: 60, borderTop: '1px solid rgba(196,162,101,0.55)', borderRight: '1px solid rgba(196,162,101,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 40, width: 60, height: 60, borderBottom: '1px solid rgba(196,162,101,0.55)', borderLeft: '1px solid rgba(196,162,101,0.55)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 40, width: 60, height: 60, borderBottom: '1px solid rgba(196,162,101,0.55)', borderRight: '1px solid rgba(196,162,101,0.55)', display: 'flex' }} />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '80px',
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '48px', height: '1px', background: '#C4A265', display: 'flex' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C4A265' }}>
              {category ? `${category} · Case Study` : 'Case Study'}
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: name.length > 28 ? '62px' : '78px',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              maxWidth: '1000px',
              display: 'flex',
            }}
          >
            {name}
          </div>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '32px',
              fontSize: '18px',
              color: 'rgba(245,240,232,0.7)',
            }}
          >
            {location && <span style={{ display: 'flex' }}>{location}</span>}
            {location && year && (
              <span style={{ width: '4px', height: '4px', borderRadius: '9999px', background: '#C4A265', display: 'flex' }} />
            )}
            {year && <span style={{ display: 'flex' }}>{year}</span>}
          </div>

          {/* Brand strip */}
          <div
            style={{
              marginTop: '40px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(196,162,101,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '24px', letterSpacing: '0.18em', color: '#F5F0E8', display: 'flex' }}>
              DIMARE
            </span>
            <span style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(196,162,101,0.8)', display: 'flex' }}>
              dimare.design
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
