import { HeroSection } from "@/components/hero/HeroSection";
import { CraftLab } from "@/components/home/CraftLab";
import { ProcessStack } from "@/components/home/ProcessStack";
import { ServiceList } from "@/components/home/ServiceList";
import { Showcase } from "@/components/home/Showcase";
import { Statement } from "@/components/home/Statement";
import { WordMarquee } from "@/components/home/WordMarquee";
import { FaqSection } from "@/components/common/FaqSection";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { packageFaqs } from "@/data/packages";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Statement />
      <WordMarquee />
      <ServiceList />
      <Showcase />
      <CraftLab />
      <PackageGrid />
      <FaqSection
        title="Before you brief us."
        items={packageFaqs.slice(0, 4)}
        className="py-24 md:py-36"
      />
      <ProcessStack />
    </>
  );
}
