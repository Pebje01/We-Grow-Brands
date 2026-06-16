import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-gedreven Marketing voor je Website | We Grow Brands',
  description: 'Meer resultaat uit je website met AI-gedreven marketing. Slimme content, SEO en datagedreven optimalisatie die jouw merk laten groeien. Vraag een vrijblijvend gesprek aan.',
  alternates: {
    canonical: '/marketing/',
  },
  openGraph: {
    title: 'AI-gedreven Marketing voor je Website | We Grow Brands',
    description: 'Meer resultaat uit je website met AI-gedreven marketing. Slimme content, SEO en datagedreven optimalisatie die jouw merk laten groeien.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'We Grow Brands',
    url: 'https://wegrowbrands.online/marketing/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'We Grow Brands AI-gedreven marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-gedreven Marketing voor je Website | We Grow Brands',
    description: 'Meer resultaat uit je website met AI-gedreven marketing.',
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
