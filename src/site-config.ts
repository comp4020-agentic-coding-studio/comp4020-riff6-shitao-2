import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import slopLogoSketch from "./assets/slop-logo-sketch.png";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see.
export const sessionLabels = {
  singular: "Studio",
  plural: "Studios",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  // Swapped the brand's vector lockup for a hand-drawn one. No separate
  // dark-mode or compact variant to draw from, so drop those overrides:
  // Nav then renders this single image unconditionally, at every viewport
  // width and in both themes. Keep the crest as the favicon — that's a
  // browser-tab icon, not the nav mark.
  logo: slopLogoSketch,
  logoDark: undefined,
  logoCompact: undefined,
  name: "Slop University",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  // Image-free by design: the starter's hero banner and per-person portraits
  // are exactly the kind of static picture the course argues against — an
  // instrument earns its page through what it does. See PROCESS.md for the
  // fuller argument and how it was verified.
  licence: "CC-BY-NC-SA-4.0",
});
