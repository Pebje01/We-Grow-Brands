'use client'

import Link from 'next/link'
import WavyText from '@/components/WavyText'

export default function Features() {
  return (
    <section id="features" className="bg-[#1a1a1a] py-20 px-8 rounded-[30px]">
      <div className="max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-white leading-tight mb-5">
              <span className="font-serif">Strategische websites</span>{' '}
              <span className="serif-header text-lila">voor merkversterking</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Elk project begint met diepgaande strategie. We analyseren uw doelgroep, concurrentie en ambities om een website te creëren die niet alleen esthetisch uitblinkt, maar ook daadwerkelijk resultaten behaalt.
            </p>
            <Link href="#" className="link-wave text-lila text-sm">
              <WavyText text="Bekijk onze aanpak" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="bg-green-dark rounded-3xl p-8 min-h-[350px]">
            <span className="bg-lila text-green-dark px-3 py-1.5 rounded-full text-xs inline-block mb-4">
              ✨ Premium Kwaliteit
            </span>
            <h3 className="text-white mb-3">
              <span className="font-serif">Custom</span>{' '}
              <span className="font-serif">Design</span>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Geen templates. Alleen unieke ontwerpen die perfect bij jouw merk passen.
            </p>
          </div>
        </div>

        {/* Feature 2 - Reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white rounded-3xl p-8 border border-black/5 min-h-[350px]">
            <div className="space-y-4">
              <div className="bg-lila-light p-5 rounded-xl">
                <p className="text-text-muted text-xs mb-1">PageSpeed Score</p>
                <p className="font-serif text-4xl text-green-dark">
                  98<span className="text-base text-text-muted font-serif">/100</span>
                </p>
              </div>
              <div className="bg-cream p-5 rounded-xl">
                <p className="text-text-muted text-xs mb-1">Core Web Vitals</p>
                <p className="font-serif text-xl text-green-dark">✓ Allemaal Groen</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-white leading-tight mb-5">
              <span className="font-serif">SEO & Performance</span>{' '}
              <span className="serif-header text-lila">geïntegreerd</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Elke website wordt gebouwd met zoekmachineoptimalisatie en prestaties als fundament. Geen nazorg nodig - vanaf de lancering bent u optimaal vindbaar en snel.
            </p>
            <Link href="#" className="link-wave text-lila text-sm">
              <WavyText text="Meer over onze tech stack" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
