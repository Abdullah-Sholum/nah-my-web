import { getRecentExperience } from "@/lib/experience";
import { ExperienceList } from "@/components/experience/experience-list";
import { Section } from "@/components/shared/section";

export function ExperiencePreview() {
  return (
    <Section
      title="Experience"
      description="Pengalaman magang, pelatihan, dan usaha bersama."
      action={{ label: "See all experience", href: "/resume#experience" }}
      className="border-t"
    >
      <ExperienceList items={getRecentExperience(3)} showHighlights={false} />
    </Section>
  );
}
