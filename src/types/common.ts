/** Tipe dasar yang dipakai bersama oleh Project, Research, dan Design. */

export type ContentStatus = "completed" | "ongoing" | "prototype" | "planned";

export type MediaKind =
  | "photo"
  | "render"
  | "screenshot"
  | "schematic"
  | "diagram"
  | "chart";

export interface MediaImage {
  /** Path relatif dari /public, contoh: "/projects/rc-boat/hull.webp" */
  src: string;
  alt: string;
  caption?: string;
  kind?: MediaKind;
}

export interface ExternalLink {
  label: string;
  href: string;
  kind?: "github" | "demo" | "paper" | "video" | "other";
}

/** Satu langkah dalam alur/progress, contoh: "Prototype Controller". */
export interface TimelineStep {
  label: string;
  description?: string;
}

/** Section bebas untuk melengkapi case study (Requirements, Testing, dst). */
export interface ContentSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}
