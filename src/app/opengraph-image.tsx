import { ImageResponse } from "next/og";

export const alt = "WeShipZ — creative-tech studio for motion, ads, video, websites and AI automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services = ["Motion", "Ads", "Video", "Websites", "AI automation"];

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
          padding: 72,
          background: "#101116",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, letterSpacing: 2 }}>
          <span style={{ color: "#296be5" }}>( </span>
          <span style={{ margin: "0 10px" }}>CREATIVE-TECH STUDIO</span>
          <span style={{ color: "#296be5" }}> )</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, fontWeight: 700, lineHeight: 0.95, letterSpacing: -5 }}>
          <span>We ship work</span>
          <span style={{ display: "flex" }}>
            that moves<span style={{ color: "#296be5" }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 14 }}>
            {services.map((service) => (
              <span
                key={service}
                style={{ border: "2px solid rgba(255,255,255,0.25)", borderRadius: 999, padding: "10px 24px", fontSize: 24 }}
              >
                {service}
              </span>
            ))}
          </div>
          <span style={{ fontSize: 40, fontWeight: 700 }}>
            WeShipZ<span style={{ color: "#296be5" }}>.</span>
          </span>
        </div>
      </div>
    ),
    size,
  );
}
