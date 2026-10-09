/** Tautan "mailto:" dengan subjek opsional. */
export function mailtoLink(email: string, subject?: string): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

/** Tautan WhatsApp. `number`: hanya digit, format internasional (mis. "6281234567890"). */
export function whatsappLink(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Format tampilan: "6281234567890" -> "+62 812-3456-7890".
 * Nomor non-Indonesia ditampilkan apa adanya: "+<digit>".
 */
export function formatPhone(number: string): string {
  const m = number.match(/^62(\d{3})(\d{4})(\d+)$/);
  return m ? `+62 ${m[1]}-${m[2]}-${m[3]}` : `+${number}`;
}
