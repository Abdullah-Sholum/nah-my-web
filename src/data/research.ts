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
    venue: "JURNAL ILKOM",
    year: "2026",
    status: "published", // ASUMSI: sudah terbit. Ubah jika "accepted" / "under-review".
    sinta: 2,
    // TODO: ringkasan 2 kalimat tentang temuan utama
    summary:
      "Perbandingan model deep learning ringan (CNN, MobileNetV2, EfficientNetV2) untuk klasifikasi penyakit paru.",
    technologies: ["Python", "Deep Learning", "CNNN", "MobileNetV2", "EfficientNetV2"],
    featured: true,
    // DUMMY: tautan dan PDF contoh. Ganti dengan yang asli.
    url: "https://jurnal.fikom.umi.ac.id/index.php/ILKOM/article/view/3351",
    pdf: "/research/paper-lung.pdf",
  },

  // ---------- Collaborations (penulis ke-n) ----------
  // DUMMY di bawah ini.
  {
    slug: "dummy-collab-1",
    title: "Dummy Paper A: Contoh Artikel Kolaborasi",
    authors: ["Penulis Satu", "Abdullah Sholum", "Penulis Tiga", "Penulis Empat"],
    myPosition: 2,
    venue: "Jurnal Dummy Satu",
    year: "2025",
    status: "published",
    sinta: 1,
    volume: "10",
    issue: "2",
    pages: "101–112",
    contribution: "Contoh kontribusi: menyiapkan dataset dan melakukan pelatihan model.",
    url: "https://example.com/dummy-a",
  },
  {
    slug: "dummy-collab-2",
    title: "Dummy Paper B: Contoh Artikel Kolaborasi Kedua",
    authors: ["Penulis Satu", "Penulis Dua", "Abdullah Sholum"],
    myPosition: 3,
    venue: "Jurnal Dummy Dua",
    year: "2024",
    status: "published",
    sinta: 2,
    contribution: "Contoh kontribusi: membangun purwarupa perangkat IoT.",
    url: "https://example.com/dummy-b",
    pdf: "/research/dummy-paper.pdf",
  },
  {
    slug: "dummy-collab-3",
    title: "Dummy Paper C: Contoh Artikel yang Sudah Diterima",
    authors: ["Penulis Satu", "Penulis Dua", "Penulis Tiga", "Penulis Empat", "Abdullah Sholum"],
    myPosition: 5,
    venue: "Jurnal Dummy Tiga",
    year: "2025",
    status: "accepted",
    sinta: 2,
    // sengaja tanpa tautan, kontribusi, dan PDF: untuk melihat tampilan minimal
  },
];
