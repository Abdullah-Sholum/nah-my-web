import type { SiteConfig } from "@/types";

// Ditulis sekali, dipakai di halaman Contact dan footer.
const EMAIL = "sholum1618@gmail.com"; // TODO: ganti dengan emailmu

export const siteConfig: SiteConfig = {
  name: "Abdullah Sholum",
  role: "Software & IoT Developer",
  supportingIdentity: "IT Developer · IoT · Embedded Systems",
  // TODO: draft, silakan ubah sesuai gayamu.
  tagline:
    "Membangun solusi dari masalah nyata, dari perangkat embedded sampai aplikasi software.",
  url: "https://example.com", // TODO: ganti dengan domain asli
  email: EMAIL,
  // TODO: ganti dengan nomormu. Hanya digit, format internasional (62...).
  whatsapp: "6285608126017",
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
    { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
  ],
};
