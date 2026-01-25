'use client'

import ScrollReveal from '@/components/ScrollReveal'

const benefits = [
  {
    // Voorkant: technisch
    techDetails: '99,9% uptime · Google Cloud',
    // Achterkant: menselijke uitleg
    title: 'Je site blijft gewoon lekker draaien.',
  },
  {
    techDetails: 'PageSpeed 99/100 · Image optimization · Caching',
    title: 'Pagina\'s laden supersnel. Bezoekers blijven hangen.',
  },
  {
    techDetails: 'SSL · DDoS protection · Malware scan & removal',
    title: 'Veilig voor jou én je bezoekers.',
  },
  {
    techDetails: 'Daily backups · One-click restore via dashboard',
    title: 'Gaat er iets mis? Je website is zo teruggezet.',
  },
  {
    techDetails: 'WordPress toegang · Drag & drop · Zelf aanpassen indien gewenst',
    title: 'Zelf aanpassen? Prima. Liever uitbesteden? Kan ook.',
  },
  {
    techDetails: 'Uptime monitoring · Security scans · 24/7 support',
    title: 'Wij houden de wacht. Jij slaapt lekker.',
  },
]

export default function TechBenefits() {
  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 md:gap-8 lg:gap-10 items-start">
          <ScrollReveal animation="slide-left">
            <h2 className="text-text-dark mb-4" style={{ lineHeight: 0.95 }}>
              <span className="font-serif">Oké, en nu even</span>
              <br />
              <span className="serif-header italic text-green-dark">
                in gewone{' '}
                <span className="relative inline-block">
                  mensentaal
                  <svg
                    className="absolute bottom-[-12px] left-0 w-full h-4"
                    viewBox="0 0 200 16"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10 Q 30 4, 60 9 T 120 8 T 198 10"
                      stroke="#D6BCFF"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-hand-draw"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mt-6">
              Dit zijn de technische specs van je website. Wij vertalen dat naar wat het voor jou betekent.
            </p>
          </ScrollReveal>

          <ScrollReveal
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
            animation="slide-right"
            stagger={0.1}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flip-card-tech h-[160px] md:h-[180px] lg:h-[200px]"
              >
                <div className="flip-card-inner-tech">
                  {/* Front - Donker (green-dark) met technische specs */}
                  <div className="flip-card-front-tech bg-green-dark rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {benefit.techDetails}
                    </p>
                  </div>
                  {/* Back - Licht (wit) met gewone mensentaal */}
                  <div className="flip-card-back-tech bg-white rounded-xl md:rounded-2xl border border-green-dark/15 p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-green-dark text-sm leading-relaxed">
                      {benefit.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
