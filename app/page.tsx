import Image from 'next/image';
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ExperienceSection from "@/components/ExperienceSection";
import CopyButton from "@/components/CopyButton";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStrip from "@/components/TechStrip";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siX } from 'simple-icons';

import { projects } from "@/data/projects";
import { workExperiences } from "@/data/work";

const AVAILABLE = true;

// Generate skills list dynamically
const projectTags = projects.flatMap((p) => p.tech);
const workTech = workExperiences.flatMap((w) => w.technologies.map((t) => t.name));
const stripTech = ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']; // Tech strip list
const uniqueSkills = Array.from(new Set([...projectTags, ...workTech, ...stripTech]));


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Gupta",
  jobTitle: "Full Stack Developer",
  description: "Open to full-stack and frontend opportunities.",
  image: "https://www.adityaguptadev.me/avatar.png",
  url: "https://www.adityaguptadev.me/",
  sameAs: [
    "https://github.com/aditya-gupta-me",
    "https://linkedin.com/in/aditya-gupta-irl",
  ],
  hasOccupation: workExperiences.length > 0 ? {
    "@type": "Role",
    roleName: workExperiences[0].role,
    worksFor: {
      "@type": "Organization",
      name: workExperiences[0].company,
    },
    startDate: workExperiences[0].startDate,
  } : undefined,
  knowsAbout: uniqueSkills,
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageContainer>
        <div className="flex flex-col">
          {/* Avatar and Name row */}
          <div className="flex items-start gap-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/avatar.png"
                alt="Aditya Gupta avatar"
                width={96}
                height={96}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide text-black dark:text-white">
                Aditya Gupta
              </h1>
              <p className="text-black/50 dark:text-white/50 text-sm flex flex-wrap items-center gap-x-1">
                Engineer &middot; Artist &middot; <CopyButton text="aditya.gupta.leads@gmail.com" />
              </p>
              {AVAILABLE && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-green-500/25 bg-green-500/5 text-xs text-green-700 dark:text-green-400 mt-1.5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  Open to opportunities
                </span>
              )}
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-black/50 dark:text-white/50 mt-4 animate-fade-up" style={{ animationDelay: '80ms' }}>
            Love building cool stuff.
          </p>

          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center gap-5 mt-4 animate-fade-up" style={{ animationDelay: '160ms' }}>
            {[
              { name: "GitHub", icon: "bxl-github", url: "https://github.com/aditya-gupta-me" },
              { name: "LinkedIn", icon: "bxl-linkedin", url: "https://linkedin.com/in/aditya-gupta-irl" },
              { name: "X", icon: "bxl-twitter", url: "https://x.com/heytheadee" },
              { name: "Medium", icon: "bxl-medium", url: "https://medium.com/@aditya-gupta-dev" },
              { name: "Stack Overflow", icon: "bxl-stack-overflow", url: "https://stackoverflow.com/users/19718063/haptic?tab=profile" },
              { name: "Email", icon: "bx-envelope", url: "mailto:aditya.gupta.leads@gmail.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={social.name}
                className="relative group/social text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
              >
                {social.name === "X" ? (
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
                {/* CSS-only Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {social.name}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Tech Strip */}
          <div className="mt-6 animate-fade-up" style={{ animationDelay: '240ms' }}>
            <TechStrip />
          </div>
        </div>

        <AnimatedSection>
          <FeaturedProjects />
        </AnimatedSection>

        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>

      </PageContainer>
    </>
  );
}
