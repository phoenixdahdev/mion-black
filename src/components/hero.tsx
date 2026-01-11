"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { collections } from "@/data/collections";

const firstCollection = collections[0];
const images = firstCollection?.runwayLooks?.slice(0, 4) || [];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* 
              Note: Using key={index} on motion.div ensures unmount/mount transition. 
              The Image component optimizes loading, but for smooth crossfade 
              we rely on AnimatePresence processing the key change.
            */}
          <Image
            src={images[index]}
            alt="MION BLACK Campaign"
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60 z-0" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
        <div className="flex flex-col items-start gap-2">
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
            Not worn. Carried.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
