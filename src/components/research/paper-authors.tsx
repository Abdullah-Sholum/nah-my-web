interface PaperAuthorsProps {
  authors: string[];
  /** Posisi namamu (mulai dari 1). Namamu dicetak tebal. */
  myPosition: number;
}

/** Daftar penulis sesuai urutan di jurnal; namamu ditebalkan. */
export function PaperAuthors({ authors, myPosition }: PaperAuthorsProps) {
  return (
    <p className="text-sm text-muted-foreground">
      {authors.map((name, i) => (
        <span key={`${name}-${i}`}>
          {i > 0 && ", "}
          {i === myPosition - 1 ? (
            <strong className="font-semibold text-foreground">{name}</strong>
          ) : (
            name
          )}
        </span>
      ))}
    </p>
  );
}
