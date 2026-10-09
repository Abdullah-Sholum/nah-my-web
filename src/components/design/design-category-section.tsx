import type { DesignCategoryMeta, DesignItem } from "@/types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/shared/section";
import { DesignCard } from "./design-card";

interface DesignCategorySectionProps {
  meta: DesignCategoryMeta;
  items: DesignItem[];
  className?: string;
}

/** Satu bagian per jenis karya. id = id jenis, dipakai sebagai anchor. */
export function DesignCategorySection({
  meta,
  items,
  className,
}: DesignCategorySectionProps) {
  return (
    <Section
      id={meta.id}
      title={meta.label}
      description={meta.description}
      className={className}
    >
      <ul
        className={cn(
          "grid gap-6",
          meta.aspect === "portrait"
            ? "grid-cols-2 md:grid-cols-3"
            : "sm:grid-cols-2 md:grid-cols-3",
        )}
      >
        {items.map((item) => (
          <li key={item.slug}>
            <DesignCard
              href={`/design/${item.slug}`}
              title={item.title}
              software={item.software}
              image={item.images[0]}
              aspect={meta.aspect}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
