"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock3, FlaskConical, LayoutGrid, List, Search, SlidersHorizontal, X } from "lucide-react";
import type { CatalogSubstance, Tag } from "@/lib/types";
import { searchCatalog } from "@/lib/search";
import { cn } from "@/lib/utils";
import { MoleculeImage } from "@/components/molecule-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const sortItems = [
  { value: "name", label: "A–Z" },
  { value: "updated", label: "Recently sourced" },
];

export default function Catalog({
  substances,
  tags,
  initialTag = "",
  initialQuery = "",
}: {
  substances: CatalogSubstance[];
  tags: Tag[];
  initialTag?: string;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTag ? [initialTag] : []);
  const [sort, setSort] = useState<"name" | "updated">("name");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(Boolean(initialTag));
  const categories = [...new Set(substances.map((item) => item.category))];
  const kinds = [...new Set(tags.map((tag) => tag.kind))];
  const filtered = useMemo(
    () => searchCatalog(substances, tags, { q: query, category, tags: selectedTags, sort }),
    [substances, tags, query, category, selectedTags, sort],
  );

  function clear() {
    setQuery("");
    setCategory("");
    setSelectedTags([]);
  }

  function toggleTag(id: string) {
    setSelectedTags((current) => (current.includes(id) ? current.filter((tag) => tag !== id) : [...current, id]));
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return;
      }
      event.preventDefault();
      document.getElementById("library-search")?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="library" className="flex flex-col gap-5" aria-labelledby="library-title">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">The substance library</p>
          <h2 id="library-title" className="text-2xl font-medium">Explore the collection.</h2>
        </div>
        <Badge variant="secondary">{substances.length} articles</Badge>
      </div>

      <div className="flex items-center gap-2">
        <InputGroup className="w-auto min-w-0 flex-1">
          <InputGroupAddon>
            <Search aria-hidden="true" />
          </InputGroupAddon>
          <InputGroupInput
            id="library-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a substance, effect, or mechanism…"
            aria-label="Search the substance library"
          />
          <InputGroupAddon align="inline-end">
            {query ? (
              <InputGroupButton type="button" size="icon-xs" aria-label="Clear search" onClick={() => setQuery("")}>
                <X />
              </InputGroupButton>
            ) : (
              <Kbd>/</Kbd>
            )}
          </InputGroupAddon>
        </InputGroup>
        <Button
          type="button"
          variant="outline"
          aria-expanded={showFilters}
          aria-label="Filters"
          onClick={() => setShowFilters((open) => !open)}
        >
          <SlidersHorizontal data-icon="inline-start" />
          <span>Filters</span>
          {selectedTags.length > 0 && <Badge variant="secondary">{selectedTags.length}</Badge>}
        </Button>
      </div>

      {showFilters && (
        <div className="flex flex-col gap-3 rounded-xl bg-muted/40 p-4 ring-1 ring-foreground/10">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm">Match all selected concepts</p>
            <Button type="button" variant="ghost" size="sm" onClick={clear}>Reset filters</Button>
          </div>
          <ScrollArea className="h-80">
            <div className="grid gap-4 pe-3 sm:grid-cols-2">
              {kinds.map((kind) => (
                <FieldSet key={kind} className="rounded-lg bg-card p-3 ring-1 ring-foreground/10">
                  <FieldLegend className="capitalize">{kind.replaceAll("-", " ")}</FieldLegend>
                  <FieldGroup>
                    {tags.filter((tag) => tag.kind === kind).map((tag) => (
                      <Field key={tag.id} orientation="horizontal">
                        <Checkbox
                          id={`tag-${tag.id}`}
                          checked={selectedTags.includes(tag.id)}
                          onCheckedChange={() => toggleTag(tag.id)}
                        />
                        <FieldLabel htmlFor={`tag-${tag.id}`}>{tag.label}</FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                </FieldSet>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      <ToggleGroup
        value={[category || "all"]}
        onValueChange={(value) => {
          const next = value[value.length - 1];
          setCategory(!next || next === "all" ? "" : next);
        }}
        variant="outline"
        size="sm"
        spacing={2}
        className="flex w-full flex-wrap"
        aria-label="Substance categories"
      >
        <ToggleGroupItem value="all">All substances</ToggleGroupItem>
        {categories.map((item) => (
          <ToggleGroupItem key={item} value={item}>{item}</ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p role="status" className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "substance" : "substances"}
          {query && <> matching “{query}”</>}
        </p>
        <div className="flex items-center gap-2">
          <Select
            items={sortItems}
            value={sort}
            onValueChange={(value) => {
              if (value === "name" || value === "updated") setSort(value);
            }}
          >
            <SelectTrigger aria-label="Sort substances" className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sortItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <ToggleGroup
            value={[view]}
            onValueChange={(value) => {
              const next = value[value.length - 1];
              if (next === "grid" || next === "list") setView(next);
            }}
            variant="outline"
            size="sm"
            spacing={0}
            aria-label="Library view"
          >
            <ToggleGroupItem value="grid" aria-label="Grid view"><LayoutGrid /></ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view"><List /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={cn("substance-grid grid grid-cols-1 gap-4 sm:grid-cols-2", view === "list" && "list-view sm:grid-cols-1")}>
        {filtered.map((substance) => {
          const conceptTags = substance.tags
            .map((id) => tags.find((tag) => tag.id === id))
            .filter((tag) => tag && tag.kind !== "legal")
            .slice(0, 2);
          return (
            <Link key={substance.slug} href={`/substances/${substance.slug}`} className={cn("substance-card block min-w-0", view === "list" && "sm:col-span-1")}>
              <Card className={cn("h-full", view === "list" && "md:flex-row md:items-stretch")}>
                <CardHeader className={cn(view === "list" && "md:flex-1")}>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary">{substance.category}</Badge>
                    <ArrowUpRight className="text-muted-foreground" aria-hidden="true" />
                  </div>
                  <CardTitle>
                    <h3>{substance.name}</h3>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{substance.formula}</p>
                </CardHeader>
                <CardContent className={cn("flex flex-col gap-3", view === "list" && "md:flex-1 md:justify-center")}>
                  {view !== "list" && (
                    <MoleculeImage
                      src={`/molecules/${substance.slug}.png`}
                      alt={`${substance.name} molecular structure`}
                      wellClassName="ms-auto h-16 w-20 shrink-0"
                      loading="lazy"
                    />
                  )}
                  <p className="line-clamp-3 text-sm text-muted-foreground">{substance.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {conceptTags.map((tag) => (
                      <Badge key={tag!.id} variant="outline">{tag!.label}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className={cn("justify-between gap-3 text-muted-foreground", view === "list" && "md:mt-0 md:w-48 md:flex-col md:items-start md:justify-center md:border-s md:border-t-0")}>
                  <span>{substance.editorialStatus === "editorially-reviewed" ? "Editorially reviewed" : "Sourced draft"}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 aria-hidden="true" />
                    {substance.halfLifeLabel}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FlaskConical />
            </EmptyMedia>
            <EmptyTitle>
              <h3>No substances found</h3>
            </EmptyTitle>
            <EmptyDescription>Try another name, mechanism, or category.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button type="button" variant="outline" onClick={clear}>Clear search & filters</Button>
          </EmptyContent>
        </Empty>
      )}

      <Separator />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-muted-foreground">A growing, source-linked collection. Draft articles await independent editorial review.</p>
        <Link href="/contribute" className="inline-flex items-center gap-1 text-sm underline underline-offset-4">
          Contribute <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
