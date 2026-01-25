import Link from 'next/link'
import Image from 'next/image'
import WavyText from '@/components/WavyText'
import WavyUnderline from '@/components/WavyUnderline'
import WavyLineScroll from '@/components/WavyLineScroll'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import WebsiteTrajecten from '@/components/WebsiteTrajecten'

export const metadata = {
  title: 'Professionele Website Laten Maken - Webdesign | We Grow Brands',
  description: 'Professionele website laten maken die groeit met je bedrijf. Premium webdesign met 99.9% uptime, snelle laadtijden en veilige hosting. Vraag een vrijblijvend gesprek aan.',
}

const includedFeatures = [
  {
    icon: '🎨',
    title: 'Website in jouw huisstijl',
    description: 'Volledig ontworpen volgens jouw branding.',
  },
  {
    icon: '✨',
    title: 'AI-gegenereerde content',
    description: 'Afbeeldingen en iconen die passen bij jouw branding waar nodig, zonder afbreuk te doen aan de geloofwaardigheid van je bedrijf.',
  },
  {
    icon: '🖼️',
    title: 'Beeld bibliotheek',
    description: 'Als er (nog) geen eigen beeldmateriaal beschikbaar is zoeken we beelden die passen bij jouw bedrijf.',
  },
  {
    icon: '📝',
    title: 'Structuur in je teksten',
    description: 'Wij brengen lijn in aangeleverde content.',
  },
  {
    icon: '📱',
    title: 'Responsive design',
    description: 'Perfect op desktop, tablet én mobiel.',
  },
  {
    icon: '🔍',
    title: 'Basis SEO',
    description: 'Technische basis voor SEO goed ingesteld, extra pakketten mogelijk.',
  },
]

const technicalFeatures = [
  {
    icon: '⚡',
    title: '99.9% uptime',
    description: 'Praktisch altijd online.',
  },
  {
    icon: '🔒',
    title: 'SSL-certificaat',
    description: 'Veilige verbinding voor je bezoekers.',
  },
  {
    icon: '💾',
    title: 'Dagelijkse back-ups',
    description: 'Altijd terug te zetten als er iets misgaat.',
  },
  {
    icon: '🛡️',
    title: 'Beveiliging',
    description: 'Beschermd tegen aanvallen en spam.',
  },
  {
    icon: '🛠️',
    title: 'Onderhoud inbegrepen',
    description: 'Wij zorgen dat alles blijft draaien.',
  },
  {
    icon: '📊',
    title: 'Hosting inbegrepen',
    description: 'Eerste jaar hosting zit in de prijs.',
  },
]


