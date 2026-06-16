export const metadata = {
  title: 'Veelgestelde Vragen (FAQ) - Website Laten Maken | We Grow Brands',
  description: 'Antwoorden op veelgestelde vragen over website laten maken. Lees meer over prijzen, levertijd, pakketten, hosting en onderhoud. Alles wat je moet weten voor je start.',
  alternates: {
    canonical: '/faq/',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe snel kan mijn website live staan?', acceptedAnswer: { '@type': 'Answer', text: 'Meestal binnen 2 tot 4 weken, afhankelijk van de complexiteit en hoe snel we content ontvangen.' } },
    { '@type': 'Question', name: 'Wat voor soort websites maken jullie?', acceptedAnswer: { '@type': 'Answer', text: "We maken premium websites op maat: van landingspagina's en bedrijfswebsites tot portfolio's en webshops. Altijd met focus op branding en conversie." } },
    { '@type': 'Question', name: 'Kan ik mijn huidige website laten vernieuwen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen je graag met een redesign of complete make-over van je bestaande website.' } },
    { '@type': 'Question', name: 'Kan ik in termijnen betalen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Je betaalt een aanbetaling en daarna 6 maandtermijnen. Na 7 maanden ben je volledig eigenaar van je website.' } },
    { '@type': 'Question', name: 'Wanneer word ik eigenaar van mijn website?', acceptedAnswer: { '@type': 'Answer', text: 'Na de aanbetaling en 6 maandtermijnen (totaal 7 maanden) ben je 100% eigenaar. Je website is dan volledig van jou.' } },
    { '@type': 'Question', name: 'Zit hosting en onderhoud erbij?', acceptedAnswer: { '@type': 'Answer', text: 'We raden aan de hosting en onderhoud bij ons te doen, maar het staat je vrij om een eigen hostingprovider te nemen. Bij alle pakketten zit 6 maanden hosting inbegrepen.' } },
    { '@type': 'Question', name: 'Hoeveel feedbackrondes zijn er?', acceptedAnswer: { '@type': 'Answer', text: 'Er zijn altijd 2 feedbackrondes inbegrepen. Extra rondes zijn mogelijk tegen meerprijs.' } },
    { '@type': 'Question', name: 'Hoe verloopt het proces van ontwerp tot livegang?', acceptedAnswer: { '@type': 'Answer', text: 'Het proces verloopt in duidelijke stappen: kennismaking en briefing, strategie en structuur, design, feedback en revisies, ontwikkeling, content en afronding, en ten slotte livegang.' } },
    { '@type': 'Question', name: 'Hoe snel reageren jullie op vragen?', acceptedAnswer: { '@type': 'Answer', text: 'We reageren zo snel als we kunnen. Voor urgente zaken zijn we ook bereikbaar via WhatsApp.' } },
  ],
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
