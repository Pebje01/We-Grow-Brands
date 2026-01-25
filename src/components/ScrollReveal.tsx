'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type ScrollRevealProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'pull-in'
    delay?: number
    duration?: number
    stagger?: number
    triggerStart?: string
  }
>

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  stagger = 0,
  triggerStart = 'top 85%',
  ...rest
}: ScrollRevealProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const element = container.current
    if (!element) return

    const fromVars: gsap.TweenVars = { opacity: 0 }
    let toVars: gsap.TweenVars = { 
      opacity: 1, 
      duration, 
      delay, 
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        toggleActions: 'play none none reverse'
      }
    }

    switch (animation) {
      case 'fade-up':
        fromVars.y = 60
        toVars.y = 0
        break
      case 'slide-left':
        fromVars.x = -60
        toVars.x = 0
        break
      case 'slide-right':
        fromVars.x = 100
        toVars.x = 0
        break
      case 'scale-up':
        fromVars.scale = 0.9
        toVars.scale = 1
        break
      case 'pull-in':
        fromVars.x = (index, _target, targets) => {
          const total = Array.isArray(targets) ? targets.length : 1
          if (total < 2) return 0
          const middle = (total - 1) / 2
          const offset = 80
          if (index < middle) return -offset
          if (index > middle) return offset
          return 0
        }
        fromVars.scale = (index, _target, targets) => {
          const total = Array.isArray(targets) ? targets.length : 1
          const middle = Math.floor((total - 1) / 2)
          return index === middle ? 0.96 : 1
        }
        toVars.x = 0
        toVars.scale = 1
        break
      default:
        // fade-in
        break
    }

    const animateChildren = (stagger > 0 || animation === 'pull-in') && element.children.length > 0

    if (animateChildren) {
      // Animate children
      // We remove scrollTrigger from toVars because we want one trigger for the batch or individual?
      // Usually trigger on the container
      
      gsap.fromTo(
        element.children,
        fromVars,
        {
          ...toVars,
          stagger,
          // If we want the container to trigger the whole sequence:
          scrollTrigger: {
            trigger: element,
            start: triggerStart,
            toggleActions: 'play none none reverse'
          }
        }
      )
    } else {
      // Animate self
      gsap.fromTo(element, fromVars, toVars)
    }
  }, { scope: container })

  return (
    <div ref={container} className={className} {...rest}>
      {children}
    </div>
  )
}
