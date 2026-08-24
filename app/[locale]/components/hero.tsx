"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { site } from "@/lib/data/site";
import { skillGroups } from "@/lib/data/skills";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "./icons";

const orbitTerms = skillGroups.flatMap((g) => g.items).slice(0, 14);

export function Hero({ dict }: { dict: Dictionary }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            {dict.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl md:text-6xl"
          >
            {dict.hero.headline}
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg"
          >
            {dict.hero.subhead}
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {dict.hero.ctaPrimary}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-border-strong"
            >
              {dict.hero.ctaSecondary}
            </a>
            <div className="ml-1 flex items-center gap-3 text-fg-muted">
              <a href={site.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 sm:max-w-md"
          >
            {dict.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono-tabular text-2xl font-semibold text-fg sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-fg-muted">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full border border-border" />
          <div className="absolute inset-[12%] rounded-full border border-border" />
          <div className="absolute inset-[24%] rounded-full border border-dashed border-border-strong" />
          <div className="absolute inset-[38%] rounded-full bg-[radial-gradient(circle,rgba(126,232,201,0.16),transparent_70%)]" />
          <div className="absolute inset-[38%] overflow-hidden rounded-full border border-accent/40 bg-bg-elevated shadow-[0_0_40px_-8px_rgba(126,232,201,0.35)]">
            <Image src="/avatar.png" alt="" fill sizes="200px" className="object-cover" priority />
          </div>

          {orbitTerms.map((term, i) => {
            const angle = (i / orbitTerms.length) * Math.PI * 2;
            const radius = 46;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <span
                key={term}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-bg-elevated px-2.5 py-1 font-mono text-[10px] text-fg-muted"
              >
                {term}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
