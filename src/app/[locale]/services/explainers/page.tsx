import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const title = t("explainersTitle");
  const description = t("explainersDescription");

  return {
    title,
    description,
    alternates: {
      canonical: `https://jarwater.com/${locale === "en" ? "" : locale + "/"}services/explainers`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://jarwater.com/${l === "en" ? "" : l + "/"}services/explainers`])
      ),
    },
    openGraph: {
      title,
      description,
      images: [`https://jarwater.com/api/og?page=explainers&locale=${locale}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://jarwater.com/api/og?page=explainers&locale=${locale}`],
    },
  };
}

export default async function ExplainersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services.explainers");

  const types = [
    { title: t("type1Title"), description: t("type1Description") },
    { title: t("type2Title"), description: t("type2Description") },
    { title: t("type3Title"), description: t("type3Description") },
    { title: t("type4Title"), description: t("type4Description") },
  ];

  const process = [
    { title: t("process1Title"), description: t("process1Description") },
    { title: t("process2Title"), description: t("process2Description") },
    { title: t("process3Title"), description: t("process3Description") },
    { title: t("process4Title"), description: t("process4Description") },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 md:px-12 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">
            {t("whatWeDoTitle")}
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            {t("whatWeDoDescription")}
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 px-6 md:px-12 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-12">
            {t("typesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-indigo-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-zinc-400">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-12">
            {t("processTitle")}
          </h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg text-zinc-400 mb-8">{t("ctaDescription")}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
