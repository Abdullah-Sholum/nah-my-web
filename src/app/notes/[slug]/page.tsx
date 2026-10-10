import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { noteCategoryLabels } from "@/lib/labels";
import { getNoteBySlug, getNoteSlugs } from "@/lib/notes";
import { getProjectBySlug } from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { NoteDetail } from "@/components/notes/note-detail";

type Props = { params: Promise<{ slug: string }> };

// Catatan: daftar tidak boleh kosong di mode Cache Components.
export function generateStaticParams() {
  return getNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};
  return { title: note.title, description: note.summary };
}

// Tidak async: halaman tidak menunggu URL. Hanya NoteContent yang menunggu.
export default function NotePage({ params }: Props) {
  return (
    <Suspense fallback={<NoteFallback />}>
      <NoteContent params={params} />
    </Suspense>
  );
}

async function NoteContent({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const related = note.project ? getProjectBySlug(note.project) : undefined;

  return (
    <NoteDetail
      note={note}
      categoryLabel={noteCategoryLabels[note.category]}
      project={
        related ? { title: related.title, href: `/projects/${related.slug}` } : undefined
      }
    />
  );
}

function NoteFallback() {
  return (
    <Container className="max-w-3xl space-y-4 py-12">
      <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
      <div className="h-4 w-full animate-pulse rounded bg-muted" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
    </Container>
  );
}
