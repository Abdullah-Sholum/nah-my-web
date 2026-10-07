import type { ResumeContent } from "@/types";

export const resume: ResumeContent = {
  cvUrl: "/cv/Abdullah-Sholum-CV.pdf", // TODO: taruh file di public/cv/
  summary: "TODO: isi professional summary.",
  education: [
    { degree: "Teknik Informatika", institution: "TODO: nama institusi" },
  ],
  selectedProjectSlugs: [
    "rc-boat-trash-skimmer",
    "django-finsight",
    "macropad-audio-mixer",
  ],
  selectedResearchSlugs: ["lightweight-dl-lung-disease"],
  // Pilih yang mendukung positioning Software & IoT Developer.
  certifications: [],
};
