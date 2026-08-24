import type { Project } from "@/lib/data/projects";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

export function ProjectCard({
  project,
  locale,
  dict,
  delay = 0,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Spotlight className="flex h-full flex-col rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{project.category[locale]}</p>
            <h3 className="mt-1.5 text-xl font-semibold text-fg">{project.title[locale]}</h3>
          </div>
          <span className="shrink-0 font-mono text-xs text-fg-dim">{project.year}</span>
        </div>

        <p className="mt-3 text-sm font-medium text-fg-muted">{project.tagline[locale]}</p>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-fg-muted">{project.description[locale]}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights[locale].map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-snug text-fg-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-md border border-border bg-bg px-2 py-1 text-xs text-fg-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <GithubIcon className="h-4 w-4" />
            {dict.projects.viewCode}
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-fg"
            >
              {dict.projects.viewDemo}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </Spotlight>
    </Reveal>
  );
}
