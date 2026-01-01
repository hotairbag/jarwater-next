// JSON-LD Schema utilities for SEO

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jarwater Motion Studio",
    url: "https://jarwater.com",
    logo: "https://jarwater.com/logo.png",
    description: "High-end motion design, animation, and visual storytelling studio.",
    sameAs: [
      "https://vimeo.com/jarwater",
      "https://instagram.com/jarwater",
      "https://linkedin.com/company/jarwater",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@jarwater.com",
      contactType: "customer service",
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jarwater Motion Studio",
    url: "https://jarwater.com",
    description: "High-end motion design, animation, and visual storytelling.",
    publisher: {
      "@type": "Organization",
      name: "Jarwater Motion Studio",
    },
  };
}

export function getServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Jarwater Motion Studio",
      url: "https://jarwater.com",
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  embedUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    embedUrl,
    uploadDate: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "Jarwater Motion Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://jarwater.com/logo.png",
      },
    },
  };
}
