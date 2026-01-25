'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WavyText from '@/components/WavyText'

gsap.registerPlugin(ScrollTrigger)

const cases = [
  {
    name: 'MURTHEL GROENHART',
    label: 'Essentials website',
    quote: '"Een sportieve website die past bij kickboxlessen, groepstrainingen en personal training."',
    image: '/mock-ups/murthel-mockup.webp',
    slug: 'murthel-groenhart',
    bgColor: 'bg-green-dark',
    textLight: true,
  },
  {
    name: 'SYSTEMISCH VERBINDEN',
    label: 'Grow website',
    quote: '"Ik ben heel blij met mijn website dit is echt helemaal passend!"',
    image: '/mock-ups/systemisch-verbinden-mockup-laptop.webp',
    slug: 'systemisch-verbinden',
    bgColor: 'bg-[#7DB8C6]',
  },
  {
    name: 'BLEIJENBERG',
    label: 'Premium webshop',
    quote: '"Eindelijk een website die echt past bij de kwaliteit en uitstraling die we voor ogen hadden."',
    image: '/mock-ups/bleijenberg-mockup-laptop.webp',
    slug: 'bleijenberg',
    bgColor: 'bg-[#F5F0EB]',
  },
  {
    name: 'MEET THE LOCALS',
    label: 'Premium blog',
    quote: '"Een website met een avontuurlijke uitstraling voor een reisblog."',
    image: '/mock-ups/Meetthelocals-mockup-top.webp',
    slug: 'meet-the-locals',
    bgColor: 'bg-[#2D5A42]',
    textLight: true,
  },
]

