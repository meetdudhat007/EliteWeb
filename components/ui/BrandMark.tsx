import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

interface BrandMarkProps {
  className?: string;
}

/**
 * ZAPSTACK BrandMark
 *
 * ARCHITECTURAL PURPOSE:
 * Central brand identity component. Renders ZAPSTACK with the gold mark accent.
 * Logo is intentionally replaceable — final mark is not finalized.
 * Demo badge has been removed from navigation display per Phase 7.5 requirements.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <a
      href="#hero"
      className={cn(
        "group inline-flex items-center gap-2 transition-opacity hover:opacity-80",
        className
      )}
      aria-label={`${siteConfig.name} - Home`}
    >
      {/* Brand mark square — ZAPSTACK Luxury Gold accent */}
      <span className="h-2 w-2 rounded-[1px] bg-[#E0A030] transition-transform duration-300 group-hover:scale-110" />
      <span className="font-mono text-sm font-semibold tracking-[0.22em] text-[#202020]">
        {siteConfig.name}
      </span>
    </a>
  );
}
