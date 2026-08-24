import type { Dictionary } from "@/lib/i18n/dictionary";
import { site } from "@/lib/data/site";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "./icons";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{dict.contact.kicker}</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fg md:text-5xl">
          {dict.contact.heading}
        </h2>
        <p className="mt-5 text-pretty text-base leading-relaxed text-fg-muted md:text-lg">{dict.contact.body}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {dict.contact.ctaEmail}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-border-strong"
          >
            <LinkedinIcon className="h-4 w-4" />
            {dict.contact.ctaLinkedin}
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-border-strong"
          >
            <GithubIcon className="h-4 w-4" />
            {dict.contact.ctaGithub}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
