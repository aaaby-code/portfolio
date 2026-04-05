export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why RAG is Eating the AI World",
    excerpt:
      "Retrieval-Augmented Generation is becoming the default architecture for enterprise AI. Here's why it works and how to build one.",
    date: "Mar 2026",
    readTime: "8 min read",
    tag: "LLM",
  },
  {
    title: "Fine-Tuning vs. Prompting: A Practical Guide",
    excerpt:
      "When should you fine-tune a model versus engineering better prompts? I break down cost, performance, and maintenance trade-offs.",
    date: "Jan 2026",
    readTime: "12 min read",
    tag: "ML",
  },
  {
    title: "Building ML Pipelines That Don't Break at 3AM",
    excerpt:
      "Lessons from running production ML systems. Monitoring, rollback strategies, and why you need feature stores.",
    date: "Nov 2025",
    readTime: "6 min read",
    tag: "MLOps",
  },
  {
    title: "The State of Computer Vision in 2025",
    excerpt:
      "From YOLO to vision transformers — a survey of what's working in production computer vision systems today.",
    date: "Sep 2025",
    readTime: "10 min read",
    tag: "CV",
  },
];
