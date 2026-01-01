import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Auto-detect the locale based on Accept-Language header
  localeDetection: true,

  // Prefix the default locale as well (optional, but good for SEO)
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - static files (e.g. images)
  // - _next (Next.js internals)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
