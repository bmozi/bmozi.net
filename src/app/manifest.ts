import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BMOZI",
    short_name: "BMOZI",
    description:
      "Technical web design, AI-enabled products, and cloud-native web creation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d11",
    theme_color: "#0a0d11",
  };
}
