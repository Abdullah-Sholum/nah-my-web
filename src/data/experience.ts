import type { ExperienceItem } from "@/types";

/** Urutan di sini bebas; lib/experience.ts mengurutkan terbaru dulu. */
export const experience: ExperienceItem[] = [
  {
    id: "jokilagila",
    title: "Jokilagila",
    employmentType: "Paruh waktu",
    description:
      "Usaha bersama dalam web dev, editing video, animasi, 3D design, IoT, dan embedded system.",
    start: "2025-02",
    end: "2026-02",
    highlights: [
      "Membuat animasi untuk video pembelajaran.",
      "Membangun SmartDoorLockIOT, solusi keamanan rumah yang terhubung ke internet.",
      "Mengamankan akses dengan kombinasi RFID dan PIN serta sidik jari, dilengkapi mekanisme fail-secure.",
    ],
  },
  {
    id: "cendana2000",
    title: "Magang Cendana2000",
    description: "Vendor software untuk sistem bisnis.",
    start: "2025-01",
    end: "2025-05",
    highlights: [
      "Menulis artikel untuk website client.",
      "Mendesain model 3D untuk perangkat IoT.",
    ],
  },
  {
    id: "kresna-informatika",
    title: "Pelatihan Kresna Informatika",
    description:
      "Pelatihan di LKP Kresna Informatika pada bidang desain grafis.",
    start: "2021-11",
    end: "2021-12",
  },
  {
    id: "fizna-komputer",
    title: "Magang Fizna Komputer",
    description:
      "Toko servis komputer dan penyedia jasa layanan internet.",
    start: "2019-07",
    end: "2019-12",
  },
  {
    id: "broto-komputer",
    title: "Magang Broto Komputer",
    description: "Toko dan servis komputer.",
    start: "2019-01",
    end: "2019-03",
  },
];
