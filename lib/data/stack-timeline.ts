import { experience, type StackCategory } from "./experience";

// Bump when refreshing the site so the "present"-ended segment stays accurate.
const AS_OF = "2026-08";

export interface StackSegment {
  id: string;
  company: string;
  years: number;
  widthPercent: number;
  stack: StackCategory;
}

function toMonthIndex(iso: string): number {
  const parts = iso.split("-").map(Number);
  const y = parts[0] ?? 0;
  const m = parts[1] ?? 1;
  return y * 12 + (m - 1);
}

function monthsBetween(start: string, end: string): number {
  return toMonthIndex(end === "present" ? AS_OF : end) - toMonthIndex(start);
}

const primaryRoles = experience.filter((e) => e.primary).sort((a, b) => (a.start < b.start ? -1 : 1));

const totalMonths = primaryRoles.reduce((sum, e) => sum + monthsBetween(e.start, e.end), 0);

export const stackTimeline: StackSegment[] = primaryRoles.map((e) => {
  const months = monthsBetween(e.start, e.end);
  return {
    id: e.id,
    company: e.company,
    years: Math.round((months / 12) * 10) / 10,
    widthPercent: (months / totalMonths) * 100,
    stack: e.stack,
  };
});

export const totalCareerYears = Math.round((totalMonths / 12) * 10) / 10;

export const stackTotals: Record<StackCategory, number> = { java: 0, dotnet: 0, mixed: 0, other: 0 };
for (const seg of stackTimeline) {
  stackTotals[seg.stack] += seg.widthPercent;
}
