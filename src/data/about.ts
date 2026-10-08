import type { AboutContent } from "@/types";

export const about: AboutContent = {
  // ---- Home (tidak berubah) ----
  summary: [
    "Saya memiliki latar belakang Teknik Informatika dengan ketertarikan pada software development, Internet of Things (IoT), embedded systems, dan digital design. Saya senang mempelajari dan menggabungkan bidang-bidang tersebut untuk membangun sistem yang menyelesaikan masalah nyata. Dalam prosesnya, saya terbiasa menggunakan Python, C/C++, JavaScript/TypeScript, ESP32, dan Arduino, serta berbagai tools untuk pengembangan software dan desain.",
    "Dalam mengerjakan sebuah proyek, saya memulai dengan memahami dan mengevaluasi masalah, lalu melakukan brainstorming untuk mencari kemungkinan solusi, memetakan kebutuhan dan sistem, hingga mengembangkan dan menguji hasilnya. Saya tertarik pada proses mengubah ide menjadi sistem yang nyata, baik berupa software, hardware, maupun kombinasi keduanya. Saat ini, salah satu fokus saya adalah mengembangkan sistem catamaran trash skimmer untuk membantu pengelolaan kolam budidaya ikan.",
  ],

  // ---- Halaman /about ----
  // DRAF untuk disetujui.
  intro:
    "Cerita di balik teknologi yang saya buat: rasa ingin tahu, cara pikiran saya bekerja, dan masalah nyata yang ingin saya selesaikan.",

  sections: [
    {
      id: "more-than-technology",
      title: "More Than Technology",
      lead: "Dari rasa ingin tahu tentang cara kerja sesuatu, menjadi keinginan membangunnya sendiri.",
      paragraphs: [
        "Saya selalu penasaran dengan cara sesuatu bekerja. Ketika menemukan sebuah benda, sistem, atau masalah, saya sering tidak berhenti pada cara menggunakannya. Saya mulai bertanya apa yang terjadi di baliknya, mengapa ia dibuat dengan cara tertentu, dan apakah ada cara lain agar ia bekerja lebih baik. Rasa ingin tahu itu perlahan membawa saya dari sekadar menggunakan teknologi menjadi tertarik membangunnya sendiri.",
        "Membuat sesuatu adalah salah satu cara terbaik saya untuk belajar. Saya tidak selalu memulai dengan pengetahuan yang lengkap. Sering kali saya memulai dari sebuah masalah, lalu mencari informasi, mencoba beberapa pendekatan, membuat prototype, menemukan kesalahan, dan mengulanginya. Karena itu, banyak hal yang saya pelajari justru datang dari proyek yang awalnya tidak saya rencanakan menjadi besar. Sebuah percobaan elektronik membawa saya ke programming, programming membawa saya ke software development, dan masalah sederhana bisa berkembang menjadi sistem yang jauh lebih kompleks.",
      ],
      // image: { src: "/about/more-than-technology.webp", alt: "...", caption: "..." },
    },
    {
      id: "how-i-see-problems",
      title: "How I See Problems",
      lead: "Memecah yang rumit menjadi bagian kecil, lalu membuatnya bekerja bersama.",
      paragraphs: [
        "Saya cenderung melihat masalah sebagai sesuatu yang bisa dipecah menjadi bagian-bagian kecil. Ketika menghadapi hal yang rumit, saya mencoba memahami masalahnya lebih dulu sebelum memikirkan solusinya. Setelah itu saya memetakan kemungkinan, membuat batasan, mencoba ide yang paling masuk akal, lalu melihat kembali apa yang tidak bekerja.",
        "Cara itu membuat saya menikmati proyek yang berada di antara beberapa bidang sekaligus. Saya bisa berpindah dari kode ke rangkaian elektronik, dari rangkaian ke desain 3D, lalu kembali lagi ke software. Batas antara bidang-bidang itu tidak selalu harus tegas. Yang lebih penting adalah memahami kebutuhan sistem secara keseluruhan dan menemukan cara agar setiap bagian bekerja bersama.",
      ],
      showWorkflow: true,
    },
    {
      id: "learning-to-understand-myself",
      title: "Learning to Understand Myself",
      lead: "Memahami cara pikiran saya bekerja, dan membangun struktur di sekelilingnya.",
      paragraphs: [
        "Salah satu bagian penting dari perjalanan saya adalah belajar memahami bagaimana pikiran saya sendiri bekerja. Saya kemudian mengetahui bahwa saya memiliki ADHD. Sebelumnya, banyak pola dalam diri saya terasa tidak teratur dan sulit dijelaskan. Saya bisa sangat tenggelam dalam suatu hal, tetapi di kondisi lain sangat sulit mempertahankan perhatian. Saya juga bisa memiliki banyak ide sekaligus dan kadang kesulitan menentukan mana yang harus dikerjakan lebih dulu.",
        "Memahami hal itu tidak otomatis membuat semuanya mudah. Namun, saya mulai belajar bahwa saya tidak harus selalu melawan cara kerja pikiran saya. Saya bisa membuat struktur di luar kepala, memecah pekerjaan menjadi bagian yang lebih kecil, menuliskan ide, dan menciptakan lingkungan yang membantu saya menjaga fokus. Perlahan saya memahami perbedaan antara sekadar memiliki banyak pikiran dan benar-benar bisa mengarahkannya.",
      ],
      quote: "Saya tidak harus selalu melawan cara kerja pikiran saya.",
    },
    {
      id: "from-noise-to-structure",
      title: "From Noise to Structure",
      lead: "Dari kumpulan ide yang berantakan menjadi sistem yang bisa digunakan.",
      paragraphs: [
        "Ada masa ketika banyak hal di kepala saya terasa seperti suara dari pasar yang ramai. Banyak hal terjadi bersamaan, tetapi sulit menentukan mana yang harus didengarkan. Seiring waktu, saya belajar mengubahnya menjadi sesuatu yang lebih terstruktur. Bukan berarti pikirannya menjadi lebih sedikit, tetapi saya menjadi lebih mampu memilih mana yang perlu diperhatikan.",
        "Pengalaman itu juga memengaruhi cara saya mengerjakan proyek. Saya menyukai proses ketika kumpulan ide yang berantakan perlahan berubah menjadi diagram, lalu rancangan, prototype, dan akhirnya sesuatu yang bisa digunakan. Ada kepuasan tersendiri ketika sesuatu yang tadinya hanya ada di kepala bisa diwujudkan menjadi sistem nyata.",
      ],
      quote:
        "Bukan berarti pikirannya menjadi lebih sedikit, tetapi saya menjadi lebih mampu memilih mana yang perlu diperhatikan.",
    },
    {
      id: "building-things-that-matter",
      title: "Building Things That Matter",
      lead: "Teknologi sebagai alat untuk menyelesaikan masalah nyata.",
      paragraphs: [
        // TODO (opsional): tambahkan satu kalimat konkret tentang apa yang kamu lihat di kolam.
        "Saya semakin tertarik pada proyek yang berhubungan dengan masalah nyata. Salah satu contohnya adalah pengembangan sistem catamaran trash skimmer untuk membantu pengelolaan kolam budidaya ikan. Proyek itu tidak bermula dari keinginan sekadar membuat sebuah RC boat, melainkan dari masalah yang benar-benar saya lihat dan alami.",
        "Hal itu mengubah cara saya memandang sebuah proyek. Teknologi menjadi lebih menarik ketika memiliki alasan untuk dibuat. Sebuah ESP32, motor, conveyor, atau aplikasi tidak berdiri sendiri; semuanya menjadi bagian dari sebuah solusi. Saya ingin terus belajar membuat sesuatu dengan cara itu: memahami masalah lebih dulu, lalu menggunakan teknologi sebagai alat untuk menyelesaikannya.",
      ],
      quote: "Teknologi menjadi lebih menarik ketika memiliki alasan untuk dibuat.",
    },
    {
      id: "still-learning",
      title: "Still Learning",
      lead: "Kemajuan bukan sekadar teknologi yang dikuasai, tapi cara memahami masalah dan belajar dari kegagalan.",
      paragraphs: [
        "Saya tidak melihat diri saya sebagai seseorang yang sudah selesai belajar. Masih banyak bidang yang ingin saya pahami lebih dalam, baik software, embedded systems, IoT, AI, maupun engineering. Beberapa proyek mungkin selesai, sebagian lain mungkin berhenti di tengah jalan, dan banyak eksperimen mungkin tidak pernah menjadi produk akhir.",
        "Namun, saya menganggap semuanya bagian dari proses. Bagi saya, perkembangan bukan hanya soal seberapa banyak teknologi yang saya kuasai, tetapi juga seberapa baik saya memahami masalah, membuat keputusan, menghadapi kegagalan, dan mengubah pengalaman itu menjadi pengetahuan untuk membuat sesuatu yang lebih baik.",
      ],
    },
  ],

  // portrait: { src: "/about/portrait.webp", alt: "Potret Abdullah Sholum" },

  education: "Teknik Informatika",
  fields: ["Software Development", "IoT", "Embedded Systems", "Digital Design"],
  interests: ["Elektronika", "IoT", "Embedded System", "Digital Design"],
  workflow: [
    "Mengevaluasi masalah",
    "Brainstorming",
    "Memetakan ide",
    "Merancang sistem",
    "Membuat dan menguji solusi",
  ],
  currentFocus:
    "Sistem kapal catamaran trash skimmer untuk mendukung budidaya ikan konsumsi.",
  currentFocusSlug: "rc-boat-trash-skimmer",
  frequentTech: ["IoT", "Python", "C++", "AI"],
};
