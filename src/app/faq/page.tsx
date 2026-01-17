'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

const categories = ['Alles', 'Algemeen', 'Pakketten', 'Proces', 'Support'] as const

const faqs = [
  {
    category: 'Algemeen',
    icon: 'spark',
    question: 'Hoe snel kan mijn website live staan?',
    answer:
      'Meestal binnen 2 tot 4 weken, afhankelijk van de complexiteit en hoe snel we content ontvangen.',
  },
  {
    category: 'Pakketten',
    icon: 'price',
    question: 'Kan ik in termijnen betalen?',
    answer:
      'Ja. Je kunt kiezen voor eenmalig of gespreid betalen. Na 12 maanden ben je volledig eigenaar.',
  },
  {
    category: 'Pakketten',
    icon: 'shield',
    question: 'Zit hosting en onderhoud erbij?',
    answer:
      'We bieden hosting en onderhoud optioneel aan. Je betaalt na 12 maanden alleen nog een laag bedrag.',
  },
  {
    category: 'Proces',
    icon: 'calendar',
    question: 'Hoe verloopt het proces van ontwerp tot livegang?',
    answer:
      'We starten met strategie en structuur, werken daarna het design uit en bouwen stap voor stap. Jij houdt alles overzichtelijk in één lijn.',
  },
  {
    category: 'Proces',
    icon: 'scale',
    question: 'Wat als ik later extra pagina’s of functies wil?',
    answer:
      'Geen probleem. We kunnen uitbreiden wanneer je groeit, van extra pagina’s tot custom functionaliteit.',
  },
  {
    category: 'Support',
    icon: 'heart',
    question: 'Doen jullie ook branding naast webdesign?',
    answer:
      'Zeker. Van visuele identiteit tot complete rebranding, afgestemd op jouw fase en doelgroep.',
  },
  {
    category: 'Support',
    icon: 'chat',
    question: 'Hoe werkt support na oplevering?',
    answer:
      'We blijven beschikbaar voor onderhoud, optimalisatie en uitbreidingen. Je zit niet vast, maar wél in goede handen.',
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
    <section className="relative bg-cream px-6 md:px-10 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_23px,rgba(0,0,0,0.03)_24px),linear-gradient(90deg,transparent_23px,rgba(0,0,0,0.03)_24px)] bg-[size:24px_24px]" />
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-text-dark mb-4">Veelgestelde vragen</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Dit zijn de meest voorkomende vragen. Kun je het antwoord niet vinden?{' '}
            <Link href="/contact" className="text-green-dark underline">
              Chat met ons team
            </Link>
            .
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
    </section>
  )
}
