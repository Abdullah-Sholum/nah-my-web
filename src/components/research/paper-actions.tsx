import { LinkButton } from "@/components/shared/link-button";

interface PaperActionsProps {
  /** Tautan ke artikel. Dilewati jika tidak diisi. */
  url?: string;
  /** Path PDF di public/. Dilewati jika tidak diisi. */
  pdf?: string;
  size?: "default" | "sm";
}

/** Tombol baca dan unduh. Tidak merender apa pun jika keduanya kosong. */
export function PaperActions({ url, pdf, size = "default" }: PaperActionsProps) {
  if (!url && !pdf) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {url && (
        <LinkButton href={url} external size={size}>
          Baca artikel
        </LinkButton>
      )}
      {pdf && (
        <LinkButton href={pdf} download variant="outline" size={size}>
          Unduh PDF
        </LinkButton>
      )}
    </div>
  );
}
