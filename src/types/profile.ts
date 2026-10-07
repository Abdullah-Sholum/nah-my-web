export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface AboutContent {
  /** Paragraf "About Me": tampil di Home dan di awal /about. */
  summary: string[];
  /** Paragraf tambahan yang personal/reflektif: hanya tampil di /about. */
  story: string[];
  education: string;
  fields: string[];
  interests: string[];
  /** Alur cara bekerja, urut. */
  workflow: string[];
  currentFocus: string;
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
