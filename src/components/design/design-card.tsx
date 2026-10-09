import Image from "next/image";
import Link from "next/link";

import type { DesignAspect, MediaImage } from "@/types";
import { cn } from "@/lib/utils";
import { aspectClass } from "./aspect";

interface DesignCardProps {
  href: string;
  title: string;
  software: string[];
  image: MediaImage;
  aspect: DesignAspect;
}

/** Kartu gambar + judul. Murni presentasional. */
export function DesignCard({ href, title, software, image, aspect }: DesignCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={cn(
          "relative overflow-hidden rounded-lg border bg-muted transition-colors group-hover:border-foreground/30",
          aspectClass[aspect],
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <p className="mt-3 font-medium leading-snug">{title}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">{software.join(" · ")}</p>
    </Link>
  );
}
