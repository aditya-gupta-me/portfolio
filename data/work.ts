export interface Technology {
  name: string;
  icon: string; // The slug for simple-icons (e.g., 'react', 'nodedotjs', 'nextdotjs', 'typescript')
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
      { name: "Pytest", icon: "pytest" },
      { name: "Postman", icon: "postman" },
      { name: "MCP", icon: "modelcontextprotocol" }
    ],
    accomplishments: [
      "Engineering a GenAI-powered chatbot service using Langchain and RAG to automate and improve response proficiency",
      "Actively contributing to a high-priority GenAI project, applying new skills beyond core backend (Node.js) responsibilities",
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
