import { about } from "@/data/about";
import { LinkButton } from "@/components/shared/link-button";
import { Section } from "@/components/shared/section";

export function AboutPreview() {
  return (
    <Section title="About Me" className="border-t">
      <div className="max-w-3xl space-y-4 text-muted-foreground">
        {about.summary.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8">
        <LinkButton href="/about" variant="outline">
          More about me
        </LinkButton>
      </div>
    </Section>
  );
}
