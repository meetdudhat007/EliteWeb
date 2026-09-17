import React from "react";

export function Statement() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Engineering Philosophy
          </p>
          <blockquote className="mt-6 text-2xl font-medium leading-snug text-zinc-900 sm:text-3xl lg:text-4xl dark:text-zinc-100">
            We focus on software quality over volume. From system architecture to user interaction, we craft solutions tailored to genuine operational needs rather than off-the-shelf compromises.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
