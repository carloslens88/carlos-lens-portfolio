"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("locale") : null;
    const browserLang = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "en";
    const target = stored ?? (browserLang.startsWith("es") ? "es" : "en");
    window.location.replace(`/${target}/`);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-dim">Carlos Lens</p>
      <p className="text-fg-muted">
        Redirecting… ·{" "}
        <Link href="/en/" className="text-accent underline underline-offset-4">
          English
        </Link>{" "}
        ·{" "}
        <Link href="/es/" className="text-accent underline underline-offset-4">
          Español
        </Link>
      </p>
    </main>
  );
}
