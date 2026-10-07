import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    label: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "C/C++ / Arduino", "C#", "HTML/CSS"],
  },
  {
    id: "software",
    label: "Software Development",
    items: [
      "Django",
      "Next.js",
      ".NET / WPF",
      "REST API",
      "Git",
      "Database",
      "Desktop Application",
      "Laravel",
    ],
  },
  {
    id: "hardware-iot",
    label: "Hardware & IoT",
    items: [
      "Arduino",
      "ESP32",
      "NRF24L01",
      "Sensor",
      "Relay",
      "Motor Driver",
      "PWM",
      "Embedded Programming",
    ],
  },
  {
    id: "design-engineering",
    label: "Design & Engineering",
    // After Effects & Autodesk Eagle dihapus sementara (belum terdokumentasi).
    items: [
      "SketchUp",
      "CorelDRAW",
      "Premiere Pro",
      "2D/3D Modeling",
      "Proteus",
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "CNN",
      "MobileNetV2",
      "EfficientNetV2",
      "Data Preprocessing",
    ],
  },
];
