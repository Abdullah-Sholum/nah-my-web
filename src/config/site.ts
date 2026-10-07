import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Abdullah Sholum",
  role: "Software & IoT Developer",
  supportingIdentity: "IT Developer · IoT · Embedded Systems",
  // TODO: draft, silakan ubah sesuai gayamu.
  tagline:
    "Membangun solusi dari masalah nyata, dari perangkat embedded sampai aplikasi software.",
  url: "https://example.com", // TODO: ganti dengan domain asli
  email: "you@example.com", // TODO
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Design", href: "/design" },
    {
      label: "Notes",
      children: [
        { label: "Research", href: "/research" },
        { label: "Technical Notes", href: "/notes" },
      ],
    },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/", icon: "github" }, // TODO
    { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "linkedin" }, // TODO
    { label: "Email", href: "mailto:you@example.com", icon: "mail" }, // TODO
  ],
};
