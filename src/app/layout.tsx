import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { WorkspaceShell } from "@/components/workspace-shell";
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
    default: "BMOZI | Governed Digital Systems",
    template: "%s | BMOZI",
  },
  description:
    "BMOZI builds governed digital systems: product interfaces, AI workflows, integration architecture, and deployable reference systems.",
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
    title: "BMOZI | Governed Digital Systems",
    description:
      "A founder-led technical studio building trustworthy AI workflows, integration architecture, product interfaces, and deployable proof systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMOZI | Governed Digital Systems",
    description:
      "A founder-led technical studio building trustworthy AI workflows, integration architecture, product interfaces, and deployable proof systems.",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
  icons: {
    icon: [
      { url: "/brand/bmozi-technical-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
      <body>
        <WorkspaceShell />
        {children}
      </body>
    </html>
  );
}
