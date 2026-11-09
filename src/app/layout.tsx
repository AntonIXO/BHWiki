import { EvidenceProvider } from "@/components/evidence";
import { UmamiAnalytics } from "@/components/umami-analytics";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { SITE_TITLE, SITE_DESCRIPTION, siteJsonLd, serializeJsonLd, verificationMetadata } from "@/lib/seo";
import { Header } from "@/components/header";
import { Footer } from "@/components/shell";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteUrl()),
    title: { default: SITE_TITLE, template: "%s · BHWiki" },
    description: SITE_DESCRIPTION,
    applicationName: "BHWiki",
    ...verificationMetadata(),
    icons: { icon: [{ url: "/icon-48.png", type: "image/png", sizes: "48x48" }, { url: "/favicon.ico", type: "image/x-icon" }], apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><UmamiAnalytics /></head>
      <body className="flex min-h-svh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd()) }} />
        <TooltipProvider delay={300}><EvidenceProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </EvidenceProvider></TooltipProvider>
      </body>
    </html>
  );
}
