types  ←  data  ←  lib  ←  components  ←  app (halaman)
 bentuk    isi     helper    tampilan       rakitan
urutan tahap dari kiri ke kanan. 

**Aturan arah:** tiap lapis hanya boleh meng-import dari lapis di kirinya.
Contoh: `data` boleh import `types`, tapi `types` tidak boleh import `data`.
tiap tahap run "npx tsc --noEmit" untuk cek apa ada paket/file yang hilang.


dari struktur diatas.
#tahap 1.types (bentuk)
