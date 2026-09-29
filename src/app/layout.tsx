import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = { title: { default: "BHWiki — A field guide to substances", template: "%s · BHWiki" }, description: "An open substance encyclopedia connecting mechanisms, subjective effects, pharmacokinetics, and published evidence. An independent open reference." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>; }
