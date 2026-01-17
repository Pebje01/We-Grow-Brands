const benefits = [
  {
    tech: 'AI-powered performance optimization',
    description: 'Slimme AI zorgt ervoor dat je website goed blijft werken.',
    bgColor: 'bg-lila-light',
  },
  {
    tech: 'Core Web Vitals',
    description: 'Snelle websites, minder afhakers en goed voor je Google ranking',
    bgColor: 'bg-cream',
  },
  {
    tech: 'Google Cloud Hosting',
    description: 'Je website draait op dezelfde techniek als Google zelf. Supersnel, superbetrouwbaar.',
    bgColor: 'bg-lila-light',
  },
  {
    tech: '99.9% Uptime',
    description: 'Je website is praktisch altijd online.',
    bgColor: 'bg-cream',
  },
  {
    tech: 'SSL · Firewall · DDoS protection · Malware scanning',
    description: 'Alles wat voorkomt dat je site wordt gehackt of misbruikt.',
    bgColor: 'bg-lila-light',
  },
  {
    tech: 'Automatische backups · One-click restore',
    description: 'Alles om fouten of problemen direct te kunnen herstellen.',
    bgColor: 'bg-cream',
  },
  {
    tech: 'Caching · Image Optimization · Server-side optimization',
    description: 'Alles wat zorgt dat je site snel laadt en prettig werkt.',
    bgColor: 'bg-lila-light',
  },
]

export default function TechBenefits() {
  return (
    <section className="bg-cream py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-text-dark leading-tight mb-4">
            <span className="font-serif">Oké, en nu even in </span>{' '}
            <span className="serif-header">gewone mensentaal</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Achter elke website zit solide techniek. Dit is wat jouw website krijgt.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-black/5 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className={`${benefit.bgColor} p-5 rounded-xl`}>
                <p className="text-text-muted text-xs mb-1">{benefit.tech}</p>
                <p className="font-serif text-lg text-green-dark flex items-start gap-2">
                  <span className="text-green-dark">✓</span>
                  <span>{benefit.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
