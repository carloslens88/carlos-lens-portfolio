import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  kicker,
  heading,
  intro,
  children,
  className,
}: {
  id: string;
  kicker: string;
  heading: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28 ${className ?? ""}`}>
      <Reveal className="mb-12 max-w-2xl md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{kicker}</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-fg md:text-4xl">{heading}</h2>
        {intro ? <p className="mt-4 text-pretty text-base leading-relaxed text-fg-muted md:text-lg">{intro}</p> : null}
      </Reveal>
      {children}
    </section>
  );
}
