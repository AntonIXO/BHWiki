import { getCatalog, getPairInteractions } from "@/lib/repository";
import { selectionSlugs } from "@/lib/research";
import { EvidenceButton } from "@/components/evidence";
import { SubstanceSelectors } from "@/components/substance-selectors";
import { Breadcrumb } from "@/components/shell";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";
import type { ResearchSearchParams } from "@/components/observation-explorer";
export const dynamic = "force-dynamic";
export const metadata = { title: "Explore interactions" };
export default async function InteractionsPage({
  searchParams,
}: {
  searchParams: Promise<ResearchSearchParams>;
}) {
  const q = await searchParams;
  const a = typeof q.a === "string" ? q.a : "",
    b = typeof q.b === "string" ? q.b : "";
  const valid = (s: string) => selectionSlugs(s, 1).slugs[0] === s;
  const [catalog, pair] = await Promise.all([
    getCatalog(),
    a && b && valid(a) && valid(b) ? getPairInteractions(a, b) : undefined,
  ]);
  const invalid = [a, b].filter((s) => s && !catalog.some((c) => c.slug === s));
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8"
    >
      <Breadcrumb
        items={[{ href: "/", label: "Library" }, { label: "Interactions" }]}
      />
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-medium">Explore interactions</h1>
        <p className="max-w-3xl text-muted-foreground">
          Inspect documented concerns for a pair of substances. Coverage is
          incomplete; an absent record does not establish safety.
        </p>
      </header>
      <SubstanceSelectors
        catalog={catalog.map(({ slug, name, aliases }) => ({
          slug,
          name,
          aliases,
        }))}
        mode="interactions"
        selected={[a, b]}
      />
      {invalid.length > 0 && (
        <p role="status">Unknown selection: {invalid.join(", ")}</p>
      )}
      {a && a === b ? (
        <p role="status">Choose two different substances.</p>
      ) : pair ? (
        <>
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">Assessed pair records</h2>
            {pair.result.matches.length ? (
              pair.result.matches.map((match) => (
                <Card key={match.key}>
                  <CardHeader>
                    <CardTitle>{match.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p>{match.summary}</p>
                    {match.records.map((r) => (
                      <div key={r.key} className="flex flex-col gap-3">
                        <p className="text-sm text-muted-foreground">
                          Recorded in {r.articleName}
                        </p>
                        <dl className="grid gap-3 sm:grid-cols-2">
                          {r.context
                            .filter((c) => c.label !== "Origin")
                            .map((c) => (
                              <div key={c.label}>
                                <dt className="text-muted-foreground">
                                  {c.label}
                                </dt>
                                <dd>{c.value}</dd>
                              </div>
                            ))}
                        </dl>
                        <div>
                          <EvidenceButton evidenceKey={r.key} />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyDescription>
                    No assessed interaction record for this pair.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
          </section>
          {pair.overlaps.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Shared mechanisms and findings</h2>
              <p className="text-muted-foreground">
                These records share an authored mechanism, reported effect, or measured outcome. An overlap is context for comparison, not evidence that the combination is unsafe or beneficial.
              </p>
              {pair.overlaps.map((overlap) => (
                <Card key={overlap.key}>
                  <CardHeader>
                    <CardTitle>{overlap.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline">{overlap.kind === "mechanism" ? "Shared mechanism" : overlap.kind === "outcome" ? "Shared measured outcome" : "Shared reported effect"}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-5 sm:grid-cols-2">
                    {overlap.records.map((record, index) => (
                      <div key={`${overlap.key}:${record.articleSlug}:${index}`} className="flex flex-col gap-3">
                        <Link href={`/substances/${record.articleSlug}`} className="font-medium underline underline-offset-4">{record.articleName}</Link>
                        {record.direction && <Badge variant="secondary" className="w-fit">{record.direction}</Badge>}
                        <p>{record.detail}</p>
                        {record.evidenceKey && <EvidenceButton evidenceKey={record.evidenceKey} />}
                        {record.sourceUrls && record.sourceUrls.length > 0 && <div className="flex flex-wrap gap-3 text-sm"><span className="text-muted-foreground">Concept sources:</span>{record.sourceUrls.map((url, sourceIndex) => <a key={url} href={url} target="_blank" rel="noreferrer" className="underline underline-offset-4">Source {sourceIndex + 1}</a>)}</div>}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </section>
          )}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">
              General cautions from these articles
            </h2>
            <p className="text-muted-foreground">
              These records are not assessments of the selected combination.
            </p>
            {pair.result.general.map((r) => (
              <Card key={r.key}>
                <CardHeader>
                  <CardDescription>{r.articleName}</CardDescription>
                  <CardTitle>{r.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p>{r.assertion}</p>
                  <div>
                    <EvidenceButton evidenceKey={r.key} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyDescription>
              Choose two substances to inspect their documented interactions.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </main>
  );
}
