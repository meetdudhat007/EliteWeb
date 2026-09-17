import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";

export function Team() {
  return (
    <section
      id="team"
      className="relative border-b border-white/[0.07] py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
              [ 06 // CORE ENGINEERING TEAM ]
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Small, focused, senior-led.
            </h2>
          </div>
          <div className="rounded-[2px] border border-white/10 bg-white/[0.02] px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            Internal Demo Roster · 4–5 Members
          </div>
        </div>

        {/* Asymmetric, Staggered Editorial Roster */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {siteConfig.team.map((member, index) => {
            const isStaggered = index % 2 === 1;

            return (
              <div
                key={member.id}
                className={`group flex flex-col justify-between rounded-[4px] border border-white/[0.08] bg-[#0d0f14]/60 p-6 transition-all hover:border-white/20 ${
                  isStaggered ? "lg:translate-y-10" : ""
                }`}
              >
                <div>
                  {/* Geometric Abstract Portrait Placeholder */}
                  <div
                    className={`relative mb-6 w-full overflow-hidden rounded-[2px] border border-white/10 bg-[#12151d] select-none ${
                      isStaggered ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  >
                    {/* Architectural Mesh Texture */}
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        <span>CORE_0{index + 1}</span>
                        <span>DEV_ID</span>
                      </div>

                      <div className="flex flex-col items-center justify-center my-auto opacity-30 group-hover:opacity-60 transition-opacity">
                        <svg viewBox="0 0 80 80" className="w-16 h-16 text-white" fill="none">
                          <polygon
                            points="40,10 70,30 70,60 40,75 10,60 10,30"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                          <circle cx="40" cy="42" r="12" stroke="currentColor" strokeWidth="1" />
                        </svg>
                        <span className="mt-2 font-mono text-[8px] uppercase tracking-widest text-zinc-500">
                          Placeholder Portrait
                        </span>
                      </div>

                      <div className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                        LOC: GLOBAL / IST
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-300">
                    {member.role}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/[0.07] pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                    Discipline
                  </span>
                  <p className="mt-1 text-xs text-zinc-400">
                    {member.discipline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
