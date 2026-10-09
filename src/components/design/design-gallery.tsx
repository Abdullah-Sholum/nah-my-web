import Image from "next/image";

import type { DesignAspect, MediaImage } from "@/types";
import { cn } from "@/lib/utils";
import { aspectClass } from "./aspect";

interface DesignGalleryProps {
  images: MediaImage[];
  aspect: DesignAspect;
}

/** Semua gambar ditampilkan utuh (tidak dipotong). */
export function DesignGallery({ images, aspect }: DesignGalleryProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        aspect === "portrait" ? "sm:grid-cols-2" : "md:grid-cols-2",
      )}
    >
      {images.map((img) => (
        <figure key={img.src} className="space-y-2">
          <div
            className={cn(
              "relative overflow-hidden rounded-lg border bg-muted",
              aspectClass[aspect],
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
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
