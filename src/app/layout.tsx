import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { email, socials } from "@/data/site";
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
    default: "WeShipZ — Motion & Video Studio",
    template: "%s · WeShipZ",
  },
  description:
    "WeShipZ is a motion and video studio: motion graphics and video editing, with packages for creators, SaaS and startups.",
  openGraph: {
    title: "WeShipZ — Motion & Video Studio",
    description:
      "Motion graphics and video editing people stop for. Packages for creators, SaaS and startups.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WeShipZ",
              url: "https://weshipz.com",
              email,
              sameAs: socials.map((social) => social.href),
            }),
          }}
        />
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
