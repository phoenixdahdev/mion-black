"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { collections } from "@/data/collections";
import Footer from "@/components/footer";

const IMAGES = [
  "/collections/hybrid-jersey/1001729584.jpg",
  "/collections/hybrid-jersey/1001686981.jpg",
  "/collections/hybrid-jersey/1001693740.jpg",
  "/collections/hybrid-jersey/1001693760.jpg",
  "/collections/hybrid-jersey/1001729517.jpg",
  "/collections/hybrid-jersey/1001729530.jpg",
];

export default function CampaignPage() {
  const [shuffledImages, setShuffledImages] = useState(IMAGES);
  const collection = collections.find((c) => c.slug === "hybrid-jersey");

  useEffect(() => {
    const timer = setInterval(() => {
      setShuffledImages((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [next[i], next[j]] = [next[j], next[i]];
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!collection) return null;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Grid Shuffle */}
      <section className="relative h-screen w-full overflow-hidden">
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
                className="object-cover grayscale opacity-40"
                priority
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center p-6 text-center pointer-events-none">
          <div className="flex flex-col items-center gap-6 pointer-events-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-sm uppercase tracking-widest text-white/80"
            >
              The Campaign
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-6xl md:text-9xl"
            >
              {collection.title}
            </motion.h1>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-24 w-[1px] bg-white/50"
            />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative px-6 py-32 md:px-12 md:py-48 bg-zinc-950">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              01 — Concept
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl leading-relaxed md:text-5xl text-white/90 whitespace-pre-line"
          >
            {collection.narrative}
          </motion.p>
        </div>
      </section>

      {/* Visuals / Additional Imagery Loop (Simples for now) */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {IMAGES.slice(0, 4).map((src, i) => (
          <div key={i} className="relative aspect-[4/5] overflow-hidden grayscale">
             <Image
                src={src}
                alt={`Campaign Look ${i}`}
                fill
                className="object-cover"
              />
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center py-32 md:py-48 bg-black">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            OWN THE UNIFORM
          </h2>
          <Link
            href={`/collections/${collection.slug}`}
            className="inline-block border border-white/30 px-12 py-4 font-mono text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
          >
            Shop Collection
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
