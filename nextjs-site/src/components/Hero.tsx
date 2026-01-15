'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const icons = ['🎨', '📱', '💬', '📊', '🔧', '📧', '🛒', '📝', '⚡', '🔍', '💻', '🎯', '📈', '🌐', '💎', '🚀', '✨', '🔗', '📌', '🏆']

const iconPositions = [
  { left: '8%', top: '25%', bg: 'linear-gradient(135deg, #00D4AA, #00B894)' },
  { left: '12%', top: '35%', bg: '#7B68EE' },
  { left: '14%', top: '45%', bg: '#FFE135' },
  { left: '18%', top: '52%', bg: '#4ECDC4' },
  { left: '22%', top: '58%', bg: '#FF6B6B' },
  { left: '27%', top: '62%', bg: '#45B7D1' },
  { left: '32%', top: '65%', bg: '#F39C12' },
  { left: '37%', top: '66%', bg: '#9B59B6' },
  { left: '42%', top: '65%', bg: '#FFFFFF' },
  { left: '47%', top: '62%', bg: '#1DA1F2' },
  { left: '55%', top: '58%', bg: '#FF4757' },
  { left: '60%', top: '52%', bg: '#2ED573' },
  { left: '65%', top: '44%', bg: '#5352ED' },
  { left: '69%', top: '36%', bg: '#FF6348' },
  { left: '72%', top: '28%', bg: '#00D9FF' },
  { left: '76%', top: '22%', bg: '#EAD7FF' },
  { left: '80%', top: '18%', bg: '#26DE81' },
  { left: '85%', top: '20%', bg: '#4834D4' },
  { left: '88%', top: '26%', bg: '#EB3B5A' },
  { left: '90%', top: '34%', bg: '#20BF6B' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const icons = containerRef.current.querySelectorAll('.floating-icon')
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight

      icons.forEach((icon, index) => {
        const speed = ((index % 5) + 1) * 0.3
        const x = (mouseX - 0.5) * speed * 30
        const y = (mouseY - 0.5) * speed * 30
        ;(icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen bg-green-dark relative overflow-hidden flex flex-col">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-green-accent"></div>

      {/* Floating Icons */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[200%] h-full left-[-50%] top-[10%]">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="floating-icon absolute w-[52px] h-[52px] rounded-xl flex items-center justify-center text-2xl shadow-lg cursor-pointer pointer-events-auto hover:scale-110 hover:rotate-[5deg] transition-transform"
              style={{
                left: iconPositions[index].left,
                top: iconPositions[index].top,
                background: iconPositions[index].bg,
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center pt-32 px-8 relative z-10">
        {/* Platform Pills */}
        <div className="flex gap-2 mb-8">
          <span className="bg-white text-text-dark px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            WordPress
          </span>
          <span className="bg-white text-text-dark px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Webflow
          </span>
          <span className="bg-white text-text-dark px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>
            Custom Code
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal italic leading-tight text-center max-w-3xl mb-6">
          High-end websites voor mooie merken
        </h1>

        <p className="text-white/70 text-center max-w-lg leading-relaxed mb-8">
          Professionele websites die uw merk versterken en converteren. Nu ook bereikbaar voor ambitieuze ondernemers dankzij flexibele betalingsmogelijkheden.
        </p>

        <Link
          href="#diensten"
          className="bg-white text-green-dark px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          Bekijk ons werk
        </Link>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-green-accent w-full"></div>
    </section>
  )
}
