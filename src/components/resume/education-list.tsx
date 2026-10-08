import type { Education } from "@/types";

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ul className="space-y-4">
      {items.map((e) => (
        <li key={`${e.degree}-${e.institution}`}>
          <p className="font-medium">{e.degree}</p>
          <p className="text-sm text-muted-foreground">
            {e.institution}
            {e.period && ` · ${e.period}`}
          </p>
        </li>
      ))}
    </ul>
  );
}
