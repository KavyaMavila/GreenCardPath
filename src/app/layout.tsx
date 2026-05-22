import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/content/landing";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Sora, Titillium_Web } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium",
  weight: ["300", "400", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — EB-1A & NIW`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
   icons: {
    icon: "/images/logo-gcp-white.png",        // browser tab
   
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
      className={` h-full antialiased ${sora.variable} ${titillium.variable}`} 
    >
      <body className="relative min-h-full flex flex-col">
      <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
