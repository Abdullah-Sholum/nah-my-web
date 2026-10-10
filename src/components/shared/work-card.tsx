import Image from "next/image";
import Link from "next/link";

import type { ContentStatus, MediaImage } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StatusBadge } from "./status-badge";

export interface WorkCardProps {
  href: string;
  title: string;
  subtitle?: string;
  description: string;
  /** Badge status (Project). Dipakai jika diisi. */
  status?: ContentStatus;
  /** Badge teks bebas (mis. "SINTA 2" untuk Research). Dipakai jika `status` kosong. */
  badge?: string;
  tags: string[];
  kind: "Project" | "Research";
  image?: MediaImage;
  /** Batas tag yang tampil; sisanya jadi "+N". */
  maxTags?: number;
}

/**
 * Kartu umum untuk Project dan Research.
 * Murni presentasional: data di-mapping oleh pemanggil.
 */
export function WorkCard({
  href,
  title,
  subtitle,
  description,
  status,
  badge,
  tags,
  kind,
  image,
  maxTags = 4,
}: WorkCardProps) {
  const shown = tags.slice(0, maxTags);
  const rest = tags.length - shown.length;

  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full overflow-hidden transition-colors group-hover:border-foreground/30">
        {image && (
          <div className="relative aspect-video w-full bg-muted">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {kind}
            </span>
            {status ? (
              <StatusBadge status={status} />
            ) : badge ? (
              <Badge variant="secondary">{badge}</Badge>
            ) : null}
          </div>
          <CardTitle className="leading-snug">{title}</CardTitle>
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <ul className="flex flex-wrap gap-1.5">
            {shown.map((t) => (
              <li key={t}>
                <Badge variant="outline">{t}</Badge>
              </li>
            ))}
            {rest > 0 && (
              <li>
                <Badge variant="outline">+{rest}</Badge>
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
}
