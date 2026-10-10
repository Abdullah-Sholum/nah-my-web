import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Pemetaan elemen Markdown/MDX ke gaya situs.
 * Server component biasa (tanpa hook), jadi boleh dipakai langsung oleh MDXRemote.
 */
export const mdxComponents = {
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn("mt-10 mb-3 text-xl font-semibold tracking-tight first:mt-0", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={cn("mt-8 mb-2 text-lg font-semibold", className)} {...props} />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-4", className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("my-4 list-disc space-y-1 pl-6", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className={cn("my-4 list-decimal space-y-1 pl-6", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("leading-7", className)} {...props} />
  ),
  a: ({ className, href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cn("underline underline-offset-4 hover:text-muted-foreground", className)}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      />
    );
  },
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn("my-6 border-l-2 pl-5 text-muted-foreground italic", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className={cn("rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-lg border bg-muted p-4 text-sm [&_code]:bg-transparent [&_code]:p-0",
        className,
      )}
      {...props}
    />
  ),
};
