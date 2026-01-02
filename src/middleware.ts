import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Disable auto-detection to avoid potential delays with Accept-Language parsing
  localeDetection: false,

  // Prefix the default locale as well (optional, but good for SEO)
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - static files (e.g. images)
  // - _next (Next.js internals)
  // - opengraph-image, twitter-image (OG image generation routes)
  // - sitemap.xml, robots.txt
  matcher: ['/((?!api|_next|_vercel|.*\\..*|opengraph-image|twitter-image|sitemap\\.xml|robots\\.txt).*)']
};
