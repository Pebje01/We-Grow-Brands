'use client'

import WavyText from '@/components/WavyText'
import { Link } from '@/i18n/routing'

export type PricingFeature = { text: string; included: boolean }

export type PricingPlan = {
  name: string
  tagline?: string
  description: string
  price: string
  priceNote: string
  features: PricingFeature[]
  cta: string
  popular?: boolean
}

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative bg-white rounded-3xl p-8 border transition-all hover:shadow-xl flex flex-col h-full w-full max-w-[340px] ${
        plan.popular
          ? 'border-green-dark shadow-lg scale-[1.02]'
          : 'border-black/5 hover:border-black/10'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-lila text-green-dark text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
            Populairst
          </span>
        </div>
      )}

      <div className="mb-4 h-[150px] text-center flex flex-col justify-end">
        <h3 className="text-green-dark text-xl font-medium">{plan.name}</h3>
        {plan.tagline && (
          <p className="text-green-dark/55 text-[11px] font-bold uppercase tracking-[0.12em] mt-1">
            {plan.tagline}
          </p>
        )}
        <p className="text-text-muted text-sm leading-snug mt-2">{plan.description}</p>
      </div>

      <div className="mb-4 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-green-dark text-3xl font-medium font-serif">
            &euro;{plan.price}
          </span>
          <span className="text-text-muted/70 text-xs">/ maand</span>
        </div>
        <p className="text-text-muted/70 text-xs mt-1">{plan.priceNote}</p>
      </div>

      <div className="flex-1">
        <p className="text-green-dark text-xs font-bold uppercase tracking-wider mb-3">
          Wat je krijgt
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature.text} className="flex items-center gap-3">
              {feature.included ? (
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
              ) : (
                <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-red-500">
                    <line x1="6" y1="6" x2="18" y2="18"/>
                    <line x1="6" y1="18" x2="18" y2="6"/>
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

      <div className="mt-6 pt-6 border-t border-black/5">
        <Link
          href="/contact"
          className="btn-spring btn-uniform btn-no-lila link-wave w-full inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
        >
          <WavyText text={plan.cta} />
        </Link>
      </div>
    </div>
  )
}
