import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Trusted from '@/components/Trusted'
import Features from '@/components/Features'
import TechBenefits from '@/components/TechBenefits'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Trusted />
      <TechBenefits />
      <Features />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}
