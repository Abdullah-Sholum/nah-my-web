import { experience } from "@/data/experience";
import type { ExperienceItem } from "@/types";

// Terbaru dulu. "YYYY-MM" aman diurutkan sebagai string.
const sorted = [...experience].sort((a, b) => b.start.localeCompare(a.start));

export const getAllExperience = (): ExperienceItem[] => sorted;

export const getRecentExperience = (count: number): ExperienceItem[] =>
  sorted.slice(0, count);
