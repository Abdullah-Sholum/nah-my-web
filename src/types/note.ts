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
  date: string; // "YYYY-MM-DD"
  summary: string;
  category: NoteCategory;
  tags?: string[];
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
