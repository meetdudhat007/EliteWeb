import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/constants/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: [...siteConfig.metadata.keywords],
  robots: {
    index: false,
    follow: false,
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg-base)] text-[var(--text-primary)] selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
