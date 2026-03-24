import type { CSSProperties } from "react"

/**
 * "Double font heading" style — Playfair Display Italic + Inter Regular.
 *
 * Usage:
 *   <h1 style={headingWrap}>
 *     <span style={headingAccent}>Earn crypto</span>
 *     <span style={headingBase}> on every bet</span>
 *   </h1>
 *
 * Rules:
 *  - headingAccent  → Playfair Display Italic, weight 400, letter-spacing 0
 *  - headingBase    → Inter Regular, weight 400, letter-spacing normal
 *  - headingWrap    → apply to the heading element itself to reset inherited spacing
 */

export const headingAccent: CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontStyle: "italic",
  fontWeight: 400,
  letterSpacing: 0,
}

export const headingBase: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontWeight: 400,
  letterSpacing: "-0.02em",
}

export const headingWrap: CSSProperties = {
  letterSpacing: "normal",
  fontWeight: 400,
}
