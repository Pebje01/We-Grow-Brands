'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type WavyLineScrollProps = {
  className?: string
  viewBox?: string
  path: string
  strokeColor?: string
  strokeWidth?: number
  direction?: 'up' | 'down'
}

export default function WavyLineScroll({
  className = '',
  viewBox = '0 0 1200 800',
  path,
  strokeColor = '#EAD7FF',
  strokeWidth = 12,
  direction = 'down',
}: WavyLineScrollProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useGSAP(() => {
    const pathEl = pathRef.current
    if (!pathEl) return

    const pathLength = pathEl.getTotalLength()

    // Set initial state - path is hidden
    gsap.set(pathEl, {
      strokeDasharray: pathLength,
      strokeDashoffset: direction === 'down' ? -pathLength : pathLength,
    })

    // Animate on scroll with restart behavior
    ScrollTrigger.create({
      trigger: svgRef.current,
      start: 'top 80%',
      onEnter: () => {
        // Reset and animate when entering
        gsap.set(pathEl, {
          strokeDashoffset: direction === 'down' ? -pathLength : pathLength,
        })
        gsap.to(pathEl, {
          strokeDashoffset: 0,
          duration: 4,
          delay: 0.8,
          ease: 'power2.out',
        })
      },
      onEnterBack: () => {
        // Reset and animate when scrolling back up
        gsap.set(pathEl, {
          strokeDashoffset: direction === 'down' ? -pathLength : pathLength,
        })
        gsap.to(pathEl, {
          strokeDashoffset: 0,
          duration: 4,
          delay: 0.8,
          ease: 'power2.out',
        })
      },
      onLeave: () => {
        // Reset when leaving
        gsap.set(pathEl, {
          strokeDashoffset: direction === 'down' ? -pathLength : pathLength,
        })
      },
      onLeaveBack: () => {
        // Reset when leaving back up
        gsap.set(pathEl, {
          strokeDashoffset: direction === 'down' ? -pathLength : pathLength,
        })
      },
    })
  }, { scope: svgRef })

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox={viewBox}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        ref={pathRef}
        d={path}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        opacity="1"
      />
    </svg>
  )
}
