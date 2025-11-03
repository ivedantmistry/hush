import AcknowledgementsSection from "@/components/IndexSections/AcknowledgementsSection";
import FooterSection from "@/components/IndexSections/FooterSection";
import HeroSection from "@/components/IndexSections/HeroSection";
import IdeaSection from "@/components/IndexSections/IdeaSection";
import IncubationSection from "@/components/IndexSections/IncubationSection";
import PitchDeckSection from "@/components/IndexSections/PitchDeckSection";
import ProcessSection from "@/components/IndexSections/ProcessSection";
import PrototypeSection from "@/components/IndexSections/PrototypeSection";
import TeamSection from "@/components/IndexSections/TeamSection";
import FindingsSection from "@/components/IndexSections/FindingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IdeaSection />
      <ProcessSection />
      <FindingsSection />
      <PrototypeSection />
      <IncubationSection />
      <PitchDeckSection />
      <AcknowledgementsSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}