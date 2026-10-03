import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/shell";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "BHWiki — A field guide to substances", template: "%s · BHWiki" },
  description: "An open substance encyclopedia connecting mechanisms, subjective effects, pharmacokinetics, and published evidence. An independent open reference.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-svh flex-col">
        <TooltipProvider delay={300}>
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
