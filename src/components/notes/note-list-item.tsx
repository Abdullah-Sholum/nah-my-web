import Link from "next/link";

import { formatMonth } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

interface NoteListItemProps {
  href: string;
  title: string;
  summary: string;
  /** Bulan dan tahun: "YYYY-MM". */
  date: string;
  categoryLabel: string;
  tags?: string[];
}

/** Satu baris catatan: tanggal di kiri, isi di kanan (bertumpuk di ponsel). */
export function NoteListItem({
  href,
  title,
  summary,
  date,
  categoryLabel,
  tags,
}: NoteListItemProps) {
  return (
    <li className="grid gap-1 py-6 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <p className="text-sm text-muted-foreground sm:pt-0.5">{formatMonth(date)}</p>
      <div className="space-y-2">
        <h2 className="font-medium leading-snug">
          <Link href={href} className="underline-offset-4 hover:underline">
            {title}
          </Link>
        </h2>
        <p className="text-sm text-muted-foreground">{summary}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Badge variant="outline">{categoryLabel}</Badge>
          {tags && tags.length > 0 && (
            <p className="text-xs text-muted-foreground">{tags.join(" · ")}</p>
          )}
        </div>
      </div>
    </li>
  );
}
