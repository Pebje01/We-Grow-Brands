import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except:
  // - API routes
  // - Offerte pages (outside i18n)
  // - Static files
  // - Next.js internals
  matcher: [
    '/((?!api|offerte|offerte-admin|_next|_vercel|.*\\..*).*)',
  ],
}
