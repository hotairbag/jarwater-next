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

### Static OG Images

OG images are pre-generated at build time using a Node.js script. Each page has a localized SVG image for all 14 languages (84 total images).

**Generation Script:** `scripts/generate-og-images.mjs`

**Image Location:** `/public/og/{page}-{locale}.svg`

| Page | URL Pattern | Example |
|------|-------------|---------|
| Homepage | `/og/home-{locale}.svg` | `/og/home-ja.svg` |
| Work | `/og/work-{locale}.svg` | `/og/work-en.svg` |
| Contact | `/og/contact-{locale}.svg` | `/og/contact-ko.svg` |
| Explainers | `/og/explainers-{locale}.svg` | `/og/explainers-fr.svg` |
| Motion Graphics | `/og/motion-graphics-{locale}.svg` | `/og/motion-graphics-de.svg` |
| Digital Ads | `/og/digital-ads-{locale}.svg` | `/og/digital-ads-ar.svg` |

**Image Specs:**
- Size: 1200x630px
- Format: SVG
- Features: Jarwater logo, localized page title, dark gradient background
- Build: Generated automatically via `prebuild` script

**Note:** Dynamic OG image generation via `next/og` API routes is not supported on Cloudflare Workers with `@opennextjs/cloudflare`, hence the static SVG approach.

### Static Assets

| Asset | Location | Status |
|-------|----------|--------|
| Favicon | `/public/favicon.svg` | Implemented |

### Optional Improvements

1. **Apple Touch Icon** (`apple-touch-icon.png`)
   - Size: 180x180px
   - Currently using favicon.svg fallback

2. **Multiple Favicon Formats**
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

1. **Remove `unoptimized` flag from Portfolio images**
   - File: `src/components/Portfolio.tsx`
   - Enable Next.js image optimization for better Core Web Vitals

2. **Replace placeholder social links in Footer**
   - Current links use `href="#"`
   - Add real Vimeo, Instagram, LinkedIn URLs

### Medium Priority

3. **Add VideoObject schema to portfolio**
   - Each portfolio video should have structured data
   - Improves video discovery in Google

4. **Add Service schemas to service pages**
   - Use `getServiceSchema()` from `src/lib/schema.ts`

5. **Add BreadcrumbList schema**
   - Service pages: Home > Services > [Service Name]

6. **Add Apple Touch Icon**
   - Create 180x180px PNG for iOS devices

### Low Priority

7. **Add FAQ schema if FAQ content is added**

8. **Review and update alt text to be more descriptive**

9. **Portfolio video thumbnails as OG images**
   - Each portfolio item could have its own OG image using the video thumbnail

---

## Files Reference

### SEO Configuration Files
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `src/app/robots.ts` - Robots.txt configuration
- `src/lib/schema.ts` - JSON-LD schema utilities
- `src/components/SchemaScript.tsx` - Schema injection component
- `scripts/generate-og-images.mjs` - OG image generation script

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
