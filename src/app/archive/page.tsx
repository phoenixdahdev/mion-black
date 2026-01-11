"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import Footer from "@/components/footer";

export default function ArchivePage() {
  const allImages = collections.flatMap((c) => {
    const images = [];
    if (c.heroImage)
      images.push({
        src: c.heroImage,
        title: c.title,
        season: c.season,
        slug: c.slug,
      });
    if (c.looks) {
      c.looks.forEach((look) => {
        images.push({
          src: look.image,
          title: look.title,
          season: c.season,
          slug: c.slug,
        });
      });
    }
    return images;
  });

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
          ARCHIVE
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 h-[1px] bg-foreground/50"
        />
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="relative aspect-[3/4] overflow-hidden bg-muted group"
            >
              <Link
                href={`/collections/${img.slug}`}
                className="block w-full h-full relative"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs font-mono text-white uppercase tracking-widest bg-black/50 px-2 py-1">
                    {img.season}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
