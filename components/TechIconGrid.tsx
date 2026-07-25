import type { Technology } from "@/data/work";
import * as icons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export default function TechIconGrid({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => {
        // Convert slug to simple-icons exported name (e.g. 'react' -> 'siReact')
        const iconName = `si${tech.icon.charAt(0).toUpperCase()}${tech.icon.slice(
          1
        )}` as keyof typeof icons;
        const iconData = icons[iconName] as SimpleIcon | undefined;

        if (!iconData) {
          console.warn(`Icon ${tech.icon} not found in simple-icons`);
          return null;
        }

        return (
          <div
            key={tech.name}
            className="group/tech relative flex items-center justify-center w-8 h-8 rounded-lg border border-dashed border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current text-black/60 dark:text-white/60 group-hover/tech:text-black dark:group-hover/tech:text-white transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={iconData.path} />
            </svg>
            
            {/* CSS-only Tooltip */}
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {tech.name}
              {/* Tooltip Arrow */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white"></span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
