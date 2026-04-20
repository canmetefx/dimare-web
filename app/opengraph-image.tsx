import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dimare Design — Handcrafted Bohemian Decor for Luxury Hotels'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5F0E8',
          position: 'relative',
        }}
      >
        {/* Corner ornaments */}
        <div style={{ position: 'absolute', top: 40, left: 40, width: 60, height: 60, borderTop: '1px solid rgba(184,137,74,0.4)', borderLeft: '1px solid rgba(184,137,74,0.4)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 40, right: 40, width: 60, height: 60, borderTop: '1px solid rgba(184,137,74,0.4)', borderRight: '1px solid rgba(184,137,74,0.4)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 40, width: 60, height: 60, borderBottom: '1px solid rgba(184,137,74,0.4)', borderLeft: '1px solid rgba(184,137,74,0.4)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 40, width: 60, height: 60, borderBottom: '1px solid rgba(184,137,74,0.4)', borderRight: '1px solid rgba(184,137,74,0.4)', display: 'flex' }} />

        {/* Horizontal rule */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, transparent, #B8894A, transparent)', display: 'flex' }} />

        {/* Tag line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '40px', height: '1px', background: '#B8894A', display: 'flex' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8894A', fontFamily: 'Georgia, serif' }}>
            Handcrafted · Turkey
          </span>
          <div style={{ width: '40px', height: '1px', background: '#B8894A', display: 'flex' }} />
        </div>

        {/* Brand name */}
        <div style={{ fontSize: '96px', fontFamily: 'Georgia, serif', fontWeight: 300, letterSpacing: '0.12em', color: '#2C1A0E', lineHeight: 1, display: 'flex' }}>
          DIMARE
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: '13px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8894A', marginTop: '16px', display: 'flex' }}>
          Design Studio
        </div>

        {/* Description */}
        <div style={{ fontSize: '18px', color: 'rgba(44,26,14,0.45)', fontFamily: 'Georgia, serif', fontWeight: 300, marginTop: '40px', maxWidth: '600px', textAlign: 'center', lineHeight: 1.6, display: 'flex' }}>
          Bespoke handcrafted décor for luxury hotels &amp; resorts worldwide
        </div>

        {/* Bottom rule */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, transparent, #B8894A, transparent)', display: 'flex' }} />
      </div>
    ),
    { ...size }
  )
}
