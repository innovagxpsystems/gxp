import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Innova GxP Systems | GxP Quality, Clinical & Validation Services",
    template: "%s | Innova GxP Systems",
  },
  description:
    "Innova GxP Systems is an integrated Validation, Automation, Quality, and Clinical business solutions provider to global pharmaceutical, biotechnology, and medical device companies.",
  keywords: [
    "GxP auditing",
    "pharmaceutical consulting",
    "clinical site monitoring",
    "computer system validation",
    "CSV",
    "QMS",
    "biotech compliance",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Innova GxP Systems",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
