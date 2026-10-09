import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { DesignCategoryMeta, DesignItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { BadgeList } from "@/components/shared/badge-list";
import { DesignGallery } from "./design-gallery";

interface DesignDetailProps {
  item: DesignItem;
  meta: DesignCategoryMeta;
}

export function DesignDetail({ item, meta }: DesignDetailProps) {
  // Info opsional: hanya yang terisi yang tampil.
  const extras = [
    { label: "Dimensi", value: item.dimensions },
    { label: "Metode", value: item.method },
    { label: "Tahun", value: item.year },
  ].filter((e): e is { label: string; value: string } => Boolean(e.value));

  return (
    <>
      <div className="border-b py-12">
        <Container className="max-w-3xl space-y-5">
          <Link
            href={`/design#${meta.id}`}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {meta.label}
          </Link>

          <div>
            <Badge variant="outline">{meta.label}</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {item.title}
            </h1>
          </div>

          <p className="text-muted-foreground">{item.summary}</p>

          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
            <div className="space-y-2">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Software
              </dt>
              <dd>
                <BadgeList items={item.software} />
              </dd>
            </div>
            {extras.map((e) => (
              <div key={e.label} className="space-y-2">
                <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {e.label}
                </dt>
                <dd className="text-sm">{e.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <DesignGallery images={item.images} aspect={meta.aspect} />
        </Container>
      </section>
    </>
  );
}
