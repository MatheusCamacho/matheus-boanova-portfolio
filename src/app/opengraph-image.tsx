import { ImageResponse } from "next/og";

export const alt = "Matheus Boanova Camacho — Desenvolvedor de software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e9",
          color: "#111111",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>MBC</span>
          <span style={{ color: "#e34a24" }}>●</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 94,
              lineHeight: 0.88,
              letterSpacing: "-0.045em",
            }}
          >
            MATHEUS BOANOVA CAMACHO
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 34 }}>
            Desenvolvedor de software.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#6d6a64",
          }}
        >
          <span>Frontend · Backend · Sistemas</span>
          <span>Pelotas, RS — Brasil</span>
        </div>
      </div>
    ),
    size,
  );
}
