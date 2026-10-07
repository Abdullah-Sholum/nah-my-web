export type DesignCategory = "3d" | "graphic" | "motion";

export interface DesignItem {
  slug: string;
  title: string;
  category: DesignCategory;
  /** Contoh: "Logo", "Poster", "Catamaran Hull". */
  subcategory?: string;
  purpose: string;
  dimensions?: string;
  /** Proses desain. */
  process?: string;
  /** Metode pembuatan (mis. 3D print, vektor, render). */
  method?: string;
  tools: string[];
  media: { type: "image" | "video"; src: string; alt: string };
  year?: string;
}

export interface DesignCategoryMeta {
  id: DesignCategory;
  label: string;
  description: string;
  topics: string[];
}
