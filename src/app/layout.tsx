import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'We Grow Brands | Premium Website Diensten',
  description: 'Professionele websites die uw merk versterken en converteren. High-end webdesign voor ambitieuze ondernemers.',
  keywords: 'webdesign, website, branding, SEO, WordPress, Webflow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="font-sans text-text-dark bg-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
