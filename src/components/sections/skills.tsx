"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Globe,
  Server,
};

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// skills"
          title="Tech Stack"
          description="The tools and technologies I work with daily."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, catIndex) => {
            const Icon = iconMap[cat.icon] ?? Brain;
            return (
              <FadeIn key={cat.category} delay={catIndex * 0.15}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{cat.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {cat.skills.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="mb-1.5 flex items-center justify-between">
                            <span className="text-sm font-mono">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: catIndex * 0.15 + skillIndex * 0.08,
                                ease: [0.21, 0.47, 0.32, 0.98],
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
