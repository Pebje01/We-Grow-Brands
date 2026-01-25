'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items?: BreadcrumbItem[]
  variant?: 'light' | 'dark'
  className?: string
}

const labelMap: Record<string, string> = {
  'algemene-voorwaarden': 'Voorwaarden',
  'website-in-termijnen': 'In termijnen',
  'portfolio': 'Cases',
  'pakketten': 'Pakketten',
  'websites': 'Websites',
  'contact': 'Contact',
  'faq': 'FAQ',
}

// Define logical parent paths for pages that should show a specific hierarchy
const parentPaths: Record<string, BreadcrumbItem[]> = {
  '/algemene-voorwaarden': [
    { label: 'Pakketten', href: '/pakketten' },
  ],
  '/website-in-termijnen': [
    { label: 'Websites', href: '/websites' },
  ],
}

const toTitleCase = (value: string) =>
  value
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')

const getLabel = (segment: string) => labelMap[segment] || toTitleCase(segment)

const buildItems = (pathname: string): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]

  // Check if this path has a custom parent hierarchy
  if (parentPaths[pathname]) {
    items.push(...parentPaths[pathname])
    const lastSegment = pathname.split('/').filter(Boolean).pop() || ''
    items.push({ label: getLabel(lastSegment) })
    return items
  }

  // Default behavior: build from URL segments
  const segments = pathname.split('/').filter(Boolean)
  let currentPath = ''

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1
    items.push({
      label: getLabel(segment),
      href: isLast ? undefined : currentPath,
    })
  })

  return items
}

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
                  href={item.href}
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
