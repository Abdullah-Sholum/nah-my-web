import type { ContentStatus } from "@/types";
import { Badge } from "@/components/ui/badge";

const config: Record<
  ContentStatus,
  { label: string; variant: "default" | "secondary" | "outline" }
> = {
  completed: { label: "Completed", variant: "secondary" },
  ongoing: { label: "Ongoing", variant: "default" },
  prototype: { label: "Prototype", variant: "outline" },
  planned: { label: "Planned", variant: "outline" },
};

export function StatusBadge({ status }: { status: ContentStatus }) {
  const { label, variant } = config[status];
  return <Badge variant={variant}>{label}</Badge>;
}
