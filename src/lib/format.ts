const monthYear = new Intl.DateTimeFormat("id-ID", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2025-02" -> "Februari 2025" */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split("-").map(Number);
  return monthYear.format(new Date(Date.UTC(year, month - 1, 1)));
}

/** ("2025-02", "2026-02") -> "Februari 2025 – Februari 2026" */
export function formatPeriod(start: string, end?: string): string {
  const s = formatMonth(start);
  return end ? `${s} – ${formatMonth(end)}` : `${s} – Sekarang`;
}
