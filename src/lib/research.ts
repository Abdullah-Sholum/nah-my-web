import { research } from "@/data/research";
import type { ResearchPaper } from "@/types";

// Validasi saat build: kesalahan data ketahuan sebelum halaman jadi.
const seen = new Set<string>();
for (const p of research) {
  if (seen.has(p.slug)) {
    throw new Error(`research: slug ganda "${p.slug}"`);
  }
  seen.add(p.slug);
  if (
    !Number.isInteger(p.myPosition) ||
    p.myPosition < 1 ||
    p.myPosition > p.authors.length
  ) {
    throw new Error(
      `research "${p.slug}": myPosition (${p.myPosition}) di luar daftar penulis (1-${p.authors.length})`,
    );
  }
}

// Terbaru dulu; tahun sama diurutkan menurut judul.
const sorted = [...research].sort(
  (a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title),
);

export const getAllResearch = (): ResearchPaper[] => sorted;

export const getFeaturedResearch = (): ResearchPaper[] =>
  sorted.filter((p) => p.featured);

export const getResearchBySlug = (slug: string): ResearchPaper | undefined =>
  sorted.find((p) => p.slug === slug);

/** Artikel dengan kamu sebagai penulis pertama. */
export const getLeadPapers = (): ResearchPaper[] =>
  sorted.filter((p) => p.myPosition === 1);

/** Artikel dengan kamu sebagai penulis ke-2 dan seterusnya. */
export const getCollaborationPapers = (): ResearchPaper[] =>
  sorted.filter((p) => p.myPosition > 1);

/** "Penulis pertama", "Penulis tunggal", atau "Penulis ke-2 dari 4". */
export function paperRole(p: ResearchPaper): string {
  if (p.myPosition === 1) {
    return p.authors.length === 1 ? "Penulis tunggal" : "Penulis pertama";
  }
  return `Penulis ke-${p.myPosition} dari ${p.authors.length}`;
}

/** Tautan ke artikel: `url` jika ada, kalau tidak dari DOI. */
export function paperUrl(p: ResearchPaper): string | undefined {
  if (p.url) return p.url;
  if (p.doi) return `https://doi.org/${p.doi}`;
  return undefined;
}

/** "Jurnal X · Vol. 10 · No. 2 · hlm. 101–112 · 2025" (bagian kosong dilewati). */
export function paperCitation(p: ResearchPaper): string {
  return [
    p.venue,
    p.volume && `Vol. ${p.volume}`,
    p.issue && `No. ${p.issue}`,
    p.pages && `hlm. ${p.pages}`,
    p.year,
  ]
    .filter(Boolean)
    .join(" · ");
}
