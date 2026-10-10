import type { ResearchPaper } from "@/types";
import { paperCitation, paperUrl } from "@/lib/research";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeList } from "@/components/shared/badge-list";
import { PaperActions } from "./paper-actions";
import { PaperAuthors } from "./paper-authors";
import { PaperBadges } from "./paper-badges";

/** Kartu menonjol untuk artikel dengan kamu sebagai penulis pertama. */
export function LeadPaperCard({ paper }: { paper: ResearchPaper }) {
  return (
    // id = slug: dipakai tautan dari Home dan Resume (/research#slug)
    <Card id={paper.slug} className="scroll-mt-20">
      <CardHeader className="space-y-3">
        <PaperBadges paper={paper} />
        <CardTitle className="text-xl leading-snug">{paper.title}</CardTitle>
        <CardDescription>{paperCitation(paper)}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <PaperAuthors authors={paper.authors} myPosition={paper.myPosition} />
        {paper.summary && (
          <p className="text-sm text-muted-foreground">{paper.summary}</p>
        )}
        {paper.technologies && paper.technologies.length > 0 && (
          <BadgeList items={paper.technologies} />
        )}
        <PaperActions url={paperUrl(paper)} pdf={paper.pdf} />
      </CardContent>
    </Card>
  );
}
