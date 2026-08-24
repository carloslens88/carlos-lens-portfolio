"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n";
import { CloseIcon, LensMark, MenuIcon } from "./icons";

const SECTION_IDS = ["overview", "dna", "ai", "projects", "experience", "contact"];

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const rest = pathname?.replace(/^\/(en|es)/, "") ?? "";
  const switchHref = `/${otherLocale}${rest || "/"}`;

  const links: [string, string][] = [
    [dict.nav.overview, "#overview"],
    [dict.nav.dna, "#dna"],
    [dict.nav.ai, "#ai"],
    [dict.nav.projects, "#projects"],
    [dict.nav.experience, "#experience"],
    [dict.nav.contact, "#contact"],
  ];

  const highlighted = hovered ?? active;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}/`} className="group flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent-soft text-accent transition-transform duration-700 ease-out group-hover:rotate-90">
            <LensMark className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-fg">
            carlos<span className="text-accent">.</span>lens
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" onMouseLeave={() => setHovered(null)}>
          {links.map(([label, href]) => {
            const id = href.slice(1);
            const isActive = active === id;
            const isHighlighted = highlighted === id;
            return (
              <a
                key={href}
                href={href}
                onMouseEnter={() => setHovered(id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive ? "text-accent" : isHighlighted ? "text-fg" : "text-fg-muted"
                }`}
              >
                {isHighlighted ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className={`absolute inset-0 z-0 rounded-full border ${
                      isActive ? "border-accent/30 bg-accent-soft" : "border-border bg-bg-elevated-2"
                    }`}
                  />
                ) : null}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={switchHref}
            className="rounded-full border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            {locale === "en" ? "EN" : "ES"} · <span className="text-fg-dim">{otherLocale.toUpperCase()}</span>
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            {dict.nav.contact}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-fg lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-px origin-left bg-accent"
      />

      {open ? (
        <div className="border-t border-border bg-bg px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {links.map(([label, href]) => {
              const isActive = active === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`relative rounded-lg py-2.5 pl-4 pr-2 text-sm transition-colors ${
                    isActive ? "bg-bg-elevated text-accent" : "text-fg-muted hover:bg-bg-elevated hover:text-fg"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-accent" />
                  ) : null}
                  {label}
                </a>
              );
            })}
            <Link
              href={switchHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg px-2 py-2.5 font-mono text-sm text-fg-muted hover:bg-bg-elevated hover:text-fg"
            >
              {otherLocale === "es" ? "Ver en Español" : "View in English"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
