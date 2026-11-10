import type { ServiceSlug } from "@/data/services";

export type Package = {
  id: string;
  /** Who it's for, shown in the hero "I'm a…" selector. */
  audience: string;
  name: string;
  pitch: string;
  includes: string[];
  services: ServiceSlug[];
  turnaround: string;
  video: string;
  poster: string;
};

export const packages: Package[] = [
  {
    id: "creators",
    audience: "Creators",
    name: "Creator Growth",
    pitch: "A steady stream of hook-first shorts and long-form edits, so you post more and edit never.",
    includes: [
      "12 short-form edits a month",
      "1 long-form YouTube edit",
      "Captions, motion text & sound design",
      "Hook and retention-focused pacing",
    ],
    services: ["video-editing", "motion-graphics"],
    turnaround: "48h per short",
    video: "/work/mehran-story/preview.mp4",
    poster: "/work/mehran-story/poster.jpg",
  },
  {
    id: "saas",
    audience: "SaaS teams",
    name: "SaaS Launch Kit",
    pitch: "Turn your product into motion people understand in seconds, ready for site, socials and launch day.",
    includes: [
      "60–90s product explainer",
      "Animated UI walkthroughs",
      "Feature loops for site & socials",
      "Launch cutdowns in every format",
    ],
    services: ["motion-graphics", "creative-ads"],
    turnaround: "2–3 weeks",
    video: "/work/invopk/preview.mp4",
    poster: "/work/invopk/poster.jpg",
  },
  {
    id: "startups",
    audience: "Startups",
    name: "Startup Launch",
    pitch: "Everything a launch needs to look funded: a hero film, ads to scale it and a demo that sells.",
    includes: [
      "Launch film for site & socials",
      "Paid ad set: 3 hooks × 3 formats",
      "Pitch or demo video",
      "Logo reveal & motion kit",
    ],
    services: ["creative-ads", "motion-graphics"],
    turnaround: "2 weeks",
    video: "/work/cola-one/preview.mp4",
    poster: "/work/cola-one/poster.jpg",
  },
];

export function contactHref(id: string) {
  return `/contact?package=${id}`;
}

export type BuilderItem = {
  id: string;
  name: string;
  unit: string;
  /** Placeholder USD unit prices, confirm before launch. */
  price: number;
  max: number;
};

export const builderItems: BuilderItem[] = [
  { id: "shorts", name: "Short-form edits", unit: "per reel", price: 40, max: 40 },
  { id: "longform", name: "Long-form YouTube edits", unit: "per video", price: 180, max: 10 },
  { id: "ads", name: "Ad creatives", unit: "per ad", price: 120, max: 20 },
  { id: "explainer", name: "Motion explainer (60s)", unit: "per video", price: 900, max: 4 },
  { id: "ui", name: "UI / product animation loops", unit: "per loop", price: 150, max: 10 },
  { id: "logo", name: "Logo reveal", unit: "one-off", price: 250, max: 1 },
];

export const rushMultiplier = 1.3;

export const packageFaqs = [
  {
    question: "How many revisions are included?",
    answer:
      "Two rounds of revisions on every deliverable. Small tweaks after that, like a typo or a swapped clip, are on us.",
  },
  {
    question: "How do payments work?",
    answer:
      "One-off packages are 50% to start and 50% on delivery. Monthly packages are billed at the start of each month.",
  },
  {
    question: "Can I pause or cancel a monthly package?",
    answer: "Yes. Give us 14 days' notice before your next billing date and you can pause, switch or cancel.",
  },
  {
    question: "Who owns the final videos?",
    answer:
      "You do. Once the project is paid in full, you own the final exports and can use them anywhere, including paid ads.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "A short brief, your footage or product access, and any brand assets. We kick off with a 15-minute call to lock the scope.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We work remotely with creators and brands worldwide, with reviews and delivery handled online.",
  },
];
