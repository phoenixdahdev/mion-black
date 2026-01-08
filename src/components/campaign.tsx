"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Campaign() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2000&auto=format&fit=crop"
          alt="Campaign Runway"
          fill
          className="object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center p-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl text-white md:text-8xl"
          >
            THE VOID WALKING
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md font-sans text-sm uppercase tracking-widest text-white/80"
          >
            Fall / Winter 2025 Campaign
            <br />
            Featuring the structural dismantling of the ego.
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
