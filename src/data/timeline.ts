import type { TimelineEntry } from "@/types";

/** Urut dari awal ke terbaru. Isi `period` dan `description` nanti. */
export const projectTimeline: TimelineEntry[] = [
  { id: "arduino-electronics", title: "Arduino / Electronics Experiments" },
  { id: "iot-esp32", title: "IoT / ESP32" },
  {
    // ASUMSI posisi: ubah urutannya jika kronologinya berbeda.
    id: "smart-door-lock",
    title: "SmartDoorLockIOT",
    description:
      "Solusi keamanan rumah yang terhubung ke internet, dengan akses PIN dan RFID serta fail-secure.",
  },
  { id: "rc-boat", title: "RC Boat", href: "/projects/rc-boat-trash-skimmer" },
  { id: "macropad", title: "Desktop Application / MacroPad", href: "/projects/macropad-audio-mixer" },
  { id: "django-finsight", title: "DjangoFinSight", href: "/projects/django-finsight" },
  { id: "ai-research", title: "AI Research", href: "/research#lightweight-dl-lung-disease" },
  { id: "iot-aquaculture", title: "IoT Aquaculture System" },
];
