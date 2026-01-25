'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WavyText from '@/components/WavyText'
import Breadcrumbs from '@/components/Breadcrumbs'

function HeroVariant({ color, label }: { color: string, label: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const layers = container.querySelectorAll('[data-parallax]')

    const handleMouseMove = (e: MouseEvent) => {
      // Relative mouse position within this specific hero section
      const rect = container.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) / rect.width
      const mouseY = (e.clientY - rect.top) / rect.height

      layers.forEach((layer) => {
        const speed = Number((layer as HTMLElement).dataset.parallax) || 1
        const x = (mouseX - 0.5) * speed * 50
        const y = (mouseY - 0.5) * speed * 50
        ;(layer as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
    }
    
    // Only listen when hovering this specific hero
    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full">
      <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-lg z-50 font-bold shadow-lg">
        {label}
      </div>
      <section 
        className={`min-h-screen md:min-h-screen lg:min-h-[110vh] xl:min-h-[115vh] ${color} relative overflow-hidden flex flex-col pt-8 pb-24 rounded-b-[30px]`}
        ref={containerRef}
      >
        {/* Device Mockups */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Laptop Mockup */}
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
                src="/header-screenshot-laptop.webp"
                alt="Website preview"
                fill
                sizes="(min-width: 1024px) 520px, 65vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* iPhone Mockup 1 */}
          <div
            data-parallax="2"
            className="hidden lg:block absolute right-[8%] lg:right-[12%] top-[32%] lg:top-[28%] w-[140px] lg:w-[180px] 2xl:w-[220px] aspect-[9/19] rounded-[36px] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-transform duration-150 ease-out z-10"
          >
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#333]"></div>
            {/* Screen content */}
            <div className="absolute top-5 left-2 right-2 bottom-2 rounded-[26px] bg-black overflow-hidden">
              <Image
                src="/iphone-screenshot.webp"
                alt="Mobile website preview"
                fill
                sizes="(min-width: 1024px) 150px, 25vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* iPhone Mockup 2 */}
          <div
            data-parallax="1.5"
            className="hidden lg:block absolute right-[18%] lg:right-[22%] top-[38%] lg:top-[32%] w-[120px] lg:w-[160px] 2xl:w-[200px] aspect-[9/19] rounded-[36px] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-transform duration-150 ease-out -rotate-6"
          >
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#333]"></div>
            {/* Screen content */}
            <div className="absolute top-5 left-2 right-2 bottom-2 rounded-[26px] bg-black overflow-hidden">
              <Image
                src="/header-screenshot-laptop.webp"
                alt="Mobile website preview 2"
                fill
                sizes="(min-width: 1024px) 130px, 22vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-start pt-44 relative z-10">
          <Breadcrumbs variant="dark" className="mb-6" />
          <div className="px-8 flex flex-col items-center">
            <h1 className="text-white text-center mb-6">
              Meer dan websites.
              <br />
              Wij bouwen merken.
            </h1>
            <p className="font-sans text-white leading-relaxed text-center max-w-xl mb-10">
              Nooit meer onzeker over je website. Wij helpen je richting aanbrengen in je merk en website, zodat je website past bij de ambities van je bedrijf.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-green-dark hover:shadow-xl transition-all"
              >
                <WavyText text="Plan gesprek" />
              </Link>
              <Link
                href="#"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all"
              >
                <WavyText text="Bekijk ons werk" />
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Liever eerst appen?{' '}
              <Link
                href="#"
                className="inline-flex items-center relative top-[3px] text-[#25D366] hover:text-[#1FAF57] transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-5 w-5 fill-current">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ColorCompare() {
  return (
    <div className="flex flex-col gap-0">
      <HeroVariant color="bg-green-dark" label="Oude kleur (#03483A)" />
      <HeroVariant color="bg-[#02362B]" label="Nieuwe kleur (#02362B)" />
    </div>
  )
}