import type { Metadata } from "next";

import { projectTimeline } from "@/data/timeline";
import { getAllProjects } from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { StepFlow } from "@/components/shared/step-flow";
import { WorkCard } from "@/components/shared/work-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case study project IoT, embedded, dan software.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        title="Projects"
        description="Setiap project ditulis sebagai case study: masalah, solusi, teknologi, dan proses engineering-nya."
      />

      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <WorkCard
                key={p.slug}
                kind="Project"
                href={`/projects/${p.slug}`}
                title={p.title}
                subtitle={p.subtitle}
                description={p.shortDescription}
                status={p.status}
                tags={p.technologies}
                image={p.images[0]}
              />
            ))}
          </div>
        </Container>
      </section>

      <Section
        title="Project Timeline"
        description="Perjalanan dari eksperimen elektronik sampai sistem IoT."
        className="border-t"
      >
        <StepFlow
          steps={projectTimeline.map((t) => ({
            label: t.title,
            meta: t.period,
            description: t.description,
            href: t.href,
          }))}
        />
      </Section>
    </>
  );
}
