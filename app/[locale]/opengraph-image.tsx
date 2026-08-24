import { ImageResponse } from "next/og";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const copy: Record<Locale, { role: string; headline: string }> = {
  en: { role: "Full-Stack Software Engineer · Madrid", headline: "I learn the stack, then I ship the system." },
  es: { role: "Ingeniero de Software Full-Stack · Madrid", headline: "Aprendo el stack y luego entrego el sistema." },
};

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const { role, headline } = copy[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090c",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", fontFamily: "monospace", fontSize: 24, color: "#7ee8c9", letterSpacing: 4 }}>
          CARLOS LENS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 62,
            fontWeight: 600,
            color: "#e9ebef",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {headline}
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#939aa8" }}>{role}</div>
      </div>
    ),
    { ...size }
  );
}
