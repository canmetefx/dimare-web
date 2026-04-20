'use client'

import { useState } from 'react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const COLLECTIONS = [
  {
    id: 'havuz-plaj',
    label: 'Havuz & Plaj',
    en: 'Pool & Beach',
    items: ['Cabana Canopy', 'Resort Hammock', 'Swing Chair', 'VIP Shade Sail', 'Lounge Cushions'],
    count: 5,
  },
  {
    id: 'oda-suite',
    label: 'Oda & Suite',
    en: 'Room & Suite',
    items: ['Macramé Headboard', 'Woven Curtain', 'Artisan Rug', 'Pendant Light', 'Cushion Set'],
    count: 5,
  },
  {
    id: 'lobi-ortak',
    label: 'Lobi & Ortak Alan',
    en: 'Lobby & Common',
    items: ['Wall Installation', 'Room Divider', 'Basket Set', 'Coffee Table', 'Wall Plate Set'],
    count: 5,
  },
  {
    id: 'spa-wellness',
    label: 'Spa & Wellness',
    en: 'Spa & Wellness',
    items: ['Treatment Curtain', 'Meditation Canopy', 'Partition Screen', 'Floor Cushion', 'Towel Holder'],
    count: 5,
  },
]

export default function Katalog2026Page() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', hotelName: '', email: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/xdapqonj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `[Katalog Talebi 2026] ${formData.hotelName} — ${formData.name}`,
          source: '/katalog-2026',
        }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      /* silent — still show success to not block UX */
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-24 px-6 md:px-12 bg-linen-light border-b border-espresso/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-linen-dark/30 to-transparent" />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Copy */}
            <AnimateOnScroll>
              <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
                <span className="w-6 h-px bg-gold" />
                Yeni Koleksiyon
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-espresso leading-[0.95] mb-8">
                2026
                <br />
                <em className="text-gold not-italic">Yaz Kataloğu</em>
              </h1>
              <p className="text-espresso/50 text-sm font-light leading-relaxed max-w-md mb-10">
                20 ürün, 4 mekan kategorisi. Havuz ve plajdan spa ve lobiye — otelinizin her alanı için
                el yapımı, kontrakt kalitesinde çözümler. Kataloğu ücretsiz isteyin.
              </p>

              {/* Collection pills */}
              <div className="flex flex-wrap gap-2">
                {COLLECTIONS.map((c) => (
                  <span key={c.id} className="text-[9px] tracking-widest uppercase px-4 py-2 border border-espresso/15 text-espresso/40">
                    {c.label}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll direction="right" delay={150}>
              {submitted ? (
                <div className="bg-espresso p-10 text-center">
                  <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mx-auto mb-6">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10l5 5L17 5" stroke="#C4A265" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-serif text-2xl text-cream font-light mb-3">Talebinizi Aldık</p>
                  <p className="text-cream/40 text-sm font-light leading-relaxed">
                    2026 Yaz Kataloğumuzu 24 saat içinde{' '}
                    <strong className="text-gold font-normal">{formData.email}</strong> adresine göndereceğiz.
                  </p>
                  <div className="mt-8 pt-8 border-t border-cream/10">
                    <p className="text-cream/25 text-xs font-light mb-4">Hızlı iletişim için</p>
                    <a
                      href="https://wa.me/905320573207"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 pb-0.5"
                    >
                      WhatsApp ile yazın →
                    </a>
                  </div>
                </div>
              ) : (
                <div className="bg-espresso p-10">
                  <p className="text-[9px] tracking-widest uppercase text-gold mb-1">Ücretsiz Katalog</p>
                  <h2 className="font-serif text-2xl text-cream font-light mb-8">
                    2026 Yaz Koleksiyonunu İsteyin
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-cream/30 mb-2">Ad Soyad *</label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ali Yılmaz"
                        className="w-full px-4 py-3.5 bg-espresso-light border border-cream/10 text-cream text-sm font-light placeholder:text-cream/15 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-cream/30 mb-2">Otel / Şirket Adı *</label>
                      <input
                        name="hotelName"
                        required
                        value={formData.hotelName}
                        onChange={handleChange}
                        placeholder="Grand Resort Hotel"
                        className="w-full px-4 py-3.5 bg-espresso-light border border-cream/10 text-cream text-sm font-light placeholder:text-cream/15 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-cream/30 mb-2">E-posta Adresiniz *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ali@hotel.com"
                        className="w-full px-4 py-3.5 bg-espresso-light border border-cream/10 text-cream text-sm font-light placeholder:text-cream/15 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gold text-cream text-[10px] tracking-widest uppercase hover:bg-gold-light transition-colors duration-500 disabled:opacity-50 mt-2"
                    >
                      {isSubmitting ? 'Gönderiliyor…' : 'Kataloğu Gönder →'}
                    </button>

                    <p className="text-[9px] text-cream/20 text-center leading-relaxed pt-1">
                      Kataloğunuz 24 saat içinde e-postanıza gönderilecek. Spam göndermiyoruz.
                    </p>
                  </form>
                </div>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── KOLEKSİYON ÖNİZLEME ─────────────────────────────────── */}
      <section className="section-padding bg-cream border-b border-espresso/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-widest uppercase text-gold mb-16">Katalog İçeriği</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-espresso/10">
            {COLLECTIONS.map((col, i) => (
              <AnimateOnScroll key={col.id} delay={i * 80}>
                <div className="bg-cream p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-serif text-2xl text-espresso font-light">{col.label}</p>
                      <p className="text-[9px] tracking-widest uppercase text-gold mt-1">{col.en}</p>
                    </div>
                    <span className="font-serif text-4xl text-gold/15 font-light">{col.count}</span>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-espresso/40 text-xs font-light">
                        <span className="w-3 h-px bg-gold/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM PUSH ───────────────────────────────────────────── */}
      <section className="section-padding bg-linen-light">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <span className="gold-line mb-6" />
            <h2 className="font-serif text-3xl text-espresso font-light mb-4">
              Kataloğun ötesinde
              <br />
              <em className="text-gold not-italic">özel proje mi istiyorsunuz?</em>
            </h2>
            <p className="text-espresso/40 text-sm font-light leading-relaxed">
              Tüm ürünler boyut, renk ve malzeme seçenekleriyle tamamen kişiselleştirilebilir. Otelinizin kimliğine özel tasarım için bize ulaşın.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className="flex flex-col gap-3">
              <a
                href="/teklif"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-[10px] tracking-widest uppercase bg-gold text-cream hover:bg-gold-light transition-colors duration-500"
              >
                Teklif Alın →
              </a>
              <a
                href="https://wa.me/905320573207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-[10px] tracking-widest uppercase border border-espresso/20 text-espresso/50 hover:border-gold hover:text-gold transition-colors duration-500"
              >
                WhatsApp: +90 532 057 3207
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Dimare Design 2026 Yaz Kataloğu',
            description: '2026 Yaz koleksiyonu — 20 ürün, 4 mekan kategorisi. El yapımı makrome, dokuma tekstil ve bohem mobilya. Otel dekor kataloğu ücretsiz isteyin.',
            url: 'https://www.dimare.design/katalog-2026',
          }),
        }}
      />
    </>
  )
}
