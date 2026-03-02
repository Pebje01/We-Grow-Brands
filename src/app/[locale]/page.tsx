import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Trusted from '@/components/Trusted'
import Recognition from '@/components/Recognition'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import CasesSlider from '@/components/CasesSlider'
import TechBenefits from '@/components/TechBenefits'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Recognition />
      <Solution />
      <Features />
      <Trusted />
      <CasesSlider />
      <Stats />
      <Services />
      <TechBenefits />
      <Testimonials />
      <CTA />
    </div>
  )
}
