import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getDesignBySlug,
  getDesignCategoryMeta,
  getDesignSlugs,
} from "@/lib/design";
import { Container } from "@/components/layout/container";
import { DesignDetail } from "@/components/design/design-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getDesignSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getDesignBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

// Tidak async: halaman tidak menunggu URL. Hanya DesignContent yang menunggu.
export default function DesignItemPage({ params }: Props) {
  return (
    <Suspense fallback={<DesignFallback />}>
      <DesignContent params={params} />
    </Suspense>
  );
}

async function DesignContent({ params }: Props) {
  const { slug } = await params;
  const item = getDesignBySlug(slug);
  if (!item) notFound();

  const meta = getDesignCategoryMeta(item.category);
  if (!meta) notFound();

  return <DesignDetail item={item} meta={meta} />;
}

function DesignFallback() {
  return (
    <Container className="max-w-3xl space-y-4 py-12">
      <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
      <div className="h-4 w-full animate-pulse rounded bg-muted" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
    </Container>
  );
}
