import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/3d/HeroVisual";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center border-b border-white/[0.07] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <Container size="wide">
        {/* Top Technical Header Strip */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400">
              [ 01 // STUDIO OVERVIEW ]
            </span>
            <span className="h-3 w-[1px] bg-white/15" />
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{siteConfig.positioning}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span>DISCIPLINE: BESPOKE_SYSTEMS</span>
            <span>·</span>
            <span>CAPACITY: 4–5 ENG_CORE</span>
          </div>
        </div>

        {/* Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Monumental Headline & Narrative */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-[-0.038em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem] lg:leading-[0.98]">
              Software Built <br className="hidden sm:inline" />
              Around Your <br className="hidden sm:inline" />
              <span className="text-zinc-200">Business.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href="#work"
                variant="primary"
                size="lg"
                className="tracking-[0.18em]"
              >
                Selected Work
              </Button>
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="tracking-[0.18em]"
              >
                Capabilities
              </Button>
            </div>

            {/* Technical Sub-annotation */}
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <span className="h-1 w-1 rounded-full bg-zinc-400" />
              <span>Tailored engineering architecture · Zero template compromises</span>
            </div>
          </div>

          {/* Right Column: Isolated Visual Centerpiece */}
          <div className="flex items-center justify-center lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        {/* Bottom Technical Metadata Matrix */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/[0.07] pt-8 md:grid-cols-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              01 // Discipline
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-200">
              Custom Engineering
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              02 // Focus
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-200">
              Business Systems & Portals
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              03 // Execution
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-200">
              Full Lifecycle Ownership
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              04 // Structure
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-200">
              Senior-Led Core Team
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
