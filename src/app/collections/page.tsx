"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

import { collections } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl font-light md:text-8xl"
        >
          COLLECTIONS
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 h-[1px] bg-foreground/50"
        />
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {collections.map((item, index) => (
          <motion.div
            key={item.season}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-b border-r border-foreground/10"
          >
            <div className="absolute inset-0 z-0 bg-muted">
              <Image
                src={item.heroImage}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
              <span className="font-mono text-xs uppercase tracking-widest text-white/70 mb-2">
                {item.season}
              </span>
              <h2 className="font-serif text-4xl text-white md:text-5xl">
                {item.title}
              </h2>
              <p className="mt-4 max-w-sm font-sans text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                {item.description}
              </p>
            </div>

            {/* Link Overlay */}
            <Link
              href={`/collections/${item.slug}`}
              className="absolute inset-0 z-20"
              aria-label={`View ${item.title}`}
            />
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
