import type { Metadata, Viewport } from "next";

import "../globals.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import BackToTop from "@/components/ui/BackToTop";
import OptionalPageLoadOverlay from "@/components/ui/OptionalPageLoadOverlay";
import { getSiteChrome } from "@/lib/cms";

export const revalidate = 3600;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zambia Bureau of Standards (ZABS)",
    template: "%s | Zambia Bureau of Standards",
  },
  description: "The national standards body of Zambia providing standards development, conformity assessment, testing, certification, inspection, metrology, and training services.",
  keywords: ["ZABS", "Zambia Bureau of Standards", "Standards", "Certification", "Testing", "Inspection"],
  authors: [{ name: "Zambia Bureau of Standards" }],
  creator: "Zambia Bureau of Standards",
  publisher: "Zambia Bureau of Standards",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_ZM",
    title: "Zambia Bureau of Standards (ZABS)",
    description: "The national standards body of Zambia providing standards development, certification, testing, inspection and quality infrastructure services.",
    siteName: "ZABS",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zambia Bureau of Standards (ZABS)",
    description: "The national standards body of Zambia providing standards development, certification, testing, inspection and quality infrastructure services.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#008FD5",
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The public site now uses its own root layout so Payload can mount a
  // separate admin root without inheriting the marketing site chrome.
  const { navigation, siteSettings } = await getSiteChrome();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <OptionalPageLoadOverlay />
        <div className="flex min-h-screen flex-col">
          <TopBar siteSettings={siteSettings} />
          <Header navigation={navigation} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer siteSettings={siteSettings} />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
