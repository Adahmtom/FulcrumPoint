import Hero from "@/components/Hero";
import { MissionSection, CriteriaSection, SectorsSection, CtaSection } from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectorsSection />
      <MissionSection />
      <CriteriaSection />
      <CtaSection />
    </>
  );
}
