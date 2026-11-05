export type ServiceSlug =
  | "motion-graphics"
  | "creative-ads"
  | "video-editing"
  | "web-development"
  | "ai-automation"
  | "social-media";

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
      "From kinetic type to product animation, we craft motion that stops the scroll and makes your brand feel alive.",
    accent: "#296BE5",
    offerings: [
      "2D & 3D animation",
      "Kinetic typography",
      "Product animation",
      "Explainer videos",
      "Motion branding",
      "Abstract motion systems",
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
    ],
  },
  {
    slug: "creative-ads",
    title: "Creative Ads & Commercial Production",
    shortTitle: "Creative Ads",
    description:
      "Creative advertisements and commercial visuals designed to capture attention and communicate your message.",
    longDescription:
      "Campaign-ready ads and commercials built to look premium, feel clear and perform across platforms.",
    accent: "#1F56BD",
    offerings: [
      "Product commercials",
      "Social advertisements",
      "Promotional videos",
      "Campaign creative",
      "Brand storytelling",
    ],
    process: [
      {
        title: "Brief",
        description: "Align on audience, offer and creative angle.",
      },
      {
        title: "Concept",
        description: "Scripts, visual direction and production plan.",
      },
      {
        title: "Produce",
        description: "Shoot, design and assemble campaign assets.",
      },
      {
        title: "Launch",
        description: "Cutdowns and formats for every channel.",
      },
    ],
    faqs: [
      {
        question: "Can you produce for multiple platforms?",
        answer:
          "Yes. We deliver master cuts plus platform-specific cutdowns.",
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
      "Clean storytelling, tight pacing, color and sound — finished content that feels intentional.",
    accent: "#64748B",
    offerings: [
      "Short-form editing",
      "Long-form editing",
      "Podcast editing",
      "Color grading",
      "Sound design",
      "Post-production finishing",
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
    ],
  },
  {
    slug: "web-development",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    description:
      "Modern, responsive websites designed to communicate your brand and create meaningful digital experiences.",
    longDescription:
      "Fast, expressive sites that look like your brand and convert like a product.",
    accent: "#296BE5",
    offerings: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce websites",
      "Custom web applications",
    ],
    process: [
      {
        title: "Discover",
        description: "Goals, audience and content structure.",
      },
      {
        title: "Design",
        description: "Visual system, layouts and key interactions.",
      },
      {
        title: "Build",
        description: "Performant Next.js implementation.",
      },
      {
        title: "Launch",
        description: "QA, SEO basics and handoff.",
      },
    ],
    faqs: [
      {
        question: "What stack do you use?",
        answer:
          "Primarily Next.js, modern CSS and carefully chosen animation tools.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation & AI-Powered Solutions",
    shortTitle: "AI Automation",
    description:
      "Intelligent workflows and AI-powered systems that reduce repetitive work and improve business efficiency.",
    longDescription:
      "Practical automation that connects your tools, cuts busywork and keeps operations moving.",
    accent: "#6C63FF",
    offerings: [
      "Business workflow automation",
      "AI-powered assistants",
      "Lead management automation",
      "API integrations",
      "Document and data workflows",
    ],
    process: [
      {
        title: "Map",
        description: "Identify repetitive processes worth automating.",
      },
      {
        title: "Design",
        description: "Define flows, tools and guardrails.",
      },
      {
        title: "Build",
        description: "Integrate systems and ship reliable workflows.",
      },
      {
        title: "Improve",
        description: "Monitor, refine and expand coverage.",
      },
    ],
    faqs: [
      {
        question: "Which tools can you integrate?",
        answer:
          "Common stacks include Slack, Notion, Gmail, Sheets, CRMs and custom APIs.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Creative Content",
    shortTitle: "Social Media",
    description:
      "Consistent, engaging visual content that gives your brand a recognizable digital presence.",
    longDescription:
      "A steady stream of on-brand creatives, reels and campaign assets that keep your presence sharp.",
    accent: "#1F56BD",
    offerings: [
      "Social media creatives",
      "Reels & short video",
      "Campaign design",
      "Content production",
      "Brand consistency systems",
    ],
    process: [
      {
        title: "Plan",
        description: "Content pillars, cadence and visual direction.",
      },
      {
        title: "Create",
        description: "Design and produce posts, reels and campaigns.",
      },
      {
        title: "Adapt",
        description: "Format for every platform and placement.",
      },
      {
        title: "Iterate",
        description: "Learn from performance and refine the system.",
      },
    ],
    faqs: [
      {
        question: "Do you only design, or also produce video?",
        answer:
          "Both. Static creatives, motion and short-form video depending on the brief.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
