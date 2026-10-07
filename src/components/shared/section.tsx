import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

interface SectionProps {
  /** Anchor, contoh id="experience" -> /resume#experience */
  id?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  className?: string;
  children: React.ReactNode;
}

/** Blok konten dengan judul. Dipakai di Home, About, Resume, dll. */
export function Section({
  id,
  title,
  description,
  action,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-14 py-12", className)}>
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            {description && (
              <p className="mt-1 text-muted-foreground">{description}</p>
            )}
          </div>
          {action && (
            <Link
              href={action.href}
              className="shrink-0 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {action.label} →
            </Link>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
