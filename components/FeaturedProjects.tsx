import Link from 'next/link';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="projects-heading" className="mt-12">
      <h2 id="projects-heading" className="text-lg font-semibold mb-4">Projects</h2>
      <div className="flex flex-col">
        {featured.map((project, index) => (
          <div key={project.title}>
            <Link href={`/projects/${project.slug}`} className="group block py-4 transition-colors">
              <div className="flex justify-between items-start gap-4 mb-1">
                <h3 className="text-sm font-semibold group-hover:text-black dark:group-hover:text-white transition-colors text-black/70 dark:text-white/70">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-black/40 dark:text-white/40">{project.year}</span>
                  <i className="bx bx-right-arrow-alt text-black/50 dark:text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>
              <p className="text-xs text-black/50 dark:text-white/50 mb-3">{project.description}</p>
              {project.tech && project.tech.length > 0 && (
                <p className="text-xs text-black/40 dark:text-white/40">
                  {project.tech.join(' · ')}
                </p>
              )}
            </Link>
            {index < featured.length - 1 && (
              <hr className="my-4 border-black/10 dark:border-white/10" />
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
