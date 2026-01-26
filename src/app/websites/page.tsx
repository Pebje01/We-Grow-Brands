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

          {/* Lila lijn - Mobiel */}
          <WavyLineScroll
            className="lg:hidden absolute left-0 top-0 w-full h-full z-[1] pointer-events-none"
            viewBox="0 0 400 600"
            path="M-50 -10 C 60 -60, -20 120, 80 100 C 180 80, 100 220, 220 200 C 340 180, 260 320, 400 300"
            strokeColor="#EAD7FF"
            strokeWidth={5}
            direction="up"
          />

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

      {/* Inbegrepen Section - Inhoudelijk */}
      <section className="bg-cream py-20 md:py-28 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mt-6">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left side - Title */}
              <div>
                <h2 className="text-text-dark mb-8">
                  <span className="font-serif">Inbegrepen in</span>
                  <br />
                  <span className="relative inline-block serif-header italic text-green-dark">
                    elk pakket
                    <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                  </span>
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Dit zit standaard in elke website die we maken. Geen extra kosten, gewoon inbegrepen.
                </p>
              </div>

              {/* Right side - Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">🎨</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Design in jouw huisstijl</h4>
                  <p className="text-text-muted text-sm">Volledig ontworpen volgens jouw branding.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">📄</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Basis pagina's</h4>
                  <p className="text-text-muted text-sm">Home, over ons, contact en call-to-actions.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">🖼️</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Beeldbibliotheek</h4>
                  <p className="text-text-muted text-sm">Toegang tot passende afbeeldingen voor je website.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">✨</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">AI-beelden op maat</h4>
                  <p className="text-text-muted text-sm">Unieke visuals die passen bij je merk, zonder afbreuk aan authenticiteit.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">📱</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Responsive design</h4>
                  <p className="text-text-muted text-sm">Perfect op desktop, tablet én mobiel.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">📝</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Contactformulier</h4>
                  <p className="text-text-muted text-sm">Bezoekers kunnen direct contact opnemen.</p>
                </div>
              </div>
            </div>

            <p className="text-text-muted text-sm mt-8 text-center">
              Nog geen huisstijl? Geen probleem. We kunnen ook je <span className="text-green-dark font-medium">huisstijl ontwerpen</span> als add-on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Technische Section */}
      <section className="bg-cream pt-4 md:pt-6 pb-20 md:pb-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left side - Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">⚡</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">99.9% uptime</h4>
                  <p className="text-text-muted text-sm">Praktisch altijd online.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">🚀</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Snelle laadtijden</h4>
                  <p className="text-text-muted text-sm">Bezoekers haken minder snel af.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">🔒</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Veilig en beschermd</h4>
                  <p className="text-text-muted text-sm">Je site blijft schoon en betrouwbaar.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">💾</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Back-ups geregeld</h4>
                  <p className="text-text-muted text-sm">Altijd terug te zetten als er iets misgaat.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-black/5">
                  <span className="text-2xl mb-3 block">🔧</span>
                  <h4 className="text-green-dark font-medium mb-1 text-base">Onderhoud inbegrepen</h4>
                  <p className="text-text-muted text-sm">Wij zorgen dat je website blijft draaien.</p>
                </div>
              </div>

              {/* Right side - Title */}
              <div className="order-1 lg:order-2">
                <h2 className="text-text-dark mb-8">
                  <span className="font-serif">Technisch</span>
                  <br />
                  <span className="relative inline-block serif-header italic text-green-dark">
                    allemaal geregeld
                    <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                  </span>
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Geen technisch gedoe. Gewoon zeker weten dat je website blijft werken.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="bg-cream pt-4 md:pt-6 pb-20 md:pb-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left side - Pills */}
              <div className="flex flex-wrap gap-2 order-2 lg:order-1">
                {[
                  'Extra pagina\'s / landingspagina\'s', 'Complexe formulieren', 'Reviews/klantverhalen', 'Blog', 'Webshop', 'Meertalige website', 'Boekingssysteem', 'Nieuwsbrief integratie', 'Chatbot / live chat', 'Klantportaal', 'Vacaturemodule', 'FAQ sectie', 'Zoekfunctie', 'GA4 integratie', 'Extra feedbackrondes'
                ].map((addon, index) => {
                  const colors = [
                    'bg-[#F5EEFF] border-[#EAD7FF] hover:bg-[#EAD7FF]',
                    'bg-[#EAD7FF] border-[#D6BCFF] hover:bg-[#D6BCFF]',
                    'bg-[#D6BCFF] border-[#C9A8FF] hover:bg-[#C9A8FF]',
                    'bg-[#F0EDE8] border-[#E0DDD8] hover:bg-[#E0DDD8]',
                  ]
                  const colorClass = colors[index % colors.length]
                  return (
                    <span key={addon} className={`${colorClass} text-green-dark px-4 py-2 rounded-full text-sm border transition-colors cursor-default`}>
                      {addon}
                    </span>
                  )
                })}
              </div>

              {/* Right side - Title */}
              <div className="order-1 lg:order-2">
                <h2 className="text-text-dark mb-8">
                  <span className="font-serif">Website</span>
                  <br />
                  <span className="relative inline-block serif-header italic text-green-dark">
                    add-ons
                    <WavyUnderline color="#EAD7FF" strokeWidth={6} />
                  </span>
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Wil je later toch iets extra's toevoegen aan je website? Kies dan voor een van de add-ons. Zo krijg je een website die van begin tot einde klopt, past bij je merk en waar je nooit meer van baalt.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="relative py-16 md:py-24 lg:py-28 px-4 md:px-6 lg:px-8 rounded-[20px] md:rounded-[30px] mt-6">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-[20px] md:rounded-[30px] z-0"></div>

        <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto w-full relative z-10">
          <ScrollReveal className="text-center mb-12" animation="fade-up">
            <h2 className="text-white mb-4">
              <span className="font-serif">Extra</span>{' '}
              <span className="serif-header italic text-lila">services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Wij kunnen je naast een strakke website ook helpen met andere diensten.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                'Logo ontwerp', 'Huisstijl', 'Rebranding', 'Opfrissen van bestaande huisstijl', 'Brand fundament',
                'Copywriting / webteksten', 'Social media content', 'E-mail marketing', 'SEO', 'SEA', 'Leadgeneratie',
                'Fotografie', 'Social media templates', 'Presentatie ontwerp', 'Drukwerk', 'DTP diensten', 'Grafische vormgeving',
                'AI & automatisering', 'Brand audit', 'Website analyse', 'Website opfrisser'
              ].map((service, index) => {
                const colors = [
                  'bg-[#F5EEFF] border-[#EAD7FF] hover:bg-[#EAD7FF]',
                  'bg-[#EAD7FF] border-[#D6BCFF] hover:bg-[#D6BCFF]',
                  'bg-[#D6BCFF] border-[#C9A8FF] hover:bg-[#C9A8FF]',
                  'bg-lila border-[#D6BCFF] hover:bg-[#D6BCFF]',
                ]
                const colorClass = colors[index % colors.length]
                return (
                  <span key={service} className={`${colorClass} text-green-dark px-4 py-2 rounded-full text-sm border transition-colors cursor-default`}>
                    {service}
                  </span>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Website Trajecten Section - Green dark background */}
      <WebsiteTrajecten />
      </div>{/* Einde wrapper voor Waarom Ons + Inbegrepen */}

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
