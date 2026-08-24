import type { Dictionary } from "@/lib/i18n/dictionary";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { Spotlight } from "./spotlight";

export function AiSection({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="ai"
      kicker={dict.ai.kicker}
      heading={dict.ai.heading}
      intro={dict.ai.intro}
      className="rounded-3xl border border-accent-2/20 bg-[radial-gradient(80%_60%_at_10%_0%,rgba(182,166,242,0.07),transparent)]"
    >
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center gap-2 font-mono text-xs text-fg-muted sm:gap-3 sm:text-sm">
          {dict.ai.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2 sm:gap-3">
              <span
                style={{ animation: `pulse-glow 2.4s ease-in-out ${i * 0.55}s infinite` }}
                className="rounded-full border border-accent-2/40 bg-bg-elevated px-3 py-1.5 text-fg"
              >
                {step}
              </span>
              {i < dict.ai.flow.length - 1 ? <span className="text-fg-dim">→</span> : null}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {dict.ai.points.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.08}>
            <Spotlight className="h-full rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-colors duration-300 hover:border-accent-2/40">
              <h3 className="text-base font-medium text-fg">{point.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-fg-muted">{point.body}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
