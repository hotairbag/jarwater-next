"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: t("work"), href: `/${locale}/work` },
    { label: t("contact"), href: `/${locale}/contact` },
  ];

  const serviceItems = [
    { label: t("explainers"), href: `/${locale}/services/explainers` },
    { label: t("motionGraphics"), href: `/${locale}/services/motion-graphics` },
    { label: t("digitalAds"), href: `/${locale}/services/digital-ads` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <Link href={`/${locale}`} className="flex items-center gap-3 cursor-pointer group" aria-label="Jarwater Motion Studio - Home">
        <svg
          className="w-8 h-8 text-white group-hover:text-indigo-400 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
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
        <span className="text-2xl font-serif font-bold tracking-tighter text-white group-hover:opacity-80 transition-opacity">
          JARWATER
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 flex items-center gap-1"
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
            aria-label={`${t("services")} menu`}
          >
            {t("services")}
            <svg
              className={`w-3 h-3 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isServicesOpen && (
            <ul className="absolute left-0 mt-2 w-56 py-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl" role="menu">
              {serviceItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    role="menuitem"
                    href={item.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? "text-indigo-400 bg-zinc-800"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm uppercase tracking-widest transition-all duration-300 ${
              pathname === item.href
                ? "text-white border-b border-white pb-1"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <LanguageSwitcher />
      </div>

      <div className="md:hidden flex items-center gap-4">
        <LanguageSwitcher />
        <Link
          href={`/${locale}/contact`}
          className="text-sm uppercase tracking-widest text-white"
        >
          {t("getInTouch")}
        </Link>
      </div>
    </nav>
  );
};
