import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = "https://vorpi.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VORPI AI | Enterprise Artificial Intelligence Platform",
    template: "%s | VORPI AI",
  },
  description:
    "VORPI AI is an AI-First Enterprise Artificial Intelligence Platform combining the proprietary VORPI Framework, FFT-based demand forecasting, reinforcement-learning optimization, enterprise planning, and an AI Copilot.",
  keywords: [
    "Enterprise Artificial Intelligence Platform",
    "Enterprise AI",
    "AI First",
    "Supply Chain AI",
    "Manufacturing AI",
    "Demand Forecasting",
    "Fast Fourier Transform",
    "Reinforcement Learning",
    "Inventory Optimization",
    "Enterprise Planning",
    "VORPI Framework",
  ],
  authors: [{ name: "VORPI AI" }],
  creator: "VORPI AI",
  publisher: "VORPI AI",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VORPI AI",
    title: "VORPI AI | Enterprise Artificial Intelligence Platform",
    description:
      "AI First enterprise intelligence for forecasting, optimization, planning, and operational decision-making.",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "VORPI AI Enterprise Artificial Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VORPI AI | Enterprise Artificial Intelligence Platform",
    description:
      "AI First enterprise intelligence for forecasting, optimization, planning, and operational decision-making.",
    images: ["/og-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}