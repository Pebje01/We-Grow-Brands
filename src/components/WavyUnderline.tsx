'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type WavyUnderlineProps = {
  color?: string
  strokeWidth?: number
  className?: string
}

export default function WavyUnderline({
  color = '#EAD7FF',
  strokeWidth = 6,
  className = '',
}: WavyUnderlineProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useGSAP(() => {
    const path = pathRef.current
    if (!path) return

    const pathLength = path.getTotalLength()

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: containerRef })

  return (
    <span ref={containerRef} className={`absolute -bottom-6 left-0 w-full h-6 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 200 24"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0 14
             Q 25 4, 50 12
             Q 75 22, 100 12
             Q 125 2, 150 12
             Q 175 22, 200 10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  )
}
