import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import WavyText from '@/components/WavyText'

const services = [
  {
    icon: '🧱',
    title: 'Essentials',
    description: 'Voor een sterke, professionele basis. Strak design, helder verhaal en een site waar je trots op bent.',
    price: '€999',
    deposit: '€295',
    term: '€151',
    features: [
      { text: 'Tot 3 pagina\'s', included: true },
      { text: 'Mooi op elk scherm', included: true },
      { text: 'Goed vindbaar', included: true },
      { text: 'Contactformulier', included: true },
      { text: 'Blog functionaliteit', included: false },
      { text: 'Maatwerk animaties', included: false },
    ],
    cta: 'Start met Essentials',
    popular: false,
  },
  {
    icon: '🚀',
    title: 'Groei',
    description: 'Voor bedrijven die willen doorgroeien met meer pagina\'s, meer uitstraling en meer vertrouwen.',
    price: '€1.450',
    deposit: '€395',
    term: '€224',
    features: [
      { text: 'Tot 8 pagina\'s', included: true },
      { text: 'Custom design', included: true },
      { text: 'Meer zichtbaarheid', included: true },
      { text: 'Blog of portfolio', included: true },
      { text: 'Inzicht in bezoekers', included: true },
      { text: 'Maatwerk animaties', included: false },
    ],
    cta: 'Start met Groei',
    popular: true,
  },
  {
    icon: '👨‍💼',
    title: 'Premium',
    description: 'Voor ambitieuze merken die het groots willen aanpakken. Volledig op maat en high-end uitgevoerd.',
    price: '€2.650',
    deposit: '€495',
    term: '€448',
    features: [
      { text: 'Onbeperkt pagina\'s', included: true },
      { text: 'Maatwerk functionaliteit', included: true },
      { text: 'Koppelingen met tools', included: true },
      { text: 'Webshop mogelijk', included: true },
      { text: 'Volledige begeleiding', included: true },
      { text: 'Maatwerk animaties', included: true },
    ],
    cta: 'Start met Premium',
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="diensten" className="bg-[#1a1a1a] min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto text-center w-full">
        <h2 className="text-white mb-4">
          <span className="font-serif">Premium website</span>
          <br />
          <span className="serif-header italic text-[#09604E]">Welke fase je ook bent</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
          Je krijgt een website die past bij je merk, je huisstijl en je groei. Eerlijk,
          helder en professioneel, zonder gedoe of verborgen kosten.
        </p>

        <div className="mb-6 md:mb-8">
          <Link
            href="/contact"
            className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all inline-flex"
          >
            <WavyText text="Vraag een website aan" />
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className="relative">

          <ScrollReveal
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch max-w-5xl mx-auto justify-items-center py-4 md:py-6 lg:py-8"
            animation="fade-up"
            stagger={0.2}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 border transition-all hover:shadow-xl flex flex-col h-full w-full max-w-[340px] text-left ${
                  service.popular
                    ? 'border-green-dark shadow-lg scale-[1.02]'
                    : 'border-black/5 hover:border-black/10'
                }`}
              >
                {service.title === 'Premium' && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-lila text-green-dark text-xs font-medium px-4 py-1.5 rounded-full">
                      Maatwerk
                    </span>
                  </div>
                )}

                <div className="mb-5 min-h-[132px] text-center">
                  <h3 className="text-green-dark text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-4 min-h-[72px] text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    {service.title === 'Premium' && (
                      <span className="text-text-muted/70 text-xs mr-1">vanaf</span>
                    )}
                    <span className="text-green-dark text-3xl font-medium font-serif">
                      {service.price}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-text-dark text-xs font-medium uppercase tracking-wider mb-3 text-center">
                    Wat je krijgt
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <span className="w-5 h-5 rounded-full bg-green-dark/10 flex items-center justify-center flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-dark">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-text-muted/50">
                              <line x1="5" y1="12" x2="19" y2="12"/>
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
                    <WavyText text={service.cta} />
                  </Link>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <p className="text-white/70 text-xs md:text-sm mt-6 md:mt-8 lg:mt-10">
          <Link
            href="/website-in-termijnen"
            className="text-lila underline underline-offset-4 hover:text-[#D6BCFF] transition-colors"
          >
            Bekijk onze mogelijkheden en voorwaarden voor betaling
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
