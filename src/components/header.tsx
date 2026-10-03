"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Code2, Menu, Search } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Substances" },
  { href: "/effects", label: "Effects" },
  { href: "/graph", label: "Knowledge graph" },
  { href: "/about", label: "Methods" },
];

const browse = [
  { href: "/compare", label: "Compare substances" },
  { href: "/interactions", label: "Interactions" },
  { href: "/outcomes", label: "Measured outcomes" },
  { href: "/concepts", label: "Mechanisms & concepts" },
];

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/substances");
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      {links.map((link) => {
        const current = isCurrent(link.href, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
            className={cn(
              "rounded-lg px-2.5 py-2 text-sm",
              current ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-5 py-3 sm:gap-3 sm:px-8">
        <Logo />
        <nav aria-label="Main navigation" className="ms-4 hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => {
                const current = isCurrent(link.href, pathname);
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      active={current}
                      render={<Link href={link.href} aria-current={current ? "page" : undefined} />}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="ms-auto flex items-center gap-1.5">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  nativeButton={false}
                  render={<Link href="/#library" aria-label="Search substances" />}
                />
              }
            >
              <Search />
            </TooltipTrigger>
            <TooltipContent>Search substances</TooltipContent>
          </Tooltip>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="sm" className="hidden md:inline-flex" />}>
              Browse
              <ChevronDown data-icon="inline-end" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Collections</DropdownMenuLabel>
                {browse.map((link) => (
                  <DropdownMenuItem key={link.href} render={<Link href={link.href} />}>
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<Link href="/contribute" />}
          >
            <Code2 data-icon="inline-start" />
            Contribute
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden"
              render={<Button variant="outline" size="icon" aria-label="Open menu" />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4">
                <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
                {browse.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-2.5 py-2 text-sm",
                      isCurrent(link.href, pathname) ? "bg-muted font-medium text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
