import type { PricingPlan } from '@/components/PricingCard'

export const hostingStandalone: PricingPlan = {
  name: 'Managed Hosting',
  description: 'Betrouwbare Europese hosting binnen de EU. Wij regelen alles, jij hoeft nergens naar om te kijken.',
  price: '14,50',
  priceNote: 'maandelijks opzegbaar',
  features: [
    { text: 'Europese hosting (EU, AVG-compliant)', included: true },
    { text: 'SSL-certificaat', included: true },
    { text: 'Dagelijkse back-ups', included: true },
    { text: '99,9% uptime', included: true },
    { text: 'DDoS-bescherming', included: true },
    { text: 'Malware scanning & verwijdering', included: true },
    { text: '24/7 uptime monitoring', included: true },
    { text: 'Kleine aanpassingen (tekst/afbeeldingen)', included: false },
    { text: 'Layout wijzigingen & nieuwe secties', included: false },
    { text: 'Prioriteit support', included: false },
  ],
  cta: 'Kies Managed Hosting',
}

export const maintenancePackages: PricingPlan[] = [
  {
    name: 'Onderhoud Basis',
    description: 'Hosting inclusief kleine aanpassingen aan je website. Ideaal als je af en toe iets wilt laten wijzigen.',
    price: '44,99',
    priceNote: 'maandelijks opzegbaar',
    features: [
      { text: 'Europese hosting (EU, AVG-compliant)', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Dagelijkse back-ups', included: true },
      { text: '99,9% uptime', included: true },
      { text: 'DDoS-bescherming', included: true },
      { text: 'Malware scanning & verwijdering', included: true },
      { text: '24/7 uptime monitoring', included: true },
      { text: '1 aanpassing tekst of beeld', included: true },
      { text: 'Layout wijzigingen & nieuwe secties', included: false },
      { text: 'Prioriteit support', included: false },
    ],
    cta: 'Kies Onderhoud Basis',
    popular: true,
  },
  {
    name: 'Onderhoud Plus',
    description: 'Hosting met uitgebreide mogelijkheden. Voor wie regelmatig wil bijwerken en voorrang wil bij support.',
    price: '99,00',
    priceNote: 'maandelijks opzegbaar',
    features: [
      { text: 'Europese hosting (EU, AVG-compliant)', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Dagelijkse back-ups', included: true },
      { text: '99,9% uptime', included: true },
      { text: 'DDoS-bescherming', included: true },
      { text: 'Malware scanning & verwijdering', included: true },
      { text: '24/7 uptime monitoring', included: true },
      { text: 'Kleine aanpassingen (tekst/afbeeldingen)', included: true },
      { text: 'Layout wijzigingen & nieuwe secties', included: true },
      { text: 'Prioriteit support', included: true },
    ],
    cta: 'Kies Onderhoud Plus',
    popular: false,
  },
]
