import Link from 'next/link'
import WavyText from '@/components/WavyText'
import ScrollReveal from '@/components/ScrollReveal'

const plans = [
  {
    icon: '🧱',
    name: 'Essentials',
    price: '€999',
    description: 'Een sterke basis, strak design en een professionele uitstraling. Perfect om te starten.',
    popular: false,
  },
  {
    icon: '🚀',
    name: 'Groei',
    price: '€1.450',
    description: 'Meer pagina\'s, meer impact, en een website die meegroeit met je ambities.',
    popular: true,
  },
  {
    icon: '👨‍💼',
    name: 'Premium',
    price: '€2.650+',
    description: 'Volledig maatwerk voor ambitieuze merken met grote plannen.',
    popular: false,
  },
]

export default function WebsiteTrajecten() {
  return (
    <section id="trajecten" className="bg-cream py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-text-dark mb-6">
            <span className="font-serif">Start nu jouw</span>{' '}
            <span className="serif-header italic text-green-dark">website traject</span>
          </h2>
        </div>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" animation="fade-up" stagger={0.2}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
                plan.popular
                  ? 'bg-lila text-green-dark'
                  : 'bg-white text-text-dark border border-black/5'
              }`}
            >
              {plan.name === 'Premium' && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lila text-green-dark text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  Maatwerk
                </span>
              )}
              <span className="text-3xl mb-4 text-center">{plan.icon}</span>
              <h3 className={`text-xl font-serif italic mb-2 text-center ${plan.popular ? 'text-green-dark' : 'text-green-dark'}`}>
                {plan.name}
              </h3>
              <p className={`text-2xl font-serif mb-4 text-center ${plan.popular ? 'text-green-dark' : 'text-green-dark'}`}>
                {plan.name === 'Premium' && <span className="text-sm font-normal mr-1">vanaf</span>}
                {plan.price}
              </p>
              <p className={`text-sm leading-relaxed flex-1 text-center ${plan.popular ? 'text-green-dark/80' : 'text-text-muted'}`}>
                {plan.description}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <div className="text-center mt-10">
          <Link
            href="/pakketten"
            className="btn-spring btn-uniform link-wave bg-green-dark text-cream hover:bg-green-dark/90 hover:shadow-xl transition-all"
          >
            <WavyText text="Bekijk alle pakketten" />
          </Link>
        </div>
      </div>
    </section>
  )
}
