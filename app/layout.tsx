import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
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
  openGraph: {
    title: "Centra - The Future Beyond Fiat",
    description:
      "A stable, transparent future beyond fiat currency. Designed to end inflation, corruption, and inequality in money.",
    url: "https://centra.org",
    siteName: "Centra",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
