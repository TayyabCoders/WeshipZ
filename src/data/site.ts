export const email = "weshipzhq@gmail.com";

// ponytail: Quippy + Dunkin back-to-back; swap for a scored studio showreel when one exists
export const showreel = {
  preview: "/work/showreel/preview.mp4",
  video: "/work/showreel/full.mp4",
  poster: "/work/showreel/poster.jpg",
};

/** Vertical edits shown in the homepage hero (pill, main card, up-next). */
export const heroClips = [
  {
    id: "narration-style",
    title: "Narration style",
    video: "/work/narration-style/preview.mp4",
    poster: "/work/narration-style/poster.jpg",
  },
  {
    id: "arthur-brooks",
    title: "Arthur Brooks",
    video: "/work/arthur-brooks/preview.mp4",
    poster: "/work/arthur-brooks/poster.jpg",
  },
  {
    id: "editors-cant-read",
    title: "Editors can't read",
    video: "/work/editors-cant-read/preview.mp4",
    poster: "/work/editors-cant-read/poster.jpg",
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/weshipz" },
  { label: "Instagram", href: "https://www.instagram.com/weshipz_" },
  { label: "X", href: "https://x.com/weshipz_" },
];

/** International number, digits only. */
export const whatsappNumber = "923334122004";

export function whatsappHref(
  message = "Hi WeShipZ, I'd like to discuss a project.",
) {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
