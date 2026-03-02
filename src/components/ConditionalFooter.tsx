'use client'

import { usePathname } from '@/i18n/routing'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()

  // Don't show footer on offerte pages
  if (pathname.startsWith('/offerte')) {
    return null
  }

  return <Footer />
}
