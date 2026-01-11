"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-6xl font-light md:text-8xl"
        >
          ABOUT
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 h-[1px] bg-foreground/50"
        />
      </section>

      {/* Manifesto */}
      <section className="px-6 py-12 md:px-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              01 — Manifesto
            </span>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl leading-snug md:text-5xl lg:text-6xl"
            >
              MIONBLACK is fashion through an artist’s lens. Each piece is
              designed to carry emotion, structure, and intent.
            </motion.p>
            <div className="mt-12 flex flex-col md:flex-row gap-8 text-muted-foreground text-sm leading-relaxed">
              <p className="max-w-md">
                Every drop is rooted in a story—translated into form, fabric,
                and silhouette. Built on discipline and restraint, the brand
                removes excess to let meaning remain.
              </p>
              <p className="max-w-md">
                This is clothing not just to be worn, but to be felt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-12 md:px-12 md:py-24 bg-foreground text-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest opacity-70">
              02 — The Void
            </span>
          </div>
          <div>
            <p className="font-serif text-2xl leading-relaxed md:text-4xl">
              MIONBLACK is built in the space between survival and vision.
              Between where we come from—and where we refuse to remain. Rooted
              in discipline, pressure, and self-belief, each piece is designed
              as a response to resistance. The weight of the fabric mirrors the
              weight of ambition. Nothing is accidental. Nothing is decorative
              without purpose. Inspired by urban tension, raw structure, and the
              silence that exists inside chaos, MIONBLACK strips fashion down to
              its core. Clean forms. Controlled aggression. A presence that
              speaks without noise.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-12 md:px-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              03 — Construct
            </span>
          </div>
          <div>
            <div className="flex flex-col gap-8">
              <p className="font-serif text-2xl leading-relaxed md:text-3xl text-foreground">
                Fabrics are intentional—dense cottons, reinforced knits,
                engineered jerseys—chosen to hold shape, absorb impact, and move
                with authority. These are garments built to endure motion, time,
                and scrutiny.
              </p>
              <div className="max-w-md text-sm text-muted-foreground leading-relaxed space-y-4">
                <p>
                  MIONBLACK is not trend-driven. It is pressure-tested. This is
                  clothing for those who move forward regardless of conditions.
                </p>
                <p>
                  Not to impress—but to assert. MIONBLACK is not worn. It is
                  carried.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[80vh] w-full overflow-hidden my-24">
        <Image
          src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2608&auto=format&fit=crop"
          alt="Studio abstract"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Studio / Contact */}
      <section className="px-6 py-12 md:px-12 md:py-24 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              04 — The Studio
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-4">Location</h3>
              <p className="font-mono text-sm text-muted-foreground">
                1049 Void Av.
                <br />
                Berlin, 10115
                <br />
                Germany
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Contact</h3>
              <p className="font-mono text-sm text-muted-foreground">
                mionblackltd@gmail.com
                <br />
                +49 00 0000 0000
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
