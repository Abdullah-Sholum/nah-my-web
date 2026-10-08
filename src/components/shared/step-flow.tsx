import Link from "next/link";

export interface FlowStep {
  label: string;
  description?: string;
  /** Teks kecil di atas label, contoh periode "2024". */
  meta?: string;
  href?: string;
}

/**
 * Alur vertikal bernomor. Satu komponen untuk:
 * arsitektur sistem, progress project, dan timeline perjalanan.
 */
export function StepFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="ml-3.5 space-y-6 border-l pl-8">
      {steps.map((step, i) => (
        <li key={`${step.label}-${i}`} className="relative pt-0.5">
          <span
            aria-hidden
            className="absolute top-0 -left-8 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border bg-background text-xs font-medium"
          >
            {i + 1}
          </span>
          {step.meta && (
            <p className="text-xs text-muted-foreground">{step.meta}</p>
          )}
          <p className="font-medium leading-snug">
            {step.href ? (
              <Link href={step.href} className="underline-offset-4 hover:underline">
                {step.label}
              </Link>
            ) : (
              step.label
            )}
          </p>
          {step.description && (
            <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}
