import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { ContentStatus, ExternalLink } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { LinkButtons } from "@/components/shared/link-buttons";
import { StatusBadge } from "@/components/shared/status-badge";

interface CaseStudyHeaderProps {
  backHref: string;
  backLabel: string;
  title: string;
  subtitle?: string;
  summary: string;
  status: ContentStatus;
  /** Badge kategori / jenis. */
  badges: string[];
  links: ExternalLink[];
}

export function CaseStudyHeader({
  backHref,
  backLabel,
  title,
  subtitle,
  summary,
  status,
  badges,
  links,
}: CaseStudyHeaderProps) {
  return (
    <div className="border-b py-12">
      <Container className="max-w-3xl space-y-5">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={status} />
          {badges.map((b) => (
            <Badge key={b} variant="outline">
              {b}
            </Badge>
          ))}
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <p className="text-muted-foreground">{summary}</p>
        <LinkButtons links={links} />
      </Container>
    </div>
  );
}
