export interface Technology {
  name: string;
  icon?: string; // The slug for simple-icons (e.g., 'react', 'nodedotjs', 'nextdotjs', 'typescript')
}

export interface WorkEntry {
  company: string;
  role: string;
  type: "On-Site" | "Remote" | "Hybrid";
  location: string;
  startDate: string;
  endDate: string | "Present";
  technologies: Technology[];
  accomplishments: string[];
  highlight?: string;
}

export const workExperiences: WorkEntry[] = [
  {
    company: "Aarvasa",
    role: "Backend Engineer | Intern",
    type: "Remote",
    location: "Remote",
    startDate: "Oct 2025",
    endDate: "Mar 2026",
    technologies: [
      { name: "React", icon: "react" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Pydantic", icon: "pydantic" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Pytest" },
      { name: "Postman", icon: "postman" },
      { name: "MCP" }
    ],
    accomplishments: [
      "Engineered a GenAI pipeline using RAG and MCP for automated property queries, implementing a model orchestration system with fallback mechanisms that ensured 99.9% uptime.",
      "Achieved < 1ms data retrieval latency by architecting an intelligent caching layer and collaborated cross-functionally to integrate GenAI features and enhance full-stack system resilience.",
    ],
  },
  {
    company: "Contour Education",
    role: "Video Editor Intern",
    type: "Remote",
    location: "Australia",
    startDate: "Aug 2022",
    endDate: "Jan 2023",
    technologies: [
      { name: "Davinci Resolve", icon: "davinciresolve" },
      { name: "MongoDB", icon: "mongodb" },
    ],
    accomplishments: [
      "Worked remotely with an international team in Australia, optimizing educational videos to enhance student engagement and learning efficiency.",
      "Optimized educational videos by 35%",
      "Collaborated with cross-functional international teams",
      "Maintained consistent quality standards",
    ],
  },
  {
    company: "Youth India Foundation",
    role: "Head of Video Editing (Intern)",
    type: "Remote",
    location: "Pune",
    startDate: "Dec 2021",
    endDate: "Feb 2022",
    technologies: [
      { name: "WonderShare Filmora", icon: "wondersharefilmora" },
      { name: "Figma", icon: "figma" },
    ],
    accomplishments: [
      "Managed editorial staff and coordinated the entire project lifecycle from assignment through completion and quality assurance.",
      "Managed editorial staff through full project lifecycle",
      "Ensured quality assurance from assignment to completion",
      "Served as main liaison with IT department for technical requirements",
    ],
  },
];
