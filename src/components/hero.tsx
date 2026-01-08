"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1742472295279-d6652f7a89d0?q=80&w=2070&auto=format&fit=crop"
          alt="MION BLACK Concrete Silhouette"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-start gap-2"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl font-serif text-6xl font-light leading-[0.9] text-white md:text-8xl lg:text-9xl"
          >
            MION BLACK
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[1px] bg-white/50"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-md font-sans text-sm tracking-widest text-white/80 uppercase md:text-base"
          >
            Silence. Form. Void.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
