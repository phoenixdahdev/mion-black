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
  metadataBase: new URL("https://mion-black.fynix.dev"),
  title: {
    default:
      "MION BLACK - Premium Streetwear & Fashion Collections | Heritage & Contemporary Design",
    template: "%s | MION BLACK",
  },
  description:
    "Exclusive MION BLACK streetwear: heritage wear, hybrid-jersey designs & contemporary fashion crafted to be felt, not just worn.",
  keywords: [
    "streetwear",
    "fashion",
    "premium clothing",
    "heritage wear",
    "hybrid-jersey",
    "contemporary fashion",
    "fashion collections",
    "designer wear",
    "exclusive clothing",
    "MION BLACK",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MION BLACK",
    title: "MION BLACK - Premium Streetwear & Fashion Collections",
    description:
      "Exclusive MION BLACK streetwear: heritage wear, hybrid-jersey designs & contemporary fashion crafted to be felt, not just worn.",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "MION BLACK",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MION BLACK - Premium Streetwear & Fashion Collections",
    description:
      "Exclusive MION BLACK streetwear: heritage wear, hybrid-jersey designs & contemporary fashion crafted to be felt, not just worn.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [{ rel: "icon", url: "/logo.png" }],
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
