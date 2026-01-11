"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function LookbookItem({
  src,
  alt,
  text,
  align = "left",
}: {
  src: string;
  alt: string;
  text: string;
  align?: "left" | "right";
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative h-[120vh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[140%] w-full">
        <Image src={src} alt={alt} fill className="object-cover grayscale" />
      </motion.div>
      <div
        className={`absolute inset-0 flex items-center ${
          align === "left" ? "justify-start px-12" : "justify-end px-12"
        }`}
      >
        <h2 className="max-w-xl font-serif text-7xl text-white mix-blend-difference md:text-9xl">
          {text}
        </h2>
      </div>
    </div>
  );
}

export default function Lookbook() {
  return (
    <section className="bg-background">
      <LookbookItem
        src="/collections/hybrid-jersey/1001686981.jpg"
        alt="Hybrid Jersey Collection"
        text="HYBRID JERSEY"
        align="left"
      />
      <LookbookItem
        src="/collections/street-legacy/IMG_20260109_123618.png"
        alt="Street Legacy"
        text="STREET LEGACY"
        align="left"
      />
      <LookbookItem
        src="/collections/mionblack-orginal/IMG_20260109_124133.png"
        alt="MIONBLACK ORIGINAL"
        text="ORIGINAL / COMING SOON"
        align="left"
      />
    </section>
  );
}
