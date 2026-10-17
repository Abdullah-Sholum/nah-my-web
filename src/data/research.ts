import type { ResearchPaper } from "@/types";

/**
 * Daftar artikel. Urutan di sini bebas: lib/research.ts mengurutkan terbaru dulu.
 *
 * Bagian bertanda DUMMY adalah contoh agar tampilan bisa diuji.
 * Ganti dengan data asli (jangan mengarang: salin dari jurnal).
 */
export const research: ResearchPaper[] = [
  // ---------- Lead Research (penulis pertama) ----------
  {
    slug: "lightweight-dl-lung-disease",
    title: "Lightweight Deep Learning Models for Lung Disease Classification Using Chest X-ray Images",
    // TODO: ganti dengan daftar penulis asli, sesuai urutan di jurnal.
    authors: ["Abdullah Sholum(1*)", "Aji Prasetya Wibawa(2)", "Ardhana Putra Agustavada(3)", "Dafa Fadhilah Hilmi(4)", "Felix Andika Dwiyanto(5)"],
    myPosition: 1,
    venue: "ILKOM",
    year: "2026",
    status: "published",
    sinta: 2,
    summary:
      "Perbandingan model deep learning ringan (CNN, MobileNetV2, EfficientNetV2) untuk klasifikasi penyakit paru.",
    technologies: ["Python", "Deep Learning", "CNNN", "MobileNetV2", "EfficientNetV2"],
    featured: true,
    url: "https://jurnal.fikom.umi.ac.id/index.php/ILKOM/article/view/3351",
    pdf: "/research/paper-lung.pdf",
  },

  // ---------- Collaborations (penulis ke-n) ----------
  // DUMMY di bawah ini.
  {
    slug: "ORPHOLOGICAL CHARACTERIZATION OF BRAIN TUMOR TISSUE IN MRI IMAGES USING CNN AND TRANSFER LEARNING",
    title: "ORPHOLOGICAL CHARACTERIZATION OF BRAIN TUMOR TISSUE IN MRI IMAGES USING CNN AND TRANSFER LEARNING",
    authors: ["Dafa Fadhilah Hilmi 1", "Aji Prasetya Wibawa 1*", "Ardha Ardhana Putra Agustavada 1", "Abdullah Sholum 1", "Felix Andika Dwiyanto 2"],
    myPosition: 4,
    venue: "BIOMA",
    year: "2026",
    status: "published",
    sinta: 2,
    volume: "15",
    issue: "1",
    contribution: "Menulis bagian Methode",
    url: "https://doi.org/10.26877/bioma.v15i1.3550",
  },
  {
    slug: "A Comparative Analysis of Lightweight Deep Learning Models for CT-Based Kidney Disease Classification to Support Early Detection in Geriatric Care",
    title: "A Comparative Analysis of Lightweight Deep Learning Models for CT-Based Kidney Disease Classification to Support Early Detection in Geriatric Care",
    authors: ["Ardha Ardhana Putra Agustavada 1", "Abdullah Sholum 1", "Dafa Fadhilah Hilmi 1", "Aji Prasetya Wibawa 1*", "Felix Andika Dwiyanto 2"],
    myPosition: 2,
    venue: "IJEEEMI",
    year: "2026",
    status: "published",
    sinta: 2,
    volume: "8",
    issue: "2",
    contribution: "Penulisan Bagian Introduction dan Conclusion",
    url: "https://doi.org/10.35882/ijeeemi.v8i2.325",
  },
];
