'use client'

import { useState } from 'react'
import WavyText from '@/components/WavyText'
import WavyUnderline from '@/components/WavyUnderline'
import WavyLineScroll from '@/components/WavyLineScroll'
import Breadcrumbs from '@/components/Breadcrumbs'
import PricingCard from '@/components/PricingCard'
import { Link } from '@/i18n/routing'
import { marketingPackages } from '@/data/marketing'

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const steps = [
    {
      step: '1',
      title: 'AI doet het zware werk',
      desc: 'Zoekwoordenonderzoek, content, analyses en optimalisaties draaien op AI. Snel en volledig datagedreven.',
    },
    {
      step: '2',
      title: 'Wij sturen en bewaken',
      desc: 'Strategie, kwaliteitscontrole en de menselijke afwerking. AI is het gereedschap, wij houden de regie.',
    },
    {
      step: '3',
      title: 'Jij groeit, zonder gedoe',
      desc: 'Elke maand een heldere rapportage met AI-inzichten. Jij ziet precies wat het oplevert.',
    },
  ]

  const disciplines = [
    { icon: '📧', title: 'Nieuwsbrieven', desc: 'AI-geschreven, redactioneel afgewerkt en op tijd verstuurd.' },
    { icon: '🔍', title: 'SEO', desc: 'Zoekwoorden, content en techniek, doorlopend AI-geoptimaliseerd.' },
    { icon: '🎯', title: 'SEA en Google Ads', desc: 'AI-geoptimaliseerde campagnes die je budget slim inzetten.' },
    { icon: '✍️', title: 'Content', desc: 'Blogartikelen die je vindbaarheid en autoriteit opbouwen.' },
    { icon: '📈', title: 'Conversie', desc: 'Gedragsanalyse en A/B-tests om meer bezoekers klant te maken.' },
    { icon: '📊', title: 'Rapportage', desc: 'Elke maand inzicht in bereik, verkeer en resultaat.' },
  ]

  const faqItems = [
    {
      q: 'Hoe werkt AI in jullie marketing?',
      a: 'AI doet het zware werk: schrijven, analyseren en optimaliseren. Wij zetten de strategie uit, bewaken de kwaliteit en geven alles de menselijke afwerking. Zo krijg je bureaukwaliteit zonder het klassieke bureautarief.',
    },
    {
      q: 'Wat is de looptijd van een marketingpakket?',
      a: 'Marketingpakketten hebben een minimale looptijd van 3 maanden. Daarna zijn ze maandelijks opzegbaar. SEO en campagnes hebben namelijk een paar maanden nodig om echt te renderen.',
    },
    {
      q: 'Zit het advertentiebudget bij de prijs in?',
      a: 'Nee. De pakketprijs is voor het werk en het beheer. Het advertentiebudget voor Google Ads betaal je los en bepaal je zelf. Zo houd jij de controle over je uitgaven.',
    },
    {
      q: 'Schrijven jullie de content met AI?',
      a: 'Ja, nieuwsbrieven en blogartikelen komen AI-gedreven tot stand. Maar elk stuk wordt door ons geredigeerd en afgewerkt voordat het live gaat. AI is het gereedschap, wij zijn de eindredactie.',
    },
    {
      q: 'Kan ik later upgraden naar een ander pakket?',
      a: 'Ja, je kunt op elk moment upgraden naar een uitgebreider pakket. De nieuwe prijs gaat in vanaf de volgende maand.',
    },
    {
      q: 'Moet ik mijn website bij jullie hebben?',
      a: 'Nee. Onze marketingpakketten werken op elke website. Staat je site ergens anders, dan kijken we eerst even mee of alles technisch in orde is.',
    },
  ]

  return (
    <>
      <section className="bg-cream pt-44 pb-24 relative overflow-hidden">
        {/* Decoratieve golvende lila lijn - Desktop */}
        <WavyLineScroll
          className="hidden md:block absolute top-0 left-0 w-full h-[800px] pointer-events-none"
          viewBox="0 0 1200 800"
          path="M-50 150 Q 100 50, 250 200 Q 400 350, 550 300 Q 700 250, 850 450 Q 1000 650, 1150 600 Q 1300 550, 1400 750"
          strokeColor="#EAD7FF"
          strokeWidth={12}
          direction="up"
        />

        {/* Decoratieve golvende lila lijn - Mobiel */}
        <WavyLineScroll
          className="md:hidden absolute top-0 left-0 w-full h-[600px] pointer-events-none"
          viewBox="0 0 400 500"
          path="M-20 0 C 80 40, 40 100, 120 140 C 200 180, 160 240, 260 280 C 360 320, 300 400, 420 450"
          strokeColor="#EAD7FF"
          strokeWidth={8}
          direction="up"
        />

        <Breadcrumbs className="mb-8 relative z-10" />
        <div className="px-6 md:px-10 relative z-10">
          <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-text-dark mb-6">
                <span className="font-serif">AI-gedreven</span>{' '}
                <span className="serif-header italic text-green-dark">marketing</span>
              </h1>
              <p className="text-text-muted max-w-2xl mx-auto">
                Een mooie website is het begin. Met AI-gedreven marketing zorgen we dat hij ook gevonden wordt en converteert.
              </p>
            </div>

            {/* Prijzen */}
            <div className="mb-28">
              <div className="bg-green-dark rounded-[20px] md:rounded-[30px] px-6 md:px-10 py-12 md:py-16">
                <div className="text-center mb-10">
                  <h2 className="text-white font-serif text-2xl md:text-3xl mb-3">Marketingpakketten</h2>
                  <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
                    Drie pakketten, van zichtbaar blijven tot maximale conversie. AI doet het werk, wij de strategie.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 items-stretch max-w-5xl mx-auto justify-items-center pt-4">
                  {marketingPackages.map((plan) => (
                    <PricingCard key={plan.name} plan={plan} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-text-muted text-sm text-center mt-8 px-6">
          Minimale looptijd 3 maanden, daarna maandelijks opzegbaar. Het advertentiebudget voor SEA staat los van de pakketprijs.
        </p>
      </section>

      {/* Zo werkt het */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-text-dark mb-4">
              <span className="font-serif">Zo werkt</span>{' '}
              <span className="relative inline-block serif-header italic text-green-dark">
                AI-marketing
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Slimme techniek, menselijke regie. Zo lever je bureaukwaliteit zonder het bureautarief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-green-dark text-white rounded-full flex items-center justify-center text-lg font-medium mx-auto mb-4 font-serif">
                  {item.step}
                </div>
                <h3 className="text-text-dark font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we voor je doen - Dark Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              <span className="font-serif">Wat we voor je</span>{' '}
              <span className="relative inline-block serif-header italic text-lila">
                doen
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Alle marketingdisciplines onder één dak, AI-gedreven uitgevoerd.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {disciplines.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{item.icon}</span>
                <h4 className="text-white font-medium mb-1 text-sm sm:text-base">{item.title}</h4>
                <p className="text-white/60 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Veelgestelde</span>{' '}
              <span className="relative inline-block serif-header italic text-lila">
                vragen
                <WavyUnderline color="#EAD7FF" strokeWidth={6} />
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                >
                  <span className="text-white font-medium text-sm md:text-base">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`text-lila flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/60 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center bg-[#1a1a1a] rounded-[30px] p-10 md:p-12">
            <h2 className="text-white mb-4">
              <span className="font-serif">Klaar om te</span>{' '}
              <span className="serif-header text-lila">groeien?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Neem contact op en we kijken samen welk marketingpakket bij je doelen past. Vrijblijvend en zonder verplichtingen.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-lg transition-all inline-block"
              >
                <WavyText text="Neem contact op" />
              </Link>
              <a
                href="https://wa.me/31636162639"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1FAF57] flex items-center justify-center transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-6 w-6 fill-white">
                  <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
