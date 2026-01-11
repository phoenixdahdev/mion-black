"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { collections } from "@/data/collections";
import Footer from "@/components/footer";
import Countdown from "@/components/countdown";

export default function CollectionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={collection.heroImage}
            alt={collection.title}
            fill
            className="object-cover opacity-60 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex h-full items-end p-6 md:p-12">
          {collection.comingSoon ? (
            <div className="flex flex-col gap-6 w-full items-center justify-center h-full pb-32">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-mono text-sm uppercase tracking-widest text-white/80"
              >
                Launch Imminent
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl text-white md:text-8xl text-center"
              >
                {collection.title}
              </motion.h1>
              {collection.launchDate && (
                <div className="mt-12">
                  <Countdown targetDate={collection.launchDate} />
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-mono text-sm uppercase tracking-widest text-white/80"
              >
                {collection.season}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-6xl text-white md:text-9xl"
              >
                {collection.title}
              </motion.h1>
            </div>
          )}
        </div>
      </section>

      {!collection.comingSoon && (
        <>
          {/* Narrative */}
          <section className="px-6 py-24 md:px-12 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  01 — Narrative
                </span>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-serif text-2xl leading-relaxed md:text-4xl whitespace-pre-line"
                >
                  {collection.narrative}
                </motion.p>
              </div>
            </div>
          </section>

          {/* Looks Grid */}
          {collection.looks && collection.looks.length > 0 && (
            <section className="px-6 py-24 md:px-12">
              <div className="mb-12 border-b border-foreground/10 pb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  04 — The Looks
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {collection.looks.map((look) => (
                  <div
                    key={look.id}
                    className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-muted"
                  >
                    <Image
                      src={look.image}
                      alt={look.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    <div className="absolute bottom-6 left-6 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="font-mono text-xs uppercase tracking-widest text-white block">
                        {look.title}
                      </span>
                      {look.price && (
                        <span className="font-mono text-xs text-white/70 block mt-1">
                          {look.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Runway Slider */}
          {collection.runwayLooks && collection.runwayLooks.length > 0 && (
            <section className="py-24 overflow-hidden">
              <div className="mb-12 px-6 md:px-12">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  02 — The Runway
                </span>
              </div>

              <div className="flex w-full gap-4 overflow-x-auto px-6 pb-8 md:w-max md:overflow-visible md:px-12 md:gap-8 md:pb-0 scrollbar-hide snap-x">
                {collection.runwayLooks.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[2/3] w-[80vw] flex-shrink-0 snap-center overflow-hidden bg-muted md:w-[400px]"
                  >
                    <Image
                      src={src}
                      alt={`Runway Look ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Materials & Process */}
          {collection.materials && (
            <section className="bg-foreground text-background py-24 px-6 md:px-12 md:py-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                    03 — Materiality
                  </span>
                </div>
                <div>
                  <p className="font-serif text-2xl leading-relaxed md:text-4xl">
                    {collection.materials}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Details/Mood */}
          {collection.details && collection.details.length > 0 && (
            <section className="py-24">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {collection.details.map((img, i) => (
                  <div key={i} className="relative h-[60vh] w-full bg-muted">
                    <Image
                      src={img}
                      alt="Detail"
                      fill
                      className="object-cover grayscale transition-all hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Navigation Footer */}
      {/* More Collections */}
      <section className="py-24 px-6 md:px-12 border-t border-foreground/10">
        <div className="mb-12 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            More Collections
          </span>
          <Link
            href="/collections"
            className="font-mono text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections
            .filter((c) => c.slug !== slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/collections/${item.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                  <Image
                    src={item.heroImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.season}
                  </span>
                  <h3 className="font-serif text-xl">{item.title}</h3>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
