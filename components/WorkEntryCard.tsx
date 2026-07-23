"use client";

import { useState } from "react";
import type { WorkEntry } from "@/data/work";
import StatusBadge from "./StatusBadge";
import TechIconGrid from "./TechIconGrid";
import * as icons from "simple-icons";

interface WorkEntryCardProps {
  entry: WorkEntry;
  variant: "preview" | "full";
}

export default function WorkEntryCard({ entry, variant }: WorkEntryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isPreview = variant === "preview";
  const shouldShowDetails = !isPreview || isExpanded;

  // Dynamically determine if the role is current
  const isCurrent = (() => {
    if (entry.endDate.toLowerCase() === "present") return true;
    const end = new Date(entry.endDate);
    if (isNaN(end.getTime())) return false;
    
    // Set to the last day of the endDate month to cover the entire month
    end.setMonth(end.getMonth() + 1);
    end.setDate(0); 
    
    const now = new Date();
    return end >= now;
  })();

  return (
    <div className="group w-full py-4 transition-colors">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        {/* Left Side */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-semibold text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors duration-150">
              {entry.company}
            </h2>
            {isCurrent && <StatusBadge />}
            {isPreview && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                <i
                  className={`bx bx-chevron-right text-xl text-black/50 dark:text-white/50 transition-transform duration-200 ${
                    isExpanded ? "rotate-90" : "rotate-0"
                  }`}
                ></i>
              </button>
            )}
          </div>
          <p className="text-sm text-black/60 dark:text-white/60 font-medium">{entry.role}</p>
          {isPreview && entry.highlight && (
            <p className="text-xs text-black/50 dark:text-white/50 pt-0.5">
              {entry.highlight}
            </p>
          )}
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:text-right text-black/50 dark:text-white/50 text-xs gap-1">
          <div className="flex items-center sm:justify-end gap-2">
            <span>
              {entry.startDate} – {entry.endDate}
            </span>
          </div>
          <p>
            {entry.location === entry.type ? entry.location : `${entry.location} (${entry.type})`}
          </p>
        </div>
      </div>

      {/* Full detail divider (only in full variant) */}
      {!isPreview && (
        <hr className="my-4 border-black/10 dark:border-white/10" />
      )}

      {/* Expandable Content Area */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          shouldShowDetails
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4">
            {/* Technologies */}
            {entry.technologies.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50 mb-3">
                  Technologies & tools
                </h3>
                {isPreview ? (
                  <TechIconGrid technologies={entry.technologies} />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => {
                      const exportName = `si${tech.icon.charAt(0).toUpperCase()}${tech.icon.slice(1)}`;
                      const iconData = (icons as any)[exportName];
                      return (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-xs text-black/70 dark:text-white/60"
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
                )}
              </div>
            )}

            {/* Accomplishments */}
            {entry.accomplishments.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50 mb-3">
                  What I've done
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-black/70 dark:text-white/70 text-sm leading-relaxed">
                  {entry.accomplishments.map((accomplishment, index) => (
                    <li key={index}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
