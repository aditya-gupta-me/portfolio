import * as icons from 'simple-icons';

// REPLACE with your actual stack
const stack = [
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
];

export default function TechStrip() {
  return (
    <div>
      <p className="text-xs text-black/40 dark:text-white/40 mb-3">
        Technologies &amp; Frameworks
      </p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => {
          const exportName = 'si' + tech.slug.charAt(0).toUpperCase() + tech.slug.slice(1);
          const iconData = (icons as any)[exportName];

          if (!iconData) return null;

          return (
            <span
              key={tech.slug}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-xs text-black/70 dark:text-white/60"
            >
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
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
