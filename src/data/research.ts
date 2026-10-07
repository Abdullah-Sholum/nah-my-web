import type { Research } from "@/types";

export const research: Research[] = [
  {
    slug: "lightweight-dl-lung-disease",
    title: "Lightweight Deep Learning Models for Lung Disease Classification",
    type: "Research / AI",
    status: "completed", // TODO: konfirmasi status
    featured: true,
    order: 1,
    summary:
      "Perbandingan model deep learning ringan untuk klasifikasi penyakit paru.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    // TODO: isi nama dataset, deskripsi, dan kelas
    dataset: undefined,
    preprocessing: ["Data Preprocessing"],
    models: ["CNN", "MobileNetV2", "EfficientNetV2"],
    metrics: ["accuracy", "auc", "precision", "recall", "f1"],
    // TODO: isi hasil nyata per model, contoh:
    // { model: "MobileNetV2", metrics: { accuracy: 0.0, auc: 0.0, ... } }
    results: [],
    // TODO: dataset visualization, training/evaluation visual, confusion matrix, model comparison
    images: [],
    links: [],
  },
];
