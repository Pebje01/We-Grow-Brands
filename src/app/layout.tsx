import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const polysansSlim = localFont({
  src: '../../public/fonts/polysanstrial-slim.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-polysans',
  display: 'swap',
})

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
    <html lang="nl" className={`${instrumentSerif.variable} ${polysansSlim.variable}`}>
      <body className={`${polysansSlim.className} text-text-dark bg-cream`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
