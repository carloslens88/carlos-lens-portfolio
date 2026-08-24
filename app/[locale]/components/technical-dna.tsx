import type { Dictionary } from "@/lib/i18n/dictionary";
import { skillGroups } from "@/lib/data/skills";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";
import { StackTimeline } from "./stack-timeline";

export function TechnicalDna({ dict }: { dict: Dictionary }) {
  return (
    <Section id="dna" kicker={dict.dna.kicker} heading={dict.dna.heading} intro={dict.dna.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={(i % 4) * 0.06}>
            <Spotlight className="group h-full rounded-2xl border border-border bg-bg-elevated/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                {dict.dna.categories[group.id]}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-bg px-2 py-1 text-xs text-fg-muted transition-colors group-hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
      <StackTimeline dict={dict} />
    </Section>
  );
}
