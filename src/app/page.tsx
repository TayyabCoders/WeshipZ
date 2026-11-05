import { HeroSection } from "@/components/hero/HeroSection";
import { ProcessStack } from "@/components/home/ProcessStack";
import { ServiceList } from "@/components/home/ServiceList";
import { Showcase } from "@/components/home/Showcase";
import { Statement } from "@/components/home/Statement";
import { WordMarquee } from "@/components/home/WordMarquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Statement />
      <WordMarquee />
      <ServiceList />
      <Showcase />
      <ProcessStack />
    </>
  );
}
