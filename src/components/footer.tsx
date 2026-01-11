"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background px-6 py-24 text-foreground md:px-12">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="flex flex-col gap-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Newsletter
          </h3>
          <div className="flex gap-4 border-b border-foreground/20 pb-4">
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="w-full bg-transparent font-sans text-lg uppercase outline-none placeholder:text-foreground/40"
            />
            <button className="font-mono text-xs uppercase tracking-widest hover:text-muted-foreground">
              Join
            </button>
          </div>
        </div>

        <div className="flex gap-12 text-sm md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase text-muted-foreground">
              Socials
            </h4>
            <a
              href="https://instagram.com/MIONBLACKLTD"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through"
            >
              Instagram
            </a>
            <a
              href="https://x.com/MIONBLACKLTD"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through"
            >
              X
            </a>
            <a
              href="https://tiktok.com/@MIONBLACKLTD"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:line-through"
            >
              Tik Tok
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase text-muted-foreground">
              Legal
            </h4>
            <a href="#" className="hover:line-through">
              Privacy
            </a>
            <a href="#" className="hover:line-through">
              Terms
            </a>
            <a href="#" className="hover:line-through">
              Returns
            </a>
            <Link href="/archive" className="hover:line-through">
              Archive
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter text-foreground/10 md:text-[15vw]">
          MION BLACK
        </h1>
        <div className="flex justify-between font-mono text-xs uppercase text-muted-foreground">
          <span>© 2026</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
