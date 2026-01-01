import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = "https://jarwater.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/contact",
    "/services/explainers",
    "/services/motion-graphics",
    "/services/digital-ads",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const alternates: Record<string, string> = {};

    // Build alternates for all locales (English without prefix)
    for (const locale of locales) {
      const localePath = locale === "en" ? route : `/${locale}${route}`;
      alternates[locale] = `${baseUrl}${localePath}`;
    }

    // Add entry for each locale
    for (const locale of locales) {
      const localePath = locale === "en" ? route : `/${locale}${route}`;

      sitemap.push({
        url: `${baseUrl}${localePath}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return sitemap;
}
