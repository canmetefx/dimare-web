'use client'

import { useState, useEffect } from 'react'

const WA_URL =
  'https://wa.me/905320573207?text=Merhaba%2C%20otelimiz%20i%C3%A7in%20dekor%20teklifi%20almak%20istiyorum.'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltipDismissed, setTooltipDismissed] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Appear after 2s, show tooltip after 4s
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 2000)
    const t2 = setTimeout(() => setShowTooltip(true), 4000)
    const t3 = setTimeout(() => setShowTooltip(false), 9000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && !tooltipDismissed && (
        <div className="flex items-center gap-2 bg-white shadow-lg px-4 py-3 max-w-[220px] animate-fade-in">
          <p className="text-espresso text-[11px] font-light leading-snug">
            Hızlı teklif için WhatsApp&apos;tan yazın
          </p>
          <button
            onClick={() => {
              setShowTooltip(false)
              setTooltipDismissed(true)
            }}
            className="text-espresso/30 hover:text-espresso/60 flex-shrink-0 ml-1"
            aria-label="Kapat"
          >
            ×
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] shadow-lg flex items-center justify-center transition-colors duration-300 group"
      >
        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.126 1.533 5.859L.057 23.486a.5.5 0 0 0 .615.619l5.76-1.502A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.912 9.912 0 0 1-5.065-1.385l-.363-.214-3.764.981.999-3.671-.236-.376A9.92 9.92 0 0 1 2.062 12C2.062 6.508 6.508 2.062 12 2.062S21.938 6.508 21.938 12 17.492 21.938 12 21.938z" />
        </svg>
      </a>
    </div>
  )
}
