import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "TagsBikez — Authorised Royal Enfield Dealer, Thrissur",
  description:
    "TagsBikez is Thrissur's authorised Royal Enfield dealership. Explore the full 2026 lineup, genuine accessories, expert service and easy EMI.",
  openGraph: {
    title: "TagsBikez — Royal Enfield Thrissur",
    description: "Authorised Royal Enfield dealership in Thrissur.",
    type: "website",
  },
  icons: {
    icon: "/logo/tagsbikez.png",
    apple: "/logo/tagsbikezwhitelogo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans bg-white text-neutral-900">{children}</body>
    </html>
  );
}
