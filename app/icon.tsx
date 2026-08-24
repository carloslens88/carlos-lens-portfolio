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
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 26,
            fontWeight: 600,
            color: "#7ee8c9",
            display: "flex",
          }}
        >
          CL
        </div>
      </div>
    ),
    { ...size }
  );
}
