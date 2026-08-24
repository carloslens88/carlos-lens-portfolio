import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090c",
          borderRadius: 14,
          border: "2px solid rgba(126,232,201,0.5)",
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7ee8c9" strokeWidth={1.8} strokeLinecap="round">
          <circle cx="12" cy="12" r="9.25" opacity={0.45} />
          <path d="M14.31 8 20.05 17.94" />
          <path d="M9.69 8h11.48" />
          <path d="M7.38 12 13.12 2.06" />
          <path d="M9.69 16 3.95 6.06" />
          <path d="M14.31 16H2.83" />
          <path d="M16.62 12 10.88 21.94" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
