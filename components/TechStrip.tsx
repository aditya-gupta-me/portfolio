import Link from 'next/link';
import * as icons from 'simple-icons';
import { skills } from '@/data/skills';

export default function TechStrip() {
  const primarySkills = skills.filter((s) => s.primary);
  const hiddenCount = skills.length - primarySkills.length;

  return (
    <div>
      <p className="text-xs text-black/40 dark:text-white/40 mb-3">
        Technologies &amp; Frameworks
      </p>
      <div className="flex flex-wrap gap-2">
        {primarySkills.map((tech) => {
          const exportName = tech.slug
            ? 'si' + tech.slug.charAt(0).toUpperCase() + tech.slug.slice(1)
            : null;
          const iconData = exportName ? (icons as any)[exportName] : null;

          return (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.03] text-xs text-black/70 dark:text-white/60 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] hover:text-black dark:hover:text-white transition-colors cursor-pointer"
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
        {hiddenCount > 0 && (
          <Link
            href="/skills"
            className="text-xs text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors duration-150 self-center"
            data-umami-event="cta_clicked"
            data-umami-event-cta_id="skills_more"
            data-umami-event-source_page="home"
          >
            +{hiddenCount} more →
          </Link>
        )}
      </div>
    </div>
  );
}
