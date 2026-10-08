export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
