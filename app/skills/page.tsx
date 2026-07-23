import type { Metadata } from 'next';
import * as icons from 'simple-icons';
import PageContainer from '@/components/PageContainer';
import { AnimatedSection } from '@/components/AnimatedSection';
import { skills, type SkillEntry } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills — YOUR_NAME',
  description:
    'The full technical stack I work with — languages, frameworks, databases, and tools.',
};

const categories: { key: SkillEntry['category']; label: string }[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools & DevOps' },
];

export default function SkillsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Technical Skills',
    itemListElement: skills.map((skill, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: skill.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageContainer>
        <div className="pb-12">
          {/* Page heading */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0ms' }}>
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="text-sm text-black/50 dark:text-white/40 mt-1">
              A complete overview of the technologies and tools I work with.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-8">
            {categories.map((category) => {
              const categorySkills = skills.filter(
                (s) => s.category === category.key
              );

              if (categorySkills.length === 0) return null;

              return (
                <AnimatedSection key={category.key}>
                  <section className="mb-8">
                    <p className="text-xs text-black/40 dark:text-white/50 mb-3">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                    {categorySkills.map((tech) => {
                      const exportName = tech.slug
                        ? 'si' +
                          tech.slug.charAt(0).toUpperCase() +
                          tech.slug.slice(1)
                        : null;
                      const iconData = exportName
                        ? (icons as any)[exportName]
                        : null;

                      return (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.03] text-xs text-black/70 dark:text-white/60"
                        >
                          {iconData && (
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              width="12"
                              height="12"
                              fill="currentColor"
                              className="opacity-70 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d={iconData.path} />
                            </svg>
                          )}
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                  </section>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
