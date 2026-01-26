'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const categories = ['Alles', 'Algemeen', 'Pakketten', 'Hosting', 'Proces', 'Support'] as const

const faqs = [
  {
    category: 'Algemeen',
    icon: 'spark',
    question: 'Hoe snel kan mijn website live staan?',
    answer:
      'Meestal binnen 2 tot 4 weken, afhankelijk van de complexiteit en hoe snel we content ontvangen.',
  },
  {
    category: 'Algemeen',
    icon: 'spark',
    question: 'Wat voor soort websites maken jullie?',
    answer:
      "We maken premium websites op maat: van landingspagina's en bedrijfswebsites tot portfolio's en webshops. Altijd met focus op branding en conversie.",
  },
  {
    category: 'Algemeen',
    icon: 'spark',
    question: 'Kan ik mijn huidige website laten vernieuwen?',
    answer:
      'Ja, we helpen je graag met een redesign of complete make-over van je bestaande website. We kijken naar wat werkt en wat beter kan.',
  },
  {
    category: 'Pakketten',
    icon: 'price',
    question: 'Kan ik in termijnen betalen?',
    answer:
      'Ja. Je betaalt een aanbetaling en daarna 6 maandtermijnen. Na 7 maanden ben je volledig eigenaar van je website.',
  },
  {
    category: 'Pakketten',
    icon: 'price',
    question: 'Wanneer word ik eigenaar van mijn website?',
    answer:
      'Na de aanbetaling en 6 maandtermijnen (totaal 7 maanden) ben je 100% eigenaar. Je website is dan volledig van jou.',
  },
  {
    category: 'Pakketten',
    icon: 'price',
    question: 'Wat is het verschil tussen termijnen en website lease?',
    answer:
      'Bij termijnen wordt de website na 7 maanden volledig jouw eigendom en stoppen de verplichte betalingen. Bij lease blijf je elke maand betalen, ook als er niks meer aan je website gebeurt - je bent nooit eigenaar en zit vast in een lock-in. Wij geloven in eerlijke deals: een mooie, hoogwaardige website bouwen die van jou wordt, zonder eeuwigdurende betalingen. Na de 7 maanden ben je helemaal vrij: je kunt zelf kiezen voor optionele pakketten zoals hosting, onderhoud of aanpassingen - allemaal naar eigen wens.',
  },
  {
    category: 'Pakketten',
    icon: 'price',
    question: 'Wat gebeurt er bij niet-betaling van een termijn?',
    answer:
      'Je ontvangt één herinnering. Als de betaling niet binnen 7 dagen wordt voldaan, gaat de website offline. Dit is de enige manier om flexibele betalingsmogelijkheden mogelijk te maken. Heb je betalingsproblemen? Neem altijd even van tevoren contact met ons op, dan kunnen we meedenken over een oplossing.',
  },
  {
    category: 'Pakketten',
    icon: 'price',
    question: 'Kan ik tussentijds stoppen met betalen?',
    answer:
      'Nee, het volledige bedrag moet altijd worden voldaan. Je kunt niet na een paar maanden stoppen. Als je achterloopt met betalen gaat de website offline, maar de betalingsverplichting blijft bestaan.',
  },
  {
    category: 'Hosting',
    icon: 'shield',
    question: 'Zit hosting en onderhoud erbij?',
    answer:
      'De eerste 6 maanden zit hosting inbegrepen. Daarna kun je kiezen: je website op je eigen hosting zetten, of hosting bij ons afnemen. Je bent volledig vrij in je keuze.',
  },
  {
    category: 'Hosting',
    icon: 'shield',
    question: 'Ben ik verplicht om hosting en onderhoud bij jullie af te nemen?',
    answer:
      'Nee, je bent niet verplicht om hosting en onderhoud bij ons af te nemen. Na volledige betaling is de website van jou en kun je zelf kiezen waar je host. We raden wel aan om bij ons te hosten, omdat we dan kunnen garanderen dat je website snel, veilig en up-to-date blijft. Als je elders host, kunnen wij niet verantwoordelijk zijn voor de technische prestaties, snelheid of beveiliging van je website.',
  },
  {
    category: 'Hosting',
    icon: 'shield',
    question: 'Wat als ik mijn website elders wil hosten?',
    answer:
      'Dat mag, je bent volledig vrij in je keuze. Houd er wel rekening mee dat we dan niet dezelfde technische snelheid, uptime en beveiliging kunnen garanderen. Bij externe hosting zijn wij niet verantwoordelijk voor hoe de website functioneert. We dragen de website netjes aan je over, maar daarna ligt de verantwoordelijkheid bij jou of je hostingpartij.',
  },
  {
    category: 'Hosting',
    icon: 'shield',
    question: 'Welke hostingpakketten bieden jullie aan?',
    answer:
      'We hebben verschillende pakketten: alleen hosting (vanaf €14,50/maand met AI-geoptimaliseerde optimalisaties), hosting met onderhoud, of hosting met onderhoud én regelmatige aanpassingen (vanaf €39,95/maand). Je kiest wat bij je past.',
  },
  {
    category: 'Hosting',
    icon: 'shield',
    question: 'Wat zijn de voordelen van hosting bij jullie?',
    answer:
      'Bij ons krijg je 99.9% uptime, snelle laadtijden, dagelijkse back-ups, SSL-certificaat en technisch onderhoud. We houden je website veilig en up-to-date. Mocht er iets misgaan, dan lossen wij het op. Bij externe hosting ben je zelf verantwoordelijk voor al deze zaken.',
  },
  {
    category: 'Proces',
    icon: 'calendar',
    question: 'Hoe verloopt het proces van ontwerp tot livegang?',
    answer:
      'Het proces verloopt in duidelijke stappen: 1) Kennismaking en briefing - we bespreken je wensen, doelen en doelgroep. 2) Strategie en structuur - we bepalen de opbouw en pagina-indeling. 3) Design - we maken het visuele ontwerp op basis van je branding. 4) Feedback en revisies - je geeft feedback en we verwerken aanpassingen. 5) Ontwikkeling - we bouwen de website technisch uit. 6) Content en afronding - teksten en afbeeldingen worden geplaatst. 7) Livegang - je website gaat online na jouw goedkeuring.',
  },
  {
    category: 'Proces',
    icon: 'calendar',
    question: 'Hoeveel feedbackrondes zijn er?',
    answer:
      'Er zijn altijd 2 feedbackrondes inbegrepen. We zorgen vooraf voor duidelijke informatie, en van jou verwachten we concrete feedbackpunten. Zo kunnen we de prijs aantrekkelijk houden voor deze kwaliteit. Extra rondes zijn mogelijk tegen meerprijs.',
  },
  {
    category: 'Proces',
    icon: 'scale',
    question: "Wat als ik later extra pagina's of functies wil?",
    answer:
      "Geen probleem. We kunnen uitbreiden wanneer je groeit, van extra pagina's tot custom functionaliteit.",
  },
  {
    category: 'Proces',
    icon: 'scale',
    question: 'Kan ik zelf content aanpassen na oplevering?',
    answer:
      'Bij de Grow en Essential pakketten krijg je toegang tot een gebruiksvriendelijk dashboard waarmee je zelf teksten en afbeeldingen kunt aanpassen. Let op: als je iets breekt en je hebt geen onderhoudspakket, dan zitten daar kosten aan verbonden.',
  },
  {
    category: 'Support',
    icon: 'heart',
    question: 'Bieden jullie nog meer diensten aan?',
    answer: (
      <>
        Ja, naast webdesign bieden we ook branding (logo, huisstijl, visuele identiteit), copywriting, SEO-optimalisatie, fotografie en videografie, social media content en strategie aan. We kunnen je merk van A tot Z ondersteunen, afgestemd op jouw fase en doelgroep. Kijk ook bij onze{' '}
        <Link href="/pakketten#add-ons" className="text-green-dark underline">
          add-ons
        </Link>{' '}
        op de pakketten pagina.
      </>
    ),
  },
  {
    category: 'Support',
    icon: 'chat',
    question: 'Hoe werkt support na oplevering?',
    answer:
      'We blijven beschikbaar voor onderhoud, optimalisatie en uitbreidingen. Je zit niet vast, maar wél in goede handen.',
  },
  {
    category: 'Support',
    icon: 'chat',
    question: 'Hoe snel reageren jullie op vragen?',
    answer:
      'We reageren zo snel als we kunnen. Voor urgente zaken zijn we ook bereikbaar via WhatsApp.',
  },
]

