"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("hero");

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900 rounded-full blur-[128px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900 rounded-full blur-[128px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight text-white mb-8 animate-[fadeIn_1s_ease-out_forwards] leading-[0.9]">
          {t("title")}
        </h1>

        <p
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide animate-[fadeIn_1s_ease-out_forwards]"
          style={{ animationDelay: "0.3s" }}
        >
          {t("subtitle")}
        </p>

        <div
          className="flex flex-col md:flex-row gap-6 justify-center animate-[fadeIn_1s_ease-out_forwards]"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            href={`/${locale}/work`}
            className="group relative px-8 py-4 bg-white text-zinc-950 text-sm font-semibold tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t("cta")}
            </span>
            <div className="absolute inset-0 bg-zinc-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 border border-zinc-700 text-white text-sm font-semibold tracking-widest uppercase hover:bg-zinc-900 transition-colors text-center"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <svg
          className="w-6 h-6 text-zinc-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};
