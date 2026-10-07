"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function isItemActive(pathname: string, item: NavItem) {
  if (item.href) return isActivePath(pathname, item.href);
  return item.children?.some((c) => isActivePath(pathname, c.href)) ?? false;
}

const linkClass = (active: boolean) =>
  cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
    active ? "text-foreground" : "text-muted-foreground",
  );

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Utama">
      {siteConfig.nav.map((item) =>
        item.children ? (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger
              className={cn(
                linkClass(isItemActive(pathname, item)),
                "inline-flex items-center gap-1 outline-none",
              )}
            >
              {item.label}
              <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {item.children.map((child) => (
                <DropdownMenuItem key={child.href} asChild>
                  <Link href={child.href}>{child.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.label}
            href={item.href!}
            className={linkClass(isItemActive(pathname, item))}
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Buka menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
          {siteConfig.nav.map((item) =>
            item.children ? (
              <div key={item.label} className="mt-2">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={close}
                    className={cn(
                      linkClass(isActivePath(pathname, child.href)),
                      "block pl-6",
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={close}
                className={cn(linkClass(isItemActive(pathname, item)), "block")}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-1">
          <DesktopNav pathname={pathname} />
          <ThemeToggle />
          <MobileNav pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}
