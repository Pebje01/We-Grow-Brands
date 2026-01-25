'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import WavyText from '@/components/WavyText'
import SuccessPopup from '@/components/SuccessPopup'

// Configuratie - pas deze waarden aan
const ACTIE_EINDDATUM = new Date('2026-01-31T23:59:59') // Einddatum actie
const PLEKKEN_OVER = 3 // Aantal beschikbare plekken

const pakketten = [
  {
    icon: '🚀',
    name: 'Groei',
    description: 'Voor bedrijven die willen groeien met een website die meebeweegt met hun ambities.',
    originalPrice: 1450,
    discountedPrice: 725,
    features: [
      { text: 'Tot 8 pagina\'s', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Basis SEO-optimalisatie', included: true },
      { text: 'Contact- en andere formulieren', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Optioneel: CMS voor zelf bewerken', included: true },
      { text: 'Blog functionaliteit', included: true },
      { text: 'Maatwerk animaties', included: false },
    ],
  },
  {
    icon: '👨‍💼',
    name: 'Premium',
    description: 'Volledig maatwerk voor ambitieuze merken met grote plannen en specifieke wensen.',
    originalPrice: 2650,
    discountedPrice: 1325,
    features: [
      { text: 'Meerdere pagina\'s & diepere structuur', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Uitgebreide SEO-optimalisatie', included: true },
      { text: 'Geavanceerde formulieren', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Optioneel: CMS voor zelf bewerken', included: true },
      { text: 'Blog functionaliteit', included: true },
      { text: 'Maatwerk animaties', included: true },
    ],
    popular: true,
  },
]

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {[
        { value: timeLeft.days, label: 'Dagen' },
        { value: timeLeft.hours, label: 'Uren' },
        { value: timeLeft.minutes, label: 'Min' },
        { value: timeLeft.seconds, label: 'Sec' },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
            <span className="text-2xl md:text-4xl font-bold text-white font-serif">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-white/60 text-xs md:text-sm mt-2 block">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function KortingPage() {
  const [selectedPakket, setSelectedPakket] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showVoorwaarden, setShowVoorwaarden] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
        setSelectedPakket('')
      } else {
        setShowError(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-green-dark overflow-x-hidden">
      {/* Hero met countdown */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 pb-24 relative overflow-hidden">
        {/* Decoratieve elementen */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-lila/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lila/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badges */}
          <div className="flex flex-row items-center justify-center gap-2 mb-4">
            {/* Urgentie badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 px-3 py-1.5 rounded-full text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Nog {PLEKKEN_OVER} plekken
            </div>

            {/* Korting badge */}
            <span className="inline-block bg-lila text-green-dark px-3 py-1.5 rounded-full text-xs font-bold">
              January Deals
            </span>
          </div>

          <h1 className="text-white leading-tight mb-6">
            <span className="font-serif">50% korting</span>
            <br />
            <span className="serif-header text-lila italic">op je nieuwe website</span>
          </h1>

          <p className="text-white/80 text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
            Start 2026 met een website waar je wél gelukkig van wordt.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tot het einde van januari krijg je 50% korting op onze Groei en Premium pakketten.
            Een serieuze, professionele website voor een prikkie.
          </p>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Beslissen t/m 31 januari:</p>
            <CountdownTimer targetDate={ACTIE_EINDDATUM} />
          </div>

          {/* CTA Button */}
          <Link
            href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-spring btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all px-6 py-3 text-base rounded-[15px] border border-black inline-flex items-center gap-2"
          >
            <WavyText text="Plan een gesprek" />
          </Link>
        </div>
      </section>

      {/* Pakketten sectie */}
      <section id="pakketten" className="bg-cream py-24 px-4 md:px-6 rounded-t-[40px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 px-2 md:px-0">
            <h2 className="text-text-dark mb-4">
              <span className="font-serif">Kies je pakket</span>{' '}
              <span className="serif-header text-green-dark">met 50% korting</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Dezelfde premium kwaliteit, nu tijdelijk met korting.
              Hosting en domeinnaam niet inbegrepen, maar kunnen wij voor je regelen.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 max-w-3xl mx-auto">
            {pakketten.map((pakket, index) => (
              <div
                key={index}
                className={`relative rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col ${
                  pakket.popular
                    ? 'bg-green-dark text-white'
                    : 'bg-white border border-black/5'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${pakket.popular ? 'bg-lila' : 'bg-lila'}`}>
                  {pakket.icon}
                </div>

                <h3 className={`text-xl mb-2 ${pakket.popular ? 'text-white' : 'text-green-dark'}`}>
                  {pakket.name}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${pakket.popular ? 'text-white/70' : 'text-text-muted'}`}>
                  {pakket.description}
                </p>

                {/* Prijzen */}
                <div className="mb-6">
                  <span className={`text-sm line-through ${pakket.popular ? 'text-white/50' : 'text-text-muted'}`}>
                    €{pakket.originalPrice},-
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-serif ${pakket.popular ? 'text-lila' : 'text-green-dark'}`}>
                      €{pakket.discountedPrice}
                    </span>
                    <span className={`text-sm ${pakket.popular ? 'text-white/60' : 'text-text-muted'}`}>
                      eenmalig
                    </span>
                  </div>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs mt-2 ${pakket.popular ? 'bg-lila/20 text-lila' : 'bg-green-dark/10 text-green-dark'}`}>
                    Bespaar €{pakket.originalPrice - pakket.discountedPrice},-
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pakket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <span className={pakket.popular ? 'text-lila' : 'text-green-dark'}>✓</span>
                      ) : (
                        <span className="text-red-400">✕</span>
                      )}
                      <span className={`${
                        feature.included
                          ? (pakket.popular ? 'text-white/80' : 'text-text-muted')
                          : (pakket.popular ? 'text-white/40 line-through' : 'text-text-muted/50 line-through')
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#aanvragen"
                  onClick={() => setSelectedPakket(`${pakket.name} - €${pakket.discountedPrice}`)}
                  className={`block text-center py-3 rounded-xl transition-all ${
                    pakket.popular
                      ? 'bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-[#02362B]'
                      : 'bg-green-dark text-white hover:bg-green-dark/90'
                  }`}
                >
                  Kies {pakket.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Formulier */}
          <div id="aanvragen" className="bg-green-dark rounded-3xl p-8 md:p-12 scroll-mt-8">
            <div className="text-center mb-8">
              <h3 className="text-white mb-2">
                <span className="font-serif">Claim je korting</span>{' '}
                <span className="font-serif text-lila">nu</span>
              </h3>
              <p className="text-white/60 text-sm">
                Vul je gegevens in en we nemen binnen 24 uur contact met je op.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-xl mx-auto"
            >
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="50% Korting aanvraag via Korting pagina" />
              <input type="hidden" name="from_name" value="We Grow Brands Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-sm mb-2">
                    Je naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
                    placeholder="Jan Jansen"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/60 text-sm mb-2">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
                    placeholder="jan@bedrijf.nl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-white/60 text-sm mb-2">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors"
                    placeholder="Jouw Bedrijf B.V."
                  />
                </div>
                <div>
                  <label htmlFor="pakket" className="block text-white/60 text-sm mb-2">
                    Welk pakket? *
                  </label>
                  <select
                    id="pakket"
                    name="pakket"
                    required
                    value={selectedPakket}
                    onChange={(e) => setSelectedPakket(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-lila transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-green-dark">Kies een pakket</option>
                    <option value="Groei - €725" className="bg-green-dark">Groei - €725,-</option>
                    <option value="Premium - €1.325" className="bg-green-dark">Premium - €1.325,-</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/60 text-sm mb-2">
                  Vertel iets over je project (optioneel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-lila transition-colors resize-none"
                  placeholder="Wat voor website heb je nodig?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] transition-all py-4 px-12 text-base disabled:opacity-70 mx-auto block"
              >
                <WavyText text={isSubmitting ? 'Versturen...' : 'Claim mijn 50% korting'} />
              </button>
            </form>
          </div>

          <SuccessPopup
            isOpen={showSuccess}
            onClose={() => setShowSuccess(false)}
            title="Aanvraag ontvangen!"
            message="We nemen binnen 24 uur contact met je op om je korting te bespreken."
          />

          <SuccessPopup
            isOpen={showError}
            onClose={() => setShowError(false)}
            variant="error"
            title="Er ging iets mis"
            message="Het versturen is niet gelukt. Probeer het opnieuw of stuur ons een berichtje via WhatsApp."
          />

          {/* Voorwaarden link */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowVoorwaarden(true)}
              className="text-text-muted hover:text-green-dark underline underline-offset-4 text-sm transition-colors"
            >
              Bekijk de actievoorwaarden
            </button>
          </div>

          {/* Voorwaarden Popup */}
          {showVoorwaarden && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setShowVoorwaarden(false)}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <div
                className="relative bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl animate-popup max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVoorwaarden(false)}
                  className="absolute top-4 right-4 text-text-muted hover:text-text-dark transition-colors"
                  aria-label="Sluiten"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h3 className="text-green-dark mb-6 font-serif">Actievoorwaarden</h3>
                <ul className="text-text-muted text-sm space-y-3">
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Aanvraag indienen t/m {ACTIE_EINDDATUM.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })} om 23:59</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Eerst een intake om je wensen en behoeften te bespreken</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Het bouwen van de website start na ontvangst van de betaling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Betaling binnen 7 dagen na akkoord om korting te claimen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Hosting via ons: eerste 6 maanden gratis, daarna betaal je alleen nog een klein bedrag voor hosting (vraag naar de opties)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Bij onderhoudspakket: doorlopend onderhoud en aanpassingen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Bij eigen hosting: geen onderhoud of garanties, niet verantwoordelijk voor problemen achteraf</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Add-ons mogelijk tegen meerprijs (ook 50% korting indien aangegeven in eerste gesprek)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Niet te combineren met andere acties of kortingen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-dark">•</span>
                    <span>Oplevering binnen 4-6 weken na aanlevering content</span>
                  </li>
                </ul>

                <button
                  onClick={() => setShowVoorwaarden(false)}
                  className="mt-8 w-full bg-green-dark text-white py-3 rounded-xl hover:bg-green-dark/90 transition-colors"
                >
                  Sluiten
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  )
}
