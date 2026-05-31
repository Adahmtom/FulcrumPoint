import Hero from "@/components/Hero";
import { MissionValuesSection, AboutUsSection, SectorsSection, CriteriaSection, CtaSection } from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionValuesSection />
      <AboutUsSection />
      <SectorsSection />
      <CriteriaSection />
      <CtaSection />
    </>
  );
}
