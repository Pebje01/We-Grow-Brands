'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WavyText from '@/components/WavyText'
import WavyUnderline from '@/components/WavyUnderline'
import WavyLineScroll from '@/components/WavyLineScroll'
import Breadcrumbs from '@/components/Breadcrumbs'

const plans = [
  {
    name: 'Essentials',
    description: 'Perfect voor starters en kleine ondernemers die wel willen investeren in een hoogwaardige website.',
    price: { monthly: 999, annual: 151 },
    deposit: 295,
    oneTime: true,
    features: [
      { text: 'Tot 3 pagina\'s', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Basis SEO-optimalisatie', included: true },
      { text: 'Contactformulier', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Optioneel: CMS voor zelf bewerken', included: false },
      { text: 'Blog functionaliteit', included: false },
      { text: 'Templatewerk', included: false },
    ],
    cta: 'Start met Essentials',
    buttonColor: 'bg-[#F0E6FF] hover:bg-[#E5D6FF]',
    popular: false,
  },
  {
    name: 'Groei',
    description: 'Voor bedrijven die willen groeien met een website die meebeweegt met hun ambities.',
    price: { monthly: 1450, annual: 224 },
    deposit: 395,
    oneTime: true,
    buttonColor: 'bg-[#D6BCFF] hover:bg-[#C9A8FF]',
    features: [
      { text: 'Tot 8 pagina\'s', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Uitgebreide SEO-optimalisatie', included: true },
      { text: 'Contactformulier', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Optioneel: CMS voor zelf bewerken', included: true },
      { text: 'Blog functionaliteit', included: true },
      { text: 'Templatewerk', included: false },
    ],
    cta: 'Start met Groei',
    popular: true,
  },
  {
    name: 'Premium',
    description: 'Volledig maatwerk voor ambitieuze merken met grote plannen en specifieke wensen.',
    price: { monthly: 2650, annual: 448 },
    deposit: 495,
    oneTime: true,
    features: [
      { text: '8+ pagina\'s', included: true },
      { text: 'Website met diepere structuur', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Complete SEO-strategie', included: true },
      { text: 'Geavanceerde formulieren', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Optioneel: CMS voor zelf bewerken', included: true },
      { text: 'Blog functionaliteit', included: true },
      { text: 'Maatwerk animaties', included: true },
    ],
    cta: 'Start met Premium',
    buttonColor: 'bg-[#B794F6] hover:bg-[#A67DF0]',
    popular: false,
  },
]

export default function PakkettenPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  return (
    <>
      <section className="bg-cream pt-44 pb-24 relative overflow-hidden">
      {/* Decoratieve golvende lila lijn - Desktop */}
      <WavyLineScroll
        className="hidden md:block absolute top-0 left-0 w-full h-[800px] pointer-events-none"
        viewBox="0 0 1200 800"
        path="M-50 50 Q 100 -50, 250 100 Q 400 250, 550 200 Q 700 150, 850 350 Q 1000 550, 1150 500 Q 1300 450, 1400 650"
        strokeColor="#EAD7FF"
        strokeWidth={12}
        direction="down"
      />

      {/* Decoratieve golvende lila lijn - Mobiel (korter en proportioneel) */}
      <WavyLineScroll
        className="md:hidden absolute top-0 left-0 w-full h-[250px] pointer-events-none"
        viewBox="0 0 400 200"
        path="M-20 40 Q 100 0, 200 60 Q 300 120, 420 80"
        strokeColor="#EAD7FF"
        strokeWidth={8}
        direction="down"
      />

      <Breadcrumbs className="mb-8" />
      <div className="px-6 md:px-10 relative z-10">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-text-dark mb-6">
              <span className="font-serif">Onze</span>{' '}
              <span className="serif-header">pakketten</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Geen verborgen kosten, geen verrassingen. Kies het pakket dat past bij jouw ambities.
            </p>
          </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 inline-flex shadow-sm border border-black/5">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-green-dark text-white shadow-md'
                  : 'text-text-muted hover:text-text-dark'
              }`}
            >
              Eenmalig
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-green-dark text-white shadow-md'
                  : 'text-text-muted hover:text-text-dark'
              }`}
            >
              Maandelijks
            </button>
          </div>
        </div>

        {/* Pricing Cards met donkergroen vlak erachter */}
        <div className="relative mb-28">
          {/* Donkergroen achtergrondvlak */}
          <div className="absolute -inset-x-6 md:-inset-x-10 -inset-y-16 bg-green-dark rounded-[30px] -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch max-w-5xl mx-auto justify-items-center py-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border transition-all hover:shadow-xl flex flex-col h-full w-full max-w-[340px] ${
                plan.popular
                  ? 'border-green-dark shadow-lg scale-[1.02]'
                  : 'border-black/5 hover:border-black/10'
              }`}
            >
              {plan.name === 'Premium' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-lila text-green-dark text-xs font-medium px-4 py-1.5 rounded-full">
                    Maatwerk
                  </span>
                </div>
              )}

              <div className="mb-5 min-h-[132px] text-center">
                <h3 className="text-green-dark text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-4 min-h-[96px] text-center">
                <div className="flex items-baseline justify-center gap-1">
                  {plan.name === 'Premium' && (
                    <span className="text-text-muted/70 text-xs mr-1">vanaf</span>
                  )}
                  <span className="text-green-dark text-3xl font-medium font-serif">
                    €{billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual}
                  </span>
                  {billingPeriod === 'annual' && (
                    <span className="text-text-muted/70 text-xs">/ maand</span>
                  )}
                </div>
                {billingPeriod === 'annual' && (
                  <p className="text-text-muted/70 text-xs mt-1">
                    €{plan.deposit} aanbetaling, daarna 6× €{plan.price.annual}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <p className="text-text-dark text-xs font-medium uppercase tracking-wider mb-3 text-center">
                  Wat je krijgt
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-red-500">
                            <line x1="6" y1="6" x2="18" y2="18"/>
                            <line x1="6" y1="18" x2="18" y2="6"/>
                          </svg>
                        </span>
                      )}
                      <span className={feature.included ? 'text-text-dark text-sm' : 'text-text-muted/60 text-sm'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button onderaan */}
              <div className="mt-6 pt-6 border-t border-black/5">
                <Link
                  href="/contact"
                  className="btn-spring btn-uniform btn-no-lila link-wave w-full inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
                >
                  <WavyText text={plan.cta} />
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* Inbegrepen Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-text-dark mb-8">
                <span className="font-serif">Inbegrepen in</span>
                <br />
                <span className="relative inline-block serif-header italic text-green-dark">
                  elk pakket
                  <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                </span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                Geen technisch gedoe. Gewoon zeker weten dat je website blijft werken.
              </p>
            </div>

            {/* Right side - Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-black/5">
                <span className="text-2xl mb-3 block">⚡</span>
                <h4 className="text-green-dark font-medium mb-1 text-base">99.9% uptime</h4>
                <p className="text-text-muted text-sm">Praktisch altijd online.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-black/5">
                <span className="text-2xl mb-3 block">🚀</span>
                <h4 className="text-green-dark font-medium mb-1 text-base">Snelle laadtijden</h4>
                <p className="text-text-muted text-sm">Bezoekers haken minder snel af.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-black/5">
                <span className="text-2xl mb-3 block">🔒</span>
                <h4 className="text-green-dark font-medium mb-1 text-base">Veilig en beschermd</h4>
                <p className="text-text-muted text-sm">Je site blijft schoon en betrouwbaar.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-black/5">
                <span className="text-2xl mb-3 block">💾</span>
                <h4 className="text-green-dark font-medium mb-1 text-base">Back-ups geregeld</h4>
                <p className="text-text-muted text-sm">Altijd terug te zetten als er iets misgaat.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-black/5">
                <span className="text-2xl mb-3 block">🔧</span>
                <h4 className="text-green-dark font-medium mb-1 text-base">Onderhoud inbegrepen</h4>
                <p className="text-text-muted text-sm">Wij zorgen dat je website blijft draaien.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="bg-cream pt-4 md:pt-6 pb-20 md:pb-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-text-dark mb-4">
              <span className="font-serif">Website</span>{' '}
              <span className="serif-header italic text-green-dark">add-ons</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Bovenop je pakket nog extra functionaliteiten nodig? Kies voor verschillende add-ons.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Extra pagina\'s / landingspagina\'s', 'Complexe formulieren', 'Reviews/klantverhalen', 'Blog', 'Webshop', 'Meertalige website', 'Boekingssysteem', 'Nieuwsbrief integratie', 'Chatbot / live chat', 'Klantportaal', 'Vacaturemodule', 'FAQ sectie', 'Zoekfunctie', 'GA4 integratie', 'Snelheidsoptimalisatie', 'Extra feedbackrondes'
            ].map((addon, index) => {
              const colors = [
                'bg-[#F5EEFF] border-[#EAD7FF] hover:bg-[#EAD7FF]',
                'bg-[#EAD7FF] border-[#D6BCFF] hover:bg-[#D6BCFF]',
                'bg-[#D6BCFF] border-[#C9A8FF] hover:bg-[#C9A8FF]',
                'bg-[#F0EDE8] border-[#E0DDD8] hover:bg-[#E0DDD8]',
              ]
              const colorClass = colors[index % colors.length]
              return (
                <span key={addon} className={`${colorClass} text-green-dark px-4 py-2 rounded-full text-sm border transition-colors cursor-default`}>
                  {addon}
                </span>
              )
            })}
          </div>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Extra</span>{' '}
              <span className="serif-header italic text-lila">services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Wij kunnen je naast een strakke website ook helpen met andere diensten.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Logo ontwerp', 'Huisstijl', 'Opfrissen van bestaande huisstijl', 'Brand guidelines', 'Brand fundament',
              'Copywriting / webteksten', 'Social media content', 'E-mail marketing', 'SEO', 'SEA', 'Leadgeneratie',
              'Fotografie', 'Social media templates', 'Presentatie ontwerp', 'Drukwerk', 'DTP diensten', 'Grafische vormgeving',
              'AI & automatisering', 'Strategiesessie', 'Brand audit', 'Website analyse', 'Website opfrisser', 'Rebranding'
            ].map((service, index) => {
              const colors = [
                'bg-[#F5EEFF] border-[#EAD7FF] hover:bg-[#EAD7FF]',
                'bg-[#EAD7FF] border-[#D6BCFF] hover:bg-[#D6BCFF]',
                'bg-[#D6BCFF] border-[#C9A8FF] hover:bg-[#C9A8FF]',
                'bg-lila border-[#D6BCFF] hover:bg-[#D6BCFF]',
              ]
              const colorClass = colors[index % colors.length]
              return (
                <span key={service} className={`${colorClass} text-green-dark px-4 py-2 rounded-full text-sm border transition-colors cursor-default`}>
                  {service}
                </span>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ownership Section - Donker vlak met afbeelding links en tekst rechts */}
      <section className="bg-[#1a1a1a] relative overflow-hidden py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Links: Afbeelding */}
            <div className="relative">
              <div className="rounded-[24px] overflow-hidden">
                <Image
                  src="/mock-ups/bleijenberg-mockup-laptop.webp"
                  alt="Website voorbeeld"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Rechts: Tekst */}
            <div>
              <h2 className="text-white mb-6">
                <span className="font-serif">Jouw website,</span>
                <br />
                <span className="relative inline-block serif-header italic text-white">
                  jouw eigendom
                  {/* Groene golvende lijn eronder */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 200 16"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10 Q 30 4, 60 9 T 120 8 T 198 10"
                      stroke="#03483A"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-hand-draw"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Na de volledige betaling van je website ben je volledig eigenaar. Je zit nergens aan vast.
                Wil je na de looptijd je website elders hosten? Dat kan, geen probleem.
                Wil je de website laten staan op onze supersnelle en betrouwbare hosting?
                Dan betaal je alleen nog een laag bedrag voor de hosting en onderhoud.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-green-dark flex items-center justify-center text-white text-sm">✓</span>
                  <span>Website in eigen beheer</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-green-dark flex items-center justify-center text-white text-sm">✓</span>
                  <span>Geen verborgen kosten</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="w-6 h-6 rounded-full bg-green-dark flex items-center justify-center text-white text-sm">✓</span>
                  <span>Flexibele hosting en onderhoud opties</span>
                </li>
              </ul>
              <Link
                href="/algemene-voorwaarden"
                className="link-wave text-white/60 text-sm underline hover:text-white transition-colors"
              >
                <WavyText text="Lees hier de algemene voorwaarden" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center bg-[#1a1a1a] rounded-[30px] p-10 md:p-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Niet zeker welk pakket</span>{' '}
              <span className="serif-header text-lila">bij je past?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Plan een vrijblijvend gesprek. We kijken samen naar je wensen en adviseren je eerlijk over de beste optie.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all inline-block"
              >
                <WavyText text="Plan een gesprek" />
              </Link>
              <Link
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1FAF57] flex items-center justify-center transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-6 w-6 fill-white">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
