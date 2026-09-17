import React from "react";
import { cn } from "@/lib/utils/cn";

interface ProjectVisualProps {
  projectId: string;
  projectTitle: string;
  category: string;
  className?: string;
}

/**
 * Deliberate Abstract Digital Interface Artifacts
 * 
 * ARCHITECTURAL NOTE:
 * Uses pure HTML/CSS/SVG to represent specialized custom software architectures
 * without using fake screenshots, stock photography, or fabricated client data.
 */
export function ProjectVisual({
  projectId,
  projectTitle,
  category,
  className,
}: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-[4px] border border-white/10 bg-[#0f1116] p-4 select-none sm:p-6",
        className
      )}
      aria-hidden="true"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Application Shell Bar */}
      <div className="relative mb-4 flex items-center justify-between border-b border-white/[0.07] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 font-mono text-[9px] uppercase tracking-widest text-zinc-500">
            SYS_VIEW {"//"} {category.toUpperCase()} {"//"} {projectId.toUpperCase()}
          </span>
        </div>
        <span className="rounded-[2px] border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-zinc-400">
          PROTOTYPE ARTIFACT
        </span>
      </div>

      {/* Conditional Interface Artifact Rendering */}
      {projectId === "project-1" && (
        /* Enterprise Business Platform: Multi-pane Operational Wireframe */
        <div className="relative flex h-[calc(100%-40px)] flex-col justify-between gap-3">
          <div className="grid grid-cols-12 gap-3 h-full">
            {/* Mini Rail */}
            <div className="col-span-3 flex flex-col justify-between rounded-[2px] border border-white/[0.07] bg-black/20 p-2.5">
              <div className="space-y-2">
                <div className="h-1.5 w-12 rounded-[1px] bg-white/30" />
                <div className="h-1 w-16 rounded-[1px] bg-white/10" />
                <div className="h-1 w-10 rounded-[1px] bg-white/10" />
                <div className="h-1 w-14 rounded-[1px] bg-white/10" />
              </div>
              <div className="font-mono text-[8px] text-zinc-600 uppercase">
                NAV_MOD // 04
              </div>
            </div>

            {/* Main Operational Panel */}
            <div className="col-span-9 flex flex-col justify-between rounded-[2px] border border-white/[0.07] bg-black/30 p-3">
              {/* Metric Pipeline Bars */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-[2px] border border-white/[0.05] p-2 bg-white/[0.01]">
                    <div className="h-1 w-8 rounded-[1px] bg-white/20 mb-1.5" />
                    <div className="h-3 w-12 rounded-[1px] bg-white/40" />
                  </div>
                ))}
              </div>

              {/* Data Table Schema Wireframe */}
              <div className="mt-2 space-y-1.5">
                {[1, 2, 3, 4].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-[1px] border border-white/[0.04] px-2 py-1.5 text-[9px] font-mono text-zinc-500 bg-white/[0.01]"
                  >
                    <span className="text-zinc-400">REC_00{row}</span>
                    <span>STATUS: VALIDATED</span>
                    <span className="text-zinc-600">OFFSET: +0.0{row}s</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {projectId === "project-2" && (
        /* Digital Operations Platform: Dispatch & Field Telemetry Wireframe */
        <div className="relative flex h-[calc(100%-40px)] flex-col justify-between gap-3">
          <div className="grid grid-cols-12 gap-3 h-full">
            {/* Map/Coordinate Radar Wireframe */}
            <div className="col-span-8 relative flex items-center justify-center rounded-[2px] border border-white/[0.07] bg-black/30 p-3 overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full opacity-60">
                <circle cx="100" cy="60" r="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <circle cx="100" cy="60" r="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                {/* Active Unit Nodes */}
                <circle cx="80" cy="45" r="3" fill="#ffffff" />
                <circle cx="130" cy="75" r="2.5" fill="rgba(255,255,255,0.7)" />
                <circle cx="65" cy="80" r="2" fill="rgba(255,255,255,0.4)" />
                <line x1="80" y1="45" x2="130" y2="75" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
              <div className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-widest text-zinc-500">
                TELEMETRY // SYNC_ACTIVE
              </div>
            </div>

            {/* Live Queue Rail */}
            <div className="col-span-4 flex flex-col justify-between rounded-[2px] border border-white/[0.07] bg-black/20 p-2.5 space-y-1.5">
              <div className="space-y-1.5">
                <div className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                  DISPATCH_QUEUE
                </div>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="rounded-[2px] border border-white/[0.05] p-1.5 bg-white/[0.02]">
                    <div className="h-1.5 w-10 rounded-[1px] bg-white/30 mb-1" />
                    <div className="font-mono text-[7px] text-zinc-500">UNIT_0{item} · DISPATCHED</div>
                  </div>
                ))}
              </div>
              <div className="font-mono text-[8px] text-emerald-400/80">
                ● 100% ROUTE_SYNC
              </div>
            </div>
          </div>
        </div>
      )}

      {projectId === "project-3" && (
        /* Intelligent Document System: Document Parsing & Validation Pipeline */
        <div className="relative flex h-[calc(100%-40px)] flex-col justify-between gap-3">
          <div className="grid grid-cols-3 gap-3 h-full">
            {/* Step 1: Ingest Wireframe */}
            <div className="flex flex-col justify-between rounded-[2px] border border-white/[0.07] bg-black/30 p-2.5">
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                01 // PARSER
              </span>
              <div className="space-y-1 my-auto">
                <div className="h-1 w-full rounded-[1px] bg-white/20" />
                <div className="h-1 w-4/5 rounded-[1px] bg-white/20" />
                <div className="h-1 w-3/5 rounded-[1px] bg-white/10" />
                <div className="h-1 w-full rounded-[1px] bg-white/20" />
              </div>
              <span className="font-mono text-[7px] text-zinc-500">OCR_INGEST_OK</span>
            </div>

            {/* Step 2: Extraction Pipeline */}
            <div className="flex flex-col justify-between rounded-[2px] border border-white/[0.07] bg-black/30 p-2.5">
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                02 // EXTRACT
              </span>
              <div className="space-y-1.5 my-auto font-mono text-[7px] text-zinc-400">
                <div className="border border-white/10 p-1 bg-white/[0.02]">KEY_MAP_1: VALID</div>
                <div className="border border-white/10 p-1 bg-white/[0.02]">KEY_MAP_2: VALID</div>
              </div>
              <span className="font-mono text-[7px] text-zinc-500">TOKENS: 4,120</span>
            </div>

            {/* Step 3: Schema Output */}
            <div className="flex flex-col justify-between rounded-[2px] border border-white/[0.07] bg-black/30 p-2.5">
              <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                03 // EMIT_JSON
              </span>
              <div className="font-mono text-[7px] text-zinc-500 space-y-0.5 my-auto">
                <div>&#123;</div>
                <div className="pl-2 text-zinc-400">&quot;status&quot;: &quot;OK&quot;,</div>
                <div className="pl-2 text-zinc-400">&quot;verified&quot;: true</div>
                <div>&#125;</div>
              </div>
              <span className="font-mono text-[7px] text-emerald-400/80">● EMITTED</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Technical Bar */}
      <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between border-t border-white/[0.06] pt-2 font-mono text-[8px] uppercase tracking-widest text-zinc-600">
        <span>ARTIFACT // {projectTitle}</span>
        <span>SPEC: ARCH_SYSTEM_PREVIEW</span>
      </div>
    </div>
  );
}
