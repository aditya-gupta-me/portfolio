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
    <div className="flex flex-wrap items-center gap-4 pt-4 pb-2">
      {stack.map((tech) => {
        const exportName = 'si' + tech.slug.charAt(0).toUpperCase() + tech.slug.slice(1);
        const iconData = (icons as any)[exportName];
        
        if (!iconData) return null;

        return (
          <div key={tech.slug} className="relative group/tech">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-black/50 dark:text-white/50 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={iconData.path} />
            </svg>
            {/* CSS-only Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              {tech.name}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white"></span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
