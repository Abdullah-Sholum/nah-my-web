import type { ResearchPaper } from "@/types";
import { paperCitation, paperUrl } from "@/lib/research";
import { PaperActions } from "./paper-actions";
import { PaperAuthors } from "./paper-authors";
import { PaperBadges } from "./paper-badges";

/** Baris ringkas untuk artikel dengan kamu sebagai penulis ke-n. */
export function CollabPaperItem({ paper }: { paper: ResearchPaper }) {
  const url = paperUrl(paper);

  return (
    <li id={paper.slug} className="scroll-mt-20 space-y-3 py-6 first:pt-0 last:pb-0">
      <PaperBadges paper={paper} />

      <h3 className="font-medium leading-snug">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {paper.title} ↗
          </a>
        ) : (
          paper.title
        )}
      </h3>

      <PaperAuthors authors={paper.authors} myPosition={paper.myPosition} />
      <p className="text-sm text-muted-foreground">{paperCitation(paper)}</p>

      {paper.contribution && (
        <p className="text-sm">
          <span className="font-medium">Kontribusi saya: </span>
          <span className="text-muted-foreground">{paper.contribution}</span>
        </p>
      )}

      {/* Judul sudah menjadi tautan, jadi di sini hanya tombol unduh. */}
      <PaperActions pdf={paper.pdf} size="sm" />
    </li>
  );
}
