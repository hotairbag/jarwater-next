import { Portfolio } from "@/components/Portfolio";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import type { Metadata } from "next";

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
      images: [`https://jarwater.com/og/work-${locale}.svg`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://jarwater.com/og/work-${locale}.svg`],
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Portfolio />;
}
