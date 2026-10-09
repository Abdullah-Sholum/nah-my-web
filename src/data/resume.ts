import type { ResumeContent } from "@/types";

export const resume: ResumeContent = {
  cvUrl: "/cv/Abdullah-Sholum-CV.pdf", // TODO: taruh file di public/cv/
  summary: "Universitas Negri  Malang, Teknik Informatika, 2025. Saat ini fokus mengembangkan sistem IoT dan aplikasi software untuk solusi masalah nyata.",
  education: [
    { degree: "Teknik Informatika", institution: "Universitas Negri Malang" },
  ],
  selectedProjectSlugs: [
    "rc-boat-trash-skimmer",
    "django-finsight",
    "macropad-audio-mixer",
    "smart-door-lock-iot",
  ],
  selectedResearchSlugs: ["lightweight-dl-lung-disease"],
  // Pilih yang mendukung positioning Software & IoT Developer.
  certifications: [],
};