const iconMap: Record<string, JSX.Element> = {
  spark: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l2.2 5.3L20 9l-5.3 2.2L12 16l-2.2-4.8L4 9l5.8-1.7L12 2z" />
    </svg>
  ),
  price: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6h12v12H6z" />
      <path d="M8 10h8M8 14h4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 4v6c0 4-3 6-7 8-4-2-7-4-7-8V7l7-4z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16v13H4z" />
      <path d="M8 3v4M16 3v4M4 11h16" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v16M5 8h14M7 8l-3 6h6l-3-6zM17 8l-3 6h6l-3-6z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s-7-4.5-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.5-7 9-7 9z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 5h16v10H7l-3 3V5z" />
    </svg>
  ),
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Alles')

  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'Alles') return faqs
    return faqs.filter((faq) => faq.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="relative bg-cream pt-44 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(0,0,0,0.03)_24px),linear-gradient(90deg,transparent_23px,rgba(0,0,0,0.03)_24px)] bg-[size:24px_24px]" />
      <Breadcrumbs className="mb-8" />
      <div className="relative px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
          <h1 className="text-text-dark mb-4">Veelgestelde vragen</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Dit zijn de meest voorkomende vragen. Kun je het antwoord niet vinden?
            <br />
            <Link href="/contact" className="text-green-dark underline">
              Stuur ons een bericht
            </Link>
          </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full border transition-all ${
                  activeCategory === category
                    ? 'bg-green-dark text-white border-green-dark'
                    : 'bg-white text-text-dark border-black/10 hover:border-green-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className="bg-white rounded-2xl border border-black/5">
                  <button
                    type="button"
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="h-11 w-11 rounded-xl border border-black/10 bg-cream flex items-center justify-center text-green-dark">
                      {iconMap[faq.icon]}
                    </span>
                    <span className="text-text-dark flex-1">{faq.question}</span>
                    <span className="text-green-dark text-2xl leading-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen ? (
                    <div
                      id={`faq-panel-${index}`}
                      className="px-6 pb-6 text-text-muted leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
