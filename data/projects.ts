import type { Technology } from './work';

export interface ProjectEntry {
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  tech: string[];
  technologies: Technology[];
  images: string[];
  status: 'live' | 'in-progress' | 'archived';
  liveUrl?: string;
  repoUrl?: string;
  year: number;
  featured: boolean;
}

export const projects: ProjectEntry[] = [
  {
    title: 'CodeHat',
    slug: 'codehat',
    description: 'Full-stack online coding platform that eliminates context switching for new coders.',
    fullDescription:
      'CodeHat is a comprehensive coding platform with an integrated code editor designed to eliminate context switching for new coders. Instead of juggling between a browser, terminal, and editor, everything lives in one place — write code, run it, and see the output without leaving the tab.\n\nThe backend architecture was optimised to reduce execution latency by 30%, making the coding experience feel snappy even under load. The platform handles user authentication, code persistence, and real-time execution through a clean, distraction-free interface.',
    highlights: [
      'Reduced execution latency by 30% through optimised backend architecture',
      'Built an integrated code editor with real-time output — no context switching',
      'Implemented user authentication and code persistence with Firebase',
    ],
    tech: ['React', 'Express', 'Node.js', 'Firebase', 'MongoDB'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Express', icon: 'express' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
    images: ['/images/projects/codehat/hero.png'],
    status: 'live',
    liveUrl: 'https://code-hat.vercel.app/',
    repoUrl: 'https://github.com/aditya-gupta-me/CodeHat',
    year: 2023,
    featured: true,
  },
  {
    title: 'HeyDoc!',
    slug: 'heydoc',
    description: 'AI-powered health consultation mobile app with intelligent disease prediction.',
    fullDescription:
      'HeyDoc! is a React Native application that enables users to log health data, book appointments, and track symptoms over time. At its core is a Naive Bayes classification model that predicts possible conditions based on symptom patterns — giving users a starting point before they see a doctor.\n\nThe app integrates Clerk for authentication, Strapi as a headless CMS for managing health content, and Cloudinary for image uploads (lab reports, prescriptions). The interface is designed to feel approachable rather than clinical.',
    highlights: [
      'Implemented Naive Bayes classification for intelligent disease prediction from symptom data',
      'Built a full appointment booking flow with push notification reminders',
      'Integrated Cloudinary for secure medical document uploads (lab reports, prescriptions)',
    ],
    tech: ['React Native', 'Strapi', 'Clerk', 'Cloudinary'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Strapi', icon: 'strapi' },
    ],
    images: ['/images/projects/heydoc/hero.png'],
    status: 'archived',
    repoUrl: 'https://github.com/aditya-gupta-me/heydoc',
    year: 2024,
    featured: false,
  },
  {
    title: 'Transform Crypt',
    slug: 'transform-crypt',
    description: 'Lightweight Python encryption package using geometric coordinate transformations.',
    fullDescription:
      'Transform Crypt is a lightweight Python encryption package that takes a different approach to text encryption — instead of traditional ciphers, it maps characters to coordinates and applies geometric transformations (rotation, shear, reflection) to scramble them.\n\nThe result is a system-generated key paired with Fernet-based symmetric encryption. The package is installable via pip and comes with a simple HTML interface for demonstration purposes.',
    highlights: [
      'Built a novel encryption approach using coordinate-based mapping with geometric transformations',
      'Implemented rotation, shear, and reflection transformations for multi-layer scrambling',
      'Packaged as a pip-installable Python library with Fernet symmetric encryption',
    ],
    tech: ['Python', 'Cryptography', 'Fernet', 'HTML'],
    technologies: [
      { name: 'Python', icon: 'python' },
      { name: 'Cryptography', icon: 'cryptography' },
      { name: 'Fernet', icon: 'fernet' },
      { name: 'HTML', icon: 'html5' },
    ],
    images: ['/images/projects/transform-crypt/hero.png'],
    status: 'archived',
    repoUrl: 'https://github.com/aditya-gupta-me/transform-crypt',
    year: 2025,
    featured: false,
  },
  {
    title: 'Sumnote.ai',
    slug: 'sumnote-ai',
    description: 'Production-ready meeting notes summariser powered by Groq API and LLaMA.',
    fullDescription:
      'Sumnote.ai is a production-ready application for intelligent meeting notes summarisation. It accepts input via file upload or direct text paste, processes it through the Groq API (running LLaMA 3.1), and returns a clean, structured summary.\n\nThe app also handles email sharing with HTML-formatted summaries, so you can distribute meeting notes to your team directly from the interface. Built with React, TypeScript, and Vite for a fast, modern developer experience.',
    highlights: [
      'Integrated Groq API with LLaMA 3.1 for fast, accurate meeting note summarisation',
      'Built file upload and text input pipelines with structured output formatting',
      'Implemented email sharing with HTML-formatted summaries for team distribution',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Groq API', 'Node.js'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Node.js', icon: 'nodedotjs' },
    ],
    images: ['/images/projects/sumnote-ai/hero.png'],
    status: 'live',
    liveUrl: 'https://sumnote-ai.netlify.app/',
    repoUrl: 'https://github.com/aditya-gupta-me/Sumnote.ai',
    year: 2025,
    featured: false,
  },

  {
    title: 'HealthHive',
    slug: 'healthhive',
    description:
      'Full-stack medical web platform with role-based patient and doctor portals, prescription management, and an online pharmacy.',
    fullDescription:
      'HealthHive is a full-stack web application that brings patients, doctors, and medical services together in a single platform. Patients can browse a medical product catalogue, upload prescriptions, book appointments, and track orders through their own dashboard — while doctors manage consultation requests and patient records through a separate, role-gated interface.\n\nThe backend enforces role-based access control at the middleware level using JWT authentication, with tokens stored as cookies. Doctor-only routes are protected by dedicated role-checking middleware, and all sensitive actions — cart operations, order history, profile management — require a valid session. The data layer is handled by MongoDB through Mongoose, served by a Node.js/Express API.',
    highlights: [
      'Implemented role-based access control with JWT middleware, enforcing separate permission boundaries between patient and doctor routes',
      'Built an online pharmacy with a full product catalogue, cart, checkout, and real-time order status tracking',
      'Developed a prescription upload and validation flow integrated with health record and consultation history management',
      'Created a doctor appointment booking and scheduling system with profile management across both user roles',
    ],
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Express', icon: 'express' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
    images: ['/images/projects/healthhive/hero.png'],
    status: 'archived',
    repoUrl: 'https://github.com/aditya-gupta-me/HealthHive',
    year: 2025,
    featured: false,
  },
  {
    title: 'YouTube Trends',
    slug: 'youtube-trends',
    description:
      'Real-time YouTube trending video explorer with multi-region support and category filtering.',
    fullDescription:
      'YouTube Trends is a React application that surfaces trending videos from the YouTube Data API v3, organised by region and content category. Users can filter trends across India, the US, the UK, and more, and narrow by category — Music, Gaming, Sports, and others — with direct links to each video on YouTube.\n\nThe frontend is built with React 19 and Vite for fast iteration and optimised production builds. A lightweight Express backend proxies requests to the YouTube API to keep credentials server-side and caches responses to reduce unnecessary quota consumption. The app ships with a dark/light mode toggle and is deployed on Vercel.',
    highlights: [
      'Integrated YouTube Data API v3 with multi-region trending support across India, US, UK, and additional regions',
      'Built an Express proxy layer to keep API credentials server-side and reduce quota consumption through response caching',
      'Implemented category filtering across Music, Gaming, Sports, and more, with a dark/light mode toggle built in Tailwind CSS and React 19',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'YouTube API', 'Express', 'Node.js'],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Express', icon: 'express' },
      { name: 'Node.js', icon: 'nodedotjs' },
    ],
    images: ['/images/projects/youtube-trends/hero.png'],
    status: 'live',
    liveUrl: 'https://youtubetrending.vercel.app/',
    repoUrl: 'https://github.com/aditya-gupta-me/YouTube-Trends',
    year: 2025,
    featured: false,
  },
  {
    title: 'NextTutor',
    slug: 'nexttutor',
    description:
      'Full-stack tutor discovery platform with geo-based search, session lifecycle management, and verified reviews.',
    fullDescription:
      'NextTutor is a full-stack tutor discovery platform — originally conceived collaboratively, and fully designed, architected, and built by me. Students find verified tutors nearby, book sessions, and leave reviews without asking around for recommendations.\n\nThe discovery experience is built around location: tutors define a service radius, and students search by subject, distance, price, and rating using Google Places autocomplete and PostGIS-powered geospatial queries in Supabase. The platform manages the complete session lifecycle — request, accept/decline, start, complete, cancel — with role-specific dashboards for both student and tutor views. Authentication uses Supabase Auth with magic link and phone OTP. Row-level security policies are enforced on every database table, ensuring users can only ever access data they are authorised to see.',
    highlights: [
      'Designed and built location-based tutor search using Google Places autocomplete, geocoding, and PostGIS distance queries against Supabase (PostgreSQL)',
      'Implemented full session lifecycle management — request, accept/decline, start, complete, cancel — with separate dashboards for student and tutor roles',
      'Set up Supabase Auth with magic link and phone OTP, and enforced row-level security (RLS) policies across every database table',
      'Built a review system with star ratings, written reviews, a profanity filter, and helpful vote tracking',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Google Maps API', 'Tailwind CSS'],
    technologies: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Google Maps', icon: 'googlemaps' },
    ],
    images: ['/images/projects/nexttutor/hero.png'],
    status: 'live',
    liveUrl: 'https://nexttutor.app/',
    repoUrl: 'https://github.com/aditya-gupta-me/NextTutor',
    year: 2026,
    featured: true,
  },
  {
    title: 'Prism',
    slug: 'prism',
    description:
      'Browser-native cloud IDE with an autonomous AI coding agent, WebContainer execution sandbox, and GitHub integration.',
    fullDescription:
      'Prism is a browser-native cloud IDE and web application development platform — no local setup or terminal required. Projects run entirely in the browser through WebContainers, which boot a full Node.js development environment using WebAssembly, with a live preview panel and an embedded Xterm.js terminal. Code changes sync from the Convex real-time database directly into the WebContainer file system via hot-reload, without restarting the dev server.\n\nThe editor is built on CodeMirror 6 with multi-tab management (Zustand), minimap, indentation markers, and file breadcrumbs, backed by a hierarchical Convex file system. An autonomous AI coding agent — powered by Google Gemini through the Inngest Agent Kit — can read, create, modify, rename, and delete files across a project, and scrape external documentation via Firecrawl. Inline AI editing is available through a Quick Edit modal (Cmd+K) and real-time cursor suggestions. GitHub repositories can be imported or exported as resilient Inngest background jobs with full cancellation support.',
    highlights: [
      'Built an in-browser Node.js execution sandbox using WebContainers (WebAssembly) with Convex-to-filesystem hot-reload — no container reboots on file edits',
      'Implemented an autonomous AI coding agent via Inngest Agent Kit and Google Gemini, with tools for file read/write/create/delete/rename and live documentation scraping through Firecrawl',
      'Designed a CodeMirror 6 editor with Zustand-backed multi-tab management, minimap, indentation markers, and a hierarchical Convex-backed file system with full CRUD',
      'Built GitHub repository import and export as resilient Inngest background jobs with full cancellation support, handling binary/text file separation and Convex blob storage',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Convex', 'Inngest', 'Google Gemini', 'Clerk', 'CodeMirror'],
    technologies: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Convex', icon: 'convex' },
      { name: 'Clerk', icon: 'clerk' },
    ],
    images: ['/images/projects/prism/hero.png'],
    status: 'in-progress',
    repoUrl: 'https://github.com/aditya-gupta-me/Prism',
    year: 2026,
    featured: true,
  },
];
