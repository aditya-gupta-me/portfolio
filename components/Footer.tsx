import Link from "next/link";
import PageContainer from "./PageContainer";

const NAV_LINKS = [
  { label: "Home", route: "/" },
  { label: "Projects", route: "/projects" },
  { label: "Blog", route: "/blog" },
  { label: "Resume", route: "/resume" },
  { label: "Work", route: "/work" },
];

const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    icon: "bxl-github",
    url: "https://github.com/aditya-gupta-me",
  },
  {
    platform: "X (Twitter)",
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
    url: "https://medium.com/@aditya_placeholder",
  },
  {
    platform: "Stack Overflow",
    icon: "bxl-stack-overflow",
    url: "https://stackoverflow.com/users/placeholder",
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
              <div className="grid grid-cols-4 gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-all overflow-hidden"
                  >
                    <i className={`bx ${social.icon} text-xl`}></i>
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
