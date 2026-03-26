'use client'

import { useState } from 'react'
import WavyText from '@/components/WavyText'
import WavyUnderline from '@/components/WavyUnderline'
import WavyLineScroll from '@/components/WavyLineScroll'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Link } from '@/i18n/routing'
import { hostingPackages, type HostingPeriod } from '@/data/hosting'

export default function HostingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [period, setPeriod] = useState<HostingPeriod>(12)

  const faqItems = [
    {
      q: 'Wat als ik meer nodig heb dan mijn pakket biedt?',
      a: 'Geen probleem. Je kunt altijd upgraden naar een uitgebreider pakket. Heb je eenmalig iets groters nodig? Dan kunnen we dat apart bespreken.',
    },
    {
      q: 'Wat is de minimale looptijd?',
      a: 'De minimale looptijd is 6 maanden. Je kunt ook kiezen voor 12 of 24 maanden — hoe langer de looptijd, hoe voordeliger de maandprijs. Na afloop van de looptijd kun je verlengen, wijzigen of opzeggen.',
    },
    {
      q: 'Wat valt onder fair use?',
      a: 'Fair use betekent dat je een redelijke hoeveelheid aanpassingen per maand kunt laten doen. Denk aan tekst- en afbeeldingswijzigingen, kleine layout aanpassingen en updates. Het tegoed vervalt maandelijks en is niet overdraagbaar naar de volgende maand.',
    },
    {
      q: 'Zijn de eerste 6 maanden hosting echt gratis?',
      a: 'Ja, bij elk websitepakket zit 6 maanden gratis hosting inbegrepen. Na deze periode kies je zelf welk hosting- of onderhoudspakket je wilt.',
    },
    {
      q: 'Wat als mijn website gehackt wordt?',
      a: 'Bij alle pakketten is malware scanning en verwijdering inbegrepen. Mocht er toch iets misgaan, dan lossen wij het op. Dankzij dagelijkse back-ups kunnen we je website snel herstellen.',
    },
    {
      q: 'Kan ik later upgraden naar een ander pakket?',
      a: 'Ja, je kunt op elk moment upgraden of downgraden. De nieuwe prijs gaat in vanaf de volgende maand.',
    },
    {
      q: 'Waar draait mijn website?',
      a: 'Je website draait op professionele Europese servers binnen de EU. Alle data blijft in Europa, volledig AVG/GDPR-compliant. Wij verzorgen het volledige beheer, updates, back-ups en support.',
    },
  ]

  return (
    <>
      <section className="bg-cream pt-44 pb-24 relative overflow-hidden">
      {/* Decoratieve golvende lila lijn - Desktop */}
      <WavyLineScroll
        className="hidden md:block absolute top-0 left-0 w-full h-[800px] pointer-events-none"
        viewBox="0 0 1200 800"
        path="M-50 150 Q 100 50, 250 200 Q 400 350, 550 300 Q 700 250, 850 450 Q 1000 650, 1150 600 Q 1300 550, 1400 750"
        strokeColor="#EAD7FF"
        strokeWidth={12}
        direction="up"
      />

      {/* Decoratieve golvende lila lijn - Mobiel */}
      <WavyLineScroll
        className="md:hidden absolute top-0 left-0 w-full h-[600px] pointer-events-none"
        viewBox="0 0 400 500"
        path="M-20 0 C 80 40, 40 100, 120 140 C 200 180, 160 240, 260 280 C 360 320, 300 400, 420 450"
        strokeColor="#EAD7FF"
        strokeWidth={8}
        direction="up"
      />

      <Breadcrumbs className="mb-8 relative z-10" />
      <div className="px-6 md:px-10 relative z-10">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-text-dark mb-6">
              <span className="font-serif">Hosting &</span>{' '}
              <span className="serif-header italic text-green-dark">onderhoud</span>
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Je website is live, maar daarmee ben je er nog niet. Wij zorgen dat alles blijft draaien, veilig is en up-to-date blijft.
            </p>
          </div>

        {/* Looptijd Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1.5 inline-flex shadow-sm border border-black/5">
            {([6, 12, 24] as HostingPeriod[]).map((months) => (
              <button
                key={months}
                onClick={() => setPeriod(months)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all relative ${
                  period === months
                    ? 'bg-green-dark text-white shadow-md'
                    : 'text-text-muted hover:text-text-dark'
                }`}
              >
                {months} maanden
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards met donkergroen vlak erachter */}
        <div className="relative mb-28">
          {/* Donkergroen achtergrondvlak */}
          <div className="absolute -inset-x-6 md:-inset-x-10 -inset-y-16 bg-green-dark rounded-[30px] -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 items-stretch max-w-5xl mx-auto justify-items-center py-8">
          {hostingPackages.map((plan) => {
            const currentPricing = plan.pricing[period]
            const basePricing = plan.pricing[6]
            const savings = period > 6
              ? Math.round((1 - currentPricing.priceNumber / basePricing.priceNumber) * 100)
              : 0

            return (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border transition-all hover:shadow-xl flex flex-col h-full w-full max-w-[340px] ${
                plan.popular
                  ? 'border-green-dark shadow-lg scale-[1.02]'
                  : 'border-black/5 hover:border-black/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-lila text-green-dark text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                    Populairst
                  </span>
                </div>
              )}

              <div className="mb-4 h-[140px] text-center flex flex-col justify-end">
                <h3 className="text-green-dark text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-text-muted text-sm leading-snug">{plan.description}</p>
              </div>

              <div className="mb-4 h-[56px] lg:h-[80px] text-center flex flex-col justify-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-green-dark text-3xl font-medium font-serif">
                    &euro;{currentPricing.price}
                  </span>
                  <span className="text-text-muted/70 text-xs">/ maand</span>
                </div>
                {savings > 0 && (
                  <p className="text-emerald-600 text-xs font-medium mt-1">
                    {savings}% korting t.o.v. 6 maanden
                  </p>
                )}
              </div>

              <div className="flex-1">
                <p className="text-green-dark text-xs font-bold uppercase tracking-wider mb-3">
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
            )
          })}
          </div>
        </div>
        </div>
      </div>
        <p className="text-text-muted text-sm text-center mt-8 px-6">
          Bij elk websitepakket zit 6 maanden gratis hosting inbegrepen. Alle prijzen zijn inclusief hosting. Minimale looptijd: {period} maanden.
        </p>
      </section>

      {/* Losse Add-ons Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-text-dark mb-4">
              <span className="font-serif">Losse</span>{' '}
              <span className="relative inline-block serif-header italic text-green-dark">
                add-ons
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Aanvullingen op je hosting of onderhoudspakket. Flexibel in te zetten, zonder verplichtingen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Strippenkaart Card */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl transition-all flex flex-col">
              <div className="text-center mb-6">
                <span className="text-4xl mb-3 block">🎟️</span>
                <h3 className="text-green-dark text-xl font-medium mb-2">Strippenkaart</h3>
                <p className="text-text-muted text-sm">100 minuten aan werkzaamheden, flexibel inzetbaar</p>
              </div>

              <div className="text-center mb-6 py-4 border-y border-black/5">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-green-dark text-3xl font-medium font-serif">&euro;120</span>
                  <span className="text-text-muted/70 text-xs">eenmalig</span>
                </div>
                <p className="text-text-muted text-xs mt-1">&euro;1,20 per minuut</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {[
                  'Tekst- en afbeeldingswijzigingen',
                  'Layout aanpassingen',
                  'Nieuwe secties of pagina\'s',
                  'Design tweaks',
                  '6 maanden geldig',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-text-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-spring btn-uniform btn-no-lila link-wave w-full inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
              >
                <WavyText text="Strippenkaart aanvragen" />
              </Link>
            </div>

            {/* Zakelijke E-mail Card */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl transition-all flex flex-col">
              <div className="text-center mb-6">
                <span className="text-4xl mb-3 block">📧</span>
                <h3 className="text-green-dark text-xl font-medium mb-2">Zakelijke e-mail</h3>
                <p className="text-text-muted text-sm">Professionele e-mail op jouw domeinnaam, volledig beheerd</p>
              </div>

              <div className="text-center mb-6 py-4 border-y border-black/5">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-green-dark text-3xl font-medium font-serif">&euro;3,99</span>
                  <span className="text-text-muted/70 text-xs">/ maand</span>
                </div>
                <p className="text-text-muted text-xs mt-1">per mailbox</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {[
                  'E-mail op jouw domein (@jouwbedrijf.nl)',
                  'Onbeperkt aliassen per mailbox',
                  'Volledige setup & configuratie',
                  'DNS-beheer (SPF, DKIM, DMARC)',
                  'Webmail & app toegang',
                  'Spam- en virusfilter',
                  'Support bij problemen',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-text-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-spring btn-uniform btn-no-lila link-wave w-full inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
              >
                <WavyText text="E-mail aanvragen" />
              </Link>
            </div>
          </div>

          <p className="text-text-muted text-xs text-center mt-8 max-w-2xl mx-auto">
            E-mail wordt beheerd via een professionele e-mailpartner. Wij verzorgen de volledige setup, configuratie en het beheer zodat jij er geen omkijken naar hebt.
          </p>
        </div>
      </section>

      {/* Waarom onderhoud - Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-text-dark mb-8">
                <span className="font-serif">Waarom je website</span>
                <br />
                <span className="relative inline-block serif-header italic text-green-dark">
                  onderhoud nodig heeft
                  <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                </span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                Een website is geen eenmalig project. Software moet bijgewerkt worden, content verandert, en zonder onderhoud loopt je website risico op beveiligingsproblemen en slechte prestaties.
              </p>
            </div>

            {/* Right side - Feature cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: '🔄', title: 'Updates & onderhoud', desc: 'Software moet up-to-date blijven voor veiligheid en prestaties.' },
                { icon: '🛡️', title: 'Beveiliging', desc: 'Bescherming tegen hackers, malware en kwetsbaarheden.' },
                { icon: '⚡', title: 'Snelheid', desc: 'Snelle laadtijden zorgen voor meer bezoekers en conversies.' },
                { icon: '📝', title: 'Content bijwerken', desc: 'Teksten en afbeeldingen actueel houden voor je bezoekers.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-black/5">
                  <span className="text-lg sm:text-2xl mb-2 sm:mb-3 block">{item.icon}</span>
                  <h4 className="text-green-dark font-medium mb-1 text-xs sm:text-base">{item.title}</h4>
                  <p className="text-text-muted text-[10px] sm:text-sm hidden sm:block">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standaard Features - Dark Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Feature cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 order-2 lg:order-1">
              {[
                { icon: '🇪🇺', title: 'Europese hosting', desc: 'Servers binnen de EU, AVG/GDPR-compliant.' },
                { icon: '🔒', title: 'SSL-certificaat', desc: 'Veilige verbinding voor je bezoekers.' },
                { icon: '💾', title: 'Dagelijkse back-ups', desc: 'Altijd terug te zetten als er iets misgaat.' },
                { icon: '⚡', title: '99,9% uptime', desc: 'Je website is praktisch altijd online.' },
                { icon: '🛡️', title: 'DDoS-bescherming', desc: 'Beschermd tegen aanvallen.' },
                { icon: '🔍', title: 'Malware scanning', desc: 'Continue beveiliging en monitoring.' },
              ].map((feature) => (
                <div key={feature.title} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10">
                  <span className="text-lg sm:text-2xl mb-2 sm:mb-3 block">{feature.icon}</span>
                  <h4 className="text-white font-medium mb-1 text-xs sm:text-base">{feature.title}</h4>
                  <p className="text-white/60 text-[10px] sm:text-sm hidden sm:block">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Right side - Title */}
            <div className="order-1 lg:order-2">
              <h2 className="text-white mb-8">
                <span className="font-serif">Dit zit bij</span>
                <br />
                <span className="relative inline-block serif-header italic text-lila">
                  elk pakket
                  <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                </span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                Ongeacht welk pakket je kiest, je website draait altijd op snelle, betrouwbare en beveiligde servers. Geen technisch gedoe voor jou.
              </p>
              <p className="text-white/40 text-xs mt-6">
                De hosting draait op professionele Europese servers binnen de EU — volledig AVG/GDPR-compliant. Wij verzorgen beheer, updates, back-ups en support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              <span className="font-serif">Hoe het</span>{' '}
              <span className="relative inline-block serif-header italic text-lila">
                werkt
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Simpel, zonder gedoe. In drie stappen geregeld.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Kies je pakket',
                desc: 'Kies het pakket dat past bij jouw behoeften. Alleen hosting of ook onderhoud? Jij bepaalt.',
              },
              {
                step: '2',
                title: 'Wij regelen de rest',
                desc: 'Wij zorgen voor hosting, beveiliging, back-ups en monitoring. Jij hoeft nergens naar om te kijken.',
              },
              {
                step: '3',
                title: 'Wijzigingen doorgeven',
                desc: 'Heb je een aanpassing? Stuur een berichtje via WhatsApp of e-mail en wij regelen het.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-lila text-green-dark rounded-full flex items-center justify-center text-lg font-medium mx-auto mb-4 font-serif">
                  {item.step}
                </div>
                <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Use + SEO/SEA */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fair Use Card */}
            <div className="bg-white rounded-[20px] md:rounded-[30px] p-8 md:p-10 border border-black/5">
              <h3 className="text-green-dark text-xl font-medium mb-4 font-serif">Fair use beleid</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Bij de onderhoudspakketten werken we met een fair use beleid. Dit betekent dat je een redelijke hoeveelheid aanpassingen per maand kunt laten doen.
              </p>
              <p className="text-text-muted leading-relaxed">
                Het tegoed vervalt maandelijks en is niet overdraagbaar naar de volgende maand. Heb je eenmalig iets groters nodig? Dan bespreken we dat apart.
              </p>
            </div>

            {/* SEO/SEA Card */}
            <div className="bg-white rounded-[20px] md:rounded-[30px] p-8 md:p-10 border border-black/5">
              <h3 className="text-green-dark text-xl font-medium mb-4 font-serif">Interesse in SEO of SEA?</h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Wij werken samen met vaste partners die gespecialiseerd zijn in SEO en SEA. Zo zorgen we ervoor dat je website niet alleen mooi is, maar ook gevonden wordt.
              </p>
              <a
                href="mailto:info@wegrowbrands.nl?subject=Vraag%20over%20SEO%2FSEA"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all inline-block"
              >
                <WavyText text="Meer info over SEO/SEA" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Veelgestelde</span>{' '}
              <span className="relative inline-block serif-header italic text-lila">
                vragen
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                >
                  <span className="text-white font-medium text-sm md:text-base">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`text-lila flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/60 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center bg-[#1a1a1a] rounded-[30px] p-10 md:p-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Hulp nodig bij het</span>{' '}
              <span className="serif-header text-lila">kiezen?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Neem contact op en we helpen je het juiste pakket te kiezen. Vrijblijvend en zonder verplichtingen.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all inline-block"
              >
                <WavyText text="Neem contact op" />
              </Link>
              <a
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1FAF57] flex items-center justify-center transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-6 w-6 fill-white">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
