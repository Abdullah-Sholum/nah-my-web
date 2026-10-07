import * as React from "react";

import { cn } from "@/lib/utils";

/** Pembatas lebar konten. Dipakai semua halaman dan section. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6", className)}
      {...props}
    />
  );
}
