import * as React from "react";

import { Container } from "@/components/layout/container";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Slot opsional di bawah deskripsi (mis. tombol). */
  children?: React.ReactNode;
}

/** Judul halaman untuk /about, /projects, /research, dst. */
export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="border-b py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </div>
  );
}
