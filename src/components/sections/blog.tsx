"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// blog"
          title="Writing & Thinking"
          description="Thoughts on AI engineering, ML systems, and building products."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <motion.div key={post.title} variants={staggerItem}>
              <Card className="group h-full cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {post.tag}
                    </Badge>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
