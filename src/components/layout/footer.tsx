import { GithubIcon, XIcon } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Aaabad Touk. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aaaby-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href="https://x.com/aaabadcode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Twitter"
          >
            <XIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
