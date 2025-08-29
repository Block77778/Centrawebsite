import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Centra - The Future Beyond Fiat | New Currency & Transparent Money",
  description:
    "Centra is a stable, transparent fiat replacement designed to end inflation, corruption, and inequality in money. Join the future of new currency with blockchain transparency.",
  keywords:
    "new currency, fiat replacement, transparent money, stable currency, blockchain money, cryptocurrency, inflation-proof currency, decentralized finance",
  authors: [{ name: "Centra Team" }],
  creator: "Centra",
  publisher: "Centra",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/Centra-badge.png", sizes: "64x64", type: "image/png" },
      { url: "/Centra-badge.png", sizes: "128x128", type: "image/png" },
      { url: "/Centra-badge.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "/Centra-badge.png", sizes: "256x256", type: "image/png" }],
    shortcut: "/Centra-badge.png",
  },
  openGraph: {
    title: "Centra - The Future Beyond Fiat",
    description:
      "A stable, transparent future beyond fiat currency. Designed to end inflation, corruption, and inequality in money.",
    url: "https://centra.org",
    siteName: "Centra",
    type: "website",
    images: [
      {
        url: "/centra-wordmark.png",
        width: 1200,
        height: 630,
        alt: "Centra - The Future Beyond Fiat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centra - The Future Beyond Fiat",
    description: "A stable, transparent future beyond fiat currency.",
    images: ["/centra-wordmark.png"],
  },
  generator: "v0.app",
}

export const viewport = "width=device-width, initial-scale=1"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-[var(--font-poppins)]">{children}</body>
    </html>
  )
}
