import { siteConfig } from "@/config/site";
import { Container } from "./container";

const YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {YEAR} {siteConfig.name}
        </p>
        <ul className="flex items-center gap-4">
          {siteConfig.social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
