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
    description:
      "Pengembangan protoype Macropad Pertama, sebuah slider untuk mengotrol audio aplikasi di komputer."
  },
  {
    id: "waterph-iot",
    title: "Water pH IoT",
    description:
      "Sistem monitoring pH air menggunakan teknologi IoT, ESP32."
  },
  {
    id: "audio-system-experiment",
    title: "Audio System Experiments",
    description:
      "Experimen sistem audio 2.1 dengan amplifier, subwoofer, dan speaker monitor."
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
    description:
      "Pengembangan Macropad dengan fitur lebih lengkap namun dengan bentuk lebih ringkas."
  },
  {
    id: "macropad-desktop-app",
    title: "MacroPad / Desktop Application",
    description:
      "Aplikasi desktop untuk mengelola dan mengkonfigurasi MacroPad.",
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
