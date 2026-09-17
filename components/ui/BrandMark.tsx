import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

interface BrandMarkProps {
  className?: string;
  showBadge?: boolean;
}

export function BrandMark({ className, showBadge = true }: BrandMarkProps) {
  return (
    <a
      href="#hero"
      className={cn(
        "group inline-flex items-center gap-3 text-white transition-opacity hover:opacity-80",
        className
      )}
      aria-label={`${siteConfig.name} - Home`}
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-[1px] bg-white/90 transition-transform duration-300 group-hover:scale-110" />
        <span className="font-mono text-sm font-semibold tracking-[0.22em] text-white">
          {siteConfig.name}
        </span>
      </div>

      {showBadge && siteConfig.isPrototype && (
        <span className="rounded-[2px] border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
          Demo
        </span>
      )}
    </a>
  );
}
