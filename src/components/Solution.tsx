'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import WavyText from '@/components/WavyText'

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let timeout: NodeJS.Timeout

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Wait 1 second before starting animation
            timeout = setTimeout(() => {
              setIsVisible(true)
            }, 1000)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[550px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[750px] 2xl:min-h-[800px] rounded-[20px] md:rounded-[30px] overflow-hidden bg-[#1a1a1a] mb-6 md:mb-0">

      {/* Decoratieve golvende lila lijn - Desktop */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-100 620
             Q 0 560, 100 520
             Q 200 480, 300 420
             Q 400 360, 350 300
             Q 300 240, 400 200
             Q 500 160, 450 100
             Q 400 40, 500 0
             Q 600 -40, 550 -80
             Q 650 -60, 750 -100
             Q 850 -140, 950 -80
             Q 1050 -20, 1150 -60
             Q 1250 -100, 1350 -40"
          stroke="#EAD7FF"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          opacity="1"
          className={isVisible ? 'animate-wavy-line' : 'wavy-line-paused'}
        />
      </svg>

      {/* Decoratieve golvende lila lijn - Mobile */}
      <svg
        className="lg:hidden absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-30 530
             C 0 480, 40 520, 70 470
             C 100 420, 140 460, 170 410
             C 200 360, 240 400, 270 350
             C 300 300, 340 340, 370 290
             C 400 240, 430 280, 450 230"
          stroke="#EAD7FF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="1"
          className={isVisible ? 'animate-wavy-line' : 'wavy-line-paused'}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[550px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[750px] 2xl:min-h-[800px] px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Illustratie */}
          <ScrollReveal className="order-2 lg:order-1" animation="fade-up">
            <Image
              src="/afbeeldingen/illustratie_nooitmeerbalen.webp"
              alt="Nooit meer balen van je website illustratie"
              width={500}
              height={400}
              className="w-full max-w-md mx-auto 2xl:-translate-x-16"
            />
          </ScrollReveal>

          {/* Tekst */}
          <ScrollReveal className="text-center lg:text-left order-1 lg:order-2" animation="fade-up">
            <h2 className="text-white mb-6" style={{ lineHeight: 0.95 }}>
              <span className="font-serif">Nooit meer balen</span>
              <br />
              <span className="serif-header italic text-lila">van je website</span>
            </h2>

            <p className="text-white/90 text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8 lg:mb-10">
              Je wilt gewoon ontzorgd worden. Geen gedoe, geen technische hoofdpijn, geen eindeloze facturen. Supermooie, supersnelle websites. Een professionele website waar je trots op kunt zijn en die je durft te delen met je potentiële doelgroep.
            </p>

            <div className="flex flex-row flex-nowrap gap-3 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-spring btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all whitespace-nowrap shrink-0 px-4 py-2 text-sm rounded-[15px] border border-black"
              >
                <WavyText text="Plan een gesprek" />
              </Link>
              <Link
                href="#diensten"
                className="btn-spring link-wave bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all whitespace-nowrap shrink-0 px-4 py-2 text-sm rounded-[15px] border"
              >
                <WavyText text="Bekijk pakketten" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
