export type NoteCategory =
  | "electronics"
  | "programming"
  | "iot"
  | "embedded"
  | "ai-data"
  | "experiments";

/** Frontmatter di bagian atas setiap file .mdx di content/notes/. */
export interface NoteFrontmatter {
  title: string;
  /** Bulan dan tahun: "YYYY-MM" (mis. "2026-08"). */
  date: string;
  summary: string;
  category: NoteCategory;
  tags?: string[];
  /** Slug project terkait (opsional), mis. "macropad-audio-mixer". */
  project?: string;
  /** Set false untuk menyembunyikan draft. Default: true. */
  published?: boolean;
}

export interface Note extends NoteFrontmatter {
  /** Diambil dari nama file (tanpa .mdx). */
  slug: string;
}

export interface NoteWithContent extends Note {
  /** Isi MDX mentah (tanpa frontmatter). */
  content: string;
}
