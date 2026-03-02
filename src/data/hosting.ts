export const hostingPackages = [
  {
    name: 'Managed Hosting',
    description: 'Betrouwbare hosting op Google Cloud. Wij regelen alles, jij hoeft nergens naar om te kijken.',
    pricing: {
      6: { price: '14,50', priceNumber: 14.50 },
      12: { price: '14,50', priceNumber: 14.50 },
      24: { price: '14,50', priceNumber: 14.50 },
    },
    features: [
      { text: 'High-performance hosting (Google Cloud)', included: true },
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
    popular: false,
  },
  {
    name: 'Onderhoud Basis',
    description: 'Hosting inclusief kleine aanpassingen aan je website. Ideaal als je af en toe iets wilt laten wijzigen.',
    pricing: {
      6: { price: '44,99', priceNumber: 44.99 },
      12: { price: '39,99', priceNumber: 39.99 },
      24: { price: '34,99', priceNumber: 34.99 },
    },
    features: [
      { text: 'High-performance hosting (Google Cloud)', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'Dagelijkse back-ups', included: true },
      { text: '99,9% uptime', included: true },
      { text: 'DDoS-bescherming', included: true },
      { text: 'Malware scanning & verwijdering', included: true },
      { text: '24/7 uptime monitoring', included: true },
      { text: 'Kleine aanpassingen (tekst/afbeeldingen)', included: true },
      { text: 'Layout wijzigingen & nieuwe secties', included: false },
      { text: 'Prioriteit support', included: false },
    ],
    cta: 'Kies Onderhoud Basis',
    popular: true,
  },
  {
    name: 'Onderhoud Plus',
    description: 'Hosting met uitgebreide mogelijkheden. Voor wie regelmatig wil bijwerken en voorrang wil bij support.',
    pricing: {
      6: { price: '59,99', priceNumber: 59.99 },
      12: { price: '54,99', priceNumber: 54.99 },
      24: { price: '49,99', priceNumber: 49.99 },
    },
    features: [
      { text: 'High-performance hosting (Google Cloud)', included: true },
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

export type HostingPeriod = 6 | 12 | 24
export type HostingPackage = typeof hostingPackages[number]
