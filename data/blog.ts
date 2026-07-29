export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  mediumUrl: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-i-migrated-my-portfolio-from-vite-react-to-nextjs',
    title: 'Why I Migrated My Portfolio from Vite + React to Next.js (and What I Learned)',
    description:
      'Last year, I built my portfolio website in Vite + React. Everything worked locally, so the code was put in production and deployed using Vercel’s deployment. The site was working the same as in the local environment. No issues!',
    mediumUrl: 'https://medium.com/@aditya-gupta-dev/why-i-migrated-my-portfolio-from-vite-react-to-next-js-and-what-i-learned-4f94f01b6c5e',
    publishedAt: '2026-07-27',
    readingTime: 5,
    tags: ['Nextjs', 'React', 'Portfolio', 'JavaScript', 'Web Development', 'Frontend Development'],
    featured: true,
  },
];
