const benefits = [
  {
    tech: 'AI-powered performance optimization',
    icon: '🤖',
    description: 'Slimme AI houdt automatisch de techniek van je website in orde, zodat alles gewoon lekker blijft werken.',
    color: 'bg-lila',
    textColor: 'text-green-dark',
  },
  {
    tech: 'Core Web Vitals',
    icon: '✓✓✓',
    description: 'Snelle websites, minder afhakers en goed voor je Google ranking',
    color: 'bg-cream',
    textColor: 'text-green-dark',
  },
  {
    tech: 'Google Cloud Hosting',
    icon: '☁️',
    description: 'Je website draait op dezelfde techniek als Google zelf. Supersnel, superbetrouwbaar.',
    color: 'bg-green-dark',
    textColor: 'text-white',
  },
  {
    tech: '99.9% Uptime',
    icon: '⚡',
    description: 'Je website is praktisch altijd online.',
    color: 'bg-lila-light',
    textColor: 'text-green-dark',
  },
  {
    tech: 'SSL · Firewall · DDoS protection · Malware scanning',
    icon: '🔒',
    description: 'Alles wat voorkomt dat je site wordt gehackt of misbruikt.',
    color: 'bg-green-dark',
    textColor: 'text-white',
  },
  {
    tech: 'Automatische backups · One-click restore',
    icon: '💾',
    description: 'Alles om fouten of problemen direct te kunnen herstellen.',
    color: 'bg-cream',
    textColor: 'text-green-dark',
  },
  {
    tech: 'Caching · Image Optimization · Server-side optimization',
    icon: '🚀',
    description: 'Alles wat zorgt dat je site snel laadt en prettig werkt.',
    color: 'bg-lila',
    textColor: 'text-green-dark',
  },
]

export default function TechBenefits() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            <span className="font-serif">Oké, en nu even in </span>{' '}
            <span className="serif-header text-lila">gewone mensentaal</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Achter elke website zit solide techniek. Dit is wat jouw website krijgt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} p-6 rounded-[30px] hover:-translate-y-1 transition-transform duration-300`}
            >
              <span className="text-2xl block mb-3">{benefit.icon}</span>
              <p className={`${benefit.textColor} text-sm font-medium mb-2`}>{benefit.tech}</p>
              <p className={`${benefit.textColor === 'text-white' ? 'text-white/70' : 'text-text-muted'} text-xs leading-relaxed`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
