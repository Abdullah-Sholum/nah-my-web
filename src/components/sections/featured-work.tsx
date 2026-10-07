import { getFeaturedProjects } from "@/lib/projects";
import { getFeaturedResearch } from "@/lib/research";
import { Section } from "@/components/shared/section";
import { WorkCard } from "@/components/shared/work-card";

export function FeaturedWork() {
  const projects = getFeaturedProjects();
  const research = getFeaturedResearch();

  return (
    <Section
      title="Featured Work"
      description="Project dan research utama, ditulis sebagai case study."
      action={{ label: "All projects", href: "/projects" }}
      className="border-t"
    >
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
        {research.map((r) => (
          <WorkCard
            key={r.slug}
            kind="Research"
            href={`/research/${r.slug}`}
            title={r.title}
            description={r.summary}
            status={r.status}
            tags={r.technologies}
            image={r.images[0]}
          />
        ))}
      </div>
    </Section>
  );
}
