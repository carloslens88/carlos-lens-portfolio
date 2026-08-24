import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n";
import { projects } from "@/lib/data/projects";
import { Section } from "./section";
import { ProjectCard } from "./project-card";
import { MoreRepos } from "./more-repos";

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="projects" kicker={dict.projects.kicker} heading={dict.projects.heading} intro={dict.projects.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} locale={locale} dict={dict} delay={(i % 2) * 0.08} />
        ))}
      </div>
      <MoreRepos dict={dict} />
    </Section>
  );
}
