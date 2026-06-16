import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Hosting en Onderhoud | We Grow Brands',
  description: 'Zorgeloze hosting en onderhoud voor je website. Snelle Europese servers, dagelijkse backups, updates en persoonlijke support. Jij onderneemt, wij houden je site gezond.',
  alternates: {
    canonical: '/hosting/',
  },
  openGraph: {
    title: 'Website Hosting en Onderhoud | We Grow Brands',
    description: 'Zorgeloze hosting en onderhoud voor je website. Snelle Europese servers, dagelijkse backups, updates en persoonlijke support.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'We Grow Brands',
    url: 'https://wegrowbrands.online/hosting/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'We Grow Brands hosting en onderhoud' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Hosting en Onderhoud | We Grow Brands',
    description: 'Zorgeloze hosting en onderhoud voor je website.',
  },
}

export default function HostingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
