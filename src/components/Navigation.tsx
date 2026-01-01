"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="flex items-center gap-3 cursor-pointer group">
        <svg
          className="w-8 h-8 text-white group-hover:text-indigo-400 transition-colors duration-300"
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
        <span className="text-2xl font-serif font-bold tracking-tighter text-white group-hover:opacity-80 transition-opacity">
          JARWATER
        </span>
      </Link>

      <div className="hidden md:flex gap-12">
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
      </div>

      <div className="md:hidden flex gap-4">
        <Link
          href="/contact"
          className="text-sm uppercase tracking-widest text-white"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
};
