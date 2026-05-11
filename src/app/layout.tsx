import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ADSENSE_CLIENT, ENABLE_ADS } from "@/lib/config";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinvoke - Smart Credit Card Widgets & Alarms",
  description: "Never miss a due date again. Pinvoke provides smart interactive widgets, persistent lock-screen alarms, and reliable tracking for your credit cards and bills.",
  icons: {
    icon: [
      { url: "/images/ic_launcher_foreground.webp", sizes: "32x32" },
      { url: "/images/ic_launcher_foreground.webp", sizes: "96x96" },
      { url: "/images/ic_launcher_foreground.webp", sizes: "144x144" },
    ],
    apple: "/images/ic_launcher_foreground.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* AdSense script — only loaded when ENABLE_ADS=true */}
        {ENABLE_ADS && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
