"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n";
import { experience } from "@/lib/data/experience";
import { Section } from "./section";
import { Reveal } from "./reveal";

export function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  return (
    <Section id="experience" kicker={dict.experience.kicker} heading={dict.experience.heading} intro={dict.experience.intro}>
      <div className="relative">
        <div ref={trackRef} className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="h-full w-full origin-top bg-accent"
          />
        </div>
        <ol className="space-y-8">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={Math.min(i, 5) * 0.05}>
              <li className="relative sm:pl-10">
                <span className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg sm:block" />
                <div className="rounded-2xl border border-border bg-bg-elevated/60 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-fg">{entry.company}</h3>
                    <span className="font-mono text-xs text-fg-dim">{entry.period[locale]}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">{entry.role[locale]}</p>
                  <p className="mt-0.5 text-xs text-fg-dim">{entry.location[locale]}</p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-fg-muted">{entry.description[locale]}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-border bg-bg px-2 py-1 text-xs text-fg-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
