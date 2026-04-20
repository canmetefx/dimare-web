'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const REFERENCES = [
  { name: 'Rixos Hotels', detail: 'Suite & Lobby Collection' },
  { name: 'Regnum Carya', detail: 'Spa & Golf Club' },
  { name: 'TUI Magic Life Bodrum', detail: 'Beach Club & Outdoor' },
  { name: 'Vogue Supreme Bodrum', detail: 'Boutique Suite Décor' },
  { name: 'Phaselis Bay NG Hotels', detail: 'Pool Cabana Installation' },
  { name: 'Ethno Hotels Belek', detail: 'Full Public Area' },
]

const STATS = [
  { value: '150+', label: 'Projects Completed' },
  { value: '40+', label: 'Premier Hotels' },
  { value: '12', label: 'Countries' },
  { value: '8 yrs', label: 'Industry Experience' },
]

const PRODUCTS = [
  { title: 'Macramé Installations', desc: 'Bespoke wall hangings, ceiling pieces and room dividers crafted to your hotel\'s dimensions.' },
  { title: 'Handwoven Furniture', desc: 'Hammocks, loungers, swings and seating — all handmade with natural fibres.' },
  { title: 'Textile Collections', desc: 'Cushions, throws, rugs and curtains designed to complement your interior.' },
  { title: 'Outdoor Decor', desc: 'Weather-resistant pieces for pool decks, beach clubs and terrace areas.' },
]

export default function HotelDecorTurkeyPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '', hotel: '', email: '', phone: '', detail: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/xdapqonj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name, hotel: form.hotel,
          email: form.email, phone: form.phone,
          projectDetail: form.detail,
          _subject: `Hotel Decor Enquiry — ${form.hotel}`,
        }),
      })
      if (res.ok) { router.push('/tesekkurler') }
      else { setError('Something went wrong. Please try again or contact us via WhatsApp.') }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 bg-linen-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, #2D1B0E 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #2D1B0E 0px, transparent 1px, transparent 60px)' }} />
        <div className="max-w-screen-xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-8">
                <span className="w-6 h-px bg-gold" />
                Handcrafted in Antalya, Turkey
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-light text-espresso leading-[1.05] mb-8">
                Artisan Décor
                <br />
                <em className="text-gold not-italic">for Luxury Hotels</em>
              </h1>
              <p className="text-espresso/55 text-base font-light leading-relaxed mb-10 max-w-md">
                Bespoke macramé installations, handwoven furniture and natural textile collections — trusted by Rixos, TUI and 40+ premier hotels across 12 countries.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 mb-12 border-t border-espresso/10 pt-8">
                {STATS.map(s => (
                  <div key={s.label}>
                    <p className="font-serif text-2xl text-gold font-light">{s.value}</p>
                    <p className="text-[10px] text-espresso/40 uppercase tracking-wide mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* References */}
              <div className="flex flex-wrap gap-2">
                {REFERENCES.map(r => (
                  <span key={r.name} className="text-[10px] text-espresso/50 border border-espresso/15 px-3 py-1.5 tracking-wide">
                    {r.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-cream border border-espresso/10 p-8 md:p-10">
              <p className="text-[10px] tracking-widest uppercase text-gold mb-1">Free Consultation</p>
              <h2 className="font-serif text-2xl text-espresso font-light mb-8">
                Request a Project Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-2">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent border border-espresso/20 px-4 py-3 text-sm text-espresso placeholder-espresso/25 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-2">Hotel / Company *</label>
                    <input name="hotel" required value={form.hotel} onChange={handleChange}
                      placeholder="Hotel name"
                      className="w-full bg-transparent border border-espresso/20 px-4 py-3 text-sm text-espresso placeholder-espresso/25 focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-2">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border border-espresso/20 px-4 py-3 text-sm text-espresso placeholder-espresso/25 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-2">Phone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    className="w-full bg-transparent border border-espresso/20 px-4 py-3 text-sm text-espresso placeholder-espresso/25 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-espresso/40 mb-2">Project Details</label>
                  <textarea name="detail" rows={3} value={form.detail} onChange={handleChange}
                    placeholder="Describe your spaces, product ideas, quantity..."
                    className="w-full bg-transparent border border-espresso/20 px-4 py-3 text-sm text-espresso placeholder-espresso/25 focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>

                {error && <p className="text-red-500 text-xs">{error}</p>}

                <button type="submit" disabled={submitting}
                  className="btn-primary w-full justify-center disabled:opacity-50">
                  {submitting ? 'Sending…' : 'Request Free Quote →'}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-espresso/10 text-center">
                <p className="text-[10px] text-espresso/30 mb-3">Or reach us directly</p>
                <Link href="https://wa.me/905320573207?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20hotel%20decor."
                  target="_blank"
                  className="inline-flex items-center gap-2 text-xs text-espresso/60 hover:text-gold transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: +90 532 057 3207
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-cream border-t border-espresso/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold mb-4">
              <span className="w-6 h-px bg-gold" />
              What We Make
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso mb-16">
              Crafted for Hospitality
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/10">
            {PRODUCTS.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 80}>
                <div className="bg-cream p-8">
                  <p className="text-[10px] tracking-widest uppercase text-gold mb-4">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-serif text-xl text-espresso font-light mb-3">{p.title}</h3>
                  <p className="text-espresso/45 text-xs font-light leading-relaxed">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/urunler" className="btn-secondary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="section-padding bg-espresso text-linen">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Trusted by Turkey's
              <br />
              <em className="text-gold not-italic">Leading Hotels</em>
            </h2>
            <p className="text-linen/50 text-sm font-light mb-10 max-w-sm mx-auto">
              From a single statement piece to a full property installation — we handle every detail.
            </p>
            <Link href="https://wa.me/905320573207?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20hotel%20decor%20project."
              target="_blank"
              className="inline-flex items-center gap-3 bg-gold text-espresso px-8 py-4 text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300">
              Start on WhatsApp →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
