'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WavyText from '@/components/WavyText'
import WavyTitle from '@/components/WavyTitle'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const layers = container.querySelectorAll('[data-parallax]')

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      layers.forEach((layer) => {
        const speed = Number((layer as HTMLElement).dataset.parallax) || 1
        const x = (mouseX - 0.5) * speed * 50
        const y = (mouseY - 0.5) * speed * 50
        ;(layer as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen md:min-h-screen lg:min-h-[110vh] xl:min-h-[115vh] bg-green-dark relative overflow-hidden flex flex-col pt-8 pb-24 rounded-b-[30px]">
      {/* Device Mockups */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {/* Laptop Mockup - Floating below text on mobile/tablet, parallax on desktop */}
        <div
          data-parallax="1.2"
          className="absolute left-1/2 animate-float-laptop lg:animate-none lg:-translate-x-0 lg:left-[10%] lg:translate-x-0 bottom-[3%] md:bottom-[12%] lg:bottom-auto lg:top-[48%] w-[280px] md:w-[420px] lg:w-[580px] 2xl:w-[720px] max-w-[75vw] md:max-w-[65vw] aspect-[5/3] rounded-[24px] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_30px_100px_rgba(0,0,0,0.6)] lg:transition-transform lg:duration-150 lg:ease-out"
        >
          {/* Browser dots */}
          <div className="absolute top-2.5 left-4 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
          {/* URL bar */}
          <div className="absolute top-8 left-4 right-4 h-6 rounded-full bg-[#333] border border-[#444]"></div>
          {/* Screen content */}
          <div className="absolute top-16 left-4 right-4 bottom-4 rounded-xl bg-black overflow-hidden">
            <Image
              src="/header-screenshot-laptop.jpeg"
              alt="Website preview"
              fill
              sizes="(min-width: 1024px) 520px, 65vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* iPhone Mockup 1 - Right side front - hidden on tablet and mobile */}
        <div
          data-parallax="2"
          className="hidden lg:block absolute right-[8%] lg:right-[12%] top-[32%] lg:top-[28%] w-[140px] lg:w-[180px] 2xl:w-[220px] aspect-[9/19] rounded-[36px] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-transform duration-150 ease-out z-10"
        >
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#333]"></div>
          {/* Screen content */}
          <div className="absolute top-5 left-2 right-2 bottom-2 rounded-[26px] bg-black overflow-hidden">
            <Image
              src="/iphone-screenshot.jpeg"
              alt="Mobile website preview"
              fill
              sizes="(min-width: 1024px) 150px, 25vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* iPhone Mockup 2 - Right side back - hidden on tablet and mobile */}
        <div
          data-parallax="1.5"
          className="hidden lg:block absolute right-[18%] lg:right-[22%] top-[38%] lg:top-[32%] w-[120px] lg:w-[160px] 2xl:w-[200px] aspect-[9/19] rounded-[36px] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-transform duration-150 ease-out -rotate-6"
        >
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#333]"></div>
          {/* Screen content */}
          <div className="absolute top-5 left-2 right-2 bottom-2 rounded-[26px] bg-black overflow-hidden">
            <Image
              src="/header-screenshot-laptop.jpeg"
              alt="Mobile website preview 2"
              fill
              sizes="(min-width: 1024px) 130px, 22vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-32 lg:pt-28 px-8 relative z-10">
        {/* Platform Pills */}
 <div className="flex gap-1.5 mb-4">
          <span className="bg-white text-text-dark px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Websites
          </span>
          <span className="bg-white text-text-dark px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Branding
          </span>
          <span className="bg-white text-text-dark px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>
            Webshops
          </span>
        </div>

        <h1 className="hero-title-wave text-[clamp(64px,8vw,104px)] 2xl:text-[120px] leading-[1.02] text-center max-w-5xl 2xl:max-w-6xl mb-6">
          <WavyTitle line1="Meer dan websites." line2="Wij bouwen merken." />
        </h1>

 <p className="text-white/70 text-center max-w-lg 2xl:max-w-xl 2xl:text-lg leading-relaxed mb-8">           Professionele websites die uw merk versterken en converteren. Nu ook bereikbaar voor ambitieuze ondernemers dankzij flexibele betalingsmogelijkheden.
        </p>

        <Link
          href="#diensten"
 className="btn-spring btn-uniform link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-green-dark hover:shadow-xl transition-all"         >
          <WavyText text="Bekijk ons werk" />
        </Link>
      </div>

    </section>
  )
}
