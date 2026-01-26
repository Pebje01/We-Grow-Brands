'use client'

import Link from 'next/link'
import WavyText from '@/components/WavyText'
import ScrollReveal from '@/components/ScrollReveal'

export default function Features() {
  return (
    <section id="features" className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        {/* Feature 1 - Website die je bedrijf uitstraalt */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 md:gap-12 lg:gap-16 items-center" animation="fade-up">
          <div>
            <h2 className="text-text-dark mb-5" style={{ lineHeight: 0.95 }}>
              <span className="font-serif">Custom design,</span>
              <br />
              <span className="serif-header italic text-green-dark">sterk merk</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Of je nu kiest voor <strong>Essentials</strong>, <strong>Groei</strong> of volledig custom:
              elk pakket levert dezelfde hoogwaardige design en kwaliteit. Het verschil zit in de
              omvang, niet in de uitstraling.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Welk pakket je ook kiest, je krijgt altijd een website die een verlengstuk is van je
              merk. Geen standaard gedoe. Geen website waar je alsnog van baalt. En mocht het toch
              niet genoeg zijn? Dan breid je gewoon uit met add-ons.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-text-muted">
                <span className="text-green-dark mt-1">✓</span>
                <span>Altijd premium design, ongeacht je pakket</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <span className="text-green-dark mt-1">✓</span>
                <span>Je website voelt als jouw bedrijf</span>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <span className="text-green-dark mt-1">✓</span>
                <span>Uitbreiden kan altijd, wanneer jij wilt</span>
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <Link href="#diensten" className="link-wave text-green-dark text-sm inline-flex items-center gap-2">
                <WavyText text="Bekijk de pakketten" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-green-dark rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 min-h-[400px] md:min-h-[480px] lg:min-h-[520px] flex flex-col justify-center relative overflow-hidden">
            {/* Grote pil rechtsboven - speels effect */}
            <Link
              href="/pakketten#add-ons"
              className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 bg-cream text-green-dark px-5 py-1 md:px-6 md:py-1.5 rounded-2xl text-sm md:text-base lg:text-lg font-serif border-2 border-green-dark/20 shadow-md hover:bg-lila transition-colors cursor-pointer"
              style={{ transform: 'rotate(3deg)' }}
            >
              Add-ons & diensten
            </Link>

            <h3 className="text-white mb-3 mt-12 md:mt-14 lg:mt-16">
              <span className="font-serif text-lila">Meer nodig?</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-8 md:mb-10">
              Naast je website kun je bij ons terecht voor alles wat je merk nodig heeft.
              Van extra functionaliteit tot complete merkidentiteit.
            </p>

            {/* Add-ons - lila pills with slight rotation */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-3deg)' }}>Extra pagina&apos;s</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(2deg)' }}>Complexe formulieren</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-1deg)' }}>Reviews/klantverhalen</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(3deg)' }}>Blog</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-2deg)' }}>Webshop</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(1deg)' }}>AI-content</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-4deg)' }}>Logo ontwerp</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(2deg)' }}>Huisstijl</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-1deg)' }}>Brand fundament</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(3deg)' }}>Fotografie</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-2deg)' }}>SEO</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(1deg)' }}>Content</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-3deg)' }}>Leadgeneratie</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(2deg)' }}>AI & automatisering</span>
              <span className="bg-lila text-green-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-black/10" style={{ transform: 'rotate(-1deg)' }}>Meertalig</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
