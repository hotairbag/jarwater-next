"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer = () => {
  const locale = useLocale();
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-6 h-6 text-zinc-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 13C8 13 10 10 12 10C14 10 16 13 16 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 16C8 16 10 13 12 13C14 13 16 16 16 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-serif font-bold text-white tracking-tight">
                JARWATER
              </span>
            </div>
            <p className="text-zinc-500 text-sm">{t("tagline")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("navigation")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/work`}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  {tNav("work")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("services")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/services/explainers`}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  {tNav("explainers")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/motion-graphics`}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  {tNav("motionGraphics")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/digital-ads`}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  {tNav("digitalAds")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t("connect")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Vimeo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Jarwater. {t("rights")}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-zinc-500 hover:text-white transition-colors text-sm"
            >
              {t("privacy")}
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-white transition-colors text-sm"
            >
              {t("terms")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
