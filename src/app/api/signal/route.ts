import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET() {
  return NextResponse.json({
    brand: "BMOZI",
    domain: "bmozi.net",
    signal: "technical web design and creation",
    capabilities: [
      "interface systems",
      "applied AI workflows",
      "cloud-native deployment",
      "technical brand systems",
    ],
    status: "online",
  });
}
