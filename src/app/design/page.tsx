import type { Metadata } from "next";

import {
  getDesignCategories,
  getDesignItemsByCategory,
} from "@/lib/design";
import { Container } from "@/components/layout/container";
import { DesignCategorySection } from "@/components/design/design-category-section";
import { DesignJumpNav } from "@/components/design/design-jump-nav";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Design",
  description: "Poster, desain 3D, dan desain prototype.",
};

export default function DesignPage() {
  // Jenis tanpa karya tidak ditampilkan (bagian maupun chip-nya).
  const groups = getDesignCategories()
    .map((meta) => ({ meta, items: getDesignItemsByCategory(meta.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        title="Design"
        description="Poster, desain 3D, dan desain prototype."
      >
        <DesignJumpNav
          items={groups.map((g) => ({ id: g.meta.id, label: g.meta.label }))}
        />
      </PageHeader>

      {groups.length === 0 && (
        <Container className="py-12">
          <p className="text-muted-foreground">Belum ada karya.</p>
        </Container>
      )}

      {groups.map((g, i) => (
        <DesignCategorySection
          key={g.meta.id}
          meta={g.meta}
          items={g.items}
          className={i > 0 ? "border-t" : undefined}
        />
      ))}
    </>
  );
}
