import type { Certification } from "@/types";

export function CertificationList({ items }: { items: Certification[] }) {
  return (
    <ul className="space-y-4">
      {items.map((c) => (
        <li key={c.title}>
          <p className="font-medium">
            {c.href ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {c.title}
              </a>
            ) : (
              c.title
            )}
          </p>
          {(c.issuer || c.date) && (
            <p className="text-sm text-muted-foreground">
              {[c.issuer, c.date].filter(Boolean).join(" · ")}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
