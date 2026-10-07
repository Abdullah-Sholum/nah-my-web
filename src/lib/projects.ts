import { projects } from "@/data/projects";
import type { Project } from "@/types";

const sorted = [...projects].sort((a, b) => a.order - b.order);

export const getAllProjects = (): Project[] => sorted;

export const getFeaturedProjects = (): Project[] =>
  sorted.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  sorted.find((p) => p.slug === slug);

/** Untuk generateStaticParams() di /projects/[slug]. */
export const getProjectSlugs = (): string[] => sorted.map((p) => p.slug);
