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
    year: 2024,
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
    featured: true,
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
    ],
    images: ['/images/projects/transform-crypt/hero.png'],
    status: 'archived',
    repoUrl: 'https://github.com/aditya-gupta-me/transform-crypt',
    year: 2024,
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
    featured: true,
  },
];
