import type { SiteConfig } from "@/types";

// Ditulis sekali, dipakai di halaman Contact dan footer.
const EMAIL = "sholumaz@gmail.com"; // TODO: ganti dengan emailmu

export const siteConfig: SiteConfig = {
  name: "Abdullah Sholum",
  role: "Software & IoT Developer",
  supportingIdentity: "IT Developer · IoT · Embedded Systems",
  tagline:
    "Membangun solusi dari masalah nyata, dari perangkat embedded sampai aplikasi software.",
  url: "https://example.com", 
  email: EMAIL,
  whatsapp: "6285608126017",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    // { label: "Design", href: "/design" },
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
    { label: "GitHub", href: "https://github.com/Abdullah-Sholum", icon: "github" }, 
    { label: "LinkedIn", href: "http://linkedin.com/in/abdullah-sholum-bba6541b5/?isSelfProfile=true", icon: "linkedin" }, 
    { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
  ],
};
