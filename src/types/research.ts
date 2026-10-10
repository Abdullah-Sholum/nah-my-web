/** Peringkat SINTA jurnal (1 = tertinggi). */
export type SintaRank = 1 | 2 | 3 | 4 | 5 | 6;

export type PaperStatus = "published" | "accepted" | "under-review";

/** Satu artikel ilmiah. Peran kamu (penulis pertama / ke-n) dihitung dari urutan penulis. */
export interface ResearchPaper {
  slug: string;
  title: string;
  /** Daftar penulis, urutan dan ejaan persis seperti di jurnal. */
  authors: string[];
  /**
   * Posisi namamu di `authors`, mulai dari 1.
   * 1 = penulis pertama (tampil di "Lead Research"), lainnya = "Collaborations".
   */
  myPosition: number;
  /** Nama jurnal / prosiding. */
  venue: string;
  year: string;
  status: PaperStatus;

  // --- Opsional: tampil hanya jika diisi ---
  sinta?: SintaRank;
  volume?: string;
  issue?: string;
  pages?: string;
  summary?: string;
  /** Satu kalimat peranmu. Sangat disarankan untuk artikel kolaborasi. */
  contribution?: string;
  /** Tag teknologi. */
  technologies?: string[];
  /** Tampil di Home (Featured Work). */
  featured?: boolean;

  /** DOI tanpa awalan, contoh "10.1234/abcd.2025.01". */
  doi?: string;
  /** Halaman artikel di situs jurnal (dipakai jika tidak ada DOI, atau menimpa DOI). */
  url?: string;
  /** PDF yang kamu unggah ke public/, contoh "/research/nama-file.pdf". */
  pdf?: string;
}
