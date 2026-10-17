import type { MediaImage } from "@/types";
import { Container } from "@/components/layout/container";
import { ProfilePhoto } from "@/components/shared/profile-photo";

/** Potret opsional di /about. Tidak merender apa pun jika belum ada gambar. */
export function AboutPortrait({ image }: { image?: MediaImage }) {
  if (!image) return null;

  return (
    <Container className="pt-12">
      <figure className="w-64 space-y-2">
        <ProfilePhoto image={image} sizes="256px" />
        {image.caption && (
          <figcaption className="text-xs text-muted-foreground">
            {image.caption}
          </figcaption>
        )}
      </figure>
    </Container>
  );
}
