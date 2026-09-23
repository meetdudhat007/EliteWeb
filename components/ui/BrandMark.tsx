import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

interface BrandMarkProps {
  className?: string;
  size?: "default" | "lg";
}

/**
 * ZAPSTACK BrandMark
 *
 * ARCHITECTURAL PURPOSE:
 * Central brand identity component. Renders ZAPSTACK with the gold mark accent.
 * Logo is intentionally replaceable — final mark is not finalized.
 * Size prop supports "lg" for prominent navigation headers.
 */
export function BrandMark({ className, size = "default" }: BrandMarkProps) {
  const isLg = size === "lg";

  return (
    <a
      href="#hero"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-85 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A030] focus-visible:ring-offset-2 rounded-xs",
        isLg ? "gap-2.5" : "gap-2",
        className
      )}
      aria-label={`${siteConfig.name} - Home`}
    >
      {/* Brand mark square — ZAPSTACK Luxury Gold accent */}
      <span
        className={cn(
          "rounded-[1.5px] bg-[#E0A030] transition-transform duration-300 group-hover:scale-110 shrink-0",
          isLg ? "h-2.5 w-2.5" : "h-2 w-2"
        )}
      />
      <span
        className={cn(
          "font-mono font-semibold text-[#202020] whitespace-nowrap",
          isLg
            ? "text-[15px] sm:text-base tracking-[0.24em]"
            : "text-sm tracking-[0.22em]"
        )}
      >
        {siteConfig.name}
      </span>
    </a>
  );
}
