import Link from "next/link";

export interface SelectedWorkItem {
  href: string;
  title: string;
  description: string;
  kind: "Project" | "Research";
}

export function SelectedWork({ items }: { items: SelectedWorkItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.href}>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {item.kind}
          </p>
          <Link
            href={item.href}
            className="font-medium underline-offset-4 hover:underline"
          >
            {item.title}
          </Link>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
