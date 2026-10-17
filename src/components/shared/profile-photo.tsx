import Image from "next/image";

import type { MediaImage } from "@/types";
import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  image: MediaImage;
  /** Atribut `sizes` untuk next/image: lebar foto saat tampil di layar. */
  sizes: string;
  /** true untuk foto yang langsung terlihat saat halaman dibuka (Hero). */
  priority?: boolean;
  className?: string;
}

/**
 * Foto formal 3:4 dengan efek hitam-putih tipis.
 *
 * Kekuatan efek = angka di `grayscale-[30%]` di bawah:
 *   0% = warna asli, 30% = tipis, 50% = sedang, 100% = hitam-putih penuh.
 * Tulis angkanya langsung di kelas (jangan disusun dari variabel),
 * agar Tailwind bisa mendeteksinya.
 */
export function ProfilePhoto({
  image,
  sizes,
  priority,
  className,
}: ProfilePhotoProps) {
  return (
    <div
      className={cn(
        "relative aspect-[3/4] overflow-hidden rounded-lg border bg-muted",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover grayscale-[60%]"
      />
    </div>
  );
}
