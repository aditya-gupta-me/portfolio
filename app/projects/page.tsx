import Link from 'next/link';
import type { Metadata } from 'next';
import PageContainer from '@/components/PageContainer';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: "A showcase of things I've built — web apps, tools, and experiments.",
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects',
    description: "A showcase of things I've built — web apps, tools, and experiments.",
    url: '/projects',
  },
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Projects',
    itemListElement: sortedProjects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      description: p.description,
      url: `/projects/${p.slug}`,
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
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <h1 className="text-lg font-semibold mb-2">Projects</h1>
            <p className="text-black/50 dark:text-white/50 text-sm">
              A showcase of things I&apos;ve built: web apps, tools, and experiments.
            </p>
          </div>

          <div className="flex flex-col">
            {sortedProjects.map((project, index) => (
              <div key={project.slug} className="animate-fade-up" style={{ animationDelay: `${(index + 1) * 80}ms` }}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block py-4 px-4 -mx-4 rounded-lg hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h2 className="text-sm font-semibold text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/40">
                        {project.year}
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.status === 'live'
                            ? 'bg-green-500'
                            : project.status === 'in-progress'
                              ? 'bg-amber-400'
                              : 'bg-black/30 dark:bg-white/30'
                            }`}
                          aria-hidden="true"
                        />
                        <span className="sr-only">{project.status}</span>
                      </span>
                      <i className="bx bx-right-arrow-alt text-black/50 dark:text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                  </div>
                  <p className="text-xs text-black/50 dark:text-white/50 mb-2">
                    {project.description}
                  </p>
                  <p className="text-xs text-black/40 dark:text-white/40">
                    {project.tech.join(' · ')}
                  </p>
                </Link>
                {index < sortedProjects.length - 1 && (
                  <hr className="border-black/10 dark:border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
