import { AboutPreview } from "@/components/sections/about-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <FeaturedWork />
    </>
  );
}
