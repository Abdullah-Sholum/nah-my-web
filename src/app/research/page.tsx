import type { Metadata } from "next";

import { getCollaborationPapers, getLeadPapers } from "@/lib/research";
import { CollabPaperItem } from "@/components/research/collab-paper-item";
import { LeadPaperCard } from "@/components/research/lead-paper-card";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Research",
  description: "Artikel ilmiah: penelitian yang saya pimpin dan kolaborasi.",
};

export default function ResearchPage() {
  const lead = getLeadPapers();
  const collaborations = getCollaborationPapers();

  return (
    <>
      <PageHeader
        title="Research"
        // DRAF: ubah sesuai gayamu.
        description="Artikel ilmiah yang saya tulis dan ikut kontribusikan, dengan urutan penulis sesuai di jurnal."
      />

      {lead.length === 0 && collaborations.length === 0 && (
        <Container className="py-12">
          <p className="text-muted-foreground">Belum ada publikasi.</p>
        </Container>
      )}

      {lead.length > 0 && (
        <Section
          id="lead"
          title="Lead Research"
          description="Penelitian yang saya pimpin sebagai penulis pertama."
        >
          <div className="space-y-6">
            {lead.map((paper) => (
              <LeadPaperCard key={paper.slug} paper={paper} />
            ))}
          </div>
        </Section>
      )}

      {collaborations.length > 0 && (
        <Section
          id="collaborations"
          title="Collaborations"
          description="Artikel yang saya ikut kontribusikan sebagai salah satu penulis."
          className={lead.length > 0 ? "border-t" : undefined}
        >
          <ul className="divide-y">
            {collaborations.map((paper) => (
              <CollabPaperItem key={paper.slug} paper={paper} />
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
