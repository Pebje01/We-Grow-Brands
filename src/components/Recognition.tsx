import ScrollReveal from '@/components/ScrollReveal'

export default function Recognition() {
  const painPoints = [
    {
      icon: '😕',
      title: 'Jouw website voelt niet passend bij je bedrijf',
      quote: 'Je kijkt naar je website met teleurstelling. Je huidige website is het gewoon net niet.',
    },
    {
      icon: '🤯',
      title: 'Technische rompslomp',
      quote: 'Hosting, DNS, plugins, werken in een CMS... Je wilt gewoon een mooie website, niet een IT-diploma.',
    },
    {
      icon: '🎨',
      title: 'Zelf lopen klungelen',
      quote: 'Je hebt het wel zelf geprobeerd, maar het werd niet wat je er van hoopte. Of je wilt helemaal niet zelf aanmodderen.',
    },
    {
      icon: '📦',
      title: 'Onnodige tools en kosten',
      quote: 'Veel betalen voor functies die je niet echt nodig hebt, of dure doorlopende abonnementen voor websites waar je niet blij mee bent.',
    },
    {
      icon: '🐢',
      title: 'Je website staat, maar hoe...',
      quote: 'Lange laadtijden, trage pagina\'s en een design waar je ongelukkig van wordt.',
    },
    {
      icon: '💸',
      title: 'Je hebt een agency gevonden die mooie websites maakt...',
      quote: '...maar daar zit ook een torenhoog prijskaartje aan. Yikes.',
    },
  ]

  return (
    <section className="bg-cream min-h-screen flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-text-dark leading-tight mb-6">
            <span className="font-serif">Herken je</span>{' '}
            <span className="serif-header italic text-green-dark">dit?</span>
          </h2>
        </div>

        {/* Pain Point Cards - Mobile/Tablet: stacked layout, Desktop: flip on hover */}
        <ScrollReveal
          className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-5"
          animation="fade-up"
          stagger={0.1}
        >
          {painPoints.map((point, index) => (
            <div key={index} className="h-full">
              {/* Mobile/Tablet: Compact card */}
              <div className="lg:hidden bg-white border border-black/5 rounded-xl p-3 sm:p-4 h-full min-h-[180px] sm:min-h-[200px]">
                <span className="text-2xl mb-2 block">{point.icon}</span>
                <h4 className="text-green-dark font-medium leading-snug mb-2">{point.title}</h4>
                <p className="text-text-muted leading-relaxed">{point.quote}</p>
              </div>

              {/* Desktop: Flip card with hover effect */}
              <div className="hidden lg:block flip-card h-[220px]">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-white border border-black/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl mb-4">{point.icon}</span>
                    <h4 className="text-green-dark leading-snug">{point.title}</h4>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-green-dark rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-cream/90 leading-relaxed">
                      {point.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
