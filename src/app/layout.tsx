import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weshipz.com"),
  title: {
    default: "WeShipZ — Motion, Video & Ads Studio",
    template: "%s · WeShipZ",
  },
  description:
    "WeShipZ is a motion and video studio: motion graphics, video editing and creative ads, with packages for creators, SaaS, startups and founders.",
  openGraph: {
    title: "WeShipZ — Motion, Video & Ads Studio",
    description:
      "Motion graphics, video editing and creative ads people stop for. Packages for creators, SaaS, startups and founders.",
    type: "website",
    siteName: "WeShipZ",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
