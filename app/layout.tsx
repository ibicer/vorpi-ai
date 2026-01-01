import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://vorpi.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "VORPI AI",
  description: "Transactional Digital Twin for Algorithmic Operational Excellence.",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VORPI AI",
    title: "VORPI AI",
    description: "Transactional Digital Twin for Operational Excellence.",
    images: [
      {
        url: "/og-logo.png", // must exist in /public
        width: 1200,
        height: 630,
        alt: "VORPI AI — Algorithmic Operational Excellence",
      },
      // Optional square fallback:
      // {
      //   url: "/og-vorpi-square.png",
      //   width: 1200,
      //   height: 1200,
      //   alt: "VORPI AI",
      // },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VORPI AI",
    description: "Transactional Digital Twin for Algorithmic Operational Excellence.",
    images: ["/og-logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

