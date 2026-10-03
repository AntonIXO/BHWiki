import "server-only";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Search } from "lucide-react";
import { Prose } from "@/components/prose";
import { CollectionNav, first, kindLabels, pageNumber, PageNav, sectionFor, sections, type ConceptSection, type ReadingSearchParams } from "@/components/concept-shared";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Breadcrumb } from "@/components/shell";
import { indexEntities } from "@/lib/entities";
import { getCatalog, getConcepts } from "@/lib/repository";
import { conceptPath } from "@/lib/types";

export async function ConceptIndex({ section, searchParams }: { section: ConceptSection; searchParams: ReadingSearchParams }) {
  const [concepts, catalog] = await Promise.all([getConcepts(), getCatalog()]);
  const entities = indexEntities(catalog, concepts);
  const collection = concepts.filter((concept) => sectionFor(concept) === section);
  const query = first(searchParams.q).trim().slice(0, 200);
  const selectedKind = first(searchParams.kind);
  const kinds = [...new Set(collection.map((concept) => concept.kind))].sort((a, b) => kindLabels[a].localeCompare(kindLabels[b]));
  const filtered = collection.filter((concept) => (!selectedKind || concept.kind === selectedKind) && (!query || [concept.label, concept.description, ...(concept.aliases ?? [])].join(" ").toLowerCase().includes(query.toLowerCase()))).sort((a, b) => a.label.localeCompare(b.label));
  const totalPages = Math.max(1, Math.ceil(filtered.length / 24));
  const page = Math.min(pageNumber(searchParams.page), totalPages);
  const visible = filtered.slice((page - 1) * 24, page * 24);
  const pageHref = (nextPage: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedKind) params.set("kind", selectedKind);
    params.set("page", String(nextPage));
    return `/${section}?${params}`;
  };

  return (
    <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8">
      <Breadcrumb items={[{ href: "/", label: "Substance library" }, { label: sections[section].title }]} />
      <header className="flex flex-col gap-3">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{sections[section].eyebrow}</p>
        <h1 className="text-4xl font-medium">{sections[section].title}</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{sections[section].description}</p>
      </header>
      <CollectionNav selected={section} />
      <form action={`/${section}`} role="search">
        <FieldGroup className="sm:flex-row sm:items-end">
          <Field>
            <FieldLabel htmlFor="concept-search" className="sr-only">Search {sections[section].title.toLowerCase()}</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Search aria-hidden="true" />
              </InputGroupAddon>
              <InputGroupInput id="concept-search" name="q" type="search" defaultValue={query} placeholder="Search names, definitions, or aliases" maxLength={200} />
              <InputGroupAddon align="inline-end">
                <InputGroupButton type="submit" size="sm">
                  Search
                  <ArrowRight data-icon="inline-end" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          {section === "concepts" && (
            <Field className="sm:max-w-64">
              <FieldLabel htmlFor="concept-kind" className="sr-only">Concept type</FieldLabel>
              <select id="concept-kind" name="kind" defaultValue={selectedKind} className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-base text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm">
                <option value="">All concept types</option>
                {kinds.map((kind) => <option key={kind} value={kind}>{kindLabels[kind]}</option>)}
              </select>
            </Field>
          )}
        </FieldGroup>
      </form>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span>{filtered.length} {filtered.length === 1 ? "entry" : "entries"}{query ? ` matching “${query}”` : " in this collection"}</span>
        {(query || selectedKind) && <Link href={`/${section}`} className="underline underline-offset-4">Clear filters</Link>}
      </div>
      {visible.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((concept) => {
            const count = entities.taggedCount(concept.id);
            return (
              <Link className="block h-full" href={conceptPath(concept)} key={concept.id}>
                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="outline">{kindLabels[concept.kind]}</Badge>
                    <CardTitle><h2 className="inline-flex items-start gap-1">{concept.label}<ArrowUpRight aria-hidden="true" size={18} /></h2></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Prose className="text-muted-foreground" text={concept.description} />
                  </CardContent>
                  <CardFooter className="text-muted-foreground">
                    <span>{count} tagged {count === 1 ? "substance" : "substances"}</span>
                    <span className="ms-auto">{concept.sourceUrls?.length ?? 0} definition sources</span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon"><BookOpen /></EmptyMedia>
            <h2>No matching entries</h2>
            <EmptyDescription>{query || selectedKind ? "Try a different name or clear the filters to see this collection." : "Definitions and supporting sources have not been assessed for this collection yet."}</EmptyDescription>
          </EmptyHeader>
          {(query || selectedKind) && (
            <EmptyContent>
              <Button nativeButton={false} variant="outline" render={<Link href={`/${section}`} />}>
                Browse the collection
                <ArrowRight data-icon="inline-end" />
              </Button>
            </EmptyContent>
          )}
        </Empty>
      )}
      <PageNav label="Collection pages" page={page} totalPages={totalPages} previousHref={page > 1 ? pageHref(page - 1) : undefined} nextHref={page < totalPages ? pageHref(page + 1) : undefined} />
      <Card>
        <CardHeader>
          <CardDescription>Definitions are original editorial summaries with linked sources. A connection describes its recorded context; it does not establish a universal effect or clinical benefit. <Link href="/about" className="underline underline-offset-4">Read our methods.</Link></CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
