'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import WavyText from '@/components/WavyText'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const layers = containerRef.current.querySelectorAll('[data-parallax]')
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      layers.forEach((layer) => {
        const speed = Number((layer as HTMLElement).dataset.parallax) || 1
        const x = (mouseX - 0.5) * speed * 18
        const y = (mouseY - 0.5) * speed * 18
        ;(layer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
 <section className="min-h-screen bg-green-dark relative overflow-hidden flex flex-col pt-6 rounded-b-[30px]">       {/* Floating Icons */}
 <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">  <div className="absolute inset-0">           <div
            data-parallax="1.2"
 className="absolute left-[6%] bottom-[2%] w-[520px] max-w-[70vw] aspect-[5/3] rounded-[28px] bg-cream border-2 border-cream/80 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"           >
 <div className="absolute top-3 left-4 flex gap-2">  <span className="w-3 h-3 rounded-full bg-red-400"></span>  <span className="w-3 h-3 rounded-full bg-yellow-300"></span>  <span className="w-3 h-3 rounded-full bg-green-400"></span>             </div>
 <div className="absolute top-10 left-6 right-6 h-8 rounded-full bg-white/80 border border-black/10"></div>  <div className="absolute top-24 left-6 right-6 bottom-6 rounded-2xl bg-black/90 border border-black/10 overflow-hidden">  <div className="absolute top-5 left-5 right-5 h-10 rounded-xl bg-white/10"></div>  <div className="absolute top-20 left-5 w-1/2 h-6 rounded-lg bg-white/10"></div>  <div className="absolute top-30 left-5 w-3/4 h-6 rounded-lg bg-white/10"></div>  <div className="absolute bottom-6 left-5 w-2/3 h-10 rounded-xl bg-white/10"></div>             </div>
          </div>

          <div
            data-parallax="2"
 className="absolute right-[10%] top-[28%] w-[200px] max-w-[42vw] aspect-[9/19] rounded-[34px] bg-cream border-2 border-cream/80 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"           >
 <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-black/10"></div>  <div className="absolute top-8 left-3 right-3 bottom-3 rounded-[28px] bg-black/90 border border-black/10 overflow-hidden">  <div className="absolute top-4 left-4 right-4 h-8 rounded-xl bg-white/10"></div>  <div className="absolute top-16 left-4 w-2/3 h-5 rounded-lg bg-white/10"></div>  <div className="absolute top-24 left-4 w-3/4 h-5 rounded-lg bg-white/10"></div>  <div className="absolute top-32 left-4 right-4 h-20 rounded-2xl bg-white/10"></div>  <div className="absolute bottom-6 left-4 right-4 h-10 rounded-xl bg-white/10"></div>             </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
 <div className="flex-1 flex flex-col items-center justify-center pt-20 px-8 relative z-10">         {/* Platform Pills */}
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

 <h1 className="text-white leading-tight text-center max-w-3xl mb-6">  <span className="font-serif ">Meer dan websites.</span>           <br />
 <span className="serif-header">Wij bouwen merken.</span>         </h1>

 <p className="text-white/70 text-center max-w-lg leading-relaxed mb-8">           Professionele websites die uw merk versterken en converteren. Nu ook bereikbaar voor ambitieuze ondernemers dankzij flexibele betalingsmogelijkheden.
        </p>

        <Link
          href="#diensten"
 className="btn-spring btn-uniform link-wave bg-white text-green-dark hover:bg-lila hover:text-green-dark hover:shadow-xl transition-all"         >
          <WavyText text="Bekijk ons werk" />
        </Link>
      </div>

      {/* Bottom Accent */}
 <div className="h-2 bg-green-accent w-full"></div>     </section>
  )
}
