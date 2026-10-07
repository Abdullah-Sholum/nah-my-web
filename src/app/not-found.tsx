import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/shared/link-button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-muted-foreground">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <LinkButton href="/" className="mt-6">
        Kembali ke Home
      </LinkButton>
    </Container>
  );
}