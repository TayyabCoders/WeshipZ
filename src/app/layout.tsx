import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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
    default: "WeShipZ — Creative Studio",
    template: "%s · WeShipZ",
  },
  description:
    "WeShipZ is a creative-tech studio for motion graphics, ads, video, websites, AI automation and social content.",
  openGraph: {
    title: "WeShipZ — Creative Studio",
    description:
      "Creative ideas. Powerful execution. Motion, digital and intelligent systems for modern brands.",
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
        </SmoothScroll>
      </body>
    </html>
  );
}
