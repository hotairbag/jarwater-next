# Jarwater Motion Studio - SEO Documentation

## Overview

This document outlines the SEO implementation for the Jarwater Motion Studio website, a Next.js 15 application with internationalization (i18n) support for 14 languages.

## Current SEO Implementation

### Meta Tags & Metadata

All pages use Next.js `generateMetadata()` function for dynamic, localized metadata:

| Page | Title Source | Description Source |
|------|--------------|-------------------|
| Homepage | `metadata.title` | `metadata.description` |
| /work | `portfolio.title` | `portfolio.subtitle` |
| /contact | `contact.label` | `contact.subtitle` |
| /services/explainers | `metadata.explainersTitle` | `metadata.explainersDescription` |
| /services/motion-graphics | `metadata.motionGraphicsTitle` | `metadata.motionGraphicsDescription` |
| /services/digital-ads | `metadata.digitalAdsTitle` | `metadata.digitalAdsDescription` |

### Open Graph & Twitter Cards

Implemented in `src/app/[locale]/layout.tsx`:

```typescript
openGraph: {
  title,
  description,
  url,
  siteName: "Jarwater Motion Studio",
  locale: locale === "en" ? "en_US" : locale.replace("-", "_"),
  type: "website",
  images: [{ url: "https://jarwater.com/og-image.png", width: 1200, height: 630 }],
}

twitter: {
  card: "summary_large_image",
  title,
  description,
  images: ["https://jarwater.com/og-image.png"],
}
```

### Canonical URLs & Hreflang

- Each page has a canonical URL
- Language alternates are specified for all 14 supported locales
- English pages use root URLs (e.g., `/contact`), other locales use prefix (e.g., `/ja/contact`)

### JSON-LD Structured Data

Implemented via `src/lib/schema.ts`:

1. **Organization Schema** - Company info, logo, email contact (homepage)
2. **WebSite Schema** - Site name, URL, publisher info (homepage)
3. **Service Schema** - Applied to all service pages (explainers, motion-graphics, digital-ads)
4. **BreadcrumbList Schema** - Navigation hierarchy on service pages
5. **VideoObject Schema** - Featured video on portfolio/work page

### Sitemap & Robots

- **Sitemap**: `src/app/sitemap.ts` generates 84 URLs (6 pages x 14 locales) with hreflang alternates
- **Robots**: `src/app/robots.ts` allows all crawlers and points to sitemap

---

## Supported Languages

| Code | Language | RTL |
|------|----------|-----|
| en | English | No |
| ja | Japanese | No |
| ko | Korean | No |
| es | Spanish | No |
| pt-BR | Portuguese (Brazil) | No |
| th | Thai | No |
| id | Indonesian | No |
| fr | French | No |
| zh-CN | Chinese (Simplified) | No |
| ar | Arabic | Yes |
| de | German | No |
| de-CH | German (Switzerland) | No |
| no | Norwegian | No |
| da | Danish | No |

---

## Image Assets

### Dynamic OG Images

OG images are generated dynamically using `next/og` (ImageResponse) via an API route.

**API Route:** `src/app/api/og/route.tsx`

**URL Pattern:** `/api/og?page={page}&locale={locale}`

| Page | Example URL |
|------|-------------|
| Homepage | `/api/og?page=home&locale=en` |
| Work | `/api/og?page=work&locale=ja` |
| Contact | `/api/og?page=contact&locale=ko` |
| Explainers | `/api/og?page=explainers&locale=fr` |
| Motion Graphics | `/api/og?page=motion-graphics&locale=de` |
| Digital Ads | `/api/og?page=digital-ads&locale=ar` |

**Image Specs:**
- Size: 1200x630px
- Format: PNG (generated on-demand)
- Runtime: Node.js (required for Cloudflare Workers)
- Caching: `s-maxage=86400` (CDN caches for 24 hours)
- Features: Jarwater logo, localized page title, dark gradient background

**Important for Cloudflare Workers:** The API route uses `runtime = "nodejs"` explicitly, as edge runtime is not supported by `@opennextjs/cloudflare` for API routes.

### Icons & Favicons

| Asset | Location | Size | Status |
|-------|----------|------|--------|
| Favicon (PNG) | `src/app/icon.tsx` | 32x32 | Dynamic (Node.js) |
| Apple Touch Icon | `src/app/apple-icon.tsx` | 180x180 | Dynamic (Node.js) |
| Favicon (SVG) | `/public/favicon.svg` | N/A | Legacy fallback |

Both dynamic icons use `next/og` ImageResponse and are generated on-demand with the Jarwater logo design.

### Optional Future Improvements

1. **Multiple Favicon Formats** (for PWA support)
   - `icon-192.png` for Android
   - `icon-512.png` for PWA manifest

---

## Accessibility for SEO

Implemented accessibility improvements that also benefit SEO:

### Navigation
- Logo link has `aria-label`
- Services dropdown has `aria-expanded`, `aria-haspopup`
- Dropdown uses semantic `<ul>`/`<li>` with ARIA roles
- SVGs marked with `aria-hidden="true"`

### Portfolio Modal
- Modal has `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Close button has `aria-label`
- Videos have `title` attribute

### General
- Semantic HTML (`<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy
- Alt text on images

---

## Remaining SEO Improvements

### Low Priority

1. **Add FAQ schema if FAQ content is added**

2. **Review and update alt text to be more descriptive**

3. **Portfolio video thumbnails as OG images**
   - Each portfolio item could have its own OG image using the video thumbnail

4. **PWA manifest with larger icons**
   - Add 192x192 and 512x512 icons for Android/PWA support

---

## Files Reference

### SEO Configuration Files
- `src/app/sitemap.ts` - Dynamic sitemap generation (84 URLs)
- `src/app/robots.ts` - Robots.txt configuration
- `src/lib/schema.ts` - JSON-LD schema utilities
- `src/components/SchemaScript.tsx` - Schema injection component
- `src/app/api/og/route.tsx` - Dynamic OG image generation
- `src/app/icon.tsx` - Dynamic 32x32 favicon
- `src/app/apple-icon.tsx` - Dynamic 180x180 Apple Touch Icon

### Layout & Metadata
- `src/app/[locale]/layout.tsx` - Main layout with OG/Twitter/icons
- `src/app/[locale]/*/page.tsx` - Page-specific metadata

### Translation Files
- `messages/*.json` - Localized metadata in each language file
  - `metadata.title`
  - `metadata.description`
  - `metadata.explainersTitle`, etc.

---

## Testing SEO

### Tools
1. [Google Rich Results Test](https://search.google.com/test/rich-results)
2. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. [Twitter Card Validator](https://cards-dev.twitter.com/validator)
4. [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
5. [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Manual Checks
1. View page source - verify meta tags are present
2. Check Network tab - verify no 404s for images/icons
3. Test social sharing on each platform
4. Verify sitemap.xml loads correctly
5. Test all language versions for proper hreflang

---

*Last updated: January 2026*
