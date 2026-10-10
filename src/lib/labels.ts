import type { NoteCategory, ProjectCategory } from "@/types";

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  iot: "IoT",
  embedded: "Embedded",
  software: "Software",
  desktop: "Desktop",
  web: "Web",
  data: "Data",
};

export const noteCategoryLabels: Record<NoteCategory, string> = {
  electronics: "Electronics",
  programming: "Programming",
  iot: "IoT",
  embedded: "Embedded",
  "ai-data": "AI & Data",
  experiments: "Experiments",
};
