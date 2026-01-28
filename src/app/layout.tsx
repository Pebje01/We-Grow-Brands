import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
// Footer is handled per-page to avoid duplicates

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

const polysansNeutralWide = localFont({
  src: '../../public/fonts/polysanstrial-neutralwide.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-polysans-wide',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'We Grow Brands | Premium Websites vanuit jouw Merk',
  description: 'Premium maatwerk websites die starten vanuit jouw merk. Geen templates. Nooit meer balen van je website.',
  keywords: 'website laten maken, webdesign, premium website, maatwerk website, branding, merkidentiteit',
  openGraph: {
    title: 'We Grow Brands | Premium Websites vanuit jouw Merk',
    description: 'Premium maatwerk websites die starten vanuit jouw merk. Geen templates. Nooit meer balen van je website.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'We Grow Brands',
    url: 'https://wegrowbrands.online',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'We Grow Brands - Premium Webdesign',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Grow Brands | Premium Websites vanuit jouw Merk',
    description: 'Premium maatwerk websites die starten vanuit jouw merk. Geen templates. Nooit meer balen van je website.',
  },
  metadataBase: new URL('https://wegrowbrands.online'),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${instrumentSerif.variable} ${polysansSlim.variable} ${polysansNeutralWide.variable}`}>
      <body className={`${polysansSlim.className} text-text-dark bg-cream overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
