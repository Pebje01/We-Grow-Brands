const testimonials = [
  {
    quote: '"Eindelijk een partij die snapt wat wij nodig hebben. Binnen 2 weken stond onze nieuwe website live!"',
    author: 'Martijn Visser',
    role: 'Eigenaar, TuinTrend',
    initials: 'MV',
  },
  {
    quote: '"De persoonlijke aanpak maakt het verschil. Ze denken echt met je mee en leveren kwaliteit."',
    author: 'Sandra Bakker',
    role: 'Marketing, GreenGrow',
    initials: 'SB',
  },
  {
    quote: '"Conversie +40% sinds de nieuwe website. De investering was meer dan waard."',
    author: 'Peter Jansen',
    role: 'Directeur, PlantPlaza',
    initials: 'PJ',
  },
]

export default function Testimonials() {
  return (
 <section id="reviews" className="bg-green-dark py-24 px-8">  <div className="max-w-6xl mx-auto text-center">  <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-12">  <span className="font-serif ">Ervaringen van </span>  <span className="serif-header text-lila">onze partners</span>         </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">           {testimonials.map((testimonial, index) => (
            <div
              key={index}
 className="bg-green-darker rounded-2xl p-7 text-left border border-lila/10 hover:border-lila transition-colors"             >
 <div className="text-lila text-sm mb-4">★★★★★</div>  <p className="text-white/85 text-sm leading-relaxed italic mb-6">{testimonial.quote}</p>  <div className="flex items-center gap-3">  <div className="w-10 h-10 bg-lila rounded-full flex items-center justify-center text-green-dark text-sm">                   {testimonial.initials}
                </div>
                <div>
 <p className="text-white text-sm">{testimonial.author}</p>  <p className="text-white/50 text-xs">{testimonial.role}</p>                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
