'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const projectTypes = [
  'Otel Lobisi',
  'Dış Mekan / Pool Deck',
  'Spa & Wellness',
  'Restoran & Bar',
  'Odalar & Süitler',
  'Özel Proje',
]

export default function IletisimPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hotelName: '',
    projectType: '',
    roomCount: '',
    deadline: '',
    budget: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('https://formspree.io/f/xdapqonj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        router.push('/tesekkurler')
      } else {
        throw new Error('Form gönderilemedi')
      }
    } catch {
      alert('Bir hata oluştu. Lütfen tekrar deneyin veya bize doğrudan e-posta gönderin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Dimare Design — İletişim',
    description: 'Lüks otel dekor projeniz için Dimare Design ile iletişime geçin. Ücretsiz danışmanlık ve proje brief formu.',
    url: 'https://www.dimare.design/iletisim',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ── PAGE HEADER ────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 border-b border-gold/10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
              <span className="w-8 h-px bg-gold" />
              Proje Talebi
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream-light leading-tight max-w-2xl">
              Projenizi
              <br />
              <em className="gold-text not-italic">Konuşalım.</em>
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">

            {/* Left — Info */}
            <AnimateOnScroll direction="left" className="lg:col-span-2">
              <div className="space-y-12 lg:sticky lg:top-32">
                <div>
                  <span className="gold-line mb-6" />
                  <p className="text-cream/50 text-sm leading-relaxed font-light mb-8">
                    Her proje özeldir. Otelinizin vizyonunu, bütçesini ve zaman çizelgesini paylaşın — size özel bir teklif hazırlayalım.
                  </p>
                  <p className="text-cream/40 text-xs leading-relaxed font-light">
                    Formu doldurmak yerine doğrudan ulaşmak isterseniz:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-px bg-gold/40 mt-3 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-1">E-posta</p>
                      <a href="mailto:info@dimare.design" className="text-cream/70 text-sm hover:text-gold transition-colors duration-300">
                        info@dimare.design
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-8 h-px bg-gold/40 mt-3 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-1">Instagram</p>
                      <a href="https://www.instagram.com/dimaredesign" target="_blank" rel="noopener noreferrer" className="text-cream/70 text-sm hover:text-gold transition-colors duration-300">
                        @dimaredesign
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-8 h-px bg-gold/40 mt-3 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-1">Yanıt Süresi</p>
                      <p className="text-cream/70 text-sm">24 saat içinde</p>
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-6">Süreç Nasıl İşler?</p>
                  <ol className="space-y-4">
                    {[
                      'Formu doldurun, projenizi anlatın',
                      '24 saat içinde sizinle iletişime geçiyoruz',
                      'Ücretsiz danışmanlık görüşmesi',
                      'Özel teklif ve prototip',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="font-serif text-2xl text-gold/30 font-light leading-none flex-shrink-0 mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-cream/50 text-xs leading-relaxed font-light">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right — Form */}
            <AnimateOnScroll direction="right" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Contact info row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label htmlFor="name" className="form-label">İsim Soyisim *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email" className="form-label">E-posta *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="ahmet@otel.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label htmlFor="phone" className="form-label">Telefon</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+90 532 000 00 00"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="hotelName" className="form-label">Otel / Tesis Adı *</label>
                    <input
                      id="hotelName"
                      name="hotelName"
                      type="text"
                      required
                      value={formData.hotelName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Rixos Premium Belek"
                    />
                  </div>
                </div>

                {/* Project details */}
                <div className="border-t border-gold/10 pt-8">
                  <p className="text-[10px] tracking-widest uppercase text-gold/50 mb-6">Proje Detayları</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="form-field">
                      <label htmlFor="projectType" className="form-label">Proje Tipi *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="" disabled>Seçin...</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="roomCount" className="form-label">Alan / Oda Sayısı</label>
                      <input
                        id="roomCount"
                        name="roomCount"
                        type="text"
                        value={formData.roomCount}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Örn: 50 oda, 200 m²"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="form-field">
                      <label htmlFor="deadline" className="form-label">Hedef Teslim Tarihi</label>
                      <input
                        id="deadline"
                        name="deadline"
                        type="text"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Örn: Haziran 2025"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="budget" className="form-label">Bütçe Aralığı</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Belirtmek istemiyorum</option>
                        <option value="5K-15K USD">$5,000 – $15,000</option>
                        <option value="15K-50K USD">$15,000 – $50,000</option>
                        <option value="50K-100K USD">$50,000 – $100,000</option>
                        <option value="100K+ USD">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="form-label">Projenizi Anlatın *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      placeholder="Mekânı, istediğiniz estetik tarzı, varsa referans görselleri veya özel isteklerinizi paylaşın..."
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-cream/30 text-xs font-light">* Zorunlu alanlar</p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Proje Talebini Gönder'}
                    {!isSubmitting && (
                      <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M1 4h14M11 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                </div>

              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
