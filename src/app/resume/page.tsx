import type { Metadata } from "next";

import { resume } from "@/data/resume";
import { getAllExperience } from "@/lib/experience";
import { getProjectBySlug } from "@/lib/projects";
import { getResearchBySlug, paperCitation } from "@/lib/research";
import { CertificationList } from "@/components/resume/certification-list";
import { EducationList } from "@/components/resume/education-list";
import {
  SelectedWork,
  type SelectedWorkItem,
} from "@/components/resume/selected-work";
import { ExperienceList } from "@/components/experience/experience-list";
import { LinkButton } from "@/components/shared/link-button";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Resume",
  description: "Ringkasan profil, pengalaman, pendidikan, dan karya pilihan.",
};

export default function ResumePage() {
  const projectItems: SelectedWorkItem[] = resume.selectedProjectSlugs.flatMap(
    (slug) => {
      const p = getProjectBySlug(slug);
      return p
        ? [{ href: `/projects/${p.slug}`, title: p.title, description: p.shortDescription, kind: "Project" as const }]
        : [];
    },
  );
  const researchItems: SelectedWorkItem[] = resume.selectedResearchSlugs.flatMap(
    (slug) => {
      const r = getResearchBySlug(slug);
      return r
        ? [{ href: `/research#${r.slug}`, title: r.title, description: r.summary ?? paperCitation(r), kind: "Research" as const }]
        : [];
    },
  );
  const selectedWork = [...projectItems, ...researchItems];

  return (
    <>
      <PageHeader
        title="Resume"
        description="Ringkasan profil, pengalaman, pendidikan, dan karya pilihan."
      >
        <LinkButton href={resume.cvUrl} download>
          Download CV
        </LinkButton>
      </PageHeader>

      <Section title="Summary">
        <p className="max-w-3xl text-muted-foreground">{resume.summary}</p>
      </Section>

      <Section id="experience" title="Experience" className="border-t">
        <ExperienceList items={getAllExperience()} />
      </Section>

      <Section title="Education" className="border-t">
        <EducationList items={resume.education} />
      </Section>

      {resume.certifications.length > 0 && (
        <Section title="Certifications" className="border-t">
          <CertificationList items={resume.certifications} />
        </Section>
      )}

      {selectedWork.length > 0 && (
        <Section title="Selected Work" className="border-t">
          <SelectedWork items={selectedWork} />
        </Section>
      )}
    </>
  );
}
