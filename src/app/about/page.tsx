import type { Metadata } from "next";

import { about } from "@/data/about";
import { getProjectBySlug } from "@/lib/projects";
import { AboutClosing } from "@/components/about/about-closing";
import { AboutJumpNav } from "@/components/about/about-jump-nav";
import { AboutPortrait } from "@/components/about/about-portrait";
import { AboutSection } from "@/components/about/about-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  const focusProject = getProjectBySlug(about.currentFocusSlug);

  return (
    <>
      <PageHeader title="About" description={about.intro}>
        <AboutJumpNav sections={about.sections} />
      </PageHeader>

      <AboutPortrait image={about.portrait} />

      {about.sections.map((section, i) => (
        <AboutSection
          key={section.id}
          section={section}
          index={i}
          workflow={about.workflow}
        />
      ))}

      <AboutClosing
        focus={
          focusProject
            ? {
                title: focusProject.title,
                text: about.currentFocus,
                href: `/projects/${focusProject.slug}`,
              }
            : undefined
        }
      />
    </>
  );
}
