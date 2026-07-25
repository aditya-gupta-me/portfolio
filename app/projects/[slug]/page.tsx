import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import { AnimatedSection } from '@/components/AnimatedSection';
import { projects } from '@/data/projects';
import * as icons from 'simple-icons';

const isPackageUrl = (url: string) =>
  ['pypi.org', 'npmjs.com', 'crates.io', 'pkg.go.dev'].some((d) => url.includes(d));

// Pre-render all slugs at build time
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Per-project SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Aditya Gupta`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://www.adityaguptadev.me/projects/${project.slug}`,
      type: 'article',
      images:
        project.images?.length > 0
          ? [{ url: project.images[0], width: 1200, height: 630, alt: project.title }]
          : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: project.images?.length > 0 ? [project.images[0]] : [],
    },
  };
}

// Status badge colours
function StatusBadge({ status }: { status: 'live' | 'in-progress' | 'archived' }) {
  const statusConfig = {
    live: {
      dot: 'bg-green-500 animate-pulse',
      text: 'text-green-700 dark:text-green-400',
      border: 'border-green-500/25',
      bg: 'bg-green-500/5',
      label: 'Live',
    },
    'in-progress': {
      dot: 'bg-amber-400',
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-400/25',
      bg: 'bg-amber-400/5',
      label: 'In Progress',
    },
    archived: {
      dot: 'bg-black/30 dark:bg-white/30',
      text: 'text-black/50 dark:text-white/40',
      border: 'border-black/10 dark:border-white/10',
      bg: 'bg-black/[0.02] dark:bg-white/[0.02]',
      label: 'Archived',
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs w-fit ${config.border} ${config.bg} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} />
      {config.label}
    </span>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <PageContainer>
      <div className="space-y-8 pb-12">
        {/* 1. Back nav */}
        <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
          >
            ← Projects
          </Link>
        </div>

        {/* 2. Project header */}
        <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-lg font-semibold">{project.title}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-xs text-black/40 dark:text-white/40 mt-1">
            {project.year}
          </p>
        </div>

        {/* 3. Action links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '160ms' }}>
            {project.liveUrl && project.liveUrl !== project.repoUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {isPackageUrl(project.liveUrl) ? 'View package ↗' : 'View live ↗'}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}

        {/* 4. Hero image */}
        {project.images?.length > 0 && (
          <div className="relative w-full max-h-[480px] overflow-hidden rounded-lg animate-fade-up border border-black/10 dark:border-white/10" style={{ animationDelay: '240ms' }}>
            <Image
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              width={1200}
              height={630}
              className="w-full object-cover object-top"
              priority
            />
          </div>
        )}

        {/* 5. Overview */}
        <AnimatedSection>
          <div>
            <h2 className="text-sm font-semibold mb-3">Overview</h2>
            <div className="space-y-4 text-sm text-black/60 dark:text-white/60 leading-relaxed">
              {project.fullDescription.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 6. What I built */}
        {project.highlights.length > 0 && (
          <AnimatedSection>
            <div>
              <h2 className="text-sm font-semibold mb-3">What I built</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        )}

        {/* 7. Tech stack */}
        {project.technologies.length > 0 && (
          <AnimatedSection>
            <div>
              <h2 className="text-sm font-semibold mb-3">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const exportName = tech.icon ? 'si' + tech.icon.charAt(0).toUpperCase() + tech.icon.slice(1) : null;
                  const iconData = exportName ? (icons as any)[exportName] : null;
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
            </div>
          </AnimatedSection>
        )}

        {/* 8. Navigation */}
        <AnimatedSection>
          <hr className="border-black/10 dark:border-white/10 mb-8" />
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="text-xs text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-150"
              >
                ← {prevProject.title}
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="text-xs text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-150"
              >
                {nextProject.title} →
              </Link>
            ) : (
              <Link
                href="/projects"
                className="text-xs text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-150"
              >
                All projects →
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </PageContainer>
  );
}
