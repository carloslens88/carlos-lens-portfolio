import type { Dictionary } from "@/lib/i18n/dictionary";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";

export function Philosophy({ dict }: { dict: Dictionary }) {
  return (
    <Section id="philosophy" kicker={dict.philosophy.kicker} heading={dict.philosophy.heading}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {dict.philosophy.principles.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.06}>
            <Spotlight className="h-full bg-bg-elevated p-7 transition-colors duration-300 hover:bg-bg-elevated-2">
              <span className="font-mono text-xs text-fg-dim">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-medium text-fg">{p.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-fg-muted">{p.body}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
