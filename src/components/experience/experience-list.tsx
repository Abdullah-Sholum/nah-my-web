import type { ExperienceItem } from "@/types";
import { formatPeriod } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

interface ExperienceListProps {
  items: ExperienceItem[];
  /** Home: false (ringkas). Resume: true (default). */
  showHighlights?: boolean;
}

/** Daftar pengalaman. Dipakai di Home (ringkas) dan /resume (lengkap). */
export function ExperienceList({
  items,
  showHighlights = true,
}: ExperienceListProps) {
  return (
    <ol className="space-y-8">
      {items.map((item) => (
        <li key={item.id} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-6">
          <p className="text-sm text-muted-foreground sm:pt-0.5">
            {formatPeriod(item.start, item.end)}
          </p>
          <div>
            <h3 className="flex flex-wrap items-center gap-2 font-medium leading-snug">
              {item.title}
              {item.employmentType && (
                <Badge variant="outline">{item.employmentType}</Badge>
              )}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            {showHighlights && item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
