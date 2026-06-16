import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/offerte/', '/factuur/', '/api/'],
      },
    ],
    sitemap: 'https://wegrowbrands.online/sitemap.xml',
  }
}
