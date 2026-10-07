import type {
  ContentSection,
  ContentStatus,
  ExternalLink,
  MediaImage,
  TimelineStep,
} from "./common";

export type ProjectCategory =
  | "iot"
  | "embedded"
  | "software"
  | "desktop"
  | "web"
  | "data";

/**
 * Satu bentuk untuk semua project.
 * Field wajib = pola case study yang sama (problem -> solution -> tech).
 * Field opsional = dirender hanya jika ada.
 */
export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  categories: ProjectCategory[];
  status: ContentStatus;
  featured: boolean;
  /** Urutan tampil (kecil = lebih awal). */
  order: number;
  year?: string;

  shortDescription: string;
  problem: string;
  solution: string;

  /** Tag utama; dipakai untuk badge dan filter. */
  technologies: string[];
  engineering: string[];

  // --- Opsional ---
  hardware?: string[];
  software?: string[];
  /** Alur arsitektur, contoh: ["Raw Data", "Django", "Database"]. */
  architecture?: string[];
  /** Perkembangan project (bagian "Progress" / timeline[] di mapping). */
  timeline?: TimelineStep[];
  /** Section tambahan: Requirements, Testing, Problems Encountered, dll. */
  sections?: ContentSection[];
  result?: string;
  futureDevelopment?: string[];

  images: MediaImage[];
  links: ExternalLink[];
}
