import type { Project } from "@/types";
import { projectCategoryLabels } from "@/lib/labels";
import { CaseBlock } from "@/components/case-study/case-block";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { Container } from "@/components/layout/container";
import { BadgeList } from "@/components/shared/badge-list";
import { BulletList } from "@/components/shared/bullet-list";
import { MediaGallery } from "@/components/shared/media-gallery";
import { StepFlow } from "@/components/shared/step-flow";

/**
 * Template case study. Urutan blok = urutan JSX di bawah
 * (Problem → Solution → Technology → Engineering → Architecture → Progress → ... → Media).
 * Blok opsional tidak dirender jika datanya kosong.
 */
export function ProjectDetail({ project: p }: { project: Project }) {
  const hasGroups = Boolean(p.hardware?.length || p.software?.length);

  return (
    <>
      <CaseStudyHeader
        backHref="/projects"
        backLabel="Semua project"
        title={p.title}
        subtitle={p.subtitle}
        summary={p.shortDescription}
        status={p.status}
        badges={p.categories.map((c) => projectCategoryLabels[c])}
        links={p.links}
      />

      <Container className="max-w-3xl space-y-12 py-12">
        <CaseBlock title="Problem">
          <p className="text-muted-foreground">{p.problem}</p>
        </CaseBlock>

        <CaseBlock title="Solution">
          <p className="text-muted-foreground">{p.solution}</p>
        </CaseBlock>

        <CaseBlock title="Technology">
          {hasGroups ? (
            <div className="space-y-4">
              {p.hardware && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Hardware</p>
                  <BadgeList items={p.hardware} />
                </div>
              )}
              {p.software && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Software</p>
                  <BadgeList items={p.software} />
                </div>
              )}
            </div>
          ) : (
            <BadgeList items={p.technologies} />
          )}
        </CaseBlock>

        <CaseBlock title="Engineering">
          <BulletList items={p.engineering} />
        </CaseBlock>

        {p.architecture && (
          <CaseBlock title="System Architecture">
            <StepFlow steps={p.architecture.map((label) => ({ label }))} />
          </CaseBlock>
        )}

        {p.timeline && (
          <CaseBlock title="Progress">
            <StepFlow steps={p.timeline} />
          </CaseBlock>
        )}

        {p.sections?.map((s) => (
          <CaseBlock key={s.title} title={s.title}>
            {s.paragraphs?.map((para) => (
              <p key={para} className="text-muted-foreground">
                {para}
              </p>
            ))}
            {s.items && <BulletList items={s.items} />}
          </CaseBlock>
        ))}

        {p.result && (
          <CaseBlock title="Result">
            <p className="text-muted-foreground">{p.result}</p>
          </CaseBlock>
        )}

        {p.futureDevelopment && (
          <CaseBlock title="Future Development">
            <BulletList items={p.futureDevelopment} />
          </CaseBlock>
        )}

        {p.images.length > 0 && (
          <CaseBlock title="Media">
            <MediaGallery images={p.images} />
          </CaseBlock>
        )}
      </Container>
    </>
  );
}
