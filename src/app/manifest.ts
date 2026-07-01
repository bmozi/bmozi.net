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
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
