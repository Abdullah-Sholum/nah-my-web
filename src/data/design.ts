import type { DesignCategoryMeta, DesignItem } from "@/types";

export const designCategories: DesignCategoryMeta[] = [
  {
    id: "poster",
    label: "Poster",
    description: "Desain poster dan materi visual.",
    aspect: "portrait",
  },
  {
    id: "3d",
    label: "3D Design",
    description: "Desain 3D produk dan komponen.",
    aspect: "landscape",
  },
  {
    id: "prototype",
    label: "Prototype Design",
    // DRAF: ubah sesuai isi karyamu.
    description: "Rancangan prototype perangkat, dari skema sampai tata letak.",
    aspect: "landscape",
  },
];

/**
 * ========= DUMMY =========
 * Semua item di bawah memakai gambar placeholder di public/design/dummy/.
 * Ganti dengan karya asli: ubah judul, ringkasan, software, dan `src` gambar.
 * Jangan hapus semuanya sebelum ada minimal satu item asli
 * (generateStaticParams yang kosong membuat build gagal).
 */
const img = (src: string, alt: string) => ({ src, alt });

export const designItems: DesignItem[] = [
  // ---------- Poster ----------
  {
    slug: "dummy-poster-01",
    title: "Dummy Poster 01",
    category: "poster",
    summary: "Contoh ringkasan untuk poster dummy. Ganti dengan deskripsi singkat karyamu.",
    software: ["CorelDRAW"],
    year: "2025",
    dimensions: "A3 (297 × 420 mm)",
    images: [
      img("/design/dummy/poster-01-1.webp", "Dummy poster 01, gambar 1"),
      img("/design/dummy/poster-01-2.webp", "Dummy poster 01, gambar 2"),
      img("/design/dummy/poster-01-3.webp", "Dummy poster 01, gambar 3"),
    ],
  },
  {
    slug: "dummy-poster-02",
    title: "Dummy Poster 02",
    category: "poster",
    summary: "Contoh ringkasan untuk poster dummy kedua.",
    software: ["Photoshop"],
    images: [
      img("/design/dummy/poster-02-1.webp", "Dummy poster 02, gambar 1"),
      img("/design/dummy/poster-02-2.webp", "Dummy poster 02, gambar 2"),
      img("/design/dummy/poster-02-3.webp", "Dummy poster 02, gambar 3"),
    ],
  },
  {
    slug: "dummy-poster-03",
    title: "Dummy Poster 03",
    category: "poster",
    summary: "Contoh ringkasan untuk poster dummy ketiga, memakai dua software.",
    software: ["CorelDRAW", "Photoshop"],
    year: "2024",
    images: [
      img("/design/dummy/poster-03-1.webp", "Dummy poster 03, gambar 1"),
      img("/design/dummy/poster-03-2.webp", "Dummy poster 03, gambar 2"),
      img("/design/dummy/poster-03-3.webp", "Dummy poster 03, gambar 3"),
    ],
  },

  // ---------- 3D Design ----------
  {
    slug: "dummy-3d-01",
    title: "Dummy 3D 01",
    category: "3d",
    summary: "Contoh ringkasan untuk desain 3D dummy.",
    software: ["SketchUp"],
    method: "Pemodelan solid dengan SketchUp",
    year: "2025",
    images: [
      img("/design/dummy/3d-01-1.webp", "Dummy 3D 01, gambar 1"),
      img("/design/dummy/3d-01-2.webp", "Dummy 3D 01, gambar 2"),
      img("/design/dummy/3d-01-3.webp", "Dummy 3D 01, gambar 3"),
    ],
  },
  {
    slug: "dummy-3d-02",
    title: "Dummy 3D 02",
    category: "3d",
    summary: "Contoh ringkasan untuk desain 3D dummy kedua.",
    software: ["SketchUp"],
    images: [
      img("/design/dummy/3d-02-1.webp", "Dummy 3D 02, gambar 1"),
      img("/design/dummy/3d-02-2.webp", "Dummy 3D 02, gambar 2"),
      img("/design/dummy/3d-02-3.webp", "Dummy 3D 02, gambar 3"),
    ],
  },
  {
    slug: "dummy-3d-03",
    title: "Dummy 3D 03",
    category: "3d",
    summary: "Contoh ringkasan untuk desain 3D dummy ketiga.",
    software: ["SketchUp"],
    dimensions: "120 × 80 × 40 mm",
    images: [
      img("/design/dummy/3d-03-1.webp", "Dummy 3D 03, gambar 1"),
      img("/design/dummy/3d-03-2.webp", "Dummy 3D 03, gambar 2"),
      img("/design/dummy/3d-03-3.webp", "Dummy 3D 03, gambar 3"),
    ],
  },

  // ---------- Prototype Design ----------
  {
    slug: "dummy-prototype-01",
    title: "Dummy Prototype 01",
    category: "prototype",
    summary: "Contoh ringkasan untuk desain prototype dummy: diagram sistem dan skema.",
    software: ["draw.io", "Eagle"],
    year: "2025",
    images: [
      img("/design/dummy/prototype-01-1.webp", "Dummy prototype 01, gambar 1"),
      img("/design/dummy/prototype-01-2.webp", "Dummy prototype 01, gambar 2"),
      img("/design/dummy/prototype-01-3.webp", "Dummy prototype 01, gambar 3"),
    ],
  },
  {
    slug: "dummy-prototype-02",
    title: "Dummy Prototype 02",
    category: "prototype",
    summary: "Contoh ringkasan untuk desain prototype dummy kedua.",
    software: ["draw.io"],
    images: [
      img("/design/dummy/prototype-02-1.webp", "Dummy prototype 02, gambar 1"),
      img("/design/dummy/prototype-02-2.webp", "Dummy prototype 02, gambar 2"),
      img("/design/dummy/prototype-02-3.webp", "Dummy prototype 02, gambar 3"),
    ],
  },
];
