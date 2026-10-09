export interface NavItem {
  label: string;
  href?: string;
  /** Jika ada, item tampil sebagai dropdown. */
  children?: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "link";
}

export interface SiteConfig {
  name: string;
  role: string;
  supportingIdentity: string;
  tagline: string;
  url: string;
  email: string;
  /**
   * Nomor WhatsApp: hanya digit, format internasional, tanpa "+", spasi, atau "0" di depan.
   * Contoh: 0812-3456-7890 ditulis "6281234567890".
   */
  whatsapp: string;
  nav: NavItem[];
  social: SocialLink[];
}
