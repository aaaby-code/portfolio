import { FadeIn } from "@/components/motion/fade-in";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mb-16 text-center">
      <span className="mb-4 inline-block font-mono text-sm tracking-wider text-primary uppercase">
        {label}
      </span>
      <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-muted-foreground">{description}</p>
      )}
    </FadeIn>
  );
}
