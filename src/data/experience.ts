export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "DeepMind",
    role: "Senior AI Research Engineer",
    period: "2023 — Present",
    description:
      "Leading research on multi-modal foundation models. Built internal tooling for large-scale distributed training across TPU pods.",
    tech: ["JAX", "TPU", "Transformers", "Python"],
  },
  {
    company: "OpenAI",
    role: "ML Platform Engineer",
    period: "2021 — 2023",
    description:
      "Designed and scaled inference infrastructure for GPT models. Reduced latency by 40% through model optimization and caching strategies.",
    tech: ["Python", "Kubernetes", "CUDA", "Redis"],
  },
  {
    company: "Scale AI",
    role: "Full-Stack ML Engineer",
    period: "2020 — 2021",
    description:
      "Built data labeling pipelines and quality assurance systems for computer vision datasets. Shipped annotation tools used by 5k+ labelers.",
    tech: ["React", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    company: "Hugging Face",
    role: "Open Source Engineer (Intern)",
    period: "2019 — 2020",
    description:
      "Contributed to the Transformers library. Implemented model architectures and wrote documentation for community adoption.",
    tech: ["PyTorch", "Transformers", "TypeScript", "Docker"],
  },
];
