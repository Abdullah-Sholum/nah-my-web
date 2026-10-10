import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

import type { NoteWithContent } from "@/types";
import { formatMonth } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { mdxComponents } from "./mdx-components";

interface NoteDetailProps {
  note: NoteWithContent;
  categoryLabel: string;
  /** Project terkait (opsional). */
  project?: { title: string; href: string };
}

export function NoteDetail({ note, categoryLabel, project }: NoteDetailProps) {
  return (
    <>
      <div className="border-b py-12">
        <Container className="max-w-3xl space-y-5">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Technical Notes
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline">{categoryLabel}</Badge>
            <span className="text-sm text-muted-foreground">{formatMonth(note.date)}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{note.title}</h1>
          <p className="text-muted-foreground">{note.summary}</p>

          {note.tags && note.tags.length > 0 && (
            <p className="text-sm text-muted-foreground">{note.tags.join(" · ")}</p>
          )}

          {project && (
            <p className="text-sm">
              <span className="text-muted-foreground">Bagian dari project: </span>
              <Link href={project.href} className="font-medium underline underline-offset-4">
                {project.title}
              </Link>
            </p>
          )}
        </Container>
      </div>

      <Container className="max-w-3xl py-12">
        <MDXRemote source={note.content} components={mdxComponents} />
      </Container>
    </>
  );
}
