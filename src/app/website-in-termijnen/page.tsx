import type { Metadata } from 'next'
import Link from 'next/link'
import WavyText from '@/components/WavyText'
import WavyUnderline from '@/components/WavyUnderline'
import WavyLineScroll from '@/components/WavyLineScroll'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Website in termijnen laten maken | We Grow Brands',
  description: 'Website in termijnen laten maken? Betaal gespreid met vaste maandtermijnen en krijg een premium website op maat. Geen lease, wel eigenaarschap.',
  keywords: [
    'website in termijnen',
    'website betalen in termijnen',
    'website abonnement',
    'website op afbetaling',
    'website laten maken',
  ],
  openGraph: {
    title: 'Website in termijnen laten maken | We Grow Brands',
    description: 'Website in termijnen laten maken? Betaal gespreid met vaste maandtermijnen en krijg een premium website op maat.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'We Grow Brands',
  },
  alternates: {
    canonical: '/website-in-termijnen',
  },
}

const benefits = [
  {
    icon: '🚀',
    title: 'Direct online',
    description: 'Je kunt snel live met een premium website, zonder de volledige investering vooraf.',
  },
  {
    icon: '📅',
    title: 'Vaste maandtermijnen',
    description: 'Duidelijke afspraken met een aanbetaling en vaste termijnen.',
  },
  {
    icon: '🔑',
    title: 'Geen lease, wel eigenaarschap',
    description: 'De website is van jou. Gespreid betalen, zonder vage constructies.',
  },
]

const steps = [
  {
    icon: '☕',
    title: 'Kennismaking en voorstel',
    description: 'We bespreken je doelen en maken een helder plan met kosten en planning.',
  },
  {
    icon: '✅',
    title: 'Aanbetaling',
    description: 'We starten na een aanbetaling, zodat alles goed gepland en ingepland is.',
  },
  {
    icon: '🎨',
    title: 'Bouwen en afstemmen',
    description: 'Design, content en structuur worden stap voor stap afgestemd.',
  },
  {
    icon: '🎉',
    title: 'Oplevering en termijnen',
    description: 'Je website gaat live en je betaalt de resterende termijnen gespreid.',
  },
]

const faqs = [
  {
    question: 'Kan ik een website in termijnen betalen?',
    answer: 'Ja. Je betaalt een aanbetaling en daarna 6 maandtermijnen. Na 7 maanden ben je volledig eigenaar.',
  },
  {
    question: 'Is dit een website abonnement?',
    answer: 'Nee. Het gaat om gespreide betaling van je website. Na 7 maanden is de website 100% van jou. Hosting en onderhoud zijn optioneel.',
  },
  {
    question: 'Ben ik eigenaar van de website?',
    answer: 'Ja. Na de aanbetaling + 6 maandtermijnen (7 maanden totaal) is je website volledig jouw eigendom.',
  },
  {
    question: 'Kan ik eerder aflossen?',
    answer: 'Dat kan in overleg. We maken hier duidelijke afspraken over.',
  },
]

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website in termijnen laten maken',
    description: 'Premium websites op maat met gespreide betaling en vaste maandtermijnen.',
    provider: {
      '@type': 'Organization',
      name: 'We Grow Brands',
    },
    areaServed: 'NL',
    serviceType: 'Webdesign',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
]

