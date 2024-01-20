import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'fbex.io',
  description: 'Building software and writing about stuff.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
    </body>
    </html>
  )
}
