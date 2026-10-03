import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  Breadcrumb as BreadcrumbNav,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { repositoryUrl } from "@/lib/site";

export { Logo } from "@/components/logo";

export function Breadcrumb({
  current,
  items,
}: {
  current?: string;
  items?: { href?: string; label: string }[];
}) {
  const trail = items ?? [
    { href: "/", label: "Library" },
    { label: current ?? "" },
  ];
  return (
    <BreadcrumbNav>
      <BreadcrumbList>
        {trail.flatMap((item, index) => {
          const last = index === trail.length - 1;
          const crumb = (
            <BreadcrumbItem key={`${item.label}-${index}`}>
              {last || !item.href ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink render={<Link href={item.href} />}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
          return index === 0 ? [crumb] : [<BreadcrumbSeparator key={`sep-${index}`} />, crumb];
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
}

export function Footer() {
  const repo = repositoryUrl();
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8">
      <Separator />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">An independent, open substance reference.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/about" className="underline-offset-4 hover:underline">Evidence & methodology</Link>
          <Link href="/contribute" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
            Contribute <Code2 aria-hidden="true" />
          </Link>
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
              Source repository <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="max-w-xs text-sm text-muted-foreground sm:text-right">
          For education and research, not personal medical advice.
          <br />
          Original content CC BY-SA 4.0 · Code MIT
        </p>
      </div>
    </footer>
  );
}

export function TextLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const className = "inline-flex items-center gap-1 text-sm underline underline-offset-4";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button nativeButton={false} render={<Link href={href} />}>
      {children}
    </Button>
  );
}
