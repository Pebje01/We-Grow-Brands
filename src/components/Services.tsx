const services = [
  {
    icon: '🌱',
    title: 'Essentials',
    description: 'Als startende ondernemer sterk beginnen, of een verouderde website upgraden. Kies dit pakket als je toe bent aan het mooiste visitekaartje voor jouw bedrijf!',
    price: '€999 eenmalig',
    unit: 'of vanaf € 99,- per maand',
  },
  {
    icon: '🚀',
    title: 'Grow',
    description: 'Soms groei je je jasje uit en ben je toe aan meer. Behoefte aan een professionele website met meerdere pagina&apos;s? Volledig maatwerk, tot 10 pagina&apos;s met premium design.',
    price: '€1750 eenmalig',
    unit: 'of vanaf € 112,- per maand',
  },
  {
    icon: '💎',
    title: 'Premium',
    description: 'Ben je toe aan rebranding, complexere technieken, of heb je veel pagina&apos;s? Kies voor het premium pakket. In dit pakket is niets onmogelijk, de digitale sky is the limit.',
    price: 'v.a. € 2500',
    unit: 'of € 208,- per maand',
  },
]

export default function Services() {
  return (
    <section id="diensten" className="bg-lila-light py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-text-dark mb-4">
          <span className="font-serif">Kies een website</span>{' '}
          <span className="serif-header">bij de fase van jouw bedrijf</span>
        </h2>
        <p className="text-text-muted max-w-lg mx-auto leading-relaxed mb-4">
          Elke ondernemer zit in een andere fase, maar dat betekent niet dat jouw website minder mooi en professioneel hoeft te zijn. Of je nu zelf bouwt, een grow pakket of premium pakket nodig hebt, custom design en functionaliteit staan voorop.
        </p>
        <p className="text-text-muted text-sm mb-10">
          * Alle pakketten beschikbaar met flexibele betalingsmogelijkheden.
          Na 12 maanden ben je volledig eigenaar van je website. Je betaalt alleen nog een laag bedrag voor hosting en onderhoud per maand (€ 12,95) of voor aanpassingen en functionaliteiten naar keuze.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-left border border-black/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-lila rounded-2xl flex items-center justify-center text-2xl mb-5">
                {service.icon}
              </div>
              <h3 className="text-text-dark mb-2">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{service.description}</p>
              <p className="font-serif text-3xl text-green-dark">
                {service.price} <span className="text-sm text-text-muted font-serif">{service.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
