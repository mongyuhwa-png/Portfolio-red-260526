import React from "react";
import { PHILOSOPHY_LINES } from "../data";

export default function MarqueeSection() {
  const marqueeText = "TURNING FRAMES INTO EMOTIONS • SELECTION • COMMERCIALS & MUSIC VIDEOS • FILM PRINT EMULATION • DAVINCI RESOLVE Studio • ";
  const repeatedText = Array(10).fill(marqueeText).join(" ");

  return (
    <section
      id="philosophy"
      className="relative py-12 md:py-20 bg-[#0A0A0A] overflow-hidden border-y border-[#1a1a1a] select-none"
    >
      {/* Scroll Marquee Left row */}
      <div className="relative flex items-center overflow-x-hidden w-full py-2">
        <div className="animate-marquee whitespace-nowrap flex gap-4 uppercase font-display font-extrabold text-5xl md:text-8xl tracking-tight text-outline-coral">
          <span>{repeatedText}</span>
        </div>
      </div>

      {/* Subtle background glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none radial-gradient blur-3xl opacity-30 bg-gradient-to-r from-transparent via-[#FF6B6B]/5 to-transparent z-0" />
    </section>
  );
}
