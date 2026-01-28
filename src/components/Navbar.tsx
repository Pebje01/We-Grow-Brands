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
      {/* Logo - Center */}
      <Link href="/" className="flex items-center gap-3 text-white text-lg flex-shrink-0 mx-auto">
        <Image
          src="/logo/wegrowbrandslogo.webp"
          alt="We Grow Brands"
          width={360}
          height={120}
          className="h-[60px] md:h-[70px] lg:h-[82px] w-auto"
          priority
        />
      </Link>
    </nav>
  )
}
