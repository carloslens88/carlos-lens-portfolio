"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n";
import { CloseIcon, MenuIcon } from "./icons";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}/`} className="font-mono text-sm font-medium tracking-tight text-fg">
          carlos<span className="text-accent">.</span>lens
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-fg-muted transition-colors hover:text-fg">
              {label}
            </a>
          ))}
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

      {open ? (
        <div className="border-t border-border bg-bg px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-fg-muted transition-colors hover:bg-bg-elevated hover:text-fg"
              >
                {label}
              </a>
            ))}
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
