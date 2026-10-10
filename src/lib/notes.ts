import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Note, NoteFrontmatter, NoteWithContent } from "@/types";
import { noteCategoryLabels } from "./labels";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

const REQUIRED: (keyof NoteFrontmatter)[] = ["title", "date", "summary", "category"];
const MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function listNoteFiles(): string[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    // File berawalan "_" (mis. _template.mdx) diabaikan.
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));
}

function readNote(file: string): NoteWithContent {
  const slug = file.replace(/\.mdx$/, "");
  if (!SLUG.test(slug)) {
    throw new Error(
      `Note "${file}": nama file harus huruf kecil, angka, dan tanda hubung (mis. fail-safe-rc-boat.mdx)`,
    );
  }

  const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
  const { data, content } = matter(raw);

  for (const key of REQUIRED) {
    if (!data[key]) {
      throw new Error(`Note "${file}" kekurangan frontmatter: ${key}`);
    }
  }
  if (!(data.category in noteCategoryLabels)) {
    throw new Error(
      `Note "${file}": category "${data.category}" tidak dikenal (pilihan: ${Object.keys(noteCategoryLabels).join(", ")})`,
    );
  }

  // gray-matter bisa mengubah tanggal jadi objek Date; kita pakai "YYYY-MM".
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 7)
      : String(data.date);
  if (!MONTH.test(date)) {
    throw new Error(`Note "${file}": date "${date}" harus berformat "YYYY-MM" (mis. "2026-08")`);
  }

  return { ...(data as NoteFrontmatter), date, slug, content };
}

/** Daftar note (tanpa isi), terbaru dulu, draft disembunyikan. */
export function getAllNotes(): Note[] {
  return listNoteFiles()
    .map(readNote)
    .filter((n) => n.published !== false)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
    .map(({ content: _content, ...meta }) => meta);
}

export function getNoteBySlug(slug: string): NoteWithContent | undefined {
  const file = `${slug}.mdx`;
  if (!listNoteFiles().includes(file)) return undefined;
  const note = readNote(file);
  return note.published === false ? undefined : note;
}

/** Untuk generateStaticParams() di /notes/[slug]. */
export const getNoteSlugs = (): string[] => getAllNotes().map((n) => n.slug);
