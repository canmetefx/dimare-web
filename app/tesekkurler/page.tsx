import Link from 'next/link'
import type { Metadata } from 'next'
import ConversionEvents from '@/components/ConversionEvents'

export const metadata: Metadata = {
  title: 'Thank You | DiMare Design',
  description: 'Your project brief has been received. We will be in touch shortly.',
  robots: { index: false, follow: false },
}

export default function TesekkurlerPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-linen-light">
      <ConversionEvents />
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <span className="inline-flex items-center gap-3 text-[10px] tracking-widest3 uppercase text-gold mb-6">
          <span className="w-6 h-px bg-gold" />
          Message Received
          <span className="w-6 h-px bg-gold" />
        </span>

        <h1 className="font-serif text-4xl md:text-5xl font-light text-espresso mb-6 leading-tight">
          Thank you —
          <br />
          <em className="gold-text not-italic">we&apos;ll be in touch.</em>
        </h1>

        <p className="text-espresso/40 text-sm font-light leading-relaxed mb-12">
          Your project brief has reached us. Our team will get back to you within 24 hours. For urgent enquiries, reach us on Instagram.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/projeler" className="btn-outline">
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
