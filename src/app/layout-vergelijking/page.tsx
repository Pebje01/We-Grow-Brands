'use client'

import { useState } from 'react'
import Link from 'next/link'
import WavyText from '@/components/WavyText'
import ScrollReveal from '@/components/ScrollReveal'

const servicesData = [
  {
    icon: '🧱',
    title: 'Essentials',
    description: 'Voor een sterke, professionele basis. Strak design, helder verhaal en een site waar je trots op bent.',
    price: '€999',
    unit: 'eenmalig',
    features: ['Tot 5 pagina\'s', 'Mooi op elk scherm', 'Goed vindbaar', 'Contactformulier'],
    popular: false,
  },
  {
    icon: '🚀',
    title: 'Groei',
    description: 'Voor bedrijven die willen doorgroeien met meer pagina\'s, meer uitstraling en meer vertrouwen.',
    price: '€1.450',
    unit: 'eenmalig',
    features: ['Tot 8 pagina\'s', 'Custom design', 'Meer zichtbaarheid', 'Blog of portfolio', 'Inzicht in bezoekers'],
    popular: true,
  },
  {
    icon: '👨‍💼',
    title: 'Premium',
    description: 'Voor ambitieuze merken die het groots willen aanpakken. Volledig op maat en high-end uitgevoerd.',
    price: '€2.650+',
    unit: '+',
    features: ['Onbeperkt pagina\'s', 'Maatwerk functionaliteit', 'Koppelingen met tools', 'Webshop mogelijk', 'Volledige begeleiding'],
    popular: false,
  },
]