export default function CasesSlider() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const wavyRef = useRef<HTMLSpanElement>(null)
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false])
  const [isDesktop, setIsDesktop] = useState(false)

  // Check if we're on desktop (hover-capable device)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const handleFlip = (index: number, isFlipped: boolean) => {
    if (!isDesktop) return // Don't flip on mobile/tablet
    setFlippedCards(prev => {
      const newState = [...prev]
      newState[index] = isFlipped
      return newState
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const isLeftSide = index % 2 === 0
        const startX = isLeftSide ? -window.innerWidth : window.innerWidth

        gsap.fromTo(
          card,
          {
            x: startX,
            opacity: 0,
            rotateY: isLeftSide ? 45 : -45,
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.4,
            ease: 'power4.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // Animate wavy underline on scroll
      if (wavyRef.current) {
        ScrollTrigger.create({
          trigger: wavyRef.current,
          start: 'top 80%',
          onEnter: () => wavyRef.current?.classList.add('animate'),
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const renderCard = (caseItem: typeof cases[0], index: number, refIndex: number) => {
    // On mobile/tablet: show back side (text content) directly, no flip
    // On desktop: show front side with flip on hover
    const showFlipped = isDesktop ? flippedCards[refIndex] : true

    return (
      <div
        key={caseItem.slug}
        ref={el => { cardsRef.current[refIndex] = el }}
        className={isDesktop ? "h-[400px] md:h-[450px]" : ""}
        style={{ perspective: isDesktop ? '1000px' : 'none' }}
        onMouseEnter={() => handleFlip(refIndex, true)}
        onMouseLeave={() => handleFlip(refIndex, false)}
      >
        <div
          className={`relative w-full h-full ${isDesktop ? 'transition-transform duration-700 ease-out' : ''}`}
          style={{
            transformStyle: isDesktop ? 'preserve-3d' : 'flat',
            transform: isDesktop && showFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front - Image with pill only (only visible on desktop) */}
          {isDesktop && (
            <div
              className="absolute inset-0 rounded-[24px] overflow-hidden border border-white/10"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <Image
                src={caseItem.image}
                alt={`Case ${caseItem.name}`}
                fill
                className="object-cover scale-110"
              />
              <span className="absolute top-6 left-6 inline-flex rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-dark bg-white/90 border border-black/10">
                {caseItem.name}
              </span>
            </div>
          )}

          {/* Mobile/tablet: split layout - image top, colored bottom */}
          {!isDesktop && (
            <div className="rounded-[16px] md:rounded-[20px] lg:rounded-[24px] border border-white/10 overflow-hidden flex flex-col">
              {/* Top: Image */}
              <div className="relative aspect-[16/10]">
                <Image
                  src={caseItem.image}
                  alt={`Case ${caseItem.name}`}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-dark bg-white/90 border border-black/10">
                  {caseItem.name}
                </span>
              </div>
              {/* Bottom: Colored background with text */}
              <div className={`${caseItem.bgColor} px-5 py-4`}>
                <p className={`text-xs uppercase tracking-wider mb-1 ${caseItem.textLight ? 'text-white/70' : 'text-text-muted/70'}`}>{caseItem.label}</p>
                <p className={`font-serif text-lg leading-tight mb-3 ${caseItem.textLight ? 'text-white' : 'text-text-dark'}`}>
                  {caseItem.quote}
                </p>
                <Link
                  href={`/portfolio/${caseItem.slug}`}
                  className={`btn-spring btn-uniform btn-no-lila link-wave ${caseItem.textLight ? 'bg-white text-green-dark' : 'bg-white text-text-dark'} border border-black/10 hover:bg-cream transition-all inline-block w-fit`}
                >
                  <WavyText text="Bekijk case" />
                </Link>
              </div>
            </div>
          )}

          {/* Desktop: Colored background with quote (flip side) */}
          {isDesktop && (
            <div
              className={`absolute inset-0 rounded-[24px] border border-white/10 ${caseItem.bgColor} px-6 pb-6 pt-6 md:px-8 md:pb-8 md:pt-6 lg:px-10 lg:pb-10 lg:pt-6 flex flex-col justify-between overflow-hidden`}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              {/* Pill top left */}
              <span className={`inline-flex w-fit rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider ${caseItem.textLight ? 'text-white bg-white/20 border-white/30' : 'text-text-dark bg-white/90 border-black/10'} border`}>
                {caseItem.name}
              </span>

              {/* Mock-up positioned top right */}
              <div className="absolute top-6 right-6 w-[45%] max-w-[280px] aspect-[16/10] rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src={caseItem.image}
                  alt={`Mini mockup ${caseItem.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider mb-2 ${caseItem.textLight ? 'text-white/70' : 'text-text-muted/70'}`}>{caseItem.label}</p>
                <p className={`font-serif text-2xl md:text-3xl leading-tight mb-4 md:mb-6 ${caseItem.textLight ? 'text-white' : 'text-text-dark'}`}>
                  {caseItem.quote}
                </p>
                <Link
                  href={`/portfolio/${caseItem.slug}`}
                  className={`btn-spring btn-uniform btn-no-lila link-wave ${caseItem.textLight ? 'bg-white text-green-dark' : 'bg-white text-text-dark'} border border-black/10 hover:bg-cream transition-all inline-block`}
                >
                  <WavyText text="Bekijk case" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="bg-[#1a1a1a] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] py-10 md:py-12 lg:py-16 px-4 md:px-6 lg:px-12 overflow-hidden mb-6 md:mb-0 relative" style={{ perspective: '2000px' }}>
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-white" style={{ lineHeight: 0.95 }}>
            <span className="font-serif">Een aantal</span>
            <br />
            <span ref={wavyRef} className="relative inline-block serif-header italic text-cream wavy-underline">
              mooie projecten
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 4, 100 7 T 198 6"
                  stroke="#D6BCFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  className="wavy-path"
                />
              </svg>
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-base lg:text-lg max-w-md lg:text-right">
            Bekijk een selectie van de websites die we hebben gebouwd voor onze klanten.
          </p>
        </div>

        {/* Row 1: Cases 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {cases.slice(0, 2).map((caseItem, index) => renderCard(caseItem, index, index))}
        </div>

        {/* Row 2: Cases 3 & 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cases.slice(2, 4).map((caseItem, index) => renderCard(caseItem, index, index + 2))}
        </div>

        {/* Link to portfolio */}
        <div className="mt-6 md:mt-8 lg:mt-10 text-center">
          <Link
            href="/portfolio"
            className="text-[#EAD7FF] hover:text-lila transition-colors text-sm md:text-base inline-flex items-center gap-2 link-wave"
          >
            <WavyText text="Bekijk onze cases" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
