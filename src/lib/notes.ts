import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Note, NoteFrontmatter, NoteWithContent } from "@/types";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

const REQUIRED: (keyof NoteFrontmatter)[] = ["title", "date", "summary", "category"];

function listNoteFiles(): string[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    // File berawalan "_" (mis. _template.mdx) diabaikan.
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"));
}

function readNote(file: string): NoteWithContent {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
  const { data, content } = matter(raw);

  for (const key of REQUIRED) {
    if (!data[key]) {
      throw new Error(`Note "${file}" kekurangan frontmatter: ${key}`);
    }
  }
  // gray-matter bisa mengubah date jadi objek Date.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  return { ...(data as NoteFrontmatter), date, slug, content };
}

/** Daftar note (tanpa isi), terbaru dulu, draft disembunyikan. */
export function getAllNotes(): Note[] {
  return listNoteFiles()
    .map(readNote)
    .filter((n) => n.published !== false)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ content: _content, ...meta }) => meta);
}

export function getNoteBySlug(slug: string): NoteWithContent | undefined {
  const file = `${slug}.mdx`;
  if (!listNoteFiles().includes(file)) return undefined;
  const note = readNote(file);
  return note.published === false ? undefined : note;
}

export const getNoteSlugs = (): string[] => getAllNotes().map((n) => n.slug);
