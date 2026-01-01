import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Playfair_Display } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SchemaScript } from "@/components/SchemaScript";
import { locales, isRtlLocale, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as Record<string, string>;

  const title = metadata?.title || "Jarwater | Motion Studio";
  const description = metadata?.description || "High-end motion design, animation, and visual storytelling.";
  const url = `https://jarwater.com${locale === "en" ? "" : "/" + locale}`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://jarwater.com${l === "en" ? "" : "/" + l}`])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Jarwater Motion Studio",
      locale: locale === "en" ? "en_US" : locale.replace("-", "_"),
      type: "website",
      images: [
        {
          url: `https://jarwater.com/og/home-${locale}.svg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://jarwater.com/og/home-${locale}.svg`],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side
  const messages = await getMessages();

  const isRtl = isRtlLocale(locale as Locale);

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <SchemaScript />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-zinc-950 text-slate-200 min-h-screen selection:bg-indigo-500 selection:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
