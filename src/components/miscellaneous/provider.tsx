"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
