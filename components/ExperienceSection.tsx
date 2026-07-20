"use client";

import Link from "next/link";
import { workExperiences } from "@/data/work";
import WorkEntryCard from "./WorkEntryCard";

export default function ExperienceSection() {
  const previewExperiences = workExperiences.slice(0, 3);

  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="flex flex-col">
        {previewExperiences.map((entry, index) => (
          <div key={`${entry.company}-${index}`}>
            <WorkEntryCard entry={entry} variant="preview" />
            {index < previewExperiences.length - 1 && (
              <hr className="my-2 border-black/10 dark:border-white/10" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/work"
          className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          Show all work experiences
        </Link>
      </div>
    </section>
  );
}
