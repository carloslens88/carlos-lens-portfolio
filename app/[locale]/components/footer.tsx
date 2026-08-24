import type { Dictionary } from "@/lib/i18n/dictionary";
import { site } from "@/lib/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-fg">
            carlos<span className="text-accent">.</span>lens
          </p>
          <p className="mt-1 text-sm text-fg-muted">{dict.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-border px-6 py-6 text-xs text-fg-dim md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
