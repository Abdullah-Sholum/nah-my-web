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
  nav: NavItem[];
  social: SocialLink[];
}
