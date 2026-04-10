import Link from 'next/link'

const footerLinks = [
  { href: '/projeler', label: 'Projeler' },
  { href: '/urunler', label: 'Ürünler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

const socialLinks = [
  { href: 'https://www.instagram.com/dimaredesign', label: 'Instagram' },
  { href: 'https://www.pinterest.com/dimaredesign', label: 'Pinterest' },
  { href: 'https://www.etsy.com/shop/dimaredesign', label: 'Etsy' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-obsidian">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-light tracking-[0.15em] text-cream-light">DIMARE</span>
              <br />
              <span className="text-[9px] tracking-widest3 text-gold/60 uppercase">Design Studio</span>
            </Link>
            <p className="text-cream/40 text-xs leading-relaxed font-light max-w-xs">
              Lüks oteller ve tatil köyleri için el yapımı bohemian dekor. Her parça, mekânınıza anlam katan bir sanat eseridir.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-6">Keşfet</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-cream/40 hover:text-gold transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gold/60 mb-6">Bağlantı</p>
            <nav className="flex flex-col gap-3 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cream/40 hover:text-gold transition-colors duration-300 font-light flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-gold/30 group-hover:w-5 group-hover:bg-gold transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-300"
            >
              Proje Başlat
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M1 4h12M9 1l4 3-4 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-cream/20 tracking-wide">
            © {new Date().getFullYear()} Dimare Design. Tüm hakları saklıdır.
          </p>
          <p className="text-[10px] text-cream/20 tracking-wide">
            Handcrafted with passion · Turkey
          </p>
        </div>
      </div>
    </footer>
  )
}
