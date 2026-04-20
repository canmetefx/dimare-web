'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const REFERENCES = [
  { name: 'Rixos Hotels', detail: 'Suite & Lobby Collection' },
  { name: 'Regnum Carya', detail: 'Spa & Golf Club' },
  { name: 'Vogue Supreme Bodrum', detail: 'Boutique Suite Décor' },
  { name: 'Phaselis Bay NG Hotels', detail: 'Pool Cabana Installation' },
  { name: 'TUI Magic Life', detail: 'Resort Outdoor Areas' },
  { name: 'Ethno Hotels Belek', detail: 'Full Public Area' },
]

const STATS = [
  { value: '150+', label: 'Tamamlanan Proje' },
  { value: '40+', label: 'Premier Otel' },
  { value: '12', label: 'Ülke' },
  { value: '8 yıl', label: 'Sektör Deneyimi' },
]

const PROCESS = [
  {
    step: '01',
    title: 'Brief & Saha Ziyareti',
    body: 'Formu doldurun veya WhatsApp\'tan yazın. Aynı gün dönüş, gerekirse saha ziyareti ile otelinizin ışığını, ölçüsünü ve kimliğini okuruz.',
  },
  {
    step: '02',
    title: 'Konsept & Teklif',
    body: 'Ölçü, renk, malzeme ve bütçeye göre moodboard ve teknik taslakla birlikte fiyatlandırılmış proje özetini sunuyoruz.',
  },
  {
    step: '03',
    title: 'Üretim',
    body: 'Onay sonrası atölyemizde el dokuma ve makrome üretim başlar. Süreç boyunca fotoğraflı ilerleme raporu paylaşırız. Tipik süre: 4–8 hafta.',
  },
  {
    step: '04',
    title: 'Kurulum & Teslim',
    body: 'Ekibimiz otele gelir, güvenli askı ve montajı uygular, bakım rehberini teslim eder. Sezon başlamadan teslim garantisi.',
  },
]

