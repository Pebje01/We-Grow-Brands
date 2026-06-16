import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from './config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/websites': '/websites',
    '/pakketten': {
      nl: '/pakketten',
      en: '/packages',
    },
    '/contact': '/contact',
    '/faq': '/faq',
    '/portfolio': '/portfolio',
    '/portfolio/[slug]': '/portfolio/[slug]',
    '/algemene-voorwaarden': {
      nl: '/algemene-voorwaarden',
      en: '/terms-and-conditions',
    },
    '/website-in-termijnen': {
      nl: '/website-in-termijnen',
      en: '/website-installments',
    },
    '/actie': {
      nl: '/actie',
      en: '/deals',
    },
    '/korting': {
      nl: '/korting',
      en: '/discount',
    },
    '/hosting': '/hosting',
    '/diensten': {
      nl: '/diensten',
      en: '/services',
    },
    '/marketing': '/marketing',
  },
})

export type Pathnames = keyof typeof routing.pathnames

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
