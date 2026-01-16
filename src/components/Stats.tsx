import Link from 'next/link'

export default function Stats() {
  return (
 <section className="bg-cream py-24 px-8">  <div className="max-w-6xl mx-auto text-center">  <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-dark leading-tight mb-2">  <span className="highlight-title">  <span className="font-serif ">Premium kwaliteit,</span>{' '}  <span className="serif-header">snelle realisatie</span>           </span>
        </h2>

 <p className="text-text-muted text-lg max-w-2xl mx-auto mt-8 mb-10 leading-relaxed">           Voor mooie merken die uitblinken. Wij leveren high-end websites met professionele kwaliteit,
          zonder concessies te doen aan snelheid of bereikbaarheid. Ook voor startende ondernemers nu toegankelijk.
        </p>

        {/* CTA Buttons */}
 <div className="flex gap-4 justify-center mb-16">           <Link
            href="#contact"
 className="btn-spring bg-green-dark text-white px-7 py-3 rounded-full flex items-center gap-2 hover:bg-lila hover:text-green-dark transition-all"           >
            <span className="btn-text inline-flex items-center gap-2"><span>🚀</span> Start Project</span>
          </Link>
          <Link
            href="#diensten"
 className="btn-spring bg-white text-text-dark px-7 py-3 rounded-full flex items-center gap-2 border border-gray-200 hover:bg-lila hover:text-green-dark transition-all"           >
            <span className="btn-text inline-flex items-center gap-2"><span>📋</span> Bekijk Pakketten</span>
          </Link>
        </div>

        {/* Comparison Cards */}
 <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">           {/* Small Card */}
 <div className="bg-white rounded-3xl p-10 border border-black/5 w-full md:w-72 flex flex-col justify-center">  <p className="text-text-muted text-sm mb-2">Traditioneel Bureau</p>  <p className="font-serif text-5xl text-text-dark">  12 <span className="text-2xl text-text-muted font-serif">weken</span>             </p>
          </div>

          {/* Large Card */}
 <div className="bg-gradient-to-br from-[#8B7355] via-[#A0826D] to-[#87CEEB] rounded-3xl relative overflow-hidden flex-1 max-w-lg min-h-[380px]">  <div className="relative z-10 p-8 h-full flex flex-col">  <p className="text-white/80 text-sm mb-2">We Grow Brands</p>  <p className="font-serif text-5xl text-white drop-shadow-lg">  2-4 <span className="text-2xl text-white/80 font-serif">weken</span>               </p>
            </div>

            {/* Curved Text */}
 <div className="absolute bottom-20 left-0 right-0 text-center">  <svg viewBox="0 0 500 60" className="w-full h-[60px]">                 <defs>
                  <path id="curve" d="M 50 50 Q 250 0 450 50" fill="transparent"/>
                </defs>
                <text>
 <textPath href="#curve" startOffset="50%" textAnchor="middle" className="fill-white/90 text-sm">                     Professioneel. Bereikbaar. Resultaatgericht.
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Mic Button */}
 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 bg-white/20 border-2 border-white/40 rounded-full flex items-center justify-center">               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 1v11M5 12h14"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
