import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-semibold tracking-wider text-zinc-900 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
        >
          <span>{siteConfig.name}</span>
          {siteConfig.isPrototype && (
            <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              Demo
            </span>
          )}
        </a>

        <nav aria-label="Main Navigation" className="hidden md:flex md:items-center md:gap-8">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-full border border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}
