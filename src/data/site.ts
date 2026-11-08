export const email = "hello@weshipz.com";

// ponytail: silent montage cut from the landscape ads; swap for a scored showreel when one exists
export const showreel = {
  preview: "/work/showreel/preview.mp4",
  video: "/work/showreel/full.mp4",
  poster: "/work/showreel/poster.jpg",
};

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
