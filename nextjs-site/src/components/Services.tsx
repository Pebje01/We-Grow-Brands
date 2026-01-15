const services = [
  {
    icon: '🌱',
    title: 'Essentieel',
    description: 'Ideaal voor startende ondernemers. Een professionele one-page website die uw merk waardig vertegenwoordigt en converteert.',
    price: '€1.500',
    unit: 'eenmalig',
  },
  {
    icon: '🚀',
    title: 'Premium Website',
    description: 'Volledig maatwerk website met alle gewenste functionaliteiten. Voor merken die willen uitblinken in professionaliteit.',
    price: '€2.500+',
    unit: 'eenmalig',
  },
  {
    icon: '💎',
    title: 'Complete Transformatie',
    description: 'Holistische digitale strategie inclusief website, branding en voortdurende optimalisatie. Voor merken die de volgende stap willen zetten.',
    price: '€3.500+',
    unit: 'traject',
  },
]

export default function Services() {
  return (
    <section id="diensten" className="bg-lila-light py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-dark font-normal italic mb-4">
          Kies uw professionele traject
        </h2>
        <p className="text-text-muted max-w-lg mx-auto leading-relaxed mb-4">
          Van elegante landingspagina&apos;s tot complete digitale aanwezigheid. Voor mooie merken die willen uitblinken, nu ook toegankelijk voor ambitieuze starters.
        </p>
        <p className="text-text-muted text-sm mb-12">
          Alle pakketten beschikbaar met flexibele betalingsmogelijkheden in meerdere delen.
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
              <h3 className="font-serif text-2xl text-text-dark mb-2">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{service.description}</p>
              <p className="font-serif text-3xl text-green-dark">
                {service.price} <span className="text-sm text-text-muted font-sans">{service.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
