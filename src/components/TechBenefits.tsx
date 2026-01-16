const benefits = [
  {
    icon: '🤖',
    tech: 'AI-powered performance optimization',
    description: 'Slimme AI houdt automatisch de techniek van je website in orde, zodat alles gewoon lekker blijft werken.',
    bgColor: 'bg-lila-light',
  },
  {
    icon: '✓✓✓',
    tech: 'Core Web Vitals',
    description: 'Snelle websites, minder afhakers en goed voor je Google ranking',
    bgColor: 'bg-cream',
  },
  {
    icon: '☁️',
    tech: 'Google Cloud Hosting',
    description: 'Je website draait op dezelfde techniek als Google zelf. Supersnel, superbetrouwbaar.',
    bgColor: 'bg-lila-light',
  },
  {
    icon: '⚡',
    tech: '99.9% Uptime',
    description: 'Je website is praktisch altijd online.',
    bgColor: 'bg-cream',
  },
  {
    icon: '🔒',
    tech: 'SSL · Firewall · DDoS protection · Malware scanning',
    description: 'Alles wat voorkomt dat je site wordt gehackt of misbruikt.',
    bgColor: 'bg-lila-light',
  },
  {
    icon: '💾',
    tech: 'Automatische backups · One-click restore',
    description: 'Alles om fouten of problemen direct te kunnen herstellen.',
    bgColor: 'bg-cream',
  },
  {
    icon: '🚀',
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

        <div className="bg-white rounded-3xl p-8 border border-black/5 max-w-lg mx-auto">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className={`${benefit.bgColor} p-5 rounded-xl`}>
                <span className="text-2xl block mb-2">{benefit.icon}</span>
                <p className="text-green-dark text-sm font-medium mb-1">{benefit.tech}</p>
                <p className="text-text-muted text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
