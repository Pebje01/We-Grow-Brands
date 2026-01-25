'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import WavyText from '@/components/WavyText'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/websites', label: 'Website laten maken' },
  { href: '/pakketten', label: 'Pakketten' },
  { href: '/portfolio', label: 'Cases' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[85%] lg:w-[80%] max-w-6xl 2xl:max-w-[1600px] h-[72px] px-5 md:px-6 lg:px-8 flex items-center bg-green-dark/95 backdrop-blur-md border border-white/15 rounded-[30px] shadow-lg transition-all duration-300">
      {/* Logo - Left */}
      <Link href="/" className="flex items-center gap-3 text-white text-lg flex-shrink-0">
        <Image
          src="/logo/wegrowbrandslogo.webp"
          alt="We Grow Brands"
          width={360}
          height={120}
          className="h-[60px] md:h-[70px] lg:h-[82px] w-auto"
          priority
        />
      </Link>

      {/* Menu Items - Center */}
      <ul className="hidden xl:flex gap-1 2xl:gap-2 absolute left-1/2 -translate-x-1/2 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 border-2 ${
                isActive(link.href)
                  ? 'border-white/80 text-white font-medium'
                  : 'border-transparent text-white/70 hover:text-white hover:border-white/40'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA + Mobile Toggle - Right */}
      <div className="flex items-center gap-4 ml-auto">
        <Link
          href="/contact"
          className="hidden xl:inline-flex btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-[#02362B] hover:shadow-lg transition-all"
        >
          <WavyText text="→ Vraag website aan" />
        </Link>
        <button
          type="button"
          className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/90 hover:text-lila transition-colors"
          aria-label="Menu openen"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full pt-3">
          <div className="bg-white rounded-2xl shadow-2xl p-5 text-green-dark">
            <nav className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl font-medium transition-all border-2 ${
                    isActive(link.href)
                      ? 'border-green-dark text-green-dark'
                      : 'border-transparent text-green-dark/70 hover:text-green-dark hover:border-green-dark/40'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}
