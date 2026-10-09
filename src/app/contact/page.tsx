import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { formatPhone, mailtoLink, whatsappLink } from "@/lib/contact";
import { ContactCard } from "@/components/contact/contact-card";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi saya lewat email atau WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        // DRAF: ubah sesuai gayamu.
        description="Terbuka untuk diskusi project, kolaborasi, atau sekadar bertukar pikiran."
      />

      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <ContactCard
              title="Email"
              description="Untuk pertanyaan, kolaborasi, atau tawaran pekerjaan."
              value={siteConfig.email}
              href={mailtoLink(siteConfig.email, "Halo dari portofolio")}
              actionLabel="Kirim email"
            />
            <ContactCard
              title="WhatsApp"
              description="Untuk percakapan yang lebih cepat."
              value={formatPhone(siteConfig.whatsapp)}
              // DRAF pesan awal: pengunjung bisa mengubahnya sebelum mengirim.
              href={whatsappLink(
                siteConfig.whatsapp,
                "Halo, saya melihat portofolio Anda dan ingin berdiskusi tentang ",
              )}
              actionLabel="Buka WhatsApp"
              external
            />
          </div>
        </Container>
      </section>
    </>
  );
}
