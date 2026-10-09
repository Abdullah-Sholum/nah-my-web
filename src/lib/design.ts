import { designCategories, designItems } from "@/data/design";
import type { DesignCategory, DesignCategoryMeta, DesignItem } from "@/types";

export const getDesignCategories = (): DesignCategoryMeta[] => designCategories;

export const getDesignCategoryMeta = (
  id: DesignCategory,
): DesignCategoryMeta | undefined => designCategories.find((c) => c.id === id);

export const getDesignItemsByCategory = (id: DesignCategory): DesignItem[] =>
  designItems.filter((item) => item.category === id);

export const getDesignBySlug = (slug: string): DesignItem | undefined =>
  designItems.find((item) => item.slug === slug);

/** Untuk generateStaticParams() di /design/[slug]. */
export const getDesignSlugs = (): string[] => designItems.map((item) => item.slug);
