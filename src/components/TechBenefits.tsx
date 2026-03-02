'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from 'next-intl'

export default function TechBenefits() {
  const t = useTranslations('techBenefits')

  const benefits = [
    { techDetails: t('benefits.1.techDetails'), title: t('benefits.1.title') },
    { techDetails: t('benefits.2.techDetails'), title: t('benefits.2.title') },
    { techDetails: t('benefits.3.techDetails'), title: t('benefits.3.title') },
    { techDetails: t('benefits.4.techDetails'), title: t('benefits.4.title') },
    { techDetails: t('benefits.5.techDetails'), title: t('benefits.5.title') },
    { techDetails: t('benefits.6.techDetails'), title: t('benefits.6.title') },
  ]

  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 md:gap-8 lg:gap-10 items-start">
          <ScrollReveal animation="slide-left">
            <h2 className="text-text-dark mb-4" style={{ lineHeight: 0.95 }}>
              <span className="font-serif">{t('title1')}</span>
              <br />
              <span className="serif-header italic text-green-dark">
                {t('titleHighlight')}{' '}
                <span className="relative inline-block">
                  {t('titleHighlight2')}
                  <svg
                    className="absolute bottom-[-12px] left-0 w-full h-4"
                    viewBox="0 0 200 16"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10 Q 30 4, 60 9 T 120 8 T 198 10"
                      stroke="#D6BCFF"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-hand-draw"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mt-6">
              {t('subtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
            animation="slide-right"
            stagger={0.1}
          >
            {benefits.map((benefit, index) => (
              <div key={index}>
                {/* Mobile: stacked card with both texts */}
                <div className="md:hidden bg-green-dark rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3">
                  <p className="text-white/40 text-xs leading-relaxed line-through decoration-white/20">
                    {benefit.techDetails}
                  </p>
                  <div className="w-8 h-px bg-lila/40" />
                  <p className="text-white text-sm leading-relaxed font-medium">
                    {benefit.title}
                  </p>
                </div>

                {/* Desktop: flip card */}
                <div className="hidden md:block flip-card-tech h-[180px] lg:h-[200px]">
                  <div className="flip-card-inner-tech">
                    <div className="flip-card-front-tech bg-green-dark rounded-2xl border border-white/10 p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                      <p className="text-white/90 text-sm leading-relaxed">
                        {benefit.techDetails}
                      </p>
                    </div>
                    <div className="flip-card-back-tech bg-white rounded-2xl border border-green-dark/15 p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                      <p className="text-green-dark text-sm leading-relaxed">
                        {benefit.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
