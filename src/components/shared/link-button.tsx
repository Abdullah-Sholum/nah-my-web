"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

interface LinkButtonProps {
  href: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  /** Link keluar: buka tab baru. */
  external?: boolean;
  /** Unduh file (mis. CV). */
  download?: boolean;
  children: React.ReactNode;
}

/**
 * Link bergaya tombol. Pengganti `<Button asChild>`:
 * jalan sama di shadcn Radix maupun Base UI.
 */
export function LinkButton({
  href,
  variant,
  size,
  className,
  external,
  download,
  children,
}: LinkButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...(download && { download: true })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
