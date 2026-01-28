import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-darker text-white pt-24 pb-8 px-8">
      <div className="max-w-6xl 2xl:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-base mb-3 font-serif italic">We Grow Brands</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Meer dan websites. Wij bouwen merken.
            </p>
          </div>

          {/* Diensten */}
          <div className="lg:text-center">
            <h4 className="text-white text-base mb-5 font-serif italic">Diensten</h4>
            <ul className="space-y-1">
              <li><Link href="/websites" className="text-white/60 hover:text-lila text-sm transition-colors">Websites</Link></li>
              <li><Link href="/websites" className="text-white/60 hover:text-lila text-sm transition-colors">Branding</Link></li>
              <li><Link href="/websites" className="text-white/60 hover:text-lila text-sm transition-colors">Fotografie</Link></li>
              <li><Link href="/websites" className="text-white/60 hover:text-lila text-sm transition-colors">Grafische vormgeving</Link></li>
            </ul>
          </div>

          {/* Bedrijf */}
          <div className="lg:text-center">
            <h4 className="text-white text-base mb-5 font-serif italic">Informatie</h4>
            <ul className="space-y-1">
              <li><Link href="/faq" className="text-white/60 hover:text-lila text-sm transition-colors">Veelgestelde vragen</Link></li>
              <li><Link href="/algemene-voorwaarden" className="text-white/60 hover:text-lila text-sm transition-colors">Algemene voorwaarden</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-lila text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:text-center">
            <h4 className="text-white text-base mb-5 font-serif italic">Contact</h4>
            <ul className="space-y-1">
              <li>
                <Link href="mailto:hello@wegrowbrands.online" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-lila text-sm transition-colors inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  hello@wegrowbrands.online
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/31636162639" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#25D366] text-sm transition-colors inline-flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.54 2 2.05 6.49 2.05 11.99c0 1.94.56 3.83 1.61 5.45L2 22l4.67-1.6a9.93 9.93 0 0 0 5.37 1.56h.01c5.5 0 9.99-4.48 9.99-9.99C22.03 6.48 17.54 2 12.04 2zm0 18.19h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.77.95.93-2.7-.2-.31a8.18 8.18 0 1 1 6.53 3.38zm4.48-6.12c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.42h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29z"/>
                  </svg>
                  06 36 16 26 39
                </Link>
              </li>
              <li><span className="text-white/60 text-sm">KvK: 84818883</span></li>
            </ul>
          </div>

          {/* Partners */}
          <div className="lg:text-center">
            <h4 className="text-white text-base mb-5 font-serif italic">Partners</h4>
            <ul className="space-y-1">
              <li>
                <Link
                  href="https://www.thedaleyedit.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-lila text-sm transition-colors"
                >
                  The Daley Edit
                </Link>
              </li>
              <li>
                <Link
                  href="https://niveksales.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-lila text-sm transition-colors"
                >
                  Nivek Sales
                </Link>
              </li>
              <li>
                <Link
                  href="https://theaiboosters.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-lila text-sm transition-colors"
                >
                  The AI Boosters
                </Link>
              </li>
              <li>
                <Link
                  href="https://floh.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-lila text-sm transition-colors"
                >
                  FLOH
                </Link>
              </li>
              <li>
                <Link
                  href="https://leadmonkeys.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-lila text-sm transition-colors"
                >
                  Lead Monkeys
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.devkev.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-lila text-sm transition-colors"
                >
                  DevKev
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 We Grow Brands. Alle rechten voorbehouden.</p>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com/in/daley-jansen/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-lila hover:text-green-dark transition-all text-sm">
              in
            </Link>
            <Link href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-lila hover:text-green-dark transition-all text-sm">
              ig
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
