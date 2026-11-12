export type ServiceSlug = "motion-graphics" | "video-editing";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  accent: string;
  offerings: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "motion-graphics",
    title: "Motion Graphics & 3D Animation",
    shortTitle: "Motion Graphics",
    description:
      "Eye-catching motion design, 3D visuals and animation that make brands impossible to ignore.",
    longDescription:
      "From kinetic type to SaaS product animation, we craft motion that stops the scroll and makes your brand feel alive.",
    accent: "#296BE5",
    offerings: [
      "2D & 3D animation",
      "SaaS & UI animation",
      "Explainer videos",
      "Kinetic typography",
      "Product animation",
      "Motion branding & logo reveals",
    ],
    process: [
      {
        title: "Concept",
        description: "Define the story, style frames and motion language.",
      },
      {
        title: "Design",
        description: "Build boards, assets and a clear animation direction.",
      },
      {
        title: "Animate",
        description: "Bring scenes to life with timing, depth and polish.",
      },
      {
        title: "Deliver",
        description: "Export for web, social, broadcast and campaigns.",
      },
    ],
    faqs: [
      {
        question: "What formats do you deliver?",
        answer:
          "MP4, WebM, ProRes and platform-ready exports for social, web and ads.",
      },
      {
        question: "Do you work from existing brand guidelines?",
        answer:
          "Yes. We adapt motion systems to your brand or help define a new one.",
      },
      {
        question: "Can you animate our product UI?",
        answer:
          "Yes. Send screenshots or Figma files and we rebuild the interface as clean, on-brand animation.",
      },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing & Post-Production",
    shortTitle: "Video Editing",
    description:
      "Professional editing, storytelling, sound design and finishing that transform raw footage into polished content.",
    longDescription:
      "Clean storytelling, tight pacing, captions, color and sound. Finished content that holds attention to the last second.",
    accent: "#64748B",
    offerings: [
      "Short-form reels & shorts",
      "YouTube & long-form editing",
      "Podcast clips & full episodes",
      "Talking-head edits",
      "Captions & motion text",
      "Color grading & sound design",
    ],
    process: [
      {
        title: "Ingest",
        description: "Organize footage, selects and audio.",
      },
      {
        title: "Edit",
        description: "Build the narrative with pace and clarity.",
      },
      {
        title: "Finish",
        description: "Grade, mix and polish for delivery.",
      },
      {
        title: "Export",
        description: "Platform-ready masters and versions.",
      },
    ],
    faqs: [
      {
        question: "Do you edit vertical and horizontal formats?",
        answer: "Yes. We deliver both and adapt edits per platform.",
      },
      {
        question: "How do I send footage?",
        answer:
          "Drop it in Google Drive, Dropbox or Frame.io. We handle everything from there.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
