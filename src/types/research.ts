import type {
  ContentSection,
  ContentStatus,
  ExternalLink,
  MediaImage,
} from "./common";

export type MetricKey = "accuracy" | "auc" | "precision" | "recall" | "f1";

export interface ModelResult {
  model: string;
  /** Nilai 0-1. Isi hanya metrik yang tersedia. */
  metrics: Partial<Record<MetricKey, number>>;
}

export interface Research {
  slug: string;
  title: string;
  /** Contoh: "Research / AI" */
  type: string;
  status: ContentStatus;
  featured: boolean;
  order: number;
  year?: string;

  summary: string;
  technologies: string[];

  dataset?: { name: string; description: string; classes?: string[] };
  preprocessing: string[];
  models: string[];
  training?: string;
  evaluation?: string;

  /** Metrik yang dilaporkan (urutan = urutan kolom tabel). */
  metrics: MetricKey[];
  results: ModelResult[];
  result?: string;

  sections?: ContentSection[];
  images: MediaImage[];
  links: ExternalLink[];
}
