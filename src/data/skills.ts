export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "Transformers", level: 88 },
      { name: "Computer Vision", level: 85 },
      { name: "MLOps", level: 82 },
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "TypeScript", level: 93 },
      { name: "React / Next.js", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 95 },
      { name: "Go", level: 75 },
    ],
  },
  {
    category: "Infrastructure",
    icon: "Server",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 88 },
      { name: "CI/CD", level: 87 },
      { name: "PostgreSQL", level: 83 },
    ],
  },
];
