'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';

// Set NEXT_PUBLIC_RESUME_DRIVE_ID in .env.local to enable the embed
const DRIVE_FILE_ID = process.env.NEXT_PUBLIC_RESUME_DRIVE_ID;

// TODO: add resume.pdf to /public to enable this button
const PDF_AVAILABLE = false;

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <PageContainer>
      <div className="space-y-6 pb-12">
        {/* Heading row */}
        <div className="flex items-center justify-between mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
          <h1 className="text-2xl font-bold">Resume</h1>
          <div className="flex items-center gap-2">
            {DRIVE_FILE_ID && (
              <a
                href={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                Open in Drive ↗
              </a>
            )}
            {PDF_AVAILABLE && (
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                Download ↗
              </a>
            )}
          </div>
        </div>

        {/* iframe container — only when DRIVE_FILE_ID is set */}
        {DRIVE_FILE_ID ? (
          <div
            className="relative w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {/* Loading skeleton */}
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/[0.02] dark:bg-white/[0.03] z-10">
                <div className="w-8 h-8 rounded-full border-2 border-black/20 dark:border-white/20 border-t-black/60 dark:border-t-white/60 animate-spin" />
                <p className="text-xs text-black/40 dark:text-white/40">Loading resume…</p>
              </div>
            )}

            <iframe
              src={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`}
              className="w-full border-0"
              style={{ height: '80vh', minHeight: '600px' }}
              allow="autoplay"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
              title="Resume"
            />
          </div>
        ) : (
          /* Empty state — when DRIVE_FILE_ID is not set */
          <div className="flex flex-col items-center justify-center gap-2 py-24 text-center rounded-lg border border-dashed border-black/10 dark:border-white/10 animate-fade-up" style={{ animationDelay: '80ms' }}>
            <p className="text-sm text-black/60 dark:text-white/50">
              Resume preview not configured.
            </p>
            <p className="text-xs text-black/40 dark:text-white/30">
              Set{' '}
              <code className="font-mono bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-xs">
                NEXT_PUBLIC_RESUME_DRIVE_ID
              </code>{' '}
              in{' '}
              <code className="font-mono bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-xs">
                .env.local
              </code>
            </p>
          </div>
        )}

        {/* Mobile fallback */}
        <p className="mt-3 text-center text-xs text-black/40 dark:text-white/30 animate-fade-up" style={{ animationDelay: '160ms' }}>
          Having trouble viewing?{' '}
          {DRIVE_FILE_ID && (
            <a
              href={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-black/70 dark:hover:text-white/60 transition-colors"
            >
              Open in Drive ↗
            </a>
          )}
        </p>
      </div>
    </PageContainer>
  );
}
