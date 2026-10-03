import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, FlaskConical, GitBranch, Search } from "lucide-react";
import Catalog from "@/components/catalog";
import { MoleculeImage } from "@/components/molecule-image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { getCatalog, getConcepts } from "@/lib/repository";
import { conceptPath } from "@/lib/types";

export const dynamic = "force-dynamic";

const featuredConcepts = ["acetylcholine", "histamine", "cyp1a2", "tobacco-smoke"];

export default async function Home({ searchParams }: { searchParams: Promise<{ tag?: string; q?: string }> }) {
  const { tag, q } = await searchParams;
  const [substances, tags] = await Promise.all([getCatalog(), getConcepts()]);

  return (
    <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-8 sm:px-8">
      <section className="grid items-center gap-8 border-b border-border pb-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="flex flex-col gap-4">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-foreground" aria-hidden="true" />
            An independent, open reference
          </p>
          <h1 className="max-w-xl text-4xl font-medium sm:text-5xl">
            A field guide to <span className="italic">substances.</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Understand the effects. Explore the mechanisms. Read the evidence, with its context intact.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><BookOpen aria-hidden="true" /> Shared knowledge</span>
            <span className="inline-flex items-center gap-1.5"><FlaskConical aria-hidden="true" /> Traceable sources</span>
            <span className="inline-flex items-center gap-1.5"><GitBranch aria-hidden="true" /> Connected concepts</span>
          </div>
        </div>
        <Link href="/substances/caffeine" className="block">
          <Card>
            <CardHeader>
              <CardDescription className="inline-flex items-center gap-1.5">
                <FlaskConical aria-hidden="true" /> A closer look
              </CardDescription>
              <CardTitle>Explore caffeine</CardTitle>
            </CardHeader>
            <CardContent>
              <MoleculeImage src="/molecules/caffeine.png" alt="Caffeine molecular structure" wellClassName="h-40 w-full" className="h-36" />
            </CardContent>
            <CardFooter className="justify-between gap-3">
              <span className="min-w-0">
                From adenosine to elimination.
                <ArrowUpRight className="ms-1 inline align-text-bottom" aria-hidden="true" />
              </span>
              <span className="shrink-0 text-muted-foreground">C₈H₁₀N₄O₂</span>
            </CardFooter>
          </Card>
        </Link>
      </section>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <Catalog
          key={`${tag || "all"}:${q || ""}`}
          substances={substances}
          tags={tags}
          initialTag={tags.some((item) => item.id === tag) ? tag : ""}
          initialQuery={typeof q === "string" ? q : ""}
        />
        <aside className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardDescription>Find a substance</CardDescription>
                <Search className="text-muted-foreground" aria-hidden="true" />
              </div>
              <CardTitle>Search the library.</CardTitle>
              <CardDescription>Look up a name, an effect, or a mechanism, then open it in the collection.</CardDescription>
            </CardHeader>
            <CardContent>
              <form method="get" action="/#library">
                <Field>
                  <FieldLabel htmlFor="library-jump">Name, effect, or mechanism</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon>
                      <Search aria-hidden="true" />
                    </InputGroupAddon>
                    <InputGroupInput id="library-jump" name="q" maxLength={200} placeholder="Caffeine, alertness, adenosine…" />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton type="submit">Search</InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </form>
            </CardContent>
            <CardFooter>
              <Link href="/graph" className="inline-flex w-full items-center justify-between text-sm">
                Open the knowledge graph <ArrowUpRight aria-hidden="true" />
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Start with a concept</CardDescription>
            </CardHeader>
            <CardContent>
              <ItemGroup>
                {featuredConcepts.map((id) => tags.find((tag) => tag.id === id)).filter((tag) => tag !== undefined).map((tag) => (
                  <Item key={tag.id} variant="muted" size="sm" role="listitem" render={<Link href={conceptPath(tag)} />}>
                    <ItemContent>
                      <ItemTitle>{tag.label}</ItemTitle>
                      <ItemDescription>{tag.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <ArrowUpRight aria-hidden="true" />
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Reading the evidence</CardDescription>
              <CardTitle>The finding. And its limits.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">A subjective experience, a laboratory result, and a clinical outcome answer different questions.</p>
            </CardContent>
            <CardFooter>
              <Link href="/about" className="inline-flex items-center gap-1.5 text-sm">
                How this wiki is written <ArrowRight aria-hidden="true" />
              </Link>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </main>
  );
}
