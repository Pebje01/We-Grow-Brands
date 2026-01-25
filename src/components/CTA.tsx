'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import WavyText from '@/components/WavyText'

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useGSAP(() => {
    const path = pathRef.current
    if (!path) return

    // Get the total length of the path
    const pathLength = path.getTotalLength()

    // Set initial state - path is hidden
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })

    // Animate on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 text-center rounded-[20px] md:rounded-[30px] overflow-hidden bg-cream">

      {/* Decoratieve golvende lila lijn - tekent on-scroll van linksonder naar rechtsboven */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M-50 900
             Q 150 700, 300 550
             Q 450 400, 600 500
             Q 750 600, 900 450
             Q 1050 300, 1200 200"
          stroke="#D6BCFF"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
          opacity="1"
        />
      </svg>

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <h2 className="text-text-dark mb-6">
          <span className="font-serif">Klaar om je merk</span>{' '}
          <span className="serif-header italic text-green-dark">te laten groeien?</span>
        </h2>
        <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8 lg:mb-10">
          Laten we samen een website bouwen waar je trots op bent.
        </p>

        <div className="flex justify-center mb-6 md:mb-8">
          <Link
            href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-spring btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all px-6 py-3 rounded-full font-medium"
          >
            <WavyText text="Plan een gesprek" />
          </Link>
        </div>

        <p className="text-text-muted text-sm">
          Liever eerst appen?{' '}
          <Link
            href="https://wa.me/31636162639"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center relative top-[3px] text-[#25D366] hover:text-[#1FAF57] transition-colors"
          >
            <span className="sr-only">WhatsApp</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="block h-5 w-5 fill-current"
            >
              <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  )
}
