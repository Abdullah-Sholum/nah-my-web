import type { MediaImage } from "./common";

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

/** Satu bagian bercerita di halaman /about. */
export interface AboutSectionContent {
  /** Dipakai sebagai anchor: /about#how-i-see-problems */
  id: string;
  title: string;
  /** Satu kalimat inti di bawah judul. */
  lead: string;
  paragraphs: string[];
  /** Kalimat pilihan yang ditampilkan lebih besar. Opsional. */
  quote?: string;
  /** Foto untuk bagian ini. Opsional: tidak tampil jika kosong. */
  image?: MediaImage;
  /** Tampilkan diagram alur kerja (about.workflow) di bagian ini. */
  showWorkflow?: boolean;
}

export interface AboutContent {
  /** Paragraf ringkas "About Me": tampil di Home. */
  summary: string[];
  /** Satu baris pengantar di bawah judul halaman /about. */
  intro: string;
  /** Bagian-bagian cerita di /about. */
  sections: AboutSectionContent[];
  /** Potret opsional di halaman /about. */
  portrait?: MediaImage;
  education: string;
  fields: string[];
  interests: string[];
  /** Alur cara bekerja, urut (diagram di /about, bagian showWorkflow). */
  workflow: string[];
  currentFocus: string;
  /** Slug project yang menjadi fokus saat ini. */
  currentFocusSlug: string;
  frequentTech: string[];
}

/** Entri timeline perkembangan project (ditampilkan di bawah /projects). */
export interface TimelineEntry {
  id: string;
  title: string;
  /** Contoh: "2023" atau "2024 - sekarang". Opsional sampai kamu isi. */
  period?: string;
  description?: string;
  /** Jika diisi, entri menaut ke /projects/[slug] atau /research/[slug]. */
  href?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
}

export interface Certification {
  title: string;
  issuer?: string;
  date?: string;
  href?: string;
}

/** Pengalaman diambil dari data/experience.ts (satu sumber). */
export interface ResumeContent {
  cvUrl: string;
  summary: string;
  education: Education[];
  /** Slug project/research yang ditampilkan di resume. */
  selectedProjectSlugs: string[];
  selectedResearchSlugs: string[];
  certifications: Certification[];
}
