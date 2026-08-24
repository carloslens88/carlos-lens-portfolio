"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Handles prefers-reduced-motion centrally, the SSR-safe way — components
// pass their normal animation props unconditionally and framer-motion
// itself skips/shortens the transitions for users who prefer less motion.
// Gating `initial`/`animate` props by hand with useReducedMotion() causes
// a hydration mismatch on a static export (no `window` at build time).
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
