"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import type { Reference } from "@/lib/types";

export function Citation({
  reference,
  href,
  label,
  ariaLabel,
}: {
  reference: Reference;
  href: string;
  label: string;
  ariaLabel?: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={200}
        closeDelay={100}
        render={
          <a
            className="article-citation ms-0.5 inline-flex translate-y-[-0.1em] items-center rounded-md bg-muted px-1 text-xs font-medium text-foreground no-underline hover:bg-secondary"
            href={href}
            aria-label={ariaLabel ?? `Reference: ${reference.title}`}
          />
        }
      >
        {label}
      </HoverCardTrigger>
      <HoverCardContent className="w-[min(20rem,calc(100vw-2rem))]">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">{reference.kind}</Badge>
            <Badge variant="outline">{reference.year}</Badge>
          </div>
          <p className="font-medium">{reference.title}</p>
          <p className="text-muted-foreground">{reference.authors}</p>
          <p>{reference.insight}</p>
          <p className="text-muted-foreground">Limitations: {reference.limitation}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <a href={href} className="underline underline-offset-4">In this article</a>
            <a href={reference.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
              Source
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
