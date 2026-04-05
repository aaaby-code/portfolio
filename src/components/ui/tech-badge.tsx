import { Badge } from "@/components/ui/badge";

export function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="border-border/50 bg-secondary/50 text-xs font-mono"
    >
      {children}
    </Badge>
  );
}
