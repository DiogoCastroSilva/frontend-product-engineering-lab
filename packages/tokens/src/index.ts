/**
 * Primitive design tokens shared by the Fieldnote design system.
 *
 * These values mirror the CSS custom properties in `tokens.css` and are
 * exported as TypeScript for programmatic use (charts, inline styles, etc.).
 */

export const colorTokens = {
  // Brand / accent
  primary: "#1e5c3a",
  primaryHover: "#154530",
  primaryActive: "#0f3322",
  primarySubtle: "#e4f0e8",

  // Neutrals — canvas & surface
  canvas: "#fafaf8",
  surface: "#ffffff",
  surfaceSubtle: "#f2f4f0",

  // Neutrals — ink (text)
  ink: "#1f2937",
  inkSecondary: "#475467",
  inkSubtle: "#5b6670",

  // Borders
  border: "#dde1db",
  borderStrong: "#79827c",

  // Focus
  focusRing: "#1d4ed8",

  // Status
  success: "#14532d",
  successSubtle: "#e1f3e7",
  warning: "#6b3a00",
  warningSubtle: "#fcebc8",
  danger: "#8f1d1d",
  dangerSubtle: "#fde6e6",
  info: "#1a4a87",
  infoSubtle: "#e0ecfa",
  neutral: "#3a4651",
  neutralSubtle: "#ecefea",
} as const;

export const radiusTokens = {
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
} as const;

export const spacingTokens = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
} as const;

export const shadowTokens = {
  sm: "0 1px 2px #1f29371a",
} as const;

export type ColorToken = keyof typeof colorTokens;
export type RadiusToken = keyof typeof radiusTokens;
export type SpacingToken = keyof typeof spacingTokens;
