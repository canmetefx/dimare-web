import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teşekkürler | Dimare Design',
  description: 'Proje talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
  robots: { index: false, follow: false },
}

export default function TesekkurlerPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Gold circle accent */}
        <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
          <span className="w-6 h-px bg-gold" />
          Mesaj Alındı
          <span className="w-6 h-px bg-gold" />
        </span>

        <h1 className="font-serif text-4xl md:text-5xl font-light text-cream-light mb-6 leading-tight">
          Teşekkürler,
          <br />
          <em className="gold-text not-italic">yakında görüşürüz.</em>
        </h1>

        <p className="text-cream/40 text-sm font-light leading-relaxed mb-12">
          Proje talebiniz bize ulaştı. 24 saat içinde ekibimiz sizinle iletişime geçecek. Acil durumlar için Instagram'dan bize ulaşabilirsiniz.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Ana Sayfaya Dön
          </Link>
          <Link href="/projeler" className="btn-outline">
            Projelerimizi İncele
          </Link>
        </div>
      </div>
    </section>
  )
}
