import type { DeviceKind } from "@/components/stage/DeviceFrame";

export type Reel = {
  title: string;
  tag: string;
  duration: string;
  video: string;
  poster: string;
};

export type SiteShot = {
  name: string;
  sector: string;
  stack: string;
  /** Screenshot of the live site; the top of the image is shown. */
  image: string;
  kind: DeviceKind;
  href?: string;
};

/** Vertical edits work best; landscape clips are center-cropped to 9:16. */
export const reels: Reel[] = [
  {
    title: "Podcast cutdown",
    tag: "Captions · Grade",
    duration: "0:42",
    video:
      "/videos/friday.mp4",
    poster: "/posters/editorial-post.svg",
  },
  {
    title: "Editing breakdown",
    tag: "Motion · Sound design",
    duration: "0:30",
    video:
      "/videos/flower.mp4",
    poster: "/posters/brand-motion.svg",
  },
  {
    title: "Founder story",
    tag: "Kinetic type · Reel",
    duration: "0:55",
    video:
      "/videos/jellyfish.mp4",
    poster: "/posters/social-system.svg",
  },
];

export const sites: SiteShot[] = [
  { name: "Cargo Logistics", sector: "Logistics", stack: "Next.js", image: "/showcase/site-cargo.svg", kind: "laptop" },
  { name: "Gadget Store", sector: "E-commerce", stack: "Shopify", image: "/showcase/site-commerce.svg", kind: "laptop" },
  { name: "Cargo Logistics", sector: "Logistics", stack: "Responsive", image: "/showcase/site-cargo.svg", kind: "phone" },
  { name: "Prime Estates", sector: "Real estate", stack: "Next.js", image: "/showcase/site-realestate.svg", kind: "laptop" },
  { name: "Studio Site", sector: "Agency", stack: "Next.js · GSAP", image: "/posters/studio-website.svg", kind: "laptop" },
  { name: "Gadget Store", sector: "E-commerce", stack: "Responsive", image: "/showcase/site-commerce.svg", kind: "tablet" },
];
