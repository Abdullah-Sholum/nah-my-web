import type { ExternalLink } from "@/types";
import { LinkButton } from "./link-button";

export function LinkButtons({ links }: { links: ExternalLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <LinkButton key={l.href} href={l.href} variant="outline" size="sm" external>
          {l.label}
        </LinkButton>
      ))}
    </div>
  );
}
