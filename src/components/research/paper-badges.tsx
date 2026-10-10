import type { PaperStatus, ResearchPaper } from "@/types";
import { paperRole } from "@/lib/research";
import { Badge } from "@/components/ui/badge";

const statusLabel: Record<Exclude<PaperStatus, "published">, string> = {
  accepted: "Accepted",
  "under-review": "Under review",
};

/** SINTA, peran kamu, dan status (hanya jika belum terbit). */
export function PaperBadges({ paper }: { paper: ResearchPaper }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {paper.sinta && <Badge>SINTA {paper.sinta}</Badge>}
      <Badge variant="outline">{paperRole(paper)}</Badge>
      {paper.status !== "published" && (
        <Badge variant="secondary">{statusLabel[paper.status]}</Badge>
      )}
    </div>
  );
}