const FAQS = [
  {
    q: 'Teslim süresi ne kadar?',
    a: 'Tasarım onayından sonra 4–8 hafta. Büyük kapsamlı (çok odalı resort) projelerde 10–12 haftaya kadar uzayabilir. Sezon öncesi aciliyetlerde üretim hattını önceliklendirebiliyoruz.',
  },
  {
    q: 'Türkiye dışındaki otellere çalışıyor musunuz?',
    a: 'Evet. UAE, Körfez ülkeleri, Yunanistan ve İtalya\'daki premier otel gruplarıyla deneyimimiz var. Uluslararası sevkiyat ve gümrük süreçlerini biz yönetiyoruz.',
  },
  {
    q: 'Dış mekanda (havuz, sahil, teras) dayanıklı mı?',
    a: 'Evet. UV dayanımlı ipler, paslanmaz çelik askı sistemleri ve deniz tuzuna karşı korumalı bağlantı elemanları kullanıyoruz. Dış mekan ürünlerimizde 2 yıl işçilik garantisi veriyoruz.',
  },
  {
    q: 'Otelimizin marka kimliğine özel renk ve desen yapılabilir mi?',
    a: 'Kesinlikle. Her proje sıfırdan oteliniz için tasarlanır — Pantone referanslı renk eşleşmesi, logo motifi ve imza desenler konsept aşamasında netleşir.',
  },
  {
    q: 'Minimum proje büyüklüğü var mı?',
    a: 'Butik oteller için tek nokta konsept işlerden (örn. resepsiyon duvarı, lobi avizesi) başlayıp tam otel koleksiyonuna kadar ölçekleniyoruz. Minimum proje bütçemiz hakkında ilk görüşmede şeffaf oluyoruz.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function TeklifPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDetail: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          _subject: `[Teklif Talebi] ${formData.company} — ${formData.name}`,
          source: '/teklif',
        }),
      })
      if (res.ok) {
        router.push('/tesekkurler')
      } else {
        setIsSubmitting(false)
      }
    } catch {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* ── HERO + FORM ──────────────────────────────────────────── */}
      <section className="min-h-screen bg-espresso pt-28 pb-20 px-6 md:px-12 relative overflow-hidden">
        {/* BG texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C4A265 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div className="lg:pt-8">
              <AnimateOnScroll>
                <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-8">
                  <span className="w-6 h-px bg-gold" />
                  Ücretsiz Teklif
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream-light leading-[1.05] mb-6">
                  Oteliniz için
                  <br />
                  El Yapımı,
                  <br />
                  <em className="text-gold not-italic">Size Özel Dekor.</em>
                </h1>
                <p className="text-cream/50 text-sm font-light leading-relaxed mb-10 max-w-md">
                  Rixos, Regnum ve Vogue Supreme dahil Türkiye&apos;nin önde gelen otellerinin tercih ettiği el yapımı makrome ve dokuma dekor — otelinizin kimliğine özel tasarım.
                </p>
              </AnimateOnScroll>

              {/* Stats */}
              <AnimateOnScroll delay={150}>
                <div className="grid grid-cols-2 gap-px bg-cream/5 mb-12">
                  {STATS.map((s) => (
                    <div key={s.label} className="bg-espresso px-6 py-5">
                      <p className="font-serif text-3xl text-gold font-light">{s.value}</p>
                      <p className="text-[10px] tracking-widest uppercase text-cream/30 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* References */}
              <AnimateOnScroll delay={250}>
                <p className="text-[9px] tracking-widest3 uppercase text-cream/25 mb-5">Referans Oteller</p>
                <div className="space-y-2">
                  {REFERENCES.map((r) => (
                    <div key={r.name} className="flex items-center gap-4 py-2 border-b border-cream/5">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-cream/70 text-xs font-light">{r.name}</span>
                      <span className="text-cream/25 text-[10px] ml-auto">{r.detail}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right — form */}
            <AnimateOnScroll direction="right" delay={100}>
              <div className="bg-linen-light p-8 md:p-10">
                <p className="text-[10px] tracking-widest uppercase text-gold mb-1">Teklif Talebi</p>
                <h2 className="font-serif text-2xl text-espresso font-light mb-8">
                  Ücretsiz Proje Özeti Alın
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-espresso/40 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ali Yılmaz"
                        className="w-full px-4 py-3.5 bg-white border border-espresso/10 text-espresso text-sm font-light placeholder:text-espresso/20 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-espresso/40 mb-2">
                        Otel / Şirket Adı *
                      </label>
                      <input
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Grand Resort Hotel"
                        className="w-full px-4 py-3.5 bg-white border border-espresso/10 text-espresso text-sm font-light placeholder:text-espresso/20 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-espresso/40 mb-2">
                        E-posta Adresi *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ali@hotel.com"
                        className="w-full px-4 py-3.5 bg-white border border-espresso/10 text-espresso text-sm font-light placeholder:text-espresso/20 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-widest uppercase text-espresso/40 mb-2">
                        Telefon *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+90 5XX XXX XX XX"
                        className="w-full px-4 py-3.5 bg-white border border-espresso/10 text-espresso text-sm font-light placeholder:text-espresso/20 focus:outline-none focus:border-gold transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] tracking-widest uppercase text-espresso/40 mb-2">
                      Proje Detayı *
                    </label>
                    <textarea
                      name="projectDetail"
                      required
                      rows={4}
                      value={formData.projectDetail}
                      onChange={handleChange}
                      placeholder="Havuz alanı, oda sayısı, kullanım amacı, renk tercihi, bütçe tahmini..."
                      className="w-full px-4 py-3.5 bg-white border border-espresso/10 text-espresso text-sm font-light placeholder:text-espresso/20 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold text-cream text-[10px] tracking-widest uppercase hover:bg-gold-light transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Gönderiliyor…' : 'Teklif Talebi Gönder →'}
                  </button>

                  {/* WhatsApp alternative */}
                  <a
                    href="https://wa.me/905320573207?text=Merhaba%2C%20otelimiz%20i%C3%A7in%20dekor%20teklifi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 border border-espresso/20 text-espresso/60 text-[10px] tracking-widest uppercase hover:border-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.533 5.859L.057 23.486a.5.5 0 0 0 .615.619l5.76-1.502A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.912 9.912 0 0 1-5.065-1.385l-.363-.214-3.764.981.999-3.671-.236-.376A9.92 9.92 0 0 1 2.062 12C2.062 6.508 6.508 2.062 12 2.062S21.938 6.508 21.938 12 17.492 21.938 12 21.938z"/>
                    </svg>
                    WhatsApp ile Hızlı İletişim
                  </a>

                  <p className="text-[9px] text-espresso/25 text-center leading-relaxed">
                    Bilgileriniz yalnızca proje görüşmesi için kullanılır. Spam göndermiyoruz.
                  </p>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SÜREÇ ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-linen-light border-b border-espresso/10">
        <div className="max-w-screen-xl mx-auto">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-widest uppercase text-gold mb-16 text-center">
              Nasıl Çalışıyoruz?
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/10">
            {PROCESS.map((p, i) => (
              <AnimateOnScroll key={p.step} delay={i * 100}>
                <div className="bg-linen-light px-10 py-12">
                  <p className="font-serif text-5xl text-gold/20 font-light mb-6">{p.step}</p>
                  <h3 className="font-serif text-xl text-espresso font-light mb-4">{p.title}</h3>
                  <p className="text-espresso/40 text-sm font-light leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SSS ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-linen border-b border-espresso/10">
        <div className="max-w-screen-md mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-[10px] tracking-widest uppercase text-gold mb-4 text-center">
              Sık Sorulan Sorular
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light mb-14 text-center">
              Otel yöneticilerinin en çok sorduğu beş soru.
            </h2>
          </AnimateOnScroll>
          <div className="divide-y divide-espresso/10 border-y border-espresso/10">
            {FAQS.map((f, i) => (
              <AnimateOnScroll key={f.q} delay={i * 60}>
                <details className="group py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h3 className="font-serif text-lg md:text-xl text-espresso font-light leading-snug">
                      {f.q}
                    </h3>
                    <span className="flex-shrink-0 text-gold text-2xl font-light leading-none mt-1 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-espresso/60 text-sm font-light leading-relaxed max-w-prose">
                    {f.a}
                  </p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-espresso text-center">
        <AnimateOnScroll>
          <p className="text-[10px] tracking-widest3 uppercase text-gold mb-4">Hemen Başlayın</p>
          <p className="font-serif text-3xl md:text-4xl text-cream font-light mb-8">
            2026 yaz sezonu için son sipariş tarihleri yaklaşıyor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-cream text-[10px] tracking-widest uppercase hover:bg-gold-light transition-colors duration-500"
            >
              Teklif Formu
            </a>
            <a
              href="https://wa.me/905320573207?text=Merhaba%2C%20otelimiz%20i%C3%A7in%20dekor%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-cream/20 text-cream/60 text-[10px] tracking-widest uppercase hover:text-cream hover:border-cream/50 transition-colors duration-500"
            >
              WhatsApp: +90 532 057 3207
            </a>
          </div>
          <p className="text-cream/20 text-xs mt-8 font-light">
            dimare.design — Türkiye&apos;nin el yapımı otel dekor atölyesi
          </p>
        </AnimateOnScroll>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Dimare Design — Ücretsiz Teklif',
            description: 'Oteliniz için el yapımı makrome ve oturma alanı dekor teklifi alın. Rixos, Regnum ve Vogue Bodrum\'un güvendiği Türk zanaatkar atölyesi.',
            url: 'https://www.dimare.design/teklif',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
