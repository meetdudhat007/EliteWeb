import React from "react";
import { Container } from "@/components/ui/Container";

export function Statement() {
  return (
    <section className="relative border-b border-white/[0.07] bg-[#0c0e12]/80 py-32 sm:py-40 lg:py-48">
      {/* Background Micro Grid Detail */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Metadata Rail */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                [ 02 // PERSPECTIVE ]
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                System Philosophy
              </p>
              <div className="h-12 w-[1px] bg-white/10" />
            </div>
          </div>

          {/* Right Typographic Composition with Stylized Emphases */}
          <div className="lg:col-span-9">
            <p className="text-3xl font-light leading-[1.22] tracking-[-0.03em] text-zinc-400 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              We turn{" "}
              <span className="font-semibold text-white tracking-[-0.035em]">
                complex business requirements
              </span>{" "}
              into resilient, high-performance systems that{" "}
              <span className="font-semibold text-white tracking-[-0.035em]">
                people can actually use.
              </span>
            </p>

            <p className="mt-8 text-lg font-normal leading-relaxed text-zinc-400 sm:text-xl max-w-3xl">
              Software shouldn’t feel like an administrative burden. We strip away organizational complexity to engineer software with deliberate structure, intuitive ergonomics, and zero superfluous bloat.
            </p>

            {/* Asymmetric Core Tenets */}
            <div className="mt-20 grid grid-cols-1 gap-12 border-t border-white/[0.07] pt-12 sm:grid-cols-2">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  TENET // 01
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  Architectural Rigor
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Clean service boundaries, strict type contracts, and deliberate data models that scale alongside expanding organizational complexity.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  TENET // 02
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  Interface Precision
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Performant, zero-bloat web frontends engineered with fluid visual rhythm, responsive ergonomics, and strict accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
