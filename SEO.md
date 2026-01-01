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

Implemented via `src/lib/schema.ts` and `src/components/SchemaScript.tsx`:

1. **Organization Schema** - Company info, logo, contact, social links
2. **WebSite Schema** - Site name, URL, publisher info

Additional schemas available:
- `getServiceSchema()` - For service pages
- `getBreadcrumbSchema()` - For navigation hierarchy
- `getVideoSchema()` - For portfolio videos

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

### Current Status

| Asset | Location | Status |
|-------|----------|--------|
| Favicon | `/public/favicon.svg` | Implemented |
| Apple Touch Icon | `/public/apple-touch-icon.svg` | Placeholder (needs PNG) |
| OG Image | `/public/og-image.svg` | Placeholder (needs PNG) |

### TODO: Create Production Assets

1. **OG Image** (`og-image.png`)
   - Size: 1200x630px
   - Include: Logo, tagline, brand colors
   - Convert from SVG placeholder

2. **Apple Touch Icon** (`apple-touch-icon.png`)
   - Size: 180x180px
   - Square with rounded corners baked in
   - Convert from SVG placeholder

3. **Multiple Favicon Formats** (optional)
   - `favicon.ico` for legacy browsers
   - `icon-192.png` for Android
   - `icon-512.png` for PWA

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

### High Priority

1. **Create production OG/social images**
   - Replace SVG placeholders with proper PNGs
   - Consider locale-specific OG images for major markets

2. **Add per-page OG images**
   - Service pages should have unique OG images
   - Portfolio items could have video thumbnails as OG images

3. **Remove `unoptimized` flag from Portfolio images**
   - File: `src/components/Portfolio.tsx`
   - Enable Next.js image optimization for better Core Web Vitals

### Medium Priority

4. **Add VideoObject schema to portfolio**
   - Each portfolio video should have structured data
   - Improves video discovery in Google

5. **Add Service schemas to service pages**
   - Use `getServiceSchema()` from `src/lib/schema.ts`

6. **Replace placeholder social links in Footer**
   - Current links use `href="#"`
   - Add real Vimeo, Instagram, LinkedIn URLs

7. **Add BreadcrumbList schema**
   - Service pages: Home > Services > [Service Name]

### Low Priority

8. **Consider dynamic OG image generation**
   - Use `next/og` ImageResponse for per-page images
   - Create `opengraph-image.tsx` route handlers

9. **Add FAQ schema if FAQ content is added**

10. **Review and update alt text to be more descriptive**

---

## Files Reference

### SEO Configuration Files
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `src/app/robots.ts` - Robots.txt configuration
- `src/lib/schema.ts` - JSON-LD schema utilities
- `src/components/SchemaScript.tsx` - Schema injection component

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
