import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import TechIconGrid from '@/components/TechIconGrid';
import { projects } from '@/data/projects';

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
    title: `${project.title} — Projects`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Projects`,
      description: project.description,
      images: project.images[0] ? [project.images[0]] : [],
      url: `/projects/${project.slug}`,
    },
  };
}

// Status badge colours
function StatusBadge({ status }: { status: 'live' | 'in-progress' | 'archived' }) {
  const styles = {
    live: 'border-green-500/25 bg-green-500/5 text-green-700 dark:text-green-400',
    'in-progress': 'border-amber-500/25 bg-amber-500/5 text-amber-700 dark:text-amber-400',
    archived: 'border-black/15 bg-black/5 text-black/50 dark:border-white/15 dark:bg-white/5 dark:text-white/50',
  };
  const labels = {
    live: 'Live',
    'in-progress': 'In Progress',
    archived: 'Archived',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs w-fit ${styles[status]}`}
    >
      {status === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
      )}
      {labels[status]}
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
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Projects
        </Link>

        {/* 2. Project header */}
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-lg font-semibold">{project.title}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-xs text-black/40 dark:text-white/40">
            {project.year} · {project.tech.join(' · ')}
          </p>
        </div>

        {/* 3. Action links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                View live ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}

        {/* 4. Hero image */}
        {project.images[0] && (
          <div className="overflow-hidden rounded-lg">
            <Image
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              width={1200}
              height={675}
              className="w-full aspect-video object-cover"
              priority
            />
          </div>
        )}

        {/* 5. Overview */}
        <div>
          <h2 className="text-sm font-semibold mb-3">Overview</h2>
          <div className="space-y-4 text-sm text-black/60 dark:text-white/60 leading-relaxed">
            {project.fullDescription.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 6. What I built */}
        {project.highlights.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold mb-3">What I built</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 7. Tech stack */}
        {project.technologies.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold mb-3">Tech stack</h2>
            <TechIconGrid technologies={project.technologies} />
          </div>
        )}

        {/* 8. Navigation */}
        <hr className="border-black/10 dark:border-white/10" />
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
            >
              ← {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
            >
              {nextProject.title} →
            </Link>
          ) : (
            <Link
              href="/projects"
              className="text-xs text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
            >
              All projects →
            </Link>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
