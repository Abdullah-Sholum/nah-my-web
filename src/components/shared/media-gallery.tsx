import Image from "next/image";

import type { MediaImage } from "@/types";

/** Tidak merender apa pun jika belum ada gambar. */
export function MediaGallery({ images }: { images: MediaImage[] }) {
  if (images.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((img) => (
        <figure key={img.src} className="space-y-2">
          <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-contain"
            />
          </div>
          {img.caption && (
            <figcaption className="text-xs text-muted-foreground">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
