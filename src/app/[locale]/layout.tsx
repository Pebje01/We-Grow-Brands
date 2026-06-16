import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { routing } from '@/i18n/routing'
import '../globals.css'
import Navbar from '@/components/Navbar'
import ConditionalFooter from '@/components/ConditionalFooter'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const polysansSlim = localFont({
  src: '../../../public/fonts/polysanstrial-slim.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-polysans',
  display: 'swap',
})

const polysansNeutralWide = localFont({
  src: '../../../public/fonts/polysanstrial-neutralwide.otf',
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
  alternates: {
    canonical: '/',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'We Grow Brands',
  url: 'https://wegrowbrands.online',
  email: 'hello@wegrowbrands.online',
  telephone: '+31636162639',
  logo: 'https://wegrowbrands.online/logo/wegrowbrandslogo.png',
  sameAs: [
    'https://www.linkedin.com/in/daley-jansen/',
    'https://www.instagram.com/wegrowbrands/',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'We Grow Brands',
  url: 'https://wegrowbrands.online',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://wegrowbrands.online/portfolio/',
    },
    'query-input': 'required name=search_term_string',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'We Grow Brands',
  url: 'https://wegrowbrands.online',
  description: 'Premium maatwerk websites en branding voor ondernemers en bedrijven in Nederland.',
  telephone: '+31636162639',
  email: 'hello@wegrowbrands.online',
  areaServed: 'NL',
  currenciesAccepted: 'EUR',
  priceRange: '€€',
  serviceType: ['Webdesign', 'Webdevelopment', 'Branding', 'Hosting'],
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate that the incoming locale is supported
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${instrumentSerif.variable} ${polysansSlim.variable} ${polysansNeutralWide.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${polysansSlim.className} text-text-dark bg-cream overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <ConditionalFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
