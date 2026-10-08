import Image from "next/image";

import type { AboutSectionContent } from "@/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { StepFlow } from "@/components/shared/step-flow";

interface AboutSectionProps {
  section: AboutSectionContent;
  /** Urutan (mulai 0). Dipakai untuk nomor dan garis pemisah. */
  index: number;
  /** Langkah alur kerja, dipakai jika section.showWorkflow. */
  workflow: string[];
}

/** Satu bagian cerita: judul di kiri, isi di kanan (bertumpuk di ponsel). */
export function AboutSection({ section, index, workflow }: AboutSectionProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <section
      id={section.id}
      className={cn("scroll-mt-14 py-12", index > 0 && "border-t")}
    >
      <Container>
        <div className="grid gap-6 md:grid-cols-[16rem_1fr] md:gap-12">
          <header>
            <p className="text-sm font-medium tabular-nums text-muted-foreground">
              {number}
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{section.lead}</p>
          </header>

          <div className="max-w-[65ch] space-y-8">
            <div className="space-y-4 leading-7">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {section.showWorkflow && (
              <div className="rounded-lg border p-5">
                <p className="mb-5 text-sm font-medium">Cara saya bekerja</p>
                <StepFlow steps={workflow.map((label) => ({ label }))} />
              </div>
            )}

            {section.quote && (
              <blockquote className="border-l-2 border-foreground/30 pl-5 text-lg font-medium leading-snug">
                {section.quote}
              </blockquote>
            )}

            {section.image && (
              <figure className="space-y-2">
                <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(min-width: 768px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
                {section.image.caption && (
                  <figcaption className="text-xs text-muted-foreground">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
