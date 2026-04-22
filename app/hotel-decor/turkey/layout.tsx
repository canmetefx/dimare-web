import type { Metadata } from 'next'
import { generatePageMeta } from '@/lib/seo'

export const metadata: Metadata = generatePageMeta({
  title: 'Artisan Décor for Luxury Hotels in Turkey',
  description:
    'Bespoke macramé installations, handwoven furniture, and natural textile collections for premier hotels. Trusted by Rixos, TUI, Regnum Carya and 20 hotels across 3 countries. Free consultation.',
  path: '/hotel-decor/turkey',
})

export default function HotelDecorTurkeyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