const plans = [
  {
    name: 'Essentials',
    description: 'Perfect voor starters en kleine ondernemers die wel willen investeren in een hoogwaardige website.',
    price: { monthly: 999, annual: 151 },
    deposit: 295,
    oneTime: true,
    features: [
      { text: 'Tot 3 pagina\'s', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Basis SEO-optimalisatie', included: true },
      { text: 'Contact- en andere formulieren', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'CMS voor zelf bewerken', included: false },
      { text: 'Blog functionaliteit', included: false },
      { text: 'Maatwerk animaties', included: false },
    ],
    cta: 'Start met Essentials',
    buttonColor: 'bg-[#F0E6FF] hover:bg-[#E5D6FF]',
    popular: false,
  },
  {
    name: 'Groei',
    description: 'Voor bedrijven die willen groeien met een website die meebeweegt met hun ambities.',
    price: { monthly: 1450, annual: 224 },
    deposit: 395,
    oneTime: true,
    buttonColor: 'bg-[#D6BCFF] hover:bg-[#C9A8FF]',
    features: [
      { text: 'Tot 8 pagina\'s', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Basis SEO-optimalisatie', included: true },
      { text: 'Contact- en andere formulieren', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'CMS voor zelf bewerken', included: true },
      { text: 'Blog functionaliteit', included: true },
      { text: 'Maatwerk animaties', included: false },
    ],
    cta: 'Start met Groei',
    popular: true,
  },
  {
    name: 'Premium',
    description: 'Volledig maatwerk voor ambitieuze merken met grote plannen en specifieke wensen.',
    price: { monthly: 2650, annual: 448 },
    deposit: 495,
    oneTime: true,
    features: [
      { text: 'Onbeperkt pagina\'s', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Complete SEO-strategie', included: true },
      { text: 'Geavanceerde formulieren', included: true },
      { text: 'SSL-certificaat', included: true },
      { text: 'CMS voor zelf bewerken', included: true },
      { text: 'Blog functionaliteit', included: true },
      { text: 'Maatwerk animaties', included: true },
    ],
    cta: 'Start met Premium',
    buttonColor: 'bg-[#B794F6] hover:bg-[#A67DF0]',
    popular: false,
  },
]

export default function LayoutVergelijking() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-center mb-12">Layout Vergelijking</h1>

        {/* SECTION 1: HOMEPAGE LAYOUT (Services.tsx structure) WITH NEW FONTS */}
        <div className="mb-24 border-b border-gray-200 pb-24">
          <div className="text-center mb-8">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Optie A (Modified Fonts)</span>
            <h2 className="text-2xl mt-2 font-bold">Homepage Layout (Modified)</h2>
            <p className="text-gray-600">Structuur van homepagina, fonts van pakkettenpagina.</p>
          </div>
          
          <section className="bg-lila-light py-24 px-8 rounded-[30px]">
            <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto text-center">
              <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Onze belofte</p>
              <h2 className="text-text-dark mb-4">
                <span className="font-serif">Premium websites</span>{' '}
                <span className="serif-header">zonder leaseconstructies</span>
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto leading-relaxed mb-4">
                Je krijgt een website die past bij je merk, je huisstijl en je groei. Eerlijk,
                helder en professioneel, zonder gedoe of verborgen kosten.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-8 text-left border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative ${ 
                      service.popular ? 'border-lila border-2' : 'border-black/5'
                    }`}
                  >
                    {service.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lila text-green-dark px-3 py-1 rounded-full text-xs font-medium">
                        Meest gekozen
                      </span>
                    )}
                    <div className="w-14 h-14 bg-lila rounded-2xl flex items-center justify-center text-2xl mb-5">
                      {service.icon}
                    </div>
                    
                    {/* TITLE WITH NEW FONT */}
                    <h3 className="text-green-dark text-xl font-medium mb-2">{service.title}</h3>
                    
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-text-muted text-sm">
                          <span className="text-lila">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* PRICE WITH NEW FONT */}
                    <p className="text-green-dark text-3xl font-serif">
                      {service.price} <span className="text-sm text-text-muted font-sans">{service.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* SECTION 2: PAKKETTEN PAGE LAYOUT */}
        <div className="mb-24 border-b border-gray-200 pb-24">
          <div className="text-center mb-8">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Optie B</span>
            <h2 className="text-2xl mt-2 font-bold">Pakketten Page Layout</h2>
            <p className="text-gray-600">Focus op details, vergelijking en conversie. Uitgebreide feature lists.</p>
          </div>

          <div className="bg-cream py-12 px-8 rounded-[30px]">
             {/* Billing Toggle (Kopie van Pakketten pagina) */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1.5 inline-flex shadow-sm border border-black/5">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${ 
                    billingPeriod === 'monthly'
                      ? 'bg-green-dark text-white shadow-md'
                      : 'text-text-muted hover:text-text-dark'
                  }`}
                >
                  Eenmalig
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${ 
                    billingPeriod === 'annual'
                      ? 'bg-green-dark text-white shadow-md'
                      : 'text-text-muted hover:text-text-dark'
                  }`}
                >
                  Maandelijks
                </button>
              </div>
            </div>

            {/* Pricing Cards (Kopie van Pakketten pagina) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 items-stretch max-w-5xl mx-auto justify-items-center">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl p-8 border transition-all hover:shadow-xl flex flex-col h-full w-full max-w-[300px] ${ 
                    plan.popular
                      ? 'border-green-dark shadow-lg scale-[1.02]'
                      : 'border-black/5 hover:border-black/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-green-dark text-white text-xs font-medium px-4 py-1.5 rounded-full">
                        Meest gekozen
                      </span>
                    </div>
                  )}

                  <div className="mb-5 min-h-[132px] text-center">
                    <h3 className="text-green-dark text-xl font-medium mb-2">{plan.name}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="mb-4 min-h-[96px] text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.name === 'Premium' && (
                        <span className="text-text-muted/70 text-xs mr-1">vanaf</span>
                      )}
                      <span className="text-green-dark text-3xl font-medium font-serif">
                        €{billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual}
                      </span>
                      <span className="text-text-muted/70 text-xs">
                        {billingPeriod === 'monthly' ? 'eenmalig' : '/ maand'}
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className="text-text-muted/70 text-xs mt-1">
                        {plan.name === 'Premium' && 'vanaf '}€{plan.deposit} aanbetaling, daarna 6× €{plan.price.annual}
                      </p>
                    )}
                  </div>

                  <div className="min-h-[52px] mb-6 flex items-start justify-center">
                    <Link
                      href="/contact"
                      className={`btn-spring btn-uniform btn-no-lila link-wave inline-block text-center transition-all hover:shadow-lg text-green-dark ${plan.buttonColor}`}
                    >
                      <WavyText text={plan.cta} />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <p className="text-text-dark text-xs font-medium uppercase tracking-wider mb-3 text-center">
                      Wat je krijgt
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-3">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: PAKKETTEN PAGE LAYOUT (COMPACT & CENTERED) */}
        <div>
          <div className="text-center mb-8">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Optie B (Compact)</span>
            <h2 className="text-2xl mt-2 font-bold">Pakketten Layout - Compact</h2>
            <p className="text-gray-600">Meer gecentreerd en dichter op elkaar, dezelfde huisstijl.</p>
          </div>

          <div className="bg-cream py-10 px-8 rounded-[30px]">
            {/* Billing Toggle (compact) */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1.5 inline-flex shadow-sm border border-black/5">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-green-dark text-white shadow-md'
                      : 'text-text-muted hover:text-text-dark'
                  }`}
                >
                  Eenmalig
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    billingPeriod === 'annual'
                      ? 'bg-green-dark text-white shadow-md'
                      : 'text-text-muted hover:text-text-dark'
                  }`}
                >
                  Maandelijks
                </button>
              </div>
            </div>

            {/* Pricing Cards (compact) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={`${plan.name}-compact`}
                  className={`relative bg-white rounded-3xl px-7 py-6 border transition-all hover:shadow-xl flex flex-col h-full text-center ${
                    plan.popular
                      ? 'border-green-dark shadow-lg scale-[1.01]'
                      : 'border-black/5 hover:border-black/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-green-dark text-white text-xs font-medium px-4 py-1.5 rounded-full">
                        Meest gekozen
                      </span>
                    </div>
                  )}

                  <div className="mb-2">
                    <h3 className="text-green-dark text-xl font-medium mb-2">{plan.name}</h3>
                    <p className="text-text-muted text-sm leading-snug">{plan.description}</p>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.name === 'Premium' && (
                        <span className="text-text-muted/70 text-xs mr-1">vanaf</span>
                      )}
                      <span className="text-green-dark text-3xl font-medium font-serif">
                        €{billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual}
                      </span>
                      <span className="text-text-muted/70 text-xs">
                        {billingPeriod === 'monthly' ? 'eenmalig' : '/ maand'}
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className="text-text-muted/70 text-xs mt-1">
                        {plan.name === 'Premium' && 'vanaf '}€{plan.deposit} aanbetaling, daarna 6× €{plan.price.annual}
                      </p>
                    )}
                  </div>

                  <div className="mb-3 flex items-start justify-center">
                    <Link
                      href="/contact"
                      className="btn-spring btn-uniform btn-hover-lila link-wave inline-block text-center transition-all hover:shadow-lg bg-green-dark text-cream"
                    >
                      <WavyText text={plan.cta} />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <p className="text-text-dark text-xs font-medium uppercase tracking-wider mb-3">
                      Wat je krijgt
                    </p>
                    <ul className="space-y-2 text-text-muted text-sm mx-auto max-w-[240px] text-left">
                      {plan.features.map((feature) => (
                        <li key={`${plan.name}-${feature.text}-compact`} className="flex items-start gap-2">
                          <span className={`${feature.included ? 'text-green-dark' : 'text-text-muted/40'} mt-0.5`}>•</span>
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
