'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollLine() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 5000 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Delay to ensure page is fully rendered
    const timeout = setTimeout(updateDimensions, 500)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    const pathEl = pathRef.current
    if (!pathEl) return

    const pathLength = pathEl.getTotalLength()

    // Set initial state - path is hidden
    gsap.set(pathEl, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })

    // Animate based on scroll position (scrub)
    const tl = gsap.to(pathEl, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [dimensions])

  const { width, height } = dimensions

  // Bereken het aantal secties (ongeveer 1 sectie per viewport hoogte)
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
  const numSections = Math.ceil(height / viewportHeight)

  // Maak een vloeiende golvende lijn die van links naar rechts en terug gaat
  // Elke "golf" is ongeveer één viewport hoog
  const generatePath = () => {
    const points: string[] = []
    const leftX = width * 0.1  // 10% van links
    const rightX = width * 0.9 // 90% van links (dus rechts)
    const centerX = width * 0.5

    // Start helemaal bovenaan in het midden
    points.push(`M ${centerX} 0`)

    for (let i = 0; i < numSections; i++) {
      const sectionTop = i * viewportHeight
      const sectionBottom = (i + 1) * viewportHeight
      const sectionMid = sectionTop + viewportHeight * 0.5

      // Afwisselend links en rechts
      const goRight = i % 2 === 0

      if (i === 0) {
        // Eerste sectie: van center naar rechts of links
        const targetX = goRight ? rightX : leftX
        const controlX = goRight ? rightX + width * 0.1 : leftX - width * 0.1
        points.push(`Q ${controlX} ${sectionMid}, ${targetX} ${sectionBottom}`)
      } else {
        // Volgende secties: van de vorige kant naar de andere kant
        const startX = goRight ? leftX : rightX
        const targetX = goRight ? rightX : leftX
        const controlX1 = goRight ? leftX - width * 0.1 : rightX + width * 0.1
        const controlX2 = goRight ? rightX + width * 0.1 : leftX - width * 0.1

        // Cubic bezier voor vloeiendere curve
        points.push(`C ${controlX1} ${sectionTop + viewportHeight * 0.25}, ${controlX2} ${sectionTop + viewportHeight * 0.75}, ${targetX} ${sectionBottom}`)
      }
    }

    return points.join(' ')
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <svg
        className="absolute top-0 left-0"
        style={{ width: '100%', height: height }}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        <defs>
          {/* Gradient met wisselende kleuren per sectie */}
          <linearGradient id="scrollLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {Array.from({ length: numSections }).map((_, i) => {
              const offset1 = (i / numSections) * 100
              const offset2 = ((i + 0.5) / numSections) * 100
              const color = i % 2 === 0 ? '#EAD7FF' : '#03483A'
              return [
                <stop key={`${i}-1`} offset={`${offset1}%`} stopColor={color} />,
                <stop key={`${i}-2`} offset={`${offset2}%`} stopColor={color} />,
              ]
            })}
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={generatePath()}
          stroke="url(#scrollLineGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}
