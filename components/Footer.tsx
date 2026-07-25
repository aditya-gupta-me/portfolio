import Link from "next/link";
import PageContainer from "./PageContainer";
import { siX } from "simple-icons";

const NAV_LINKS = [
  { label: "Home", route: "/" },
  { label: "Projects", route: "/projects" },
  { label: "Blog", route: "/blog" },
  { label: "Resume", route: "/resume" },
  { label: "Work", route: "/work" },
  { label: "Skills", route: "/skills" },
];

const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    icon: "bxl-github",
    url: "https://github.com/aditya-gupta-me",
  },
  {
    platform: "X",
    icon: "bxl-twitter",
    url: "https://x.com/heytheadee",
  },
  {
    platform: "LinkedIn",
    icon: "bxl-linkedin",
    url: "https://linkedin.com/in/aditya-gupta-irl",
  },
  {
    platform: "Medium",
    icon: "bxl-medium",
    url: "https://medium.com/@aditya-gupta-dev",
  },
  {
    platform: "Stack Overflow",
    icon: "bxl-stack-overflow",
    url: "https://stackoverflow.com/users/19718063/haptic?tab=profile",
  },
  {
    platform: "Email",
    icon: "bx-envelope",
    url: "mailto:aditya.gupta.leads@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#FAF9F7] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="border-t border-black/10 dark:border-white/10" />
      <PageContainer>
        <div className="pt-12 pb-8 flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            {/* NAVIGATE Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-wider text-black/50 dark:text-white/50 uppercase">
                Navigate
              </h3>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-x-4 gap-y-2"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:underline underline-offset-4 decoration-black/20 dark:decoration-white/20 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CONNECT Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-wider text-black/50 dark:text-white/50 uppercase">
                Connect
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-all overflow-hidden"
                  >
                    {social.platform === "X" ? (
                      <span className="inline-flex items-center justify-center w-5 h-5">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-[14px] h-[14px]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={siX.path} />
                        </svg>
                      </span>
                    ) : (
                      <i className={`bx ${social.icon} text-xl`}></i>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="w-full border-black/10 dark:border-white/10" />

          {/* Bottom Bar */}
          <div className="text-center">
            <small className="text-xs text-black/50 dark:text-white/50">
              © 2026 Aditya Gupta. All rights reserved.
            </small>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
