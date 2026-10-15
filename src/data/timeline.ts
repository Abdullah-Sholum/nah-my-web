import type { TimelineEntry } from "@/types";

/** Urut dari awal ke terbaru. Isi `period` dan `description` nanti. */

export const projectTimeline: TimelineEntry[] = [
  {
    id: "electronics-experiment",
    title: "Electronics Experiments",
  },
  {
    id: "electronics-boat-experiment",
    title: "Electronics Boat Experiments",
  },
  {
    id: "arduino-experiment",
    title: "Arduino Experiments",
  },
  {
    id: "power-amplifier-experiment",
    title: "Power Amplifier Experiments",
  },
  {
    id: "esp32-experiment",
    title: "ESP32 Experiments",
  },
  {
    id: "iot-experiment",
    title: "IoT Experiments",
  },
  {
    id: "macropad-v1",
    title: "MacroPad Version 1",
  },
  {
    id: "waterph-iot",
    title: "Water pH IoT",
  },
  {
    id: "audio-system-experiment",
    title: "Audio System Experiments",
  },
  {
    id: "smart-door-lock",
    title: "Smart Door Lock IoT",
    description:
      "Solusi keamanan rumah yang terhubung ke internet, dengan akses PIN dan RFID serta fail-secure.",
    href: "/projects/smart-door-lock-iot",
  },
  {
    id: "macropad-v2-v3",
    title: "MacroPad Versions 2–3",
  },
  {
    id: "macropad-desktop-app",
    title: "MacroPad / Desktop Application",
    href: "/projects/macropad-audio-mixer",
  },
  {
    id: "ai-research",
    title: "AI Research",
    href: "/research/lightweight-dl-lung-disease",
  },
  {
    id: "django-finsight",
    title: "DjangoFinSight",
    href: "/projects/django-finsight",
  },
  {
    id: "rc-boat-trash-skimmer",
    title: "RC Boat Trash Skimmer",
    href: "/projects/rc-boat-trash-skimmer",
  },
];