export default function WebsitesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Dark green like homepage */}
      <section className="bg-[#02362B] relative pt-32 pb-16 md:pb-24 lg:pb-32 rounded-b-[20px] md:rounded-b-[30px] mb-6 md:mb-0">
        <Breadcrumbs variant="dark" className="mb-8" />
        <div className="px-6 md:px-10">
          <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollReveal animation="fade-up">
                <h1 className="text-white mb-6">
                  <span className="font-serif">Maatwerk websites,</span>
                  <br />
                  <span className="serif-header italic text-lila">volledig ontzorgd</span>
                </h1>
                <p className="text-white/80 leading-relaxed mb-8 max-w-lg">
                  Geen templates, geen vage betalingsconstructies en geen woekerprijzen, maar een website waar je blij van wordt.
                </p>
                <div className="flex flex-row gap-2 sm:gap-4">
                  <Link
                    href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all text-xs sm:text-sm"
                  >
                    <WavyText text="Plan gesprek" />
                  </Link>
                  <Link
                    href="/pakketten"
                    className="btn-spring btn-uniform btn-no-lila link-wave bg-cream text-green-dark hover:bg-white hover:shadow-xl transition-all text-xs sm:text-sm"
                  >
                    <WavyText text="Bekijk pakketten" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Mockup visual */}
              <ScrollReveal className="hidden lg:block" animation="fade-up">
                <div className="relative">
                  <div className="rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                    <Image
                      src="/mock-ups/murthel-screens.webp"
                      alt="Murthel Groenhart website voorbeeld"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Aanpak Section - Cream background like homepage */}
      <section id="onze-aanpak" className="bg-cream py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mb-6 md:mb-0">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
          {/* Section header */}
          <ScrollReveal className="text-center mb-12 md:mb-16" animation="fade-up">
            <h2 className="text-text-dark mb-5" style={{ lineHeight: 0.95 }}>
              <span className="font-serif">Zo pakken we</span>{' '}
              <span className="serif-header italic text-green-dark">het aan</span>
            </h2>
            <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
              Goede voorbereiding is het halve werk. Daarom spreken we vooraf goed af wat je nodig hebt, en vooral ook wat niet. Geen overkill, gewoon precies wat werkt. Mocht je later toch iets extra&apos;s willen? Dan pak je een add-on. Zo krijg je een duidelijk verhaal, heldere stappen en een website die klopt van begin tot eind.
            </p>
          </ScrollReveal>

          {/* Step cards */}
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 relative pt-4" animation="slide-right" stagger={0.15}>
            {/* Step 1 - Strategiegesprek */}
            <div className="bg-[#F0EDE8] rounded-2xl p-5 pt-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5EEFF] rounded-full px-4 py-1.5 text-xs text-text-dark">
                Stap 1
              </div>
              {/* Visual element - strategiegesprek image */}
              <div className="mb-4 h-14 flex items-center justify-center">
                <Image
                  src="/afbeeldingen/strategiegesprek.webp"
                  alt="Strategiegesprek"
                  width={100}
                  height={56}
                  className="h-14 w-auto object-contain scale-110"
                />
              </div>
              <h3 className="text-text-dark text-base font-medium mb-2 leading-tight">Strategiegesprek</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Een online call om de strategie en opzet van je website te bepalen. Wat is wel nodig, wat niet? Wat zijn de doelen? Wat moet je merk uitstralen?
              </p>
              {/* Arrow to next step */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-cream rounded-full items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#03483A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Step 2 - Designrichting */}
            <div className="bg-[#F0EDE8] rounded-2xl p-5 pt-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EAD7FF] rounded-full px-4 py-1.5 text-xs text-text-dark">
                Stap 2
              </div>
              {/* Visual element - color palette */}
              <div className="flex gap-2 mb-4 h-14 items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-green-dark"></div>
                <div className="w-7 h-7 rounded-full bg-lila"></div>
                <div className="w-7 h-7 rounded-full bg-[#F5EEFF]"></div>
                <div className="w-7 h-7 rounded-full bg-cream border border-text-muted/20"></div>
              </div>
              <h3 className="text-text-dark text-base font-medium mb-2 leading-tight">Designrichting</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We kijken naar je huidige huisstijl en bedenken een design dat hierbij past. Nog geen huisstijl? Die kunnen we ook voor je maken.
              </p>
              {/* Arrow to next step */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-cream rounded-full items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#03483A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Step 3 - Content aanleveren */}
            <div className="bg-[#F0EDE8] rounded-2xl p-5 pt-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DFC9FF] rounded-full px-4 py-1.5 text-xs text-text-dark">
                Stap 3
              </div>
              {/* Visual element - text lines / document */}
              <div className="flex flex-col gap-2 mb-4 h-14 justify-center mx-auto w-4/5">
                <div className="w-full h-2.5 rounded-full bg-green-dark/20"></div>
                <div className="w-3/4 h-2.5 rounded-full bg-lila/40"></div>
                <div className="w-1/2 h-2.5 rounded-full bg-[#D6BCFF]/60"></div>
              </div>
              <h3 className="text-text-dark text-base font-medium mb-2 leading-tight">Content aanleveren</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Jij levert teksten en afbeeldingen aan. Moeten er nog teksten gemaakt worden? Kunnen we ook voor je verzorgen.
              </p>
              {/* Arrow to next step */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-cream rounded-full items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#03483A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Step 4 - Bouwen & feedback */}
            <div className="bg-[#F0EDE8] rounded-2xl p-5 pt-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D6BCFF] rounded-full px-4 py-1.5 text-xs text-text-dark">
                Stap 4
              </div>
              {/* Visual element - build blocks with feedback icon */}
              <div className="flex gap-2 mb-4 h-14 items-center justify-center">
                <div className="flex flex-col gap-1">
                  <div className="w-8 h-3 rounded bg-green-dark"></div>
                  <div className="w-6 h-3 rounded bg-lila"></div>
                  <div className="w-7 h-3 rounded bg-[#C9ADFF]"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-lila flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M8 10h.01"/>
                    <path d="M12 10h.01"/>
                    <path d="M16 10h.01"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-text-dark text-base font-medium mb-2 leading-tight">Bouwen & feedback</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                We maken de eerste opzet. Niet tevreden? Je kunt nog een andere richting kiezen.
              </p>
              {/* Sub-steps */}
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] text-lila font-medium mt-0.5">4a</span>
                  <span className="text-text-muted text-[11px]">Feedbackronde 1</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] text-lila font-medium mt-0.5">4b</span>
                  <span className="text-text-muted text-[11px]">Feedbackronde 2</span>
                </div>
              </div>
              {/* Arrow to next step */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-cream rounded-full items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#03483A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Step 5 - Live gaan */}
            <div className="bg-lila rounded-2xl p-5 pt-8 relative border-2 border-green-dark/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-dark rounded-full px-4 py-1.5 text-xs text-white">
                Stap 5
              </div>
              {/* Visual element - rocket/launch */}
              <div className="flex items-end gap-2 mb-4 h-14 justify-center">
                <div className="w-5 h-14 rounded-t-full bg-green-dark"></div>
                <div className="w-5 h-8 rounded-t-full bg-white/60"></div>
                <div className="w-5 h-11 rounded-t-full bg-white/40"></div>
                <div className="w-9 h-9 rounded-full bg-green-dark flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <h3 className="text-green-dark text-base font-medium mb-2 leading-tight">We gaan live!</h3>
              <p className="text-green-dark/70 text-sm leading-relaxed">
                Je website gaat live en is klaar om bezoekers te ontvangen en je merk te laten groeien.
              </p>
            </div>
          </ScrollReveal>

          {/* CTA link */}
          <ScrollReveal className="text-center mt-10" animation="fade-up">
            <Link href="https://calendar.app.google/DbuJ9656ZDLm6b1d7" target="_blank" rel="noopener noreferrer" className="link-wave text-green-dark text-sm inline-flex items-center gap-2">
              <WavyText text="Sparren over je website?" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Wrapper voor Waarom Ons + Inbegrepen */}
      <div className="relative">
        {/* Waarom Ons Section - Dark background */}
        <section id="waarom-ons" className="relative flex items-center py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] overflow-hidden">
          {/* Achtergrond */}
          <div className="absolute inset-0 bg-[#1a1a1a] rounded-[20px] md:rounded-[30px] z-0"></div>

          {/* Lila lijn in het zwarte vlak - Desktop: originele WavyLineScroll */}
          <WavyLineScroll
            className="hidden lg:block absolute left-0 top-0 w-full h-full z-[1] pointer-events-none"
            viewBox="0 0 1200 800"
            path="M -50 -30 C 100 80, 180 180, 250 120 C 320 60, 380 160, 420 250 C 460 340, 520 280, 580 350 C 640 420, 700 380, 760 450 C 820 520, 880 480, 940 550 C 1000 620, 1060 580, 1120 650 C 1180 720, 1220 780, 1280 850"
            strokeColor="#EAD7FF"
            strokeWidth={12}
            direction="up"
          />

          {/* Lila lijn - Mobiel: begint linksboven, kronkelt naar beneden, dan naar rechtsonder */}
          <svg
            className="lg:hidden absolute inset-0 w-full h-full pointer-events-none z-[1]"
            viewBox="0 0 400 600"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 0
                 C 30 80, 60 120, 40 200
                 C 20 280, 60 350, 100 420
                 C 140 490, 200 520, 280 550
                 C 360 580, 420 590, 500 600"
              stroke="#EAD7FF"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="1"
              className="animate-wavy-line-delay"
            />
          </svg>

        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Illustratie */}
            <ScrollReveal className="order-2 lg:order-1" animation="fade-up">
              <Image
                src="/afbeeldingen/waaromwegrowbrands.webp"
                alt="Waarom kiezen voor We Grow Brands illustratie"
                width={500}
                height={400}
                className="w-full max-w-md mx-auto"
              />
            </ScrollReveal>

            {/* Right side - Title & Text */}
            <ScrollReveal className="order-1 lg:order-2 text-center lg:text-left" animation="fade-up">
              <h2 className="text-white mb-6">
                <span className="font-serif">Waarom kiezen voor</span>
                <br />
                <span className="serif-header italic text-lila">We Grow Brands</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Wij bouwen websites die passen bij je merk, je ambities en je doelgroep. Geen standaard templates, maar premium design met persoonlijke aandacht.
              </p>
              <div className="flex flex-row flex-nowrap gap-3 justify-center lg:justify-start">
                <Link
                  href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spring btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all whitespace-nowrap shrink-0 px-4 py-2 text-sm rounded-[15px] border border-black"
                >
                  <WavyText text="Plan een gesprek" />
                </Link>
                <Link
                  href="/pakketten"
                  className="btn-spring link-wave bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all whitespace-nowrap shrink-0 px-4 py-2 text-sm rounded-[15px] border"
                >
                  <WavyText text="Bekijk pakketten" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Feature cards below */}
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 relative z-10" animation="fade-up" stagger={0.1}>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-white/10">
                <svg className="w-8 h-8 text-lila mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <h4 className="text-white font-medium mb-2">Volledig op maat</h4>
                <p className="text-white/60 text-sm leading-relaxed">Premium design, onderscheidende branding. Alles gebouwd vanuit jouw merk.</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-white/10">
                <svg className="w-8 h-8 text-lila mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <h4 className="text-white font-medium mb-2">100% jouw eigendom</h4>
                <p className="text-white/60 text-sm leading-relaxed">Geen vage lease constructies of lock-in. Flexibele betaaltermijnen, daarna volledig van jou. Hosting bij ons of migreren naar eigen hosting.</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-white/10">
                <svg className="w-8 h-8 text-lila mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <h4 className="text-white font-medium mb-2">Strategisch meedenken</h4>
                <p className="text-white/60 text-sm leading-relaxed">Geen ja-knikkers. Wij denken mee over wat werkt voor jouw doelgroep en doelen.</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-white/10">
                <svg className="w-8 h-8 text-lila mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <h4 className="text-white font-medium mb-2">Direct contact</h4>
                <p className="text-white/60 text-sm leading-relaxed">Niet lang wachten op wijzigingen en antwoorden. Je kunt direct contact opnemen via e-mail en WhatsApp.</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-white/10">
                <svg className="w-8 h-8 text-lila mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <h4 className="text-white font-medium mb-2">Meer dan websites</h4>
                <p className="text-white/60 text-sm leading-relaxed">Met ervaring in branding en marketing maken we een website die een sterk verlengstuk van je bedrijf is.</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-white/10">
                <svg className="w-8 h-8 text-lila mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <h4 className="text-white font-medium mb-2">Voordelig onderhoud</h4>
                <p className="text-white/60 text-sm leading-relaxed">Optionele pakketten voor aanpassingen na oplevering. Geen hoge facturen voor kleine wijzigingen.</p>
              </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Inbegrepen vlak - met ruimte ertussen */}
      <section id="inbegrepen" className="relative py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mt-6">
        {/* Achtergrond - zelfde als pagina achtergrond */}
        <div className="absolute inset-0 bg-cream rounded-[20px] md:rounded-[30px] z-0"></div>

        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full relative z-10">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 lg:gap-16 items-start" animation="fade-up">
            <div>
              <h2 className="text-text-dark mb-8" style={{ lineHeight: 0.95 }}>
                <span className="font-serif">Inbegrepen in</span>
                <br />
                <span className="relative inline-block serif-header italic text-green-dark">
                  elk pakket
                  <WavyUnderline color="#03483A" strokeWidth={6} />
                </span>
              </h2>
              <p className="text-text-dark/70 leading-relaxed">
                Kies je voor een website van We Grow Brands? Dan zit dit minimaal in je pakket inbegrepen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {includedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-text-dark/10 p-3 md:p-5 flex items-start gap-2 md:gap-4 hover:bg-white hover:shadow-lg transition-all"
                >
                  <span className="text-lg md:text-2xl">{feature.icon}</span>
                  <div>
                    <p className="text-text-dark font-serif text-sm md:text-base">{feature.title}</p>
                    <p className="text-text-dark/60 text-xs md:text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technische sectie - Je website altijd online */}
      <section id="technisch" className="relative py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mt-6">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-[20px] md:rounded-[30px] z-0"></div>

        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full relative z-10">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 lg:gap-16 items-start" animation="fade-up">
            <div className="grid grid-cols-2 gap-3 md:gap-4 order-2 lg:order-1">
              {technicalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 p-3 md:p-5 flex items-start gap-2 md:gap-4 hover:bg-white/15 transition-all"
                >
                  <span className="text-lg md:text-2xl">{feature.icon}</span>
                  <div>
                    <p className="text-white font-serif text-sm md:text-base">{feature.title}</p>
                    <p className="text-white/60 text-xs md:text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-white mb-4 md:mb-8" style={{ lineHeight: 0.95 }}>
                <span className="font-serif">Je website</span>
                <br />
                <span className="relative inline-block serif-header italic text-lila">
                  altijd online
                  <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                </span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                ...en dit hoort er natuurlijk ook standaard bij.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>{/* Einde wrapper voor Waarom Ons + Inbegrepen */}

      {/* Website Trajecten Section - Green dark background */}
      <WebsiteTrajecten />

      {/* Services Section - Cream background */}
      <section id="andere-services" className="bg-cream py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px]">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full">
          {/* Header */}
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-12 md:mb-16 lg:mb-20" animation="fade-up">
            <div>
              <h2 className="text-text-dark" style={{ lineHeight: 0.95 }}>
                <span className="font-serif">Ook je merk</span>
                <br />
                <span className="serif-header italic text-green-dark">strakker neerzetten</span>
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-text-muted leading-relaxed">
                Een sterke website begint bij een sterk merk. Als daar behoefte aan is, helpen we je ook met branding, content, fotografie en slimme AI-tools.
              </p>
            </div>
          </ScrollReveal>

          {/* Service Cards */}
          <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4" animation="fade-up" stagger={0.1}>
            {/* Branding */}
            <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B3D2F] via-[#2D5A47] to-[#1B3D2F]" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 64 64" fill="none">
                  {/* Isometric cube/brand block */}
                  <path d="M32 8L52 20V44L32 56L12 44V20L32 8Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32L52 20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32L12 20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32V56" stroke="currentColor" strokeWidth="2"/>
                  {/* Star accent */}
                  <path d="M32 18L34 24L40 24L35 28L37 34L32 30L27 34L29 28L24 24L30 24L32 18Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-serif text-sm md:text-base leading-tight">Branding & visuele identiteit</p>
              </div>
            </div>

            {/* Content */}
            <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A3728] via-[#6B4D35] to-[#4A3728]" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 64 64" fill="none">
                  {/* Isometric document/content */}
                  <path d="M16 16L40 8V48L16 56V16Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M40 8L48 16V56L40 48" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 16L24 8L48 16" stroke="currentColor" strokeWidth="2"/>
                  {/* Text lines */}
                  <path d="M22 24L34 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 32L34 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 40L30 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-serif text-sm md:text-base leading-tight">Content</p>
              </div>
            </div>

            {/* Fotografie */}
            <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50] via-[#3D5266] to-[#2C3E50]" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 64 64" fill="none">
                  {/* Isometric camera */}
                  <path d="M12 28L32 18L52 28V44L32 54L12 44V28Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
                  <ellipse cx="32" cy="36" rx="8" ry="6" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="32" cy="36" r="3" fill="currentColor"/>
                  {/* Flash */}
                  <path d="M44 20L48 16L52 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-serif text-sm md:text-base leading-tight">Fotografie</p>
              </div>
            </div>

            {/* Vormgeving */}
            <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5D4E6D] via-[#7A6B8A] to-[#5D4E6D]" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 64 64" fill="none">
                  {/* Isometric pen/brush tool */}
                  <path d="M20 48L12 52L16 44L44 16L52 24L20 48Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M44 16L48 12L56 20L52 24" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 44L20 48" stroke="currentColor" strokeWidth="2"/>
                  {/* Color palette dots */}
                  <circle cx="24" cy="20" r="3" fill="currentColor"/>
                  <circle cx="32" cy="16" r="3" fill="currentColor" fillOpacity="0.6"/>
                  <circle cx="40" cy="12" r="3" fill="currentColor" fillOpacity="0.3"/>
                </svg>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-serif text-sm md:text-base leading-tight">Vormgeving</p>
              </div>
            </div>

            {/* AI & Automatisering */}
            <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D2D44] to-[#1A1A2E]" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 64 64" fill="none">
                  {/* Isometric chip/AI brain */}
                  <path d="M32 12L48 22V42L32 52L16 42V22L32 12Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
                  {/* Circuit lines */}
                  <path d="M32 22L32 42" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 27L40 27" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 37L40 37" stroke="currentColor" strokeWidth="2"/>
                  {/* Connection nodes */}
                  <circle cx="32" cy="32" r="4" fill="currentColor"/>
                  <circle cx="24" cy="32" r="2" fill="currentColor"/>
                  <circle cx="40" cy="32" r="2" fill="currentColor"/>
                  {/* External connections */}
                  <path d="M16 22L8 18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M48 22L56 18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 42L8 46" stroke="currentColor" strokeWidth="2"/>
                  <path d="M48 42L56 46" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white font-serif text-sm md:text-base leading-tight">AI & Automatisering</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Dark background */}
      <section id="plan-traject" className="bg-[#1a1a1a] py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mt-6 mb-[105px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            <span className="font-serif">Klaar voor een</span>{' '}
            <span className="serif-header italic text-lila">premium website?</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Plan een gesprek. We zijn eerlijk over wat werkt en wat niet, zodat je met vertrouwen
            kiest voor een website die bij je bedrijf past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendar.app.google/DbuJ9656ZDLm6b1d7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spring btn-uniform btn-no-lila link-wave bg-lila text-green-dark hover:bg-[#D6BCFF] hover:shadow-xl transition-all"
            >
              <WavyText text="Plan een gesprek" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Liever eerst appen?{' '}
            <Link
              href="https://wa.me/31636162639"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center relative top-[3px] text-[#25D366] hover:text-[#1FAF57] transition-colors"
            >
              <span className="sr-only">WhatsApp</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="block h-5 w-5 fill-current">
                <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z" />
              </svg>
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
