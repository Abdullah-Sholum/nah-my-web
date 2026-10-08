import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { Container } from "@/components/layout/container";
import { ProjectDetail } from "@/components/project/project-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

// Tidak async: halaman tidak menunggu URL. Hanya ProjectContent yang menunggu.
export default function ProjectPage({ params }: Props) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}

function ProjectFallback() {
  return (
    <Container className="max-w-3xl space-y-4 py-12">
      <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
      <div className="h-4 w-full animate-pulse rounded bg-muted" />
      <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
    </Container>
  );
}