import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Farrel Kusumah — Developer & Designer",
    template: "%s — Farrel Kusumah",
  },
  description:
    "Personal portfolio of Farrel Kusumah, a developer and designer building thoughtful web applications.",
  authors: [{ name: "Farrel Kusumah" }],
  openGraph: {
    title: "Farrel Kusumah — Developer & Designer",
    description:
      "Personal portfolio of Farrel Kusumah, a developer and designer building thoughtful web applications.",
    type: "website",
  },
};

import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Nav />
        <AnimatePresence mode="wait">
          <main className="flex-1">{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
