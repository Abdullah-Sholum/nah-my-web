import type { Project } from "@/types";

/**
 * Menambah project baru = menambah satu objek di sini.
 * Gambar: taruh di /public/projects/<slug>/ lalu isi `images`.
 */
export const projects: Project[] = [
  {
    slug: "rc-boat-trash-skimmer",
    title: "RC Boat Trash Skimmer",
    subtitle: "Catamaran trash skimmer untuk budidaya ikan konsumsi",
    categories: ["iot", "embedded"],
    status: "ongoing", // ASUMSI: sesuai "fokus saat ini" di About. Ubah jika salah.
    featured: true,
    order: 1,
    shortDescription:
      "RC boat berlambung catamaran dengan conveyor untuk mengambil sampah dan ikan mati di kolam.",
    problem:
      "Pengambilan ikan mati dan sampah di tengah kolam membutuhkan waktu dan tenaga.",
    solution:
      "RC boat dengan sistem pengambilan sampah/ikan menggunakan conveyor.",
    technologies: [
      "ESP32",
      "NRF24L01",
      "BTS7960",
      "Brushed Motor",
      "Relay",
      "LM2596",
      "RC Control",
      "Fail-safe",
      "3D Modeling",
    ],
    engineering: [
      "Catamaran Hull",
      "Motor Selection",
      "Propeller Selection",
      "Waterproof Enclosure",
      "Power Distribution",
      "Conveyor Mechanism",
    ],
    timeline: [
      { label: "Problem" },
      { label: "Prototype Controller" },
      { label: "Wireless Communication" },
      { label: "Fail-safe" },
      { label: "Motor System" },
      { label: "Catamaran Hull" },
      { label: "Conveyor Design" },
    ],
    // TODO: foto prototype, visual hull, screenshot desain 3D, schematic, foto pengujian
    images: [],
    links: [],
  },
  {
    slug: "django-finsight",
    title: "DjangoFinSight",
    subtitle: "Personal finance management & analysis system",
    categories: ["software", "web", "data"],
    status: "ongoing",
    featured: true,
    order: 2,
    shortDescription:
      "Sistem manajemen dan analisis keuangan pribadi dengan dataset personal yang dikumpulkan lebih dari 15 bulan.",
    problem: "Pengelolaan keuangan pribadi terasa sulit karena banyaknya transaksi dan kategori yang harus diatur.",
    solution: "Sistem manajemen keuangan pribadi berbasis web yang mengelola transaksi, kategori, dan analisis data keuangan.",
    technologies: ["Django", "Python", "CSV"],
    engineering: [
      "Data Processing",
      "Categorization",
      "Expense Analysis",
      "Dashboard",
    ],
    architecture: [
      "Raw Data",
      "Data Processing",
      "Django",
      "Database",
      "Analytics",
      "Web Dashboard",
    ],
    timeline: [
      { label: "Pencatatan Transaksi " },
      { label: "Pengumpulan data" },
      { label: "Pemrosesan data" },
      { label: "Dataset utuh" },
      { label: "Analisis Data" },
      { label: "Dashboard" },
    ],
    // TODO: screenshot dashboard, visualisasi data, arsitektur sistem
    images: [],
    links: [],
  },
  {
    slug: "macropad-audio-mixer",
    title: "MacroPad",
    subtitle: "Custom Macro & Audio Control System",
    categories: ["embedded", "desktop"],
    status: "completed", // ASUMSI: belum disebut di dokumen. Ubah jika salah.
    featured: true,
    order: 3,
    shortDescription:
      "Mixer audio fisik berslider yang mengatur volume tiap aplikasi Windows.",
    problem:
      "Pengaturan volume tiap aplikasi Windows terasa merepotkan karena perlu membuka audio mixer atau overlay.",
    solution:
      "Device berbentuk mixer audio yang terhubung ke volume Windows; setiap slider dikaitkan dengan volume aplikasi yang terdaftar/aktif.",
    technologies: ["Arduino Pro Micro", ".NET 10", "WPF", "Serial Communication"],
    hardware: ["Arduino Pro Micro", "6 Sliders", "OLED", "USB"],
    software: [
      ".NET 10",
      "WPF",
      "Serial Communication",
      "Device Detection",
      "Auto Reconnect",
    ],
    engineering: [
      "Automatic COM Port Detection",
      "Firmware Identification",
      "Auto Reconnect",
      "Device Status",
      "Logging",
      "Low Resource Usage",
    ],
    architecture: [
      "Slider",
      "Arduino Pro Micro",
      "USB Hub",
      "interface Com",
      "Application",
    ],
    timeline: [
      { label: "Prototype" },
      { label: "Testing" },
      { label: "Version 1" },
      { label: "Make 3d Model" },
      { label: "Version 2 3d model" },
      { label: "Version 3 3d model" },
      { label: "Desktop Application" },
    ],
    // TODO: foto hardware, screenshot aplikasi WPF, diagram komunikasi
    images: [],
    links: [],
  },

  {
    slug: "smart-door-lock-iot",
    title: "Smart Door Lock",
    subtitle: "IoT-Based Access Control System",
    categories: ["embedded", "iot"],
    status: "completed",
    featured: true,
    order: 3,
    shortDescription:
      "Kunci pintu cerdas berbasis IoT untuk kontrol akses.",
    problem:
      "Sulitnya mengelola akses ke ruangan atau bangunan secara efisien dan aman.",
    solution:
      "Sistem kunci pintu cerdas yang menggunakan teknologi IoT untuk mengontrol akses dengan modul rc522 & pin, sidik jari, lewat smartphone.",
    technologies: ["esp32", "c++", "mqtt", "application"],
    hardware: ["esp32", "rc522", "r503", "wifi", "mqtt"],
    software: [
      "mqtt",
      "Device Detection",
      "Auto Reconnect",
    ],
    engineering: [
      "Auto Reconnect",
      "Device Status",
      "user Management",
      "Low Resource Usage",
    ],
    // TODO: foto hardware, screenshot aplikasi WPF, diagram komunikasi
    images: [],
    links: [],
  },
  
];
