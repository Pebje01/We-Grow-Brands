'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
 <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${       scrolled ? 'bg-green-dark/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
 <Link href="/" className="flex items-center gap-3 text-white text-lg">
        <Image
          src="/logo/wegrowbrandslogo.png"
          alt="We Grow Brands"
          width={550}
          height={160}
          className="h-32 w-auto"
          priority
        />
      </Link>

 <ul className="hidden md:flex gap-10">  <li><Link href="#diensten" className="text-white/80 hover:text-lila transition-colors text-sm">Diensten</Link></li>  <li><Link href="#features" className="text-white/80 hover:text-lila transition-colors text-sm">Voordelen</Link></li>  <li><Link href="#reviews" className="text-white/80 hover:text-lila transition-colors text-sm">Reviews</Link></li>  <li><Link href="#contact" className="text-white/80 hover:text-lila transition-colors text-sm">Contact</Link></li>       </ul>

 <div className="flex items-center gap-6">         <Link
          href="#contact"
 className="btn-spring bg-white text-green-dark px-5 py-2 rounded-lg text-sm hover:bg-lila hover:text-green-dark hover:shadow-lg transition-all"         >
          <span className="btn-text inline-block">Start Project →</span>
        </Link>
      </div>
    </nav>
  )
}
