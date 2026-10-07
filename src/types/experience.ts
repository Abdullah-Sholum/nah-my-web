export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  /** Label status kerja, contoh: "Paruh waktu". Tampil sebagai badge. */
  employmentType?: string;
  /** Format "YYYY-MM". */
  start: string;
  /** Format "YYYY-MM". Kosongkan jika masih berjalan. */
  end?: string;
  /** Apa yang kamu kerjakan. Tampil di /resume (tidak di Home). */
  highlights?: string[];
}
