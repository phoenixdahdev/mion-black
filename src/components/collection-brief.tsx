"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";

export default function CollectionBrief() {
  const collection = collections[0];

  return (
    <section className="bg-background py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Current Collection ({collection.season})
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-foreground"
          >
            {collection.title}
          </motion.h2>
          <p className="max-w-md font-sans text-lg text-muted-foreground leading-relaxed">
            The Hybrid Jersey collection represents the fusion of athletic
            performance materials with avant-garde tailoring. Structured drapes,
            reinforced seams, and ballistic nylon inserts.
          </p>
          <div className="mt-4">
            <Link
              href={`/collections/${collection.slug}`}
              className="inline-block border-b border-foreground pb-1 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted order-1 md:order-2">
          <Image
            src={collection.looks[0].image}
            alt="Hybrid Jersey Campaign"
            fill
            className="object-cover grayscale transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>
    </section>
  );
}
