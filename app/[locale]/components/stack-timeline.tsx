"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { stackTimeline, totalCareerYears } from "@/lib/data/stack-timeline";
import { Reveal } from "./reveal";

const stackColor: Record<string, string> = {
  java: "#7ee8c9",
  dotnet: "#8ab4f8",
  mixed: "#b6a6f2",
  other: "#4b5160",
};

export function StackTimeline({ dict }: { dict: Dictionary }) {
  const { timeline } = dict.dna;

  return (
    <Reveal className="mt-14 rounded-2xl border border-border bg-bg-elevated/60 p-6 md:p-8" delay={0.1}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-fg">{timeline.heading}</h3>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-fg-muted">{timeline.intro}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-fg-dim">2011 → 2026</span>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className="flex h-10 w-full overflow-hidden rounded-lg"
      >
        {stackTimeline.map((seg) => (
          <div
            key={seg.id}
            title={`${seg.company} — ${seg.years} ${timeline.years}`}
            style={{ width: `${seg.widthPercent}%`, backgroundColor: stackColor[seg.stack] }}
            className="group relative flex h-full items-center justify-center border-r border-bg/40 last:border-r-0"
          >
            {seg.widthPercent > 7 ? (
              <span className="px-1 text-center font-mono text-[10px] leading-tight text-bg/80">
                {seg.years} {timeline.years}
              </span>
            ) : null}
          </div>
        ))}
      </motion.div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        {(["java", "dotnet", "mixed", "other"] as const).map((key) => (
          <span key={key} className="flex items-center gap-1.5 text-xs text-fg-muted">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: stackColor[key] }} />
            {timeline.stackLabels[key]}
          </span>
        ))}
        <span className="ml-auto font-mono text-xs text-fg-dim">
          {totalCareerYears} {timeline.years} {timeline.totalLabel}
        </span>
      </div>
    </Reveal>
  );
}
