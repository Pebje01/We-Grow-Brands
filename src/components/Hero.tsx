'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import WavyText from '@/components/WavyText'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wavyUnderlineRef = useRef<SVGSVGElement>(null)
  const t = useTranslations('hero')

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

  // Wavy underline animation - triggers 2 seconds after load
  useEffect(() => {
    const wavySvg = wavyUnderlineRef.current
    if (!wavySvg) return

    const timer = setTimeout(() => {
      wavySvg.classList.add('animate')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-[auto] md:min-h-screen lg:min-h-[110vh] xl:min-h-[115vh] bg-[#02362B] relative overflow-hidden flex flex-col pt-8 pb-10 md:pb-20 lg:pb-24 rounded-b-[20px] md:rounded-b-[30px] mb-6 md:mb-0">
      {/* Device Mockups */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {/* Laptop Mockup - Hidden on mobile, visible on tablet and desktop */}
        <div
          data-parallax="1.2"
          className="hidden xl:block absolute left-[13vw] bottom-[2vw] w-[40vw] max-w-[1150px] aspect-[5/3] rounded-[1.6vw] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
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
              src="/mock-ups/montung-blog-mockup.webp"
              alt="Montung website preview"
              fill
              sizes="(min-width: 1024px) 700px, 65vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* iPhone Mockup 1 - Right side front - hidden on tablet and mobile */}
        <div
          data-parallax="2"
          className="hidden xl:block absolute left-[59vw] bottom-[-2vw] w-[13vw] max-w-[360px] aspect-[9/19] rounded-[2.4vw] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_25px_80px_rgba(0,0,0,0.3)] z-10"
        >
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#333]"></div>
          {/* Screen content */}
          <div className="absolute top-5 left-2 right-2 bottom-2 rounded-[26px] bg-black overflow-hidden">
            <Image
              src="/mock-ups/dokterrichard-mockup-mobiel.webp"
              alt="Dokter Richard mobiele website preview"
              fill
              sizes="(min-width: 1024px) 150px, 25vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* iPhone Mockup 2 - Right side back - hidden on tablet and mobile */}
        <div
          data-parallax="1.5"
          className="hidden xl:block absolute left-[75vw] bottom-[6vw] w-[11vw] max-w-[320px] aspect-[9/19] rounded-[2.4vw] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
        >
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#333]"></div>
          {/* Screen content */}
          <div className="absolute top-5 left-2 right-2 bottom-2 rounded-[26px] bg-black overflow-hidden">
            <Image
              src="/mock-ups/dokterrichard-mockup-mobiel.webp"
              alt="Dokter Richard mobiele website preview"
              fill
              sizes="(min-width: 1024px) 130px, 22vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-start pt-24 md:pt-28 lg:pt-36 3xl:pt-44 relative z-10">
        <div className="px-4 md:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-white text-center mb-6 4xl:mb-10">
            {t('title1')}
            <br />
            {t('title2')}{' '}
            <span className="relative inline-block serif-header italic">
              {t('titleHighlight')}
              {/* Wavy underline - animates on scroll */}
              <svg
                ref={wavyUnderlineRef}
                className="absolute -bottom-4 left-0 w-full h-4 wavy-underline"
                viewBox="0 0 100 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q 12.5 0, 25 6 T 50 6 T 75 6 T 100 6"
                  stroke="#EAD7FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  className="wavy-path"
                />
              </svg>
            </span>
          </h1>
          <p className="font-sans text-white leading-relaxed text-center max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl mb-6 md:mb-8 lg:mb-10 4xl:mb-14 text-base 4xl:text-xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3">
            <Link
              href={"https://calendar.app.google/DbuJ9656ZDLm6b1d7" as any}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spring btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-[#02362B] hover:shadow-xl transition-all whitespace-nowrap shrink-0 px-4 py-2 text-sm rounded-[15px] border border-black"
            >
              <WavyText text={t('ctaPlan')} />
            </Link>
            <Link
              href="/portfolio"
              className="btn-spring btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all whitespace-nowrap shrink-0 px-4 py-2 text-sm rounded-[15px] border border-black"
            >
              <WavyText text={t('ctaWork')} />
            </Link>
          </div>

          {/* Mobile Mockup - Systemisch Verbinden - Only visible on mobile */}
          <div className="xl:hidden mt-10 md:mt-12 w-[90vw] max-w-[500px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <Image
              src="/mock-ups/systemisch-verbinden-mockup-laptop.webp"
              alt="Systemisch Verbinden website mockup"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  )
}
