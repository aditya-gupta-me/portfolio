import Image from 'next/image';
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ExperienceSection from "@/components/ExperienceSection";
import CopyButton from "@/components/CopyButton";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStrip from "@/components/TechStrip";
import { AnimatedSection } from "@/components/AnimatedSection";

import { projects } from "@/data/projects";
import { workExperiences } from "@/data/work";

const AVAILABLE = true;

// Generate skills list dynamically
const projectTags = projects.flatMap((p) => p.tags);
const workTech = workExperiences.flatMap((w) => w.technologies.map((t) => t.name));
const stripTech = ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS']; // Tech strip list
const uniqueSkills = Array.from(new Set([...projectTags, ...workTech, ...stripTech]));

export const metadata: Metadata = {
  // REPLACE: YOUR_NAME, YOUR_POSITIONING_STATEMENT, YOUR_LOCATION
  title: 'YOUR_NAME — Full Stack Developer',
  description: 'YOUR_POSITIONING_STATEMENT. Based in YOUR_LOCATION. Open to full-stack and frontend opportunities.',
  openGraph: {
    // REPLACE: YOUR_NAME, YOUR_POSITIONING_STATEMENT, YOUR_DOMAIN
    title: 'YOUR_NAME — Full Stack Developer',
    description: 'YOUR_POSITIONING_STATEMENT.',
    url: 'https://YOUR_DOMAIN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    // REPLACE: YOUR_NAME, YOUR_POSITIONING_STATEMENT
    title: 'YOUR_NAME — Full Stack Developer',
    description: 'YOUR_POSITIONING_STATEMENT.',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  // REPLACE: YOUR_NAME, YOUR_POSITIONING_STATEMENT, YOUR_DOMAIN, YOUR_SOCIAL_LINKS
  name: "YOUR_NAME",
  jobTitle: "Full Stack Developer",
  description: "YOUR_POSITIONING_STATEMENT.",
  image: "https://YOUR_DOMAIN/PP.jpg",
  url: "https://YOUR_DOMAIN/",
  sameAs: [
    "https://github.com/YOUR_GITHUB",
    "https://linkedin.com/in/YOUR_LINKEDIN",
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
        <div className="flex flex-col space-y-4">
          {/* Avatar and Name row */}
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/PP.jpg"
                alt="Aditya Gupta avatar"
                width={96}
                height={96}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
                Aditya Gupta
              </h1>
              <p className="text-black/50 dark:text-white/50 text-sm flex flex-wrap items-center gap-x-1">
                Full Stack Developer &middot; MCA Student &middot; <CopyButton text="aditya.gupta.leads@gmail.com" />
              </p>
            </div>
          </div>
          
          {AVAILABLE && (
            <div className="animate-fade-up" style={{ animationDelay: '60ms' }}>
              <span className="flex items-center gap-1.5 text-xs text-black/50 dark:text-white/50 pt-1">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
                Open to opportunities
              </span>
            </div>
          )}

          {/* Short Bio */}
          <div className="flex flex-col gap-1 pt-1">
            <p className="text-sm text-black dark:text-white animate-fade-up" style={{ animationDelay: '120ms' }}>
              {/* POSITIONING: e.g. "I build fast, production-ready web applications — full-stack with a lean toward frontend." */}
              I build fast, production-ready web applications — full-stack with a lean toward frontend.
            </p>
            <p className="text-sm text-black/50 dark:text-white/50 animate-fade-up" style={{ animationDelay: '160ms' }}>
              Love building cool stuff.
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center gap-5 pt-2 animate-fade-up" style={{ animationDelay: '220ms' }}>
            {[
              { name: "GitHub", icon: "bxl-github", url: "https://github.com/aditya-gupta-me" },
              { name: "LinkedIn", icon: "bxl-linkedin", url: "https://linkedin.com/in/aditya-gupta-irl" },
              { name: "X", icon: "bxl-twitter", url: "https://x.com/heytheadee" },
              { name: "Medium", icon: "bxl-medium", url: "https://medium.com/@YOUR_USERNAME" },
              { name: "Stack Overflow", icon: "bxl-stack-overflow", url: "https://stackoverflow.com/users/YOUR_USER_ID" },
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
                <i className={`bx ${social.icon} text-xl`}></i>
                {/* CSS-only Tooltip */}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {social.name}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white"></span>
                </span>
              </a>
            ))}
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '280ms' }}>
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
