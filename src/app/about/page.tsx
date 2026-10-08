"use client";

import { about } from "@/data/about";
import { Separator } from "@/components/ui/separator";

export default function AboutStory() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="space-y-20 md:space-y-28">
        {about.story.map((section, index) => (
          <article
            key={section.header}
            className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-16"
          >
            {/* Section number + heading */}
            <div className="md:sticky md:top-24 md:self-start">
              <div className="mb-3 text-sm font-medium text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {section.header}
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="max-w-3xl space-y-6">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-base leading-8 text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {index < about.story.length - 1 && (
              <Separator className="md:col-span-2" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}