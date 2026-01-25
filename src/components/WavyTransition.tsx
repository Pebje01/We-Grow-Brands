'use client'

import { useEffect, useRef } from 'react'

export default function WavyTransition() {
  const pathRef = useRef<SVGPathElement>(null)
  const glowRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    const glow = glowRef.current
    if (!path || !glow) return

    // Get the total length of the path for the dash animation
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    glow.style.strokeDasharray = `${length}`
    glow.style.strokeDashoffset = `${length}`

    const handleScroll = () => {
      const rect = path.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the element is visible
      const elementTop = rect.top
      const elementHeight = rect.height

      // Start animation when element enters viewport, complete when it's centered
      const start = windowHeight
      const end = windowHeight * 0.3

      if (elementTop < start && elementTop > -elementHeight) {
        const progress = Math.min(1, Math.max(0, (start - elementTop) / (start - end)))
        const offset = length * (1 - progress)
        path.style.strokeDashoffset = `${offset}`
        glow.style.strokeDashoffset = `${offset}`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Vloeiende curve naar rechts buigend (zoals de roze lijn in je tekening)
  const curvePath = "M200 10 C 280 30, 350 80, 320 150 C 290 220, 350 280, 280 330"

  return (
    <div className="bg-cream py-12 px-8 -mt-1">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tekst bovenaan */}
        <p className="text-green-dark text-2xl md:text-3xl font-serif mb-4">
          Dat is nergens voor nodig!
        </p>

        {/* Geanimeerde slingerende lijn */}
        <div className="relative h-[280px] md:h-[350px] w-full overflow-visible">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 340"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Lila glow effect - animeert mee */}
            <path
              ref={glowRef}
              d={curvePath}
              stroke="#EAD7FF"
              strokeWidth="24"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
              className="transition-all duration-100"
              style={{ filter: 'blur(8px)' }}
            />
            {/* Hoofdlijn - dikker en vloeiend */}
            <path
              ref={pathRef}
              d={curvePath}
              stroke="#03483A"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-100"
            />
            {/* Pijlpunt onderaan - bij eindpunt van de curve */}
            <polygon
              points="265,360 280,330 295,360"
              fill="#03483A"
              className="animate-bounce"
              style={{ animationDuration: '2s' }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
