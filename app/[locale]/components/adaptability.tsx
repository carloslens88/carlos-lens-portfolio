"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { Reveal } from "./reveal";

export function Adaptability({ dict }: { dict: Dictionary }) {
  return (
    <section id="adaptability" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{dict.adaptability.kicker}</p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {dict.adaptability.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal delay={0.05}>
          <blockquote className="rounded-2xl border border-accent/25 bg-accent-soft p-8">
            <p className="text-pretty text-xl font-medium leading-snug text-fg md:text-2xl">
              &ldquo;{dict.adaptability.statement}&rdquo;
            </p>
          </blockquote>
          <p className="mt-5 text-pretty text-sm leading-relaxed text-fg-muted">{dict.adaptability.body}</p>
        </Reveal>

        <div className="flex h-full flex-col justify-center gap-3">
          {dict.adaptability.path.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-xs text-fg-dim">{String(i + 1).padStart(2, "0")}</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.15, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="h-px flex-1 bg-accent/50"
              />
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
                className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg"
              >
                {step}
              </motion.span>
            </motion.div>
          ))}
          <Reveal delay={dict.adaptability.path.length * 0.15}>
            <p className="mt-4 font-mono text-xs text-fg-dim">{dict.adaptability.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
