import type { Metadata } from "next";

import { noteCategoryLabels } from "@/lib/labels";
import { getAllNotes } from "@/lib/notes";
import { Container } from "@/components/layout/container";
import { NoteListItem } from "@/components/notes/note-list-item";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Technical Notes",
  description: "Catatan singkat dari masalah teknis yang saya temui.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <PageHeader
        title="Technical Notes"
        // DRAF: ubah sesuai gayamu.
        description="Catatan singkat dari masalah yang saya temui di project, dan apa yang saya amati saat menyelesaikannya."
      />

      <section className="py-12">
        <Container>
          {notes.length === 0 ? (
            <p className="text-muted-foreground">Belum ada catatan.</p>
          ) : (
            <ul className="divide-y">
              {notes.map((note) => (
                <NoteListItem
                  key={note.slug}
                  href={`/notes/${note.slug}`}
                  title={note.title}
                  summary={note.summary}
                  date={note.date}
                  categoryLabel={noteCategoryLabels[note.category]}
                  tags={note.tags}
                />
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
