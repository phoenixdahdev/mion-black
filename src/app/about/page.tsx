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
              MION BLACK is not a label. It is an exploration of the void. We
              strip away the unnecessary to reveal the essential structure of
              existence.
            </motion.p>
            <div className="mt-12 flex flex-col md:flex-row gap-8 text-muted-foreground text-sm leading-relaxed">
              <p className="max-w-md">
                Founded in 2024, the studio operates at the intersection of
                brutalist architecture and digital decay. We believe that true
                luxury lies in silence, in the absence of noise, and in the
                weight of material reality.
              </p>
              <p className="max-w-md">
                Every garment is an architectural proposition. A shelter. An
                armor. A statement of intent in a world dissolving into the
                ephemeral.
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
              The void is not emptiness. It is potential. In the silence between
              thoughts, true form emerges. We embrace the negative space,
              allowing it to dictate the silhouette rather than filling it with
              noise.
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
                Hand-finished seams. Raw hems. Fabrics that age and evolve. We
                reject the pristine sterility of mass production in favor of the
                beautiful imperfection of the human hand.
              </p>
              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                Each garment undergoes a rigorous process of deconstruction and
                reconstruction. We use boiling techniques for wools and
                oxidation for linens, creating textures that feel ancient yet
                futuristic. A MION BLACK piece is a living document of its
                creation.
              </p>
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
                inquiries@mionblack.com
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
