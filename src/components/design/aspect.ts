import type { DesignAspect } from "@/types";

/**
 * Pemetaan bentuk gambar ke class Tailwind.
 * Ditulis utuh (bukan disusun dari string) agar Tailwind bisa mendeteksinya.
 */
export const aspectClass: Record<DesignAspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};
