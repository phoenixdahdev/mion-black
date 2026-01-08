"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      } as any,
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } as any,
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 font-mono text-xs uppercase tracking-widest text-white mix-blend-difference md:px-12"
      >
        <Link href="/" className="text-sm font-bold tracking-tighter z-50">
          MION
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          <Link
            href="/collections"
            className="hover:opacity-50 transition-opacity"
          >
            Collections
          </Link>
          <Link href="#" className="hover:opacity-50 transition-opacity">
            Lookbook
          </Link>
          <Link href="#" className="hover:opacity-50 transition-opacity">
            About
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="#" className="hover:opacity-50 transition-opacity">
            Cart (0)
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black text-white md:hidden"
          >
            <div className="flex flex-col gap-8 text-center font-serif text-3xl">
              <motion.div variants={linkVariants}>
                <Link href="/collections" onClick={toggleMenu}>
                  Collections
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="#" onClick={toggleMenu}>
                  Lookbook
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="#" onClick={toggleMenu}>
                  About
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariants}
                className="mt-8 font-mono text-xs tracking-widest uppercase"
              >
                <Link href="#" onClick={toggleMenu}>
                  Cart (0)
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
