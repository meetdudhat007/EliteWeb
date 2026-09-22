"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export function Contact() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAPAnimation(
    (_ctx, prefersReduced) => {
      if (prefersReduced) return;

      /*
       * Final CTA: confident, quiet page conclusion.
       * The large typographic lockup rises into place — editorial entrance
       * that feels like the page settling, not another section starting.
       *
       * Sequence: label → main heading (muted + accent) → description → CTA → meta cols → footer bar.
       */
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Section label strip — slides slightly from above
      tl.from("[data-contact='label']", {
        opacity: 0,
        y: -12,
        duration: 0.6,
      }, 0);

      // Large heading — the primary editorial moment
      tl.from("[data-contact='heading']", {
        opacity: 0,
        y: 44,
        duration: 1.0,
        ease: "power3.out",
      }, 0.1);

      // Supporting description
      tl.from("[data-contact='description']", {
        opacity: 0,
        y: 22,
        duration: 0.75,
      }, 0.4);

      // CTA button — scale from slightly below normal
      tl.from("[data-contact='cta']", {
        opacity: 0,
        scale: 0.97,
        y: 14,
        duration: 0.65,
      }, 0.56);

      // Metadata columns — stagger last, quiet arrival
      tl.from("[data-contact='meta-col']", {
        opacity: 0,
        y: 14,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      }, 0.7);

      // Demo disclaimer
      tl.from("[data-contact='disclaimer']", {
        opacity: 0,
        duration: 0.55,
        ease: "power1.out",
      }, 0.9);

      // Footer bar (brand mark + links + copyright)
      tl.from("[data-contact='footer-bar']", {
        opacity: 0,
        y: 10,
        duration: 0.55,
        ease: "power2.out",
      }, 1.0);
    },
    { scopeRef: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-white pt-32 sm:pt-40 lg:pt-48 overflow-hidden border-t border-zinc-200"
    >
      {/* Subtle Ambient Glow — ZAPSTACK gold-tinted, visible on white */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(224,160,48,0.06)_0%,transparent_70%)] pointer-events-none" />

      <Container size="wide">
        {/* The Big Conclusion: Massive Typographic Lockup */}
        <div className="border-b border-zinc-200 pb-24 lg:pb-32">
          <div
            data-contact="label"
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              [ 07 // INITIATE CONVERSATION ]
            </span>
            <span className="h-3 w-[1px] bg-zinc-300" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              OPEN INQUIRIES
            </span>
          </div>

          <div className="mt-10 max-w-5xl">
            <h2
              data-contact="heading"
              className="text-4xl font-semibold tracking-[-0.04em] text-zinc-400 sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.96]"
            >
              {siteConfig.contact.ctaHeading} <br />
              <span className="text-[#202020] font-bold">
                {siteConfig.contact.ctaAccent}
              </span>
            </h2>

            <p
              data-contact="description"
              className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 sm:text-xl font-normal"
            >
              {siteConfig.contact.ctaDescription}
            </p>

            <div
              data-contact="cta"
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Button
                href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry`}
                variant="primary"
                size="lg"
                className="tracking-[0.18em]"
              >
                Send Inquiry ({siteConfig.contact.email})
              </Button>
            </div>
          </div>
        </div>

        {/* Communication Channels & Operational Details */}
        <div className="grid grid-cols-1 gap-12 py-16 border-b border-zinc-200 md:grid-cols-3">
          <div data-contact="meta-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Direct Contact
            </span>
            <p className="mt-2 text-sm font-medium text-[#202020]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline underline-offset-4 hover:text-[#E0A030] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>

          <div data-contact="meta-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Studio Positioning
            </span>
            <p className="mt-2 text-sm font-medium text-[#202020]">
              {siteConfig.contact.location}
            </p>
          </div>

          <div data-contact="meta-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Operating Hours
            </span>
            <p className="mt-2 text-sm font-medium text-[#202020]">
              {siteConfig.contact.workingHours}
            </p>
          </div>
        </div>

        {/* Demo Disclaimer Notice — kept per Phase 7.5 requirements */}
        <div data-contact="disclaimer" className="my-10 rounded-[2px] border border-amber-400/30 bg-amber-50 p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-amber-700/80">
            {siteConfig.contact.isDemoNotice}
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          data-contact="footer-bar"
          className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row"
        >
          <BrandMark />

          <div className="flex items-center gap-6">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 transition-colors hover:text-[#202020]"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.name} · Prototype Build
          </p>
        </div>
      </Container>
    </footer>
  );
}
