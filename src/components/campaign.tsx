"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  "/collections/hybrid-jersey/1001729584.jpg",
  "/collections/hybrid-jersey/1001686981.jpg",
  "/collections/hybrid-jersey/1001693740.jpg",
  "/collections/hybrid-jersey/1001693760.jpg",
  "/collections/hybrid-jersey/1001729517.jpg",
  "/collections/hybrid-jersey/1001729530.jpg",
];

export default function Campaign() {
  const [shuffledImages, setShuffledImages] = useState(IMAGES);

  useEffect(() => {
    const timer = setInterval(() => {
      setShuffledImages((prev) => {
        const next = [...prev];
        // Fisher-Yates shuffle
        for (let i = next.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [next[i], next[j]] = [next[j], next[i]];
        }
        return next;
      });
    }, 4000); // Shuffle every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 lg:grid-cols-3">
        {shuffledImages.map((src) => (
          <motion.div
            key={src}
            layout
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 120,
            }}
            className="relative h-full w-full overflow-hidden"
          >
            <Image
              src={src}
              alt="Campaign Background"
              fill
              className="object-cover grayscale opacity-50"
              priority
            />
          </motion.div>
        ))}
        {/* Global Dark Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center p-6 text-center pointer-events-none">
        <div className="flex flex-col items-center gap-6 pointer-events-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl text-white md:text-8xl"
          >
            HYBRID JERSEY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md font-sans text-sm uppercase tracking-widest text-white/80"
          >
            FW25
            <br />
            The weight of the fabric mirrors the weight of ambition.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 border border-white/30 px-8 py-3 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            Explore Campaign
          </motion.button>
        </div>
      </div>
    </section>
  );
}
