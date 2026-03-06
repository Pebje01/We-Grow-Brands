'use client'

import { useState } from 'react'

const euro = (n: number) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n)

const factuur = {
  number: '2026F-0306-02',
  date: '6 maart 2026',
  dueDate: '20 maart 2026',
  status: 'open' as const,
  client: {
    name: 'Van Rijn Works',
    contactPerson: 'Billy van Rijn',
    email: 'billy@vanrijnworks.nl',
    website: 'www.vanrijnworks.nl',
    kvk: '97069116',
    btw: 'NL005247707B10',
    referentie: 'OF-260223-01',
  },
  items: [
    {
      id: '1',
      name: 'Website Design & Development',
      description: 'Professionele website voor vanrijnworks.nl inclusief ontwerp, development, responsive design en oplevering.',
      quantity: 1,
      price: 500,
      badge: 'Speciaal tarief',
    },
  ],
  subtotal: 500,
  btwPercentage: 21,
  btwAmount: 105,
  total: 605,
  paymentUrl: 'https://betaalverzoek.knab.nl/rQZ9UfBb4leRi-O_',
}

export default function FactuurPage() {
  const [copied, setCopied] = useState(false)

  const copyIban = () => {
    navigator.clipboard.writeText('NL78KNAB0414394917')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto py-8 px-4 md:py-16">
        <div className="bg-white rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl">

          {/* Header */}
          <div className="bg-[#03483A] px-8 py-8 md:px-12 md:py-10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h1 className="font-serif text-2xl text-white mb-2">We Grow Brands</h1>
                <p className="text-sm text-white/80">Daley Jansen</p>
                <p className="text-sm text-white/80">Noorderpad 47, 1461CD Zuidoostbeemster</p>
                <p className="text-sm text-white/80">hello@wegrowbrands.online | 0636162639</p>
                <p className="text-xs text-white/50 mt-1">KVK: 84818883 | BTW: NL004023224B90</p>
              </div>
              <div className="text-left md:text-right space-y-2">
                <div>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Factuurnummer</p>
                  <p className="text-sm text-white font-medium">{factuur.number}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Factuurdatum</p>
                  <p className="text-sm text-white">{factuur.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Vervaldatum</p>
                  <p className="text-sm text-white">{factuur.dueDate}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Status</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-yellow-100 text-yellow-700">
                    Open
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8 md:px-12 md:py-10 space-y-8">

            {/* Title */}
            <div>
              <h2 className="font-serif text-3xl text-[#03483A] mb-1">FACTUUR</h2>
              <p className="text-[#3a3a3a]">Website Design &amp; Development – vanrijnworks.nl</p>
            </div>

            {/* Factuurgegevens klant */}
            <div>
              <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 mb-4">
                <h3 className="font-serif text-lg text-white">Factuurgegevens klant</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm">
                <div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">Bedrijfsnaam</p>
                    <p className="text-[#1a1a1a]">{factuur.client.name}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">Contactpersoon</p>
                    <p className="text-[#1a1a1a]">{factuur.client.contactPerson}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">KVK</p>
                    <p className="text-[#1a1a1a]">{factuur.client.kvk}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">BTW-nummer</p>
                    <p className="text-[#1a1a1a]">{factuur.client.btw}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">Email</p>
                    <p className="text-[#1a1a1a]">{factuur.client.email}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">Website</p>
                    <p className="text-[#1a1a1a]">{factuur.client.website}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#03483A]">Referentie / Offertenummer</p>
                    <p className="text-[#1a1a1a]">{factuur.client.referentie}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Omschrijving */}
            <div>
              <div className="bg-[#1a1a1a] rounded-lg px-4 py-2 mb-4">
                <h3 className="font-serif text-lg text-white">Omschrijving</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#03483A] text-white text-left">
                      <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide rounded-tl-lg">Dienst</th>
                      <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide">Beschrijving</th>
                      <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide text-center">Aantal</th>
                      <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wide text-right rounded-tr-lg">Prijs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {factuur.items.map(item => (
                      <tr key={item.id} className="border-b border-[#EBE5DC]">
                        <td className="px-4 py-4 align-top">
                          <span className="font-semibold text-[#03483A]">{item.name}</span>
                        </td>
                        <td className="px-4 py-4 align-top">
                          <p className="text-[#3a3a3a] text-xs leading-relaxed">{item.description}</p>
                          {item.badge && (
                            <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-center align-top">{item.quantity}x</td>
                        <td className="px-4 py-4 text-right align-top whitespace-nowrap">{euro(item.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between px-4 py-1 text-sm text-[#3a3a3a]">
                <span>Subtotaal (excl. BTW)</span>
                <span>{euro(factuur.subtotal)}</span>
              </div>
              <div className="flex justify-between px-4 py-1 text-sm text-[#3a3a3a]">
                <span>BTW {factuur.btwPercentage}%</span>
                <span>{euro(factuur.btwAmount)}</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-[#03483A] text-white rounded-lg font-semibold">
                <span>Totaal (incl. BTW)</span>
                <span>{euro(factuur.total)}</span>
              </div>
            </div>

            {/* Payment info */}
            <div className="bg-[#F5F0E8] rounded-xl p-6 border-l-4 border-[#03483A]">
              <h4 className="font-serif text-base font-semibold text-[#03483A] mb-3">Betaalinformatie</h4>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm text-[#3a3a3a]">
                <span className="font-semibold text-[#03483A]">IBAN:</span>
                <span>
                  NL78 KNAB 0414 3949 17
                  <button
                    onClick={copyIban}
                    className="ml-2 text-xs text-[#03483A]/60 hover:text-[#03483A] transition"
                    title="Kopieer IBAN"
                  >
                    {copied ? 'Gekopieerd!' : 'Kopieer'}
                  </button>
                </span>
                <span className="font-semibold text-[#03483A]">T.n.v.:</span>
                <span>D.J. Jansen / We Grow Brands</span>
                <span className="font-semibold text-[#03483A]">Onder vermelding van:</span>
                <span>Factuurnummer {factuur.number}</span>
                <span className="font-semibold text-[#03483A]">Betalingstermijn:</span>
                <span>14 dagen na factuurdatum</span>
              </div>
              <a
                href={factuur.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#03483A] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#025d4a] transition"
              >
                Direct betalen
              </a>
            </div>
          </div>
        </div>

        {/* Subtle footer */}
        <p className="text-center text-xs text-white/30 mt-6">
          We Grow Brands &middot; hello@wegrowbrands.online
        </p>
      </div>
    </main>
  )
}
