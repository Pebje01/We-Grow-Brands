'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${
      scrolled ? 'bg-green-dark/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <Link href="/" className="flex items-center gap-2 text-white font-semibold text-lg">
        <div className="flex items-center gap-0.5">
          <span className="w-1 h-3 bg-white rounded-sm"></span>
          <span className="w-1 h-5 bg-white rounded-sm"></span>
          <span className="w-1 h-4 bg-white rounded-sm"></span>
          <span className="w-1 h-6 bg-white rounded-sm"></span>
        </div>
        We Grow Brands
      </Link>

      <ul className="hidden md:flex gap-10">
        <li><Link href="#diensten" className="text-white/80 hover:text-white transition-colors text-sm">Diensten</Link></li>
        <li><Link href="#features" className="text-white/80 hover:text-white transition-colors text-sm">Voordelen</Link></li>
        <li><Link href="#reviews" className="text-white/80 hover:text-white transition-colors text-sm">Reviews</Link></li>
        <li><Link href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-6">
        <Link
          href="#contact"
          className="bg-white text-green-dark px-5 py-2 rounded-lg font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all"
        >
          Start Project →
        </Link>
      </div>
    </nav>
  )
}
