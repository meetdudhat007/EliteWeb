"use client";

/**
 * ZAPSTACK Navigation
 *
 * ARCHITECTURE:
 * 1. Three Independent Regions:
 *    - LEFT:   BrandMark (size="lg", replaceable)
 *    - CENTER: CenterNav mathematically centered in the viewport
 *              (absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2)
 *    - RIGHT:  LET'S TALK independent action button
 *
 * 2. React Bits-Style Hover Interaction:
 *    - Default: White pill, dark text, subtle border
 *    - Hover:   Expanding dark circle (#202020) originating at bottom-center
 *    - Text:    Layered transition with idle dark text rising out & white text rising in
 *    - Leave:   Smooth contraction back to bottom-center
 *
 * 3. Accessibility & System:
 *    - Reduced-motion safe (instant visual states, tweens bypassed)
 *    - Preserves h-20 (80px) header height for Phase 7 Work pinning ScrollTrigger
 *    - Active section detection via IntersectionObserver
 */

import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "@/lib/animations/gsap";
import { getPrefersReducedMotion } from "@/lib/animations/reducedMotion";
import { siteConfig } from "@/lib/constants/site";
import { BrandMark } from "@/components/ui/BrandMark";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItemData {
  label: string;
  href: string;
}

// ─── NavPill (React Bits Expanding Circle Hover) ────────────────────────────────
interface NavPillProps {
  item: NavItemData;
  isActive: boolean;
  onSelect?: () => void;
}

