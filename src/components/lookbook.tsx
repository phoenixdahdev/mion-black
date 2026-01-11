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
        <Image src={src} alt={alt} fill className="object-cover" />
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
        src="https://images.unsplash.com/photo-1631428431420-c47b5d01c667?fm=jpg&q=60&w=3000"
        alt="Editorial 01"
        text="ABSENCE OF COLOR"
        align="left"
      />
      <LookbookItem
        src="https://images.unsplash.com/photo-1725121225009-3d7e049fb8a6?fm=jpg&q=60&w=3000"
        alt="Editorial 02"
        text="FLUID DYNAMICS"
        align="right"
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
