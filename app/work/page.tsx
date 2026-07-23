import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import WorkEntryCard from "@/components/WorkEntryCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { workExperiences } from "@/data/work";

export const metadata: Metadata = {
  title: "Work Experience | Aditya Gupta",
  description:
    "A full overview of my professional work experience, roles, and the technologies I have worked with.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work Experience | Aditya Gupta",
    description:
      "A full overview of my professional work experience, roles, and the technologies I have worked with.",
    url: "https://adityaguptadev.me/work",
    type: "profile",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Work Experience",
    itemListElement: workExperiences.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${entry.role} at ${entry.company}`,
      description: entry.accomplishments[0] || "",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageContainer>
        <div className="space-y-8 pb-12">
          {/* Header */}
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <h1 className="text-lg font-semibold mb-2">Work Experience</h1>
            <p className="text-black/50 dark:text-white/50 text-sm">
              My work experiences across different companies and roles.
            </p>
          </div>

          {/* Entries list */}
          <div className="flex flex-col">
            {workExperiences.map((entry, index) => (
              <AnimatedSection key={`${entry.company}-${index}`}>
                <div className="pt-2 pb-2">
                  <WorkEntryCard entry={entry} variant="full" />
                  {index < workExperiences.length - 1 && (
                    <hr className="my-6 border-black/10 dark:border-white/10" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
