import Image from 'next/image';
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ExperienceSection from "@/components/ExperienceSection";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Aditya Gupta — Full Stack Developer & MCA Student",
  description:
    "MCA student at Vellore Institute of Technology specializing in full-stack web development with MERN stack and competitive programming.",
  openGraph: {
    title: "Aditya Gupta — Full Stack Developer & MCA Student",
    description:
      "MCA student at Vellore Institute of Technology specializing in full-stack web development with MERN stack and competitive programming.",
    url: "https://adityaguptadev.me/",
    images: [
      {
        url: "https://adityaguptadev.me/PP.jpg",
        width: 256,
        height: 256,
        alt: "Aditya Gupta",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aditya Gupta — Full Stack Developer & MCA Student",
    description:
      "MCA student at Vellore Institute of Technology specializing in full-stack web development with MERN stack and competitive programming.",
    images: ["https://adityaguptadev.me/PP.jpg"],
  },
  alternates: {
    canonical: "https://adityaguptadev.me/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Gupta",
  jobTitle: "Full Stack Developer",
  description:
    "MCA student at Vellore Institute of Technology specializing in full-stack web development with MERN stack and competitive programming",
  image: "https://adityaguptadev.me/PP.jpg",
  url: "https://adityaguptadev.me/",
  sameAs: [
    "https://github.com/aditya-gupta-me",
    "https://linkedin.com/in/aditya-gupta-irl",
    "https://x.com/heytheadee",
    "https://leetcode.com/u/the_adee/",
    "https://codeforces.com/profile/the_adee",
    "https://www.codechef.com/users/the_adee",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Vellore Institute of Technology",
      location: "Vellore, India",
    },
    {
      "@type": "EducationalOrganization",
      name: "Symbiosis International University",
      location: "Pune, India",
    },
  ],
  knowsAbout: [
    "Full Stack Development",
    "MERN Stack",
    "React.js",
    "Node.js",
    "JavaScript",
    "Java",
    "Python",
    "Competitive Programming",
    "Web Development",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  email: "aditya.gupta.leads@gmail.com",
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
          <div className="flex items-center gap-4">
            <Image
              src="/PP.jpg"
              alt="Aditya Gupta avatar"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold dark:text-white">
                Aditya Gupta
              </h1>
              <p className="text-black/50 dark:text-white/50 text-sm md:text-base flex items-center">
                Full Stack Developer · MCA Student · aditya.gupta.leads@gmail.com
                <CopyButton text="aditya.gupta.leads@gmail.com" />
              </p>
            </div>
          </div>

          {/* Short Bio */}
          <p className="text-black/50 dark:text-white/50">
            Love building cool stuff.
          </p>

          {/* Social Icons Row */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
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
        </div>

        
        <ExperienceSection />
        
      </PageContainer>
    </>
  );
}
