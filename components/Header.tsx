'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Ana Sayfa', labelEn: 'Home' },
  { href: '/projeler', label: 'Projeler', labelEn: 'Projects' },
  { href: '/urunler', label: 'Ürünler', labelEn: 'Products' },
  { href: '/hakkimizda', label: 'Hakkımızda', labelEn: 'About' },
  { href: '/iletisim', label: 'İletişim', labelEn: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<'tr' | 'en'>('tr')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-gold/10 py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-serif text-2xl font-light tracking-[0.15em] text-cream-light leading-none group-hover:text-gold transition-colors duration-500">
              DIMARE
            </span>
            <span className="text-[9px] tracking-widest3 text-gold/70 uppercase mt-0.5">
              Design Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-widest uppercase font-light transition-colors duration-300 relative group ${
                  pathname === link.href ? 'text-gold' : 'text-cream/60 hover:text-cream'
                }`}
              >
                {lang === 'tr' ? link.label : link.labelEn}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="hidden lg:block text-[10px] tracking-widest uppercase text-cream/40 hover:text-gold transition-colors duration-300"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>

            {/* CTA */}
            <Link
              href="/iletisim"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[10px] tracking-widest uppercase border border-gold/40 text-gold hover:bg-gold hover:text-obsidian transition-all duration-500"
            >
              Proje Talebi
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menü"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-cream-light origin-center transition-colors"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-px bg-cream-light"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-cream-light origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center px-10"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-4xl font-light tracking-wide ${
                      pathname === link.href ? 'text-gold' : 'text-cream/70 hover:text-cream'
                    } transition-colors duration-300`}
                  >
                    {lang === 'tr' ? link.label : link.labelEn}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-16 flex items-center gap-8">
              <Link href="/iletisim" className="btn-outline text-[10px]">
                Proje Talebi
              </Link>
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className="text-[10px] tracking-widest uppercase text-cream/40 hover:text-gold transition-colors"
              >
                {lang === 'tr' ? 'EN' : 'TR'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
