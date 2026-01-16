import Link from 'next/link'

export default function Footer() {
  return (
 <footer className="bg-green-darker pt-16 pb-8 px-8">  <div className="max-w-6xl mx-auto">  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">           {/* Brand */}
 <div className="max-w-xs">  <div className="flex items-center gap-2 text-white text-xl mb-4">  <div className="flex items-center gap-0.5">  <span className="w-1 h-2.5 bg-white rounded-sm"></span>  <span className="w-1 h-4 bg-white rounded-sm"></span>  <span className="w-1 h-3 bg-white rounded-sm"></span>  <span className="w-1 h-[18px] bg-white rounded-sm"></span>               </div>
              We Grow Brands
            </div>
 <p className="text-white/60 text-sm leading-relaxed">               Uw partner voor professionele digitale aanwezigheid. Van high-end websites tot complete merkstrategie.
            </p>
          </div>

          {/* Diensten */}
          <div className="lg:text-center">
 <h4 className="text-white text-base mb-5 font-serif italic">Diensten</h4>
 <ul className="space-y-1">  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Webdesign</Link></li>  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Branding</Link></li>  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">SEO</Link></li>  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Fotografie</Link></li>             </ul>
          </div>

          {/* Bedrijf */}
          <div className="lg:text-center">
 <h4 className="text-white text-base mb-5 font-serif italic">Bedrijf</h4>
 <ul className="space-y-1">  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Over Ons</Link></li>  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Portfolio</Link></li>  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Blog</Link></li>  <li><Link href="#" className="text-white/60 hover:text-lila text-sm transition-colors">Contact</Link></li>             </ul>
          </div>

          {/* Contact */}
          <div className="lg:text-center">
 <h4 className="text-white text-base mb-5 font-serif italic">Contact</h4>
 <ul className="space-y-1">  <li><Link href="mailto:hello@wegrowbrands.nl" className="text-white/60 hover:text-lila text-sm transition-colors">hello@wegrowbrands.nl</Link></li>  <li><Link href="tel:+31612345678" className="text-white/60 hover:text-lila text-sm transition-colors">+31 6 12345678</Link></li>  <li><span className="text-white/60 text-sm">KvK: 12345678</span></li>             </ul>
          </div>
        </div>

        {/* Bottom */}
 <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">  <p className="text-white/40 text-sm">© 2026 We Grow Brands. Alle rechten voorbehouden.</p>  <div className="flex gap-3">  <Link href="#" className="btn-spring w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-lila hover:bg-lila hover:text-green-dark transition-all text-sm">               <span className="btn-text inline-block">in</span>
            </Link>
 <Link href="#" className="btn-spring w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-lila hover:bg-lila hover:text-green-dark transition-all text-sm">               <span className="btn-text inline-block">ig</span>
            </Link>
 <Link href="#" className="btn-spring w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-lila hover:bg-lila hover:text-green-dark transition-all text-sm">               <span className="btn-text inline-block">wa</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
