import type { Dictionary } from "@/lib/i18n/dictionary";
import { Section } from "./section";
import { Reveal } from "./reveal";

export function Overview({ dict }: { dict: Dictionary }) {
  return (
    <Section id="overview" kicker={dict.overview.kicker} heading={dict.overview.heading}>
      <div className="grid gap-6 md:grid-cols-3">
        {dict.overview.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-bg-elevated/60 p-6">
              <span className="font-mono text-xs text-fg-dim">0{i + 1}</span>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-fg-muted">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
