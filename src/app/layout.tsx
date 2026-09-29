import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { IntroSplash, introScript } from "@/components/ui/IntroSplash";
import { site } from "@/data/site";

// Fallback font — used until the licensed PolySans files are added to /public/fonts.
const manrope = Manrope({
  variable: "--font-sans-src",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const hasPolySans = fs.existsSync(path.join(process.cwd(), "public/fonts/PolySans-Neutral.woff2"));

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortDescription,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} h-full`} suppressHydrationWarning>
      <head>
        {hasPolySans && <link rel="stylesheet" href="/fonts/polysans.css" />}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <IntroSplash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
