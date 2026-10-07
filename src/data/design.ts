import type { DesignCategoryMeta, DesignItem } from "@/types";

export const designCategories: DesignCategoryMeta[] = [
  {
    id: "3d",
    label: "3D & Engineering",
    description: "Desain 3D produk dan engineering.",
    topics: [
      "RC Boat",
      "Catamaran Hull",
      "Conveyor",
      "PC Airflow / Mounting",
      "3D Printed Components",
      "Furniture",
      "Mechanical Prototypes",
    ],
  },
  {
    id: "graphic",
    label: "Graphic Design",
    description: "Desain grafis dan vektor.",
    topics: ["Logo", "Poster", "Banner", "Vector"],
  },
  {
    id: "motion",
    label: "Video & Motion",
    description: "Video editing dan motion graphics.",
    topics: ["Video Editing", "Motion Graphics"],
  },
];

/**
 * Kosong dulu. Contoh item:
 * {
 *   slug: "catamaran-hull-v1", title: "Catamaran Hull v1", category: "3d",
 *   subcategory: "Catamaran Hull", purpose: "...", tools: ["SketchUp"],
 *   media: { type: "image", src: "/design/hull-v1.webp", alt: "Render hull v1" },
 * }
 */
export const designItems: DesignItem[] = [];
