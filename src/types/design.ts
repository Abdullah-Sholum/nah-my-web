import type { MediaImage } from "./common";

/** Jenis karya. Menambah jenis = tambah di sini + satu entri di data/design.ts. */
export type DesignCategory = "poster" | "3d" | "prototype";

/** Bentuk gambar untuk satu jenis: poster tegak, lainnya mendatar. */
export type DesignAspect = "portrait" | "landscape";

export interface DesignCategoryMeta {
  id: DesignCategory;
  label: string;
  description: string;
  aspect: DesignAspect;
}

export interface DesignItem {
  slug: string;
  title: string;
  category: DesignCategory;
  summary: string;
  /** Software yang dipakai, contoh: ["CorelDRAW", "Photoshop"]. */
  software: string[];
  // --- Opsional: tampil hanya jika diisi ---
  year?: string;
  dimensions?: string;
  method?: string;
  /**
   * Minimal satu gambar (dipaksa oleh tipe tuple).
   * Gambar pertama = gambar kartu di /design.
   */
  images: [MediaImage, ...MediaImage[]];
}