function NavPill({ item, isActive, onSelect }: NavPillProps) {
  const pillRef = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const idleLabelRef = useRef<HTMLSpanElement>(null);
  const hoverLabelRef = useRef<HTMLSpanElement>(null);

  /**
   * Measure each specific pill's actual dimensions and position the expanding circle
   * so its center originates precisely at the bottom-center of the pill (W / 2, H).
   *
   * Mathematical proof of complete coverage:
   * Circle center: (x = W / 2, y = H)
   * Farthest corners from circle center are top-left (0, 0) and top-right (W, 0):
   * Distance R = sqrt((W / 2)^2 + H^2)
   * With safety multiplier 1.08:
   * R_circle = sqrt((W / 2)^2 + H^2) * 1.08
   * Diameter D = 2 * R_circle
   *
   * Because R_circle > distance to all four corners:
   * (0, 0): sqrt((W/2)^2 + H^2) < R_circle  --> Covered
   * (W, 0): sqrt((W/2)^2 + H^2) < R_circle  --> Covered
   * (0, H): W / 2 < R_circle                --> Covered
   * (W, H): W / 2 < R_circle                --> Covered
   * Entire pill interior is 100% inside the circle with zero exposed gaps.
   */
  const updateGeometry = useCallback(() => {
    if (!pillRef.current || !circleRef.current) return;
    const rect = pillRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width === 0 || height === 0) return;

    const radius = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height, 2)) * 1.10;
    const diameter = Math.ceil(radius * 2);

    gsap.set(circleRef.current, {
      width: diameter,
      height: diameter,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
    });
  }, []);

  useEffect(() => {
    const circle = circleRef.current;
    const idleLabel = idleLabelRef.current;
    const hoverLabel = hoverLabelRef.current;

    // Immediately initialize GSAP transform values
    if (circle) {
      gsap.set(circle, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      });
    }
    if (hoverLabel) {
      gsap.set(hoverLabel, { yPercent: 120, opacity: 0 });
    }

    const frame = requestAnimationFrame(() => {
      updateGeometry();
    });

    window.addEventListener("resize", updateGeometry, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateGeometry);
      if (circle) gsap.killTweensOf(circle);
      if (idleLabel) gsap.killTweensOf(idleLabel);
      if (hoverLabel) gsap.killTweensOf(hoverLabel);
    };
  }, [updateGeometry]);

  const handlePointerEnter = useCallback(() => {
    if (getPrefersReducedMotion()) return;

    // Recalculate geometry on hover for this exact pill to guarantee pixel-perfect coverage
    updateGeometry();

    if (circleRef.current && idleLabelRef.current && hoverLabelRef.current) {
      gsap.killTweensOf([circleRef.current, idleLabelRef.current, hoverLabelRef.current]);

      // 1. Dark circle expands smoothly from bottom-center to completely envelope pill
      gsap.to(circleRef.current, {
        scale: 1,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });

      // 2. Layer 1 (dark text) exits upward
      gsap.to(idleLabelRef.current, {
        yPercent: -120,
        opacity: 0,
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto",
      });

      // 3. Layer 2 (white text) enters from below
      gsap.to(hoverLabelRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.26,
        delay: 0.03,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [updateGeometry]);

  const handlePointerLeave = useCallback(() => {
    if (getPrefersReducedMotion()) return;

    if (circleRef.current && idleLabelRef.current && hoverLabelRef.current) {
      gsap.killTweensOf([circleRef.current, idleLabelRef.current, hoverLabelRef.current]);

      // 1. Dark circle contracts back to bottom-center
      gsap.to(circleRef.current, {
        scale: 0,
        duration: 0.2,
        ease: "power2.inOut",
        overwrite: "auto",
      });

      // 2. Layer 1 (dark text) returns to center
      gsap.to(idleLabelRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });

      // 3. Layer 2 (white text) retracts downward
      gsap.to(hoverLabelRef.current, {
        yPercent: 120,
        opacity: 0,
        duration: 0.18,
        ease: "power2.in",
        overwrite: "auto",
      });
    }
  }, []);

  return (
    <a
      ref={pillRef}
      href={item.href}
      onClick={onSelect}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2 transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A030] focus-visible:ring-offset-2 ${
        isActive
          ? "bg-white border border-[#202020]/25 shadow-sm"
          : "bg-white/95 border border-zinc-200/80 hover:border-zinc-300 shadow-xs"
      }`}
      aria-label={item.label}
    >
      {/* Expanding dark circle — center anchored at (left: 50%, top: 100%), clips strictly inside overflow:hidden */}
      <span
        ref={circleRef}
        className="pointer-events-none absolute left-1/2 top-full rounded-full bg-[#202020] z-0"
        aria-hidden="true"
      />

      {/* Layer 1: Normal dark text (idle state) */}
      <span
        ref={idleLabelRef}
        className="relative z-10 flex items-center gap-1.5 font-mono text-[11px] lg:text-xs font-medium uppercase tracking-[0.16em] text-[#202020] whitespace-nowrap leading-none"
      >
        {isActive && (
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#E0A030] shrink-0"
            aria-hidden="true"
          />
        )}
        <span>{item.label}</span>
      </span>

      {/* Layer 2: White text (revealed as dark circle expands) */}
      <span
        ref={hoverLabelRef}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center gap-1.5 font-mono text-[11px] lg:text-xs font-medium uppercase tracking-[0.16em] text-white whitespace-nowrap"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        {isActive && (
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#E0A030] shrink-0"
            aria-hidden="true"
          />
        )}
        <span>{item.label}</span>
      </span>
    </a>
  );
}

// ─── CenterNav (Mathematically Centered in Viewport) ───────────────────────────
interface CenterNavProps {
  items: NavItemData[];
  activeId: string;
}

function CenterNav({ items, activeId }: CenterNavProps) {
  return (
    <nav
      aria-label="Primary navigation"
      className="flex items-center gap-1.5 rounded-full bg-zinc-100/90 p-1.5 border border-zinc-200/80 shadow-xs backdrop-blur-xs"
    >
      {items.map((item) => (
        <NavPill
          key={item.href}
          item={item}
          isActive={activeId === item.href.replace("#", "")}
        />
      ))}
    </nav>
  );
}

// ─── CTA Action Button (Top Right) ─────────────────────────────────────────────
function CtaButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-2 rounded-full bg-[#202020] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-black hover:border-[#E0A030] border border-[#202020] shadow-sm select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A030] focus-visible:ring-offset-2"
      aria-label="Let's Talk — Contact ZAPSTACK"
    >
      <span
        className="h-1.5 w-1.5 rounded-[1px] bg-[#E0A030] transition-transform duration-300 group-hover:scale-125 shrink-0"
        aria-hidden="true"
      />
      <span>Let&apos;s Talk</span>
    </a>
  );
}

// ─── Mobile Navigation & Popover Drawer ────────────────────────────────────────
function MobileNavDrawer({
  items,
  activeId,
}: {
  items: NavItemData[];
  activeId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const menu = menuRef.current;
    return () => {
      if (line1) gsap.killTweensOf(line1);
      if (line2) gsap.killTweensOf(line2);
      if (menu) gsap.killTweensOf(menu);
    };
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current && !getPrefersReducedMotion()) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const openMenu = useCallback(() => {
    const reduced = getPrefersReducedMotion();
    if (!reduced) {
      gsap.to(line1Ref.current, { y: 3.5, rotate: 45, duration: 0.2, ease: "power2.inOut" });
      gsap.to(line2Ref.current, { y: -3.5, rotate: -45, duration: 0.2, ease: "power2.inOut" });
    }
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    const reduced = getPrefersReducedMotion();
    if (!reduced) {
      gsap.to(line1Ref.current, { y: 0, rotate: 0, duration: 0.2, ease: "power2.inOut" });
      gsap.to(line2Ref.current, { y: 0, rotate: 0, duration: 0.2, ease: "power2.inOut" });
    }
    if (!reduced && menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(false);
    }
  }, []);

  const handleToggle = useCallback(() => {
    if (isOpen) closeMenu();
    else openMenu();
  }, [isOpen, openMenu, closeMenu]);

  const handleLinkClick = useCallback(() => {
    if (isOpen) closeMenu();
  }, [isOpen, closeMenu]);

  return (
    <div className="flex items-center gap-3">
      {/* Mobile CTA compact */}
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#202020] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A030]"
      >
        <span className="h-1 w-1 rounded-[1px] bg-[#E0A030]" />
        <span>Talk</span>
      </a>

      {/* Hamburger / Close circular trigger */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="zs-mobile-menu"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#202020] text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A030]"
      >
        <span
          className="relative flex h-4 w-4 flex-col items-center justify-center gap-[5px]"
          aria-hidden="true"
        >
          <span ref={line1Ref} className="block h-[1.5px] w-full bg-white" />
          <span ref={line2Ref} className="block h-[1.5px] w-full bg-white" />
        </span>
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          id="zs-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="absolute left-4 right-4 top-[calc(100%+8px)] z-50 rounded-2xl bg-[#202020] p-6 shadow-2xl border border-white/10"
        >
          <nav aria-label="Mobile primary navigation">
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive = activeId === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                        isActive
                          ? "bg-white/10 text-[#E0A030] font-semibold"
                          : "text-white hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E0A030]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 border-t border-white/10 pt-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E0A030] py-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#202020] transition-colors hover:bg-[#E8A838]"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

// ─── Navigation Root ──────────────────────────────────────────────────────────
export function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const navItems: NavItemData[] = siteConfig.navigation.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  // Track active section via IntersectionObserver for discrete active indicator
  useEffect(() => {
    const sectionIds = ["hero", "services", "work", "process", "team", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/50">
      <div className="relative mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* ── LEFT: Brand (ZAPSTACK wordmark + Gold Mark, prominent & replaceable) ── */}
        <div className="flex shrink-0 items-center">
          <BrandMark size="lg" />
        </div>

        {/* ── CENTER: Mathematically centered in viewport ── */}
        <div className="hidden min-[990px]:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          <CenterNav items={navItems} activeId={activeSection} />
        </div>

        {/* ── RIGHT: Independent CTA Button ── */}
        <div className="hidden min-[990px]:flex shrink-0 items-center">
          <CtaButton />
        </div>

        {/* ── MOBILE / TABLET TRIGGER (< 990px) ── */}
        <div className="flex min-[990px]:hidden items-center">
          <MobileNavDrawer items={navItems} activeId={activeSection} />
        </div>
      </div>
    </header>
  );
}
