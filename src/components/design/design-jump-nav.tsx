interface DesignJumpNavProps {
  items: { id: string; label: string }[];
}

/** Chip tautan ke tiap jenis karya di halaman yang sama. */
export function DesignJumpNav({ items }: DesignJumpNavProps) {
  return (
    <nav aria-label="Jenis karya">
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="inline-flex rounded-full border px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
