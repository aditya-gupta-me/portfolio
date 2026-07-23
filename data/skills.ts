// OWNER: Review every entry below.
// Set primary: true for your 8-10 most important skills — these appear on the homepage.
// Verify every slug against the installed simple-icons package before publishing.
// Add or remove entries to match your actual skill set.

export interface SkillEntry {
  name: string;
  slug?: string; // simple-icons slug — optional, text-only pill if absent
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools';
  primary: boolean; // true = show on homepage tech strip
}

export const skills: SkillEntry[] = [
  // Languages
  { name: 'JavaScript', slug: 'javascript', category: 'languages', primary: true },
  { name: 'TypeScript', slug: 'typescript', category: 'languages', primary: true },
  { name: 'Python', slug: 'python', category: 'languages', primary: true },
  { name: 'Java', slug: 'openjdk', category: 'languages', primary: false },
  { name: 'C++', slug: 'cplusplus', category: 'languages', primary: false },
  { name: 'HTML5', slug: 'html5', category: 'languages', primary: false },
  { name: 'CSS3', slug: 'css', category: 'languages', primary: false },
  { name: 'Shell', slug: 'gnubash', category: 'languages', primary: false },
  { name: 'SQL', category: 'languages', primary: false },

  // Frontend
  { name: 'React', slug: 'react', category: 'frontend', primary: true },
  { name: 'Next.js', slug: 'nextdotjs', category: 'frontend', primary: true },
  { name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend', primary: true },
  { name: 'Material UI', slug: 'mui', category: 'frontend', primary: false },
  { name: 'Recoil', category: 'frontend', primary: false },

  // Backend
  { name: 'Node.js', slug: 'nodedotjs', category: 'backend', primary: true },
  { name: 'Express', slug: 'express', category: 'backend', primary: true },
  { name: 'FastAPI', slug: 'fastapi', category: 'backend', primary: false },
  { name: 'Bun', slug: 'bun', category: 'backend', primary: false },

  // Database
  { name: 'PostgreSQL', slug: 'postgresql', category: 'database', primary: true },
  { name: 'MongoDB', slug: 'mongodb', category: 'database', primary: false },
  { name: 'Prisma', slug: 'prisma', category: 'database', primary: false },

  // Tools
  { name: 'Docker', slug: 'docker', category: 'tools', primary: false },
  { name: 'Google Cloud', slug: 'googlecloud', category: 'tools', primary: false },
  { name: 'Linux', slug: 'linux', category: 'tools', primary: false },
  { name: 'Postman', slug: 'postman', category: 'tools', primary: false },
  { name: 'Cursor', category: 'tools', primary: false },
];
