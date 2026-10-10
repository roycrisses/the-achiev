import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/data";

const geist = Geist({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Achievers — NEB Class 11 & 12 Online Tuition Nepal",
    template: "%s · The Achievers",
  },
  description:
    "Nepal's online tuition platform for NEB Class 11 & 12 — daily live classes, recorded lessons, chapterwise notes and free mock tests, plus Medical (CEE) and entrance preparation.",
  robots: { index: true, follow: true },
  icons: { icon: "/logo-mark.webp", apple: "/logo-mark.webp" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: "The Achievers Institute of Learning",
    description:
      "Daily live classes, recorded lessons, chapterwise notes and free mock tests for NEB Class 11 & 12.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "The Achievers" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geist.className} ${fraunces.variable} flex min-h-full flex-col bg-[#faf8f3] text-[#1c2b22] antialiased`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#0a3a24] px-5 py-3 text-sm font-bold text-white shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-[#cbe4c6]" />
          WhatsApp Us
        </a>
      </body>
    </html>
  );
}
