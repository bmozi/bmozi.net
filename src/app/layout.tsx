import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bmozi.net"),
  title: {
    default: "BMOZI | Technical Web Design and Creation",
    template: "%s | BMOZI",
  },
  description:
    "BMOZI is a technical brand branch for modern web design, AI-enabled products, and cloud-native web creation.",
  applicationName: "BMOZI",
  authors: [{ name: "BMOZI" }],
  creator: "BMOZI",
  publisher: "BMOZI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://bmozi.net",
    siteName: "BMOZI",
    title: "BMOZI | Technical Web Design and Creation",
    description:
      "A modern technical brand surface for web design, AI-enabled products, and portfolio-grade digital systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMOZI | Technical Web Design and Creation",
    description:
      "A modern technical brand surface for web design, AI-enabled products, and portfolio-grade digital systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0d11",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
