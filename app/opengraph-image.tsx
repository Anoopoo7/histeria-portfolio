import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

export const alt = "Histeria — Transactional Email Infrastructure";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#07090e",
          backgroundImage: "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #07090e 70%)",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        {/* Top Header Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              height: "50px",
              width: "50px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "14px",
              backgroundColor: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              color: "#818cf8",
              fontSize: "24px",
              fontWeight: "bold"
            }}
          >
            ⚡
          </div>
          <span style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.02em" }}>
            {siteConfig.name}
          </span>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              fontSize: "14px",
              fontWeight: "600",
              color: "#a5b4fc"
            }}
          >
            Developer Transactional Email Platform
          </div>

          <div
            style={{
              fontSize: "56px",
              fontWeight: "800",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #6366f1 100%)",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            {siteConfig.tagline}
          </div>

          <div style={{ fontSize: "20px", color: "#94a3b8", lineHeight: 1.5 }}>
            {siteConfig.description}
          </div>
        </div>

        {/* Footer Endpoint Indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "14px",
            color: "#64748b",
            fontFamily: "monospace"
          }}
        >
          <span>POST /v1/emails/send</span>
          <span style={{ color: "#34d399" }}>x-api-key Authentication</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
