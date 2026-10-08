interface AboutJumpNavProps {
  sections: { id: string; title: string }[];
}

/** Tautan anchor ke tiap bagian halaman. */
export function AboutJumpNav({ sections }: AboutJumpNavProps) {
  return (
    <nav aria-label="Bagian di halaman ini">
      <ol className="flex flex-wrap gap-2">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-xs tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
