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
    images: [
      { src: "/project/rc-boat/foto-boat-depan.jpeg", alt: "RC boat catamaran trash skimmer dilihat dari depan", caption: "Kapal dari depan" },
      { src: "/project/rc-boat/foto-boat-buritan.jpeg", alt: "RC boat catamaran trash skimmer dilihat dari buritan", caption: "Kapal dari buritan" },
      { src: "/project/rc-boat/foto-boat-atas-beserta-enclosure.jpeg", alt: "RC boat dilihat dari atas dengan enclosure elektronik", caption: "Dari atas, dengan enclosure elektronik" },
      { src: "/project/rc-boat/foto-render-boat-depan.jpg", alt: "Render 3D kapal dari depan", caption: "Render dari depan" },
      { src: "/project/rc-boat/foto-render-boat-samping-belakang.jpg", alt: "Render 3D kapal dari samping belakang", caption: "Render dari samping belakang" },
      { src: "/project/rc-boat/foto-render-boat-terbongkar.jpg", alt: "Render 3D kapal dalam kondisi terbongkar", caption: "Render kapal terbongkar" },
      { src: "/project/rc-boat/foto-remote-depan.jpeg", alt: "Remote pengendali kapal dilihat dari depan", caption: "Remote, tampak depan" },
      { src: "/project/rc-boat/foto-remote-belakang.jpeg", alt: "Remote pengendali kapal dilihat dari belakang", caption: "Remote, tampak belakang" },
      { src: "/project/rc-boat/foto-schematic.jpg", alt: "Skema rangkaian elektronik kapal", caption: "Skema rangkaian" },
    ],
    links: [],
  },
  {
    slug: "django-finsight",
    title: "DjangoFinSight",
    subtitle: "Prototype dashboard analisis pengeluaran pribadi",
    categories: ["software", "web", "data"],
    status: "prototype", 
    featured: true,
    order: 2,
    shortDescription:
      "Prototype dashboard untuk menganalisis pengeluaran pribadi dari dataset yang dikumpulkan lebih dari 15 bulan.",
    problem:  "Saya ingin lebih memahami pola dan insight dari pengeluaran saya sendiri. Data pengeluaran tercatat per bulan, sehingga sulit dilihat sebagai satu gambaran utuh.",
    solution:  "Data pengeluaran bulanan digabungkan menjadi satu dataset, lalu diberi kategori agar arah pengeluaran lebih jelas. Dataset itu kemudian diproses menjadi insight, seperti rata-rata pengeluaran harian dan mingguan, pengeluaran terbesar dan terkecil, serta hari hemat. Hasilnya ditampilkan dalam dashboard agar pengeluaran bisa dilihat secara visual.",
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
        sections: [
      {
        title: "Insight yang dihasilkan",
        // tambahkan insight lain di sini bila ada ("dll." di ceritamu)
        items: [
          "Rata-rata pengeluaran harian",
          "Rata-rata pengeluaran mingguan",
          "Pengeluaran terbesar",
          "Pengeluaran paling sedikit",
          "Hari hemat",
        ],
      },
    ],
    futureDevelopment: [
      "Membangun sistem penuh dengan Next.js, dengan versi Django ini sebagai prototype awalnya.",
    ],
    images: [
      { src: "/project/finsight/foto-web.jpg", alt: "foto dashboard", caption: "foto dashboard" },
      { src: "/project/finsight/foto-kode.jpg", alt: "foto kode proprocessing", caption: "foto kode preprocessing" },

    ],
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
      "Interface COM",
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
        images: [
      { src: "/project/macropad/foto-perangkat.jpeg", alt: "Perangkat MacroPad dilihat utuh", caption: "MacroPad" },
      { src: "/project/macropad/foto-panel.jpeg", alt: "Panel MacroPad", caption: "Panel" },
      { src: "/project/macropad/foto-render.jpg", alt: "Render desain MacroPad", caption: "Render desain" },
      { src: "/project/macropad/foto-pcb.jpeg", alt: "PCB MacroPad", caption: "PCB" },
      { src: "/project/macropad/foto-microcontroller.jpeg", alt: "Mikrokontroler MacroPad", caption: "Mikrokontroler" },
      { src: "/project/macropad/foto-aplikasi.jpg", alt: "Aplikasi pendamping MacroPad", caption: "Aplikasi desktop (WPF)" },
    ],
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
    images: [
      { src: "/project/smartdoorlock/foto-bersama-produk.jpeg", alt: "Perangkat dilihat utuh", caption: "Foto Bersama Produk" },
      { src: "/project/smartdoorlock/foto-perakitan-1.jpeg", alt: "Perakitan 1", caption: "Perakitan 1" },
      { src: "/project/smartdoorlock/foto-perakitan-2.jpeg", alt: "Perakitan 2", caption: "Perakitan 2" },
      { src: "/project/smartdoorlock/foto-pengujian-pin-rfid.jpeg", alt: "Pengujian PIN RFID", caption: "Pengujian PIN RFID" },
      { src: "/project/smartdoorlock/foto-bagian-dalam-jadi.jpeg", alt: "Bagian Dalam Jadi", caption: "Bagian Dalam Jadi" },
    ],
    links: [],
  },
];
