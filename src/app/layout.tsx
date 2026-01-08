import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import Provider from "@/components/miscellaneous/provider";
import GotoTop from "@/components/miscellaneous/go-to-top";
import Navbar from "@/components/navbar";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MION BLACK",
  description: "Digital Avant-Garde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", bodoni.variable, inter.variable)}>
        <Provider>
          <Navbar />
          {children}
          <GotoTop />
        </Provider>
      </body>
    </html>
  );
}
