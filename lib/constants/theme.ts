/**
 * ZAPSTACK Design System Tokens
 *
 * ARCHITECTURAL PURPOSE:
 * These tokens define the visual identity for ZAPSTACK.
 * The dark cinematic foundation is preserved from the prototype phase.
 * ZAPSTACK brand colors are added as the `brand` sub-object.
 * Update values here and in `app/globals.css` to propagate changes without touching component code.
 */

export const themeTokens = {
  colors: {
    // Charcoal / near-black immersive foundation
    bgBase: "#090a0d",
    bgSurface: "#101216",
    bgElevated: "#16181f",
    bgHighlight: "#1e2129",

    // Off-white and restrained gray typography
    textPrimary: "#f4f4f6",
    textSecondary: "#9496a1",
    textMuted: "#5b5e6b",

    // Controlled, restrained monochrome accent
    accent: "#ffffff",
    accentMuted: "#272a33",

    // Hairline borders
    borderSubtle: "rgba(255, 255, 255, 0.07)",
    borderStrong: "rgba(255, 255, 255, 0.14)",
  },

  layout: {
    maxWidth: "80rem", // 1280px
    containerPadding: {
      mobile: "1.25rem", // 20px
      tablet: "2rem",    // 32px
      desktop: "3rem",   // 48px
    },
    sectionSpacing: {
      sm: "4rem",        // 64px
      md: "7rem",        // 112px
      lg: "10rem",       // 160px
    },
  },

  radius: {
    none: "0px",
    sm: "2px",
    md: "4px",
    lg: "8px",
    full: "9999px",
  },

  /**
   * ZAPSTACK Approved Brand Palette
   * Source of truth for all brand color usage.
   * CSS equivalents are exposed via --brand-* custom properties in globals.css.
   */
  brand: {
    // Dark foundation surfaces
    deepBlack: "#202020",
    black: "#000000",

    // ZAPSTACK gold — use selectively for identity, highlights, active states
    gold: "#E0A030",        // Luxury Gold — primary brand accent
    goldBright: "#E8A838", // Bright Gold — hover, interactive emphasis

    // Light values
    white: "#FFFFFF",
    softWhite: "#F5F5F5",

    // Gold gradient — for controlled brand visual treatments only
    goldGradientLight: "#F2B544",
    goldGradientDark: "#D89420",
  },
} as const;

export type ThemeTokens = typeof themeTokens;
