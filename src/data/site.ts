export const email = "hello@weshipz.com";

/** Swap for the real reel; poster shows until it loads. */
export const showreel = {
  video:
    "/videos/sintel.mp4",
  poster: "/posters/brand-motion.svg",
};

/** International number, digits only. Leave empty until the real line exists. */
export const whatsappNumber = "";

export function whatsappHref(
  message = "Hi WeShipZ, I have a project in mind.",
) {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
