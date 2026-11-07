import type { ServiceSlug } from "@/data/services";

export type Package = {
  id: string;
  /** Who it's for, shown in the hero "I'm a…" selector. */
  audience: string;
  name: string;
  pitch: string;
  /** Placeholder starting prices, confirm before launch. */
  price: string;
  cadence: string;
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
    price: "$499",
    cadence: "/ month",
    includes: [
      "12 short-form edits a month",
      "1 long-form YouTube edit",
      "Captions, motion text & sound design",
      "Hook and retention-focused pacing",
    ],
    services: ["video-editing", "motion-graphics"],
    turnaround: "48h per short",
    video: "/videos/friday.mp4",
    poster: "/posters/editorial-post.svg",
  },
  {
    id: "saas",
    audience: "SaaS teams",
    name: "SaaS Launch Kit",
    pitch: "Turn your product into motion people understand in seconds, ready for site, socials and launch day.",
    price: "$1,500",
    cadence: "one-off",
    includes: [
      "60–90s product explainer",
      "Animated UI walkthroughs",
      "Feature loops for site & socials",
      "Launch cutdowns in every format",
    ],
    services: ["motion-graphics", "creative-ads"],
    turnaround: "2–3 weeks",
    video: "/videos/jellyfish.mp4",
    poster: "/posters/brand-motion.svg",
  },
  {
    id: "startups",
    audience: "Startups",
    name: "Startup Launch",
    pitch: "Everything a launch needs to look funded: a hero film, ads to scale it and a demo that sells.",
    price: "$1,200",
    cadence: "one-off",
    includes: [
      "Launch film for site & socials",
      "Paid ad set: 3 hooks × 3 formats",
      "Pitch or demo video",
      "Logo reveal & motion kit",
    ],
    services: ["creative-ads", "motion-graphics"],
    turnaround: "2 weeks",
    video: "/videos/flower.mp4",
    poster: "/posters/product-commercial.svg",
  },
  {
    id: "founders",
    audience: "Founders",
    name: "Founder Brand",
    pitch: "Your ideas, edited into content that builds authority on LinkedIn, YouTube and beyond.",
    price: "$799",
    cadence: "/ month",
    includes: [
      "8 talking-head edits a month",
      "Podcast or interview clips",
      "Branded caption & motion templates",
      "LinkedIn, YouTube & IG formats",
    ],
    services: ["video-editing", "motion-graphics"],
    turnaround: "72h per edit",
    video: "/videos/sintel.mp4",
    poster: "/posters/social-system.svg",
  },
  {
    id: "ecommerce",
    audience: "E-commerce brands",
    name: "Product Ads",
    pitch: "Scroll-stopping product ads with multiple hooks, built to test, learn and scale.",
    price: "$899",
    cadence: "one-off",
    includes: [
      "5 product or UGC-style ads",
      "3 hook variations per ad",
      "9:16, 1:1 & 4:5 exports",
      "Product animation moments",
    ],
    services: ["creative-ads", "video-editing"],
    turnaround: "7–10 days",
    video: "/videos/bunny.mp4",
    poster: "/posters/product-commercial.svg",
  },
  {
    id: "agencies",
    audience: "Agencies",
    name: "White-label Studio",
    pitch: "Your overflow editing and motion team, delivered under your brand with no extra hires.",
    price: "$1,000",
    cadence: "/ month",
    includes: [
      "Dedicated editor & animator hours",
      "Your brand, your client, NDA-ready",
      "Shared Slack & review workflow",
      "Priority turnaround",
    ],
    services: ["video-editing", "motion-graphics", "creative-ads"],
    turnaround: "Priority queue",
    video: "/videos/jellyfish.mp4",
    poster: "/posters/brand-motion.svg",
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
