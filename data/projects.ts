export interface ProjectEntry {
  title: string;
  description: string;
  url: string;
  repoUrl?: string;
  tags: string[];
  featured: boolean;
  year: number;
}

export const projects: ProjectEntry[] = [
  {
    title: 'YOUR_PROJECT_TITLE_1',
    description: 'YOUR_PROJECT_DESCRIPTION_1',
    url: 'https://example.com/project1',
    repoUrl: 'https://github.com/yourusername/project1',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    featured: true,
    year: 2026,
  },
  {
    title: 'YOUR_PROJECT_TITLE_2',
    description: 'YOUR_PROJECT_DESCRIPTION_2',
    url: 'https://example.com/project2',
    tags: ['Node.js', 'PostgreSQL'],
    featured: true,
    year: 2025,
  },
  {
    title: 'YOUR_PROJECT_TITLE_3',
    description: 'YOUR_PROJECT_DESCRIPTION_3',
    url: 'https://example.com/project3',
    repoUrl: 'https://github.com/yourusername/project3',
    tags: ['Python', 'Django'],
    featured: false,
    year: 2024,
  },
];
