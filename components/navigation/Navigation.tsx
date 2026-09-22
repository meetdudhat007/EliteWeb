import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-xl transition-colors">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between">
          {/* ZAPSTACK Brand Mark */}
          <BrandMark />

          {/* Editorial Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-10 md:flex"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-150 hover:text-[#202020]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA & Mobile Menu Trigger Placeholder */}
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="tracking-[0.16em]"
            >
              Let&apos;s Talk
            </Button>

            {/* Mobile Menu Trigger (Prepared for Animated Fullscreen Menu) */}
            <button
              type="button"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-[2px] border border-zinc-300 bg-zinc-100 text-zinc-600 md:hidden hover:text-[#202020] hover:border-zinc-400 transition-colors"
              aria-label="Toggle Menu"
            >
              <span className="h-[1px] w-4 bg-current" />
              <span className="h-[1px] w-4 bg-current" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
