'use client'

import WavyText from '@/components/WavyText'
import { Link } from '@/i18n/routing'

export type Offer = {
  icon: string
  title: string
  subtitle: string
  price: string
  priceUnit: string
  priceNote: string
  items: string[]
  cta: string
}

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl transition-all flex flex-col w-full max-w-[400px]">
      <div className="text-center mb-6">
        <span className="text-4xl mb-3 block">{offer.icon}</span>
        <h3 className="text-green-dark text-xl font-medium mb-2">{offer.title}</h3>
        <p className="text-text-muted text-sm">{offer.subtitle}</p>
      </div>

      <div className="text-center mb-6 py-4 border-y border-black/5">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-green-dark text-3xl font-medium font-serif">&euro;{offer.price}</span>
          <span className="text-text-muted/70 text-xs">{offer.priceUnit}</span>
        </div>
        <p className="text-text-muted text-xs mt-1">{offer.priceNote}</p>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {offer.items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-500">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className="text-text-dark text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="btn-spring btn-uniform btn-no-lila link-wave w-full inline-flex justify-center bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all"
      >
        <WavyText text={offer.cta} />
      </Link>
    </div>
  )
}
