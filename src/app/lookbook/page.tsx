"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Footer from "@/components/footer";

const lookbookItems = [
  {
    src: "/collections/hybrid-jersey/1001686981.jpg",
    alt: "Hybrid Jersey Collection",
    text: "HYBRID JERSEY",
    align: "left",
  },
  {
    src: "/collections/street-legacy/IMG_20260109_123618.png",
    alt: "Street Legacy",
    text: "STREET LEGACY",
    align: "left",
  },
  {
    src: "/collections/mionblack-orginal/IMG_20260109_124133.png",
    alt: "MIONBLACK ORIGINAL",
    text: "ORIGINAL / COMING SOON",
    align: "left",
  },
];

function LookbookItem({
  src,
  alt,
  text,
  align = "left",
}: {
  src: string;
  alt: string;
  text: string;
  align?: "string" | "left" | "right";
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className="relative h-[100vh] md:h-[120vh] w-full overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
      <div
        className={`absolute inset-0 flex items-center ${
          align === "left"
            ? "justify-start px-6 md:px-12"
            : "justify-end px-6 md:px-12"
        }`}
      >
        <h2 className="max-w-xl font-serif text-5xl md:text-8xl lg:text-9xl text-white mix-blend-difference break-words">
          {text}
        </h2>
      </div>
    </div>
  );
}

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Intro */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl font-light md:text-8xl"
        >
          LOOKBOOK
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 h-[1px] bg-foreground/50"
        />
      </section>

      {/* Gallery */}
      <section>
        {lookbookItems.map((item, index) => (
          // @ts-ignore
          <LookbookItem key={index} {...item} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
