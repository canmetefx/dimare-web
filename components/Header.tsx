'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projeler', label: 'Projects' },
  { href: '/urunler', label: 'Products' },
  { href: '/hakkimizda', label: 'About' },
  { href: '/iletisim', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isHeroPage = pathname === '/'

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-linen/95 backdrop-blur-md border-b border-espresso/10 py-4'
            : isHeroPage
              ? 'bg-transparent py-7'
              : 'bg-linen/95 backdrop-blur-md border-b border-espresso/10 py-4'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Dimare Design — Home">
            <Image
              src="/brand/dimare-logo-gold.png"
              alt="Dimare Design"
              width={160}
              height={160}
              priority
              className={`h-12 md:h-14 w-auto transition-opacity duration-500 ${
                !scrolled && isHeroPage ? 'brightness-110' : ''
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-widest uppercase font-light transition-colors duration-300 relative group ${
                  pathname === link.href
                    ? 'text-gold'
                    : !scrolled && isHeroPage
                      ? 'text-cream/70 hover:text-cream'
                      : 'text-espresso/50 hover:text-espresso'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <Link
              href="/iletisim"
              className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[10px] tracking-widest uppercase border transition-all duration-500 ${
                !scrolled && isHeroPage
                  ? 'border-cream/40 text-cream hover:bg-cream/10'
                  : 'border-gold/40 text-gold hover:bg-gold hover:text-cream-light'
              }`}
            >
              Start a Project
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-1"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-px origin-center ${!scrolled && isHeroPage ? 'bg-cream-light' : 'bg-espresso'}`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block w-4 h-px ${!scrolled && isHeroPage ? 'bg-cream-light' : 'bg-espresso'}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-px origin-center ${!scrolled && isHeroPage ? 'bg-cream-light' : 'bg-espresso'}`}
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
            className="fixed inset-0 z-40 bg-linen flex flex-col justify-center px-10"
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
                    className={`font-serif text-4xl font-light tracking-wide transition-colors duration-300 ${
                      pathname === link.href ? 'text-gold' : 'text-espresso/60 hover:text-espresso'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-16">
              <Link href="/iletisim" className="btn-outline text-[10px]">Start a Project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
