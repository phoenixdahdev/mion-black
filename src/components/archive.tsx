"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { collections as allCollections } from "@/data/collections";

const collections = allCollections.map((c) => ({
  season: c.season,
  title: c.title,
  image: c.heroImage,
  slug: c.slug,
}));

export default function Archive() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mb-12 px-6 md:px-12">
        <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          03 — Archive
        </h2>
      </div>

      <div className="relative z-10 flex flex-col">
        {collections.map((item) => (
          <Link
            href={`/collections/${item.slug}`}
            key={item.season}
            className="group relative flex flex-col border-t border-foreground/10 px-6 py-8 transition-colors hover:bg-foreground/5 md:flex-row md:items-center md:justify-between md:py-12 md:px-12"
            onMouseEnter={() => setHoveredImage(item.image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
              <span className="font-mono text-sm text-muted-foreground">
                {item.season}
              </span>
              <span className="font-serif text-3xl font-light text-foreground md:text-5xl">
                {item.title}
              </span>
            </div>

            {/* Mobile Image */}
            <div className="mt-6 aspect-video w-full overflow-hidden md:hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            <span className="hidden font-mono text-xs uppercase tracking-widest text-foreground opacity-0 transition-opacity group-hover:opacity-100 md:block">
              View Lookbook
            </span>
          </Link>
        ))}
        <div className="border-t border-foreground/10" />
      </div>

      {/* Hover Image Reveal - Desktop Only */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 hidden h-[600px] w-[450px] -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-100 mix-blend-difference md:block">
        {collections.map((item) => (
          <Image
            key={item.image}
            src={item.image}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoveredImage === item.image ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
