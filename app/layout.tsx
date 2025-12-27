import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vorpi.ai — Transactional Digital Twin",
  description:
    "Decision-grade supply chain scenarios from transactions. Uncertainty-aware forecasting + decomposed optimization for explainable actions.",
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

