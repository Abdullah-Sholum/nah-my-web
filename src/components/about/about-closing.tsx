import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/shared/link-button";

interface AboutClosingProps {
  /** Fokus saat ini. Kartu tidak tampil jika tidak diisi. */
  focus?: { title: string; text: string; href: string };
}

/** Penutup halaman: fokus saat ini + ajakan bertindak. */
export function AboutClosing({ focus }: AboutClosingProps) {
  return (
    <section className="border-t py-12">
      <Container className="space-y-8">
        {focus && (
          <Card>
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Current focus
              </p>
              <CardTitle>{focus.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{focus.text}</p>
              <LinkButton href={focus.href} variant="outline" size="sm">
                Lihat case study
              </LinkButton>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-wrap gap-3">
          <LinkButton href="/projects">View Projects</LinkButton>
          <LinkButton href="/contact" variant="outline">
            Contact Me
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
