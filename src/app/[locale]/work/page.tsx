import { Portfolio } from "@/components/Portfolio";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import type { Metadata } from "next";
import { getVideoSchema } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });

  const title = `${t("title")} | Jarwater Motion Studio`;
  const description = t("subtitle");

  return {
    title,
    description,
    alternates: {
      canonical: `https://jarwater.com/${locale === "en" ? "" : locale + "/"}work`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://jarwater.com/${l === "en" ? "" : l + "/"}work`])
      ),
    },
    openGraph: {
      title,
      description,
      images: [`https://jarwater.com/api/og?page=work&locale=${locale}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://jarwater.com/api/og?page=work&locale=${locale}`],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("portfolio");

  // Video schema for featured project
  const videoSchema = getVideoSchema(
    "Miami Magic Journey",
    t("project1Description"),
    "https://i.vimeocdn.com/video/2101757970-f4e0e0b52e03e22598f2060eeb275e7a459e0f2a7f824659c82b313a0ad2ea99-d_1280x720",
    "https://player.vimeo.com/video/1150790609"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Portfolio />
    </>
  );
}