export default function WebsiteInTermijnenPage() {
  return (
    <>
      {/* Hero Section */}
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
            <ScrollReveal animation="fade-up">
              <div className="text-center">
                <h1 className="text-text-dark mb-6">
                  <span className="font-serif">Website in termijnen</span>
                  <br />
                  <span className="relative inline-block serif-header italic text-green-dark">
                    laten maken
                    <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                  </span>
                </h1>
            <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
              Wil je een website in termijnen betalen? Met gespreide betaling krijg je een premium
              website op maat, zonder gedoe. Je betaalt met een aanbetaling en vaste maandtermijnen,
              zodat je snel live kunt en je budget ruimte houdt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:text-green-dark hover:shadow-xl transition-all"
              >
                <WavyText text="Plan een gesprek" />
              </Link>
              <Link
                href="/pakketten"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all"
              >
                <WavyText text="Bekijk pakketten" />
              </Link>
            </div>
            <p className="text-text-muted text-sm mt-4">
              Liever eerst appen?{' '}
              <Link
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center relative top-[3px] text-[#25D366] hover:text-[#1FAF57] transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-5 w-5 fill-current">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </Link>
            </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <ScrollReveal animation="fade-up">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Waarom termijnen</p>
            <h2 className="text-text-dark mb-10">
              <span className="font-serif">Website betalen</span>{' '}
              <span className="relative inline-block serif-header italic text-green-dark">
                in termijnen
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-shadow">
                  <span className="text-2xl mb-3 block">{benefit.icon}</span>
                  <h3 className="text-green-dark font-medium mb-2">{benefit.title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps Section - Donker */}
      <section className="bg-[#1a1a1a] py-20 md:py-28 relative overflow-hidden">
        {/* Decoratieve lila lijn - Desktop */}
        <WavyLineScroll
          className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
          viewBox="0 0 1200 600"
          path="M-100 300 Q 150 100, 400 250 Q 650 400, 900 200 Q 1050 100, 1300 300"
          strokeColor="#EAD7FF"
          strokeWidth={8}
          direction="down"
        />

        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal animation="fade-up">
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Zo werkt het</p>
                <h2 className="text-white mb-6">
                  <span className="font-serif">Website op</span>
                  <br />
                  <span className="relative inline-block serif-header italic text-lila">
                    afbetaling
                    <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                  </span>
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Je investering spreiden zonder concessies aan kwaliteit. We houden het helder,
                  zodat je precies weet waar je aan toe bent.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <ol className="space-y-6">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4 items-start">
                      <span className="text-2xl">{step.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-lila text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
                          <p className="text-white font-medium">{step.title}</p>
                        </div>
                        <p className="text-white/60 text-sm">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Voor wie Section */}
      <section className="bg-green-dark py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Voor wie</p>
          <h2 className="text-white mb-6">
            <span className="font-serif">Voor ondernemers die</span>{' '}
            <span className="relative inline-block serif-header italic text-lila">
              snel willen groeien
              <WavyUnderline color="#EAD7FF" strokeWidth={6} />
            </span>
          </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <span className="text-2xl mb-3 block">💡</span>
                <p className="text-white font-medium mb-2">Starten zonder druk</p>
                <p className="text-white/60 text-sm">Je spreidt de investering en houdt ruimte voor marketing of sales.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <span className="text-2xl mb-3 block">✨</span>
                <p className="text-white font-medium mb-2">Sterke eerste indruk</p>
                <p className="text-white/60 text-sm">Premium design en strategie, ook wanneer je in termijnen betaalt.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <span className="text-2xl mb-3 block">🤝</span>
                <p className="text-white font-medium mb-2">Duidelijke afspraken</p>
                <p className="text-white/60 text-sm">Transparant traject zonder verborgen kosten of contracten.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <ScrollReveal animation="fade-up">
            <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Veelgestelde vragen</p>
            <h2 className="text-text-dark mb-10">
              <span className="font-serif">Website in termijnen</span>{' '}
              <span className="relative inline-block serif-header italic text-green-dark">
                FAQ
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((item) => (
                <div key={item.question} className="bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-shadow">
                  <h3 className="text-green-dark font-medium mb-3">{item.question}</h3>
                  <p className="text-text-muted leading-relaxed text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center bg-[#1a1a1a] rounded-[30px] p-10 md:p-12">
              <h2 className="text-white mb-4">
                <span className="font-serif">Klaar voor een</span>{' '}
                <span className="serif-header italic text-lila">website in termijnen</span>?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
                Plan een gesprek en we bekijken samen of gespreid betalen bij je past.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
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
          </ScrollReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
