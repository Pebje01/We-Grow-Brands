'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()

  // Don't show footer on offerte pages
  if (pathname.startsWith('/offerte')) {
    return null
  }

  return <Footer />
}
