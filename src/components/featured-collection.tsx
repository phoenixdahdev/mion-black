"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

import { collections } from "@/data/collections";

const items = [
  ...collections[0].looks.slice(0, 2).map((look) => ({
    id: look.id,
    title: look.title,
    price: look.price || "Contact for Price",
    image: look.image,
  })),
  ...collections[1].looks.slice(0, 2).map((look) => ({
    id: look.id,
    title: look.title,
    price: look.price || "Contact for Price", // Street Legacy items
    image: look.image,
  })),
];

export default function FeaturedCollection() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="bg-background py-24 overflow-hidden">
      <div className="mb-12 px-6 md:px-12">
        <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          02 — Selected Works
        </h2>
      </div>

      <motion.div
        style={{ x: isDesktop ? x : 0 }}
        className="flex w-full gap-8 overflow-x-auto px-6 pb-8 md:w-max md:overflow-visible md:px-12 md:pb-0 scrollbar-hide snap-x"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative w-[80vw] flex-shrink-0 snap-center md:w-[400px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </div>
            <div className="mt-4 flex justify-between font-mono text-xs uppercase tracking-wide text-foreground">
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
