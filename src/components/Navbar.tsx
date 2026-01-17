'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WavyText from '@/components/WavyText'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
 <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-2 flex justify-between items-center bg-green-dark/95 backdrop-blur-md transition-all duration-300">
 <Link href="/" className="flex items-center gap-3 text-white text-lg">
        <Image
          src="/logo/wegrowbrandslogo.png"
          alt="We Grow Brands"
          width={420}
          height={120}
          className="h-20 w-auto"
          priority
        />
      </Link>

      <ul className="hidden md:flex gap-10">
        <li><Link href="/" className="text-white/80 hover:text-lila transition-colors text-sm">Home</Link></li>
        <li><Link href="#diensten" className="text-white/80 hover:text-lila transition-colors text-sm">Website laten maken</Link></li>
        <li><Link href="#branding" className="text-white/80 hover:text-lila transition-colors text-sm">Branding</Link></li>
        <li><Link href="/contact" className="text-white/80 hover:text-lila transition-colors text-sm">Contact</Link></li>
      </ul>

      <div className="hidden md:flex items-center gap-6">
        <Link href="/faq" className="text-white/80 hover:text-lila transition-colors text-sm">FAQ</Link>
      </div>

 <div className="flex items-center gap-6">         <Link
          href="/contact"
 className="btn-spring btn-uniform link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-green-dark hover:shadow-lg transition-all"         >
          <WavyText text="→ Vraag website aan" />
        </Link>
      </div>
    </nav>
  )
}
