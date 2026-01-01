import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
        <div className="mb-4 md:mb-0 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-zinc-500"
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
          <span className="font-serif font-bold text-zinc-400 tracking-tight">
            JARWATER
          </span>
          <span className="mx-2 text-zinc-700">|</span>
          Motion Studio
        </div>

        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Vimeo
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            LinkedIn
          </Link>
        </div>

        <div className="mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
