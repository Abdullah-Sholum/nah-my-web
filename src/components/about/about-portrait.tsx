import Image from "next/image";

import type { MediaImage } from "@/types";
import { Container } from "@/components/layout/container";

/** Potret opsional. Tidak merender apa pun jika belum ada gambar. */
export function AboutPortrait({ image }: { image?: MediaImage }) {
  if (!image) return null;

  return (
    <Container className="pt-12">
      <figure className="max-w-xs space-y-2">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg border bg-muted">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
        {image.caption && (
          <figcaption className="text-xs text-muted-foreground">
            {image.caption}
          </figcaption>
        )}
      </figure>
    </Container>
  );
}
