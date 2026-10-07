import { research } from "@/data/research";
import type { Research } from "@/types";

const sorted = [...research].sort((a, b) => a.order - b.order);

export const getAllResearch = (): Research[] => sorted;

export const getFeaturedResearch = (): Research[] =>
  sorted.filter((r) => r.featured);

export const getResearchBySlug = (slug: string): Research | undefined =>
  sorted.find((r) => r.slug === slug);

export const getResearchSlugs = (): string[] => sorted.map((r) => r.slug);
