"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, XIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="// contact"
          title="Let's Build Something"
          description="Have a project in mind? I'm always open to discussing new opportunities."
        />

        <FadeIn>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-8 space-y-4">
                <a
                  href="mailto:hello@aaabadcode.dev"
                  className="group inline-flex items-center gap-2 text-lg font-mono text-primary transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  hello@aaabadcode.dev
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/aaaby-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://x.com/aaabadcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <XIcon className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
