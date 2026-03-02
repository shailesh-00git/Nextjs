import { ImageResponse } from "next/og";
const runtime = "edge";
export function GET(request) {
  const { searchparams } = new URL(request.url);
  const title = searchparams.get("title");
  const description = searchparams.get("description");
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontSize: 48,
        color: "white",
        padding: "20px",
        fontWeight: "bold",
      }}
    >
      <div>{title}</div>
      <div style={{ fontSize: 24, fontWeight: "normal", marginTop: 20 }}>
        {description}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
