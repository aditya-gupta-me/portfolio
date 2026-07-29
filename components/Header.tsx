"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume" },
];

export default function Header() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-[#FAF9F7]/70 dark:bg-[#0a0a0a]/70 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-6 w-full h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm md:text-base font-medium transition-all ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="relative group/theme">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {/* Sun icon for dark mode */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden dark:block">
              <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
            </svg>
            {/* Moon icon for light mode */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block dark:hidden">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover/theme:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            <span className="hidden dark:inline">Light mode</span>
            <span className="inline dark:hidden">Dark mode</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black dark:border-b-white"></span>
          </span>
        </div>
      </div>
    </header>
  );
}
