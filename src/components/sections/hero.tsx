import { siteConfig } from "@/config/site";
import { about } from "@/data/about";
import { resume } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/shared/link-button";
import { ProfilePhoto } from "@/components/shared/profile-photo";

const facts = [
  { label: "Education", value: about.education },
  { label: "Current Focus", value: about.currentFocus },
  { label: "Frequently Used", value: about.frequentTech.join(" · ") },
];

export function Hero() {
  // Foto diambil dari data/about.ts (field `portrait`). Tanpa foto, Hero satu kolom.
  const photo = about.portrait;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div
          className={cn(
            "grid gap-10",
            photo && "md:grid-cols-[1fr_16rem] md:items-center md:gap-14",
          )}
        >
          {photo && (
            // Di DOM paling awal => paling atas di ponsel; di desktop dipindah ke kanan.
            <ProfilePhoto
              image={photo}
              priority
              sizes="(min-width: 768px) 256px, 144px"
              className="w-36 md:order-last md:w-full"
            />
          )}

          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {siteConfig.supportingIdentity}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground sm:text-2xl">
              {siteConfig.role}
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              {siteConfig.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/projects">View Projects</LinkButton>
              <LinkButton href={resume.cvUrl} variant="outline" download>
                Download CV
              </LinkButton>
              <LinkButton href="/contact" variant="ghost">
                Contact Me
              </LinkButton>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid gap-6 border-t pt-8 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
