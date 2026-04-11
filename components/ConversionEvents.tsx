'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

export default function ConversionEvents() {
  useEffect(() => {
    // Meta Pixel — Lead event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }

    // GTM dataLayer — Google Ads conversion trigger
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'contact_form_submit' })
    }
  }, [])

  return null
}
