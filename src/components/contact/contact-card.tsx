import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkButton } from "@/components/shared/link-button";

interface ContactCardProps {
  title: string;
  description: string;
  /** Teks yang ditampilkan, contoh alamat email atau nomor. */
  value: string;
  href: string;
  actionLabel: string;
  /** Link keluar: buka tab baru. */
  external?: boolean;
}

/** Satu cara menghubungi. Murni presentasional. */
export function ContactCard({
  title,
  description,
  value,
  href,
  actionLabel,
  external,
}: ContactCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="break-all font-medium">{value}</p>
        <LinkButton href={href} external={external}>
          {actionLabel}
        </LinkButton>
      </CardContent>
    </Card>
  );
}
