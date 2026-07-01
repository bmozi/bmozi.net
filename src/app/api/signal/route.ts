import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET() {
  return NextResponse.json({
    brand: "BMOZI",
    founder: "John Briggs",
    domain: "bmozi.net",
    purpose: "machine-readable profile for BMOZI capabilities",
    signal: "governed digital systems and trustworthy AI adoption",
    capabilities: [
      "product interface systems",
      "trustworthy AI workflows",
      "event-driven architecture",
      "SOA-rooted service contracts",
      "unified operational objects",
      "Sentinel API gatekeeper",
      "Merlin software factory",
      "technical product systems",
      "integration architecture",
    ],
    status: "online",
  });
}
