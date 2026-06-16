import type { PricingPlan } from '@/components/PricingCard'

export const marketingPackages: PricingPlan[] = [
  {
    name: 'Marketing Basis',
    tagline: 'AI-zichtbaarheid',
    description: 'Blijf zichtbaar en houd contact met je klanten. De basis om online aanwezig te blijven.',
    price: '99',
    priceNote: 'minimaal 3 maanden',
    features: [
      { text: '1 AI-nieuwsbrief per maand, redactioneel afgewerkt', included: true },
      { text: 'AI-SEO-scan met maandelijkse optimalisatie', included: true },
      { text: 'Automatische maandrapportage met AI-inzichten', included: true },
      { text: 'Support via e-mail', included: true },
    ],
    cta: 'Kies Marketing Basis',
    popular: false,
  },
  {
    name: 'Marketing Groei',
    tagline: 'AI-groei',
    description: 'Groei actief in bereik en bezoekers met doorlopend AI-gedreven SEO en content.',
    price: '249',
    priceNote: 'minimaal 3 maanden',
    features: [
      { text: 'Alles uit Basis', included: true },
      { text: '2 AI-nieuwsbrieven per maand', included: true },
      { text: '2 AI-blogartikelen per maand', included: true },
      { text: 'Doorlopend AI-gedreven SEO-werk', included: true },
      { text: 'Maandelijks strategiegesprek', included: true },
    ],
    cta: 'Kies Marketing Groei',
    popular: true,
  },
  {
    name: 'Marketing Pro',
    tagline: 'AI-conversie',
    description: 'Haal het maximale uit je website met betaald verkeer en conversie-optimalisatie.',
    price: '499',
    priceNote: 'minimaal 3 maanden',
    features: [
      { text: 'Alles uit Groei', included: true },
      { text: '4 AI-blogartikelen per maand', included: true },
      { text: 'AI-geoptimaliseerd Google Ads beheer', included: true },
      { text: 'AI-conversie-optimalisatie en A/B-tests', included: true },
      { text: 'Prioriteit support', included: true },
    ],
    cta: 'Kies Marketing Pro',
    popular: false,
  },
]
