import * as React from "react";

/** Satu blok berjudul di halaman detail (Problem, Solution, dst). */
export function CaseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
