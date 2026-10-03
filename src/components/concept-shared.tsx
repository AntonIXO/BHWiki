import "server-only";
import Link from "next/link";
import { Citation } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CardAction } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import type { Substance, Tag, TagKind } from "@/lib/types";

export type ConceptSection = "effects" | "outcomes" | "concepts";
export type ReadingSearchParams = Record<string, string | string[] | undefined>;

export const sections = {
  effects: { title: "Subjective effects", eyebrow: "THE EXPERIENCE LIBRARY", description: "A shared vocabulary for reported experiences. Explore how an effect is described, which substances are connected to it, and the context behind each observation.", singular: "Subjective effect" },
  outcomes: { title: "Measured outcomes", eyebrow: "WHAT THE RESEARCH MEASURED", description: "Follow a research question across substances. Study populations, exposure, instruments, and limitations stay attached to each finding.", singular: "Measured outcome" },
  concepts: { title: "Mechanisms & concepts", eyebrow: "THE CONNECTIONS BEHIND THE COMPOUNDS", description: "Explore chemical families, biological targets, enzymes, and exposure contexts. Shared concepts connect the substance library to the evidence.", singular: "Concept" },
} as const;

export const kindLabels: Record<TagKind, string> = {
  class: "Functional class", "chemical-family": "Chemical family", mechanism: "Mechanism", target: "Biological target",
  neurotransmitter: "Neurotransmitter", enzyme: "Enzyme", effect: "Subjective effect", outcome: "Measured outcome", exposure: "Exposure context", legal: "Legal context",
};

export function sectionFor(tag: Tag): ConceptSection {
  return tag.kind === "effect" ? "effects" : tag.kind === "outcome" ? "outcomes" : "concepts";
}

export function first(value: string | string[] | undefined): string {
  return typeof value === "string" ? value : value?.[0] ?? "";
}

export function pageNumber(value: string | string[] | undefined): number {
  const parsed = Number(first(value));
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
}

export function sourceLabel(url: string): string {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    return host === "pubmed.ncbi.nlm.nih.gov" ? `PubMed · ${parsed.pathname.split("/").filter(Boolean)[0]}` : host;
  } catch {
    return "Supporting source";
  }
}

export function editorialLabel(status: Substance["editorialStatus"]): string {
  return status === "editorially-reviewed" ? "Editorially reviewed" : "Sourced draft";
}

export function sourceAnchor(slug: string, id: string): string {
  return `source-${slug}-${id}`;
}

export function SourceCite({ substance, id }: { substance: Substance; id: string }) {
  const index = substance.references.findIndex((reference) => reference.id === id);
  if (index < 0) return <span className="text-sm text-muted-foreground">Source not assessed</span>;
  const reference = substance.references[index];
  return <Citation reference={reference} href={`#${sourceAnchor(substance.slug, id)}`} label={`[${index + 1}]`} ariaLabel={`Reference ${index + 1}: ${reference.title}`} />;
}

export function CollectionNav({ selected }: { selected: ConceptSection }) {
  return (
    <ButtonGroup aria-label="Knowledge collections" className="flex-wrap">
      {(Object.keys(sections) as ConceptSection[]).map((section) => (
        <Button key={section} variant={section === selected ? "secondary" : "outline"} size="sm" nativeButton={false} render={<Link href={`/${section}`} aria-current={section === selected ? "page" : undefined} />}>
          {sections[section].title}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export function PageNav({ label, page, totalPages, previousHref, nextHref }: { label: string; page: number; totalPages: number; previousHref?: string; nextHref?: string }) {
  if (totalPages <= 1) return null;
  return (
    <Pagination aria-label={label}>
      <PaginationContent>
        {previousHref && (
          <PaginationItem>
            <PaginationPrevious href={previousHref} />
          </PaginationItem>
        )}
        <PaginationItem>
          <span className="px-2 text-sm text-muted-foreground">Page {page} of {totalPages}</span>
        </PaginationItem>
        {nextHref && (
          <PaginationItem>
            <PaginationNext href={nextHref} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export function CardActionStatus({ status, direction }: { status: string; direction: string }) {
  return (
    <CardAction>
      <div className="flex flex-wrap justify-end gap-2">
        <Badge variant="secondary">{status}</Badge>
        <Badge variant="outline">{direction}</Badge>
      </div>
    </CardAction>
  );
}
