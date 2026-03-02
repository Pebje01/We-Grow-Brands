'use client'

import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items?: BreadcrumbItem[]
  variant?: 'light' | 'dark'
  className?: string
}

const toTitleCase = (value: string) =>
  value
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

export default function Breadcrumbs({
  items,
  variant = 'light',
  className = '',
}: BreadcrumbsProps) {
  const pathname = usePathname() || '/'
  const t = useTranslations('breadcrumbs')

  const labelMap: Record<string, string> = {
    'algemene-voorwaarden': t('algVoorwaarden'),
    'website-in-termijnen': t('websiteTermijnen'),
    'portfolio': t('portfolio'),
    'pakketten': t('pakketten'),
    'websites': t('websites'),
    'contact': t('contact'),
    'faq': t('faq'),
    'hosting': t('hosting'),
  }

  const parentPaths: Record<string, BreadcrumbItem[]> = {
    '/algemene-voorwaarden': [
      { label: t('pakketten'), href: '/pakketten' },
    ],
    '/website-in-termijnen': [
      { label: t('websites'), href: '/websites' },
    ],
  }

  const getLabel = (segment: string) => labelMap[segment] || toTitleCase(segment)

  const buildItems = (path: string): BreadcrumbItem[] => {
    const crumbItems: BreadcrumbItem[] = [{ label: t('home'), href: '/' }]

    if (parentPaths[path]) {
      crumbItems.push(...parentPaths[path])
      const lastSegment = path.split('/').filter(Boolean).pop() || ''
      crumbItems.push({ label: getLabel(lastSegment) })
      return crumbItems
    }

    const segments = path.split('/').filter(Boolean)
    let currentPath = ''

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1
      crumbItems.push({
        label: getLabel(segment),
        href: isLast ? undefined : currentPath,
      })
    })

    return crumbItems
  }

  const crumbs = items && items.length ? items : buildItems(pathname)

  const isDark = variant === 'dark'
  const containerBg = isDark ? 'bg-white/10 border-white/20' : 'bg-white border-black/10'
  const linkColor = isDark ? 'text-white/70 hover:text-white' : 'text-text-muted hover:text-text-dark'
  const activeClasses = isDark
    ? 'bg-white text-green-dark'
    : 'bg-green-dark text-white'
  const separatorColor = isDark ? 'text-white/40' : 'text-text-light'
  const alignClassName = 'w-[92%] md:w-[70%] max-w-6xl 2xl:max-w-[1600px] mx-auto px-5 md:px-8'

  return (
    <nav aria-label="Breadcrumbs" className={`${alignClassName} ${className}`}>
      <ol className={`inline-flex items-center rounded-full border ${containerBg} p-1 text-xs`}>
        {crumbs.map((item, index) => {
          const isLast = index === crumbs.length - 1
          const isHome = index === 0

          return (
            <li key={`${item.label}-${index}`} className="flex items-center">
              {index > 0 ? (
                <span className={`mx-1.5 ${separatorColor}`}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              ) : null}
              {item.href ? (
                <Link
                  href={item.href as any}
                  className={`flex items-center px-3 py-1.5 rounded-full transition-colors ${linkColor}`}
                >
                  {isHome ? <HomeIcon /> : item.label}
                </Link>
              ) : (
                <span
                  className={`flex items-center px-3 py-1.5 rounded-full ${activeClasses}`}
                  aria-current="page"
                >
                  {isHome ? <HomeIcon /> : item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
