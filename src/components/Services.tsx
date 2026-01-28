import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import WavyText from '@/components/WavyText'
import WavyLineScroll from '@/components/WavyLineScroll'
import { packages } from '@/data/packages'

export default function Services() {
  return (
    <section id="diensten" className="bg-[#1a1a1a] min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0 relative overflow-hidden">
      {/* Decoratieve golvende lila lijn - Desktop (linksboven naar rechtsonder) */}
      <WavyLineScroll
        className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none opacity-60"
        viewBox="0 0 1200 800"
        path="M-100 50 Q 100 150, 300 100 Q 500 50, 700 200 Q 900 350, 1100 300 Q 1250 250, 1300 400"
        strokeColor="#EAD7FF"
        strokeWidth={8}
        direction="up"
      />

      {/* Decoratieve golvende lila lijn - Mobiel (linksboven naar rechtsonder) */}
      <WavyLineScroll
        className="md:hidden absolute top-0 left-0 w-full h-full pointer-events-none opacity-60"
        viewBox="0 0 400 600"
        path="M-20 30 C 100 80, 50 150, 150 200 C 250 250, 180 350, 300 420 C 380 470, 350 550, 420 620"
        strokeColor="#EAD7FF"
        strokeWidth={6}
        direction="up"
      />

      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto text-center w-full relative z-10">
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
            {packages.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 border transition-all hover:shadow-xl flex flex-col h-full w-full max-w-[340px] text-left ${
                  service.popular
                    ? 'border-green-dark shadow-lg scale-[1.02]'
                    : 'border-black/5 hover:border-black/10'
                }`}
              >
                {service.name === 'Premium' && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-lila text-green-dark text-xs font-medium px-4 py-1.5 rounded-full">
                      Maatwerk
                    </span>
                  </div>
                )}

                <div className="mb-5 min-h-[132px] text-center">
                  <h3 className="text-green-dark text-xl font-medium mb-2">{service.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-4 min-h-[72px] text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    {service.name === 'Premium' && (
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
