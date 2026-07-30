"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      trackEvent('email_copied', { location: 'hero' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // copy failed silently
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center p-1 rounded dark:hover:bg-white/10 transition-colors text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white ml-1 relative group/copy"
      aria-label="Copy to clipboard"
    >
      <span className="mr-1">Email</span>
      <i className={`bx ${copied ? 'bx-check text-green-500' : 'bx-copy'} text-base`}></i>
      <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium rounded opacity-0 group-hover/copy:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {copied ? "Copied!" : "Copy email"}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black dark:border-t-white"></span>
      </span>
    </button>
  );
}
