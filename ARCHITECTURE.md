types  ←  data  ←  lib  ←  components  ←  app (halaman)
 bentuk    isi     helper    tampilan       rakitan
urutan tahap dari kiri ke kanan. 

**Aturan arah:** tiap lapis hanya boleh meng-import dari lapis di kirinya.
Contoh: `data` boleh import `types`, tapi `types` tidak boleh import `data`.
tiap tahap run "npx tsc --noEmit" untuk cek apa ada paket/file yang hilang. Kosong = bersih.

| Lapis --| Folder --------------------------------| Tugas -----------------------------------------------------------| Contoh ----------------------|
|---------|----------------------------------------|------------------------------------------------------------------|------------------------------|
| Bentuk -| `src/types/`---------------------------| Mendefinisikan *bentuk* data. Tidak ada isi, tidak ada tampilan. | `Project`, `ExperienceItem` -|
| Isi ----| `src/data/`, `src/config/`, `content/` | *Konten* portfolio. Satu-satunya tempat mengetik teks. ----------| `projects.ts`, `about.ts` ---|
| Helper -| `src/lib/` ----------------------------| Fungsi kecil untuk mengambil/mengolah data. ---------------------| `getProjectBySlug()` --------|
| Tampilan| `src/components/` ---------------------| Komponen yang menerima props dan menggambar UI. -----------------| `WorkCard`, `Hero` ----------|
| Rakitan | `src/app/` ----------------------------| Halaman. Hanya merakit komponen + data. Tipis. ------------------| `page.tsx` ------------------|

## Folder

```
content/notes/        Technical Notes (file .mdx), di ROOT project
public/               gambar, CV (di ROOT project, bukan di src/)
src/
├── app/              routing: satu folder = satu URL
├── components/
│   ├── ui/           dibuat shadcn. Jangan diedit sembarangan.
│   ├── layout/       Header, Footer, Container, toggle tema
│   ├── shared/       komponen kecil dipakai banyak halaman
│   ├── sections/     blok-blok halaman Home
│   └── ...           per fitur: project/, case-study/, experience/, resume/
├── data/             isi konten (TypeScript)
├── config/           identitas situs, navigasi
├── lib/              helper (utils.ts milik shadcn juga di sini)
└── types/            definisi bentuk data
```


