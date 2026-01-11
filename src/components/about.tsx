"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="relative z-20 bg-background px-6 py-24 md:px-12 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            01 — Manifesto
          </span>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl leading-snug text-foreground md:text-5xl lg:text-6xl"
          >
            MIONBLACK is fashion through an artist’s lens. Each piece is
            designed to carry emotion, structure, and intent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-12 flex gap-8"
          >
            <p className="max-w-xs text-sm text-muted-foreground">
              Every drop is rooted in a story—translated into form, fabric, and
              silhouette. Built on discipline and restraint, the brand removes
              excess to let meaning remain.
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              This is clothing not just to be worn, but to be felt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
