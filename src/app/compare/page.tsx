import Link from "next/link";
import type { ReactNode } from "react";
import { getCatalog, getComparison, getConcepts } from "@/lib/repository";
import {
  evidenceKey,
  observationMagnitude,
  selectionSlugs,
} from "@/lib/research";
import type { Substance } from "@/lib/types";
import { EvidenceButton } from "@/components/evidence";
import { SubstanceSelectors } from "@/components/substance-selectors";
import { Breadcrumb } from "@/components/shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";
import type { ResearchSearchParams } from "@/components/observation-explorer";
export const dynamic = "force-dynamic";
export const metadata = { title: "Compare substances" };
const missing = <p className="text-muted-foreground">Not assessed.</p>;
function blocks(items: ReactNode[]) {
  return items.length ? (
    <div className="flex flex-col gap-5">{items}</div>
  ) : (
    missing
  );
}
export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<ResearchSearchParams>;
}) {
  const query = await searchParams;
  const { slugs, issues } = selectionSlugs(
    typeof query.substances === "string" ? query.substances : undefined,
  );
  const [catalog, articles, concepts] = await Promise.all([
    getCatalog(),
    getComparison(slugs),
    getConcepts(),
  ]);
  const selected = slugs.flatMap((slug) =>
    articles.filter((s) => s.slug === slug),
  );
  const outcome = typeof query.outcome === "string" ? query.outcome : undefined;
  const notices = [
    ...issues,
    ...slugs
      .filter((slug) => !articles.some((s) => s.slug === slug))
      .map((s) => `Unknown substance: ${s}`),
    ...(outcome &&
    !concepts.some((c) => c.kind === "outcome" && c.id === outcome)
      ? ["Unknown outcome selection."]
      : []),
  ];
  const sections: { name: string; render: (s: Substance) => ReactNode }[] = [
    {
      name: "Identity",
      render: (s) => (
        <dl className="flex flex-col gap-2">
          <dt>Classification</dt>
          <dd>{s.category}</dd>
          <dt>Formula / molecular weight</dt>
          <dd>
            {s.formula} · {s.molecularWeight}
          </dd>
          <dt>Also known as</dt>
          <dd>{s.aliases.join(", ") || "Not assessed"}</dd>
        </dl>
      ),
    },
    {
      name: "Mechanisms",
      render: (s) =>
        blocks(
          s.mechanisms.map((m) => (
            <article className="flex flex-col gap-2" key={m.title}>
              <strong>{m.title}</strong>
              <p>{m.description}</p>
              <div>
                <EvidenceButton
                  evidenceKey={evidenceKey(s.slug, "mechanism", m)}
                />
              </div>
            </article>
          )),
        ),
    },
    ...(["effects", "outcomes"] as const).map((kind) => ({
      name: kind === "effects" ? "Subjective effects" : "Measured outcomes",
      render: (s: Substance) =>
        blocks(
          s[kind]
            .filter(
              (o) => kind !== "outcomes" || !outcome || o.conceptId === outcome,
            )
            .map((o) => (
              <article
                key={evidenceKey(
                  s.slug,
                  kind === "effects" ? "effect" : "outcome",
                  o,
                )}
                className="flex flex-col gap-2"
              >
                <strong>
                  {o.name} · {o.direction}
                </strong>
                <p>{o.description}</p>
                <p>
                  {o.population} · {o.exposure}
                </p>
                <p>
                  Comparator:{" "}
                  {o.study?.comparator ??
                    o.result?.comparator ??
                    "Not assessed"}
                  . Assessment:{" "}
                  {o.study?.assessmentTime ??
                    o.result?.assessmentTime ??
                    "Not assessed"}
                  .
                </p>
                <p>{observationMagnitude(o)}</p>
                {o.study?.comparedSubstances && (
                  <p>
                    Explicit study arms: {o.study.comparedSubstances.join(", ")}
                  </p>
                )}
                <div>
                  <EvidenceButton
                    evidenceKey={evidenceKey(
                      s.slug,
                      kind === "effects" ? "effect" : "outcome",
                      o,
                    )}
                  />
                </div>
              </article>
            )),
        ),
    })),
    {
      name: "Exposure contexts",
      render: (s) =>
        blocks(
          s.doses.map((d) => (
            <article className="flex flex-col gap-2" key={d.label}>
              <strong>
                {d.label}: {d.amount}
              </strong>
              <p>
                {d.route} · {d.formulation} · {d.frequency} · {d.duration}
              </p>
              <p>{d.population}</p>
              <p>{d.note}</p>
              <div>
                <EvidenceButton evidenceKey={evidenceKey(s.slug, "dose", d)} />
              </div>
            </article>
          )),
        ),
    },
    {
      name: "Timing",
      render: (s) => (
        <div className="flex flex-col gap-3">
          <p>Onset: {s.kinetics.onset}</p>
          <p>Peak: {s.kinetics.peak}</p>
          <p>Reported duration: {s.kinetics.duration}</p>
          <p>Elimination: {s.halfLife.label}</p>
          {blocks(
            s.pkObservations.map((p) => (
              <article key={p.id} className="flex flex-col gap-2">
                <p>
                  {p.analyte} · {p.route} · {p.formulation} · {p.population}
                </p>
                <div>
                  <EvidenceButton evidenceKey={evidenceKey(s.slug, "pk", p)} />
                </div>
              </article>
            )),
          )}
        </div>
      ),
    },
    {
      name: "Safety",
      render: (s) =>
        blocks([
          ...s.cautions.map((c) => (
            <article key={c.title} className="flex flex-col gap-2">
              <strong>{c.title}</strong>
              <p>{c.description}</p>
              <div>
                <EvidenceButton
                  evidenceKey={evidenceKey(s.slug, "caution", c)}
                />
              </div>
            </article>
          )),
          <Link
            key="interactions"
            className="underline"
            href={`/interactions?a=${s.slug}`}
          >
            Explore documented interactions
          </Link>,
        ]),
    },
  ];
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 sm:px-8"
    >
      <Breadcrumb
        items={[{ href: "/", label: "Library" }, { label: "Compare" }]}
      />
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-medium">Compare substances</h1>
        <p className="max-w-3xl text-muted-foreground">
          Compare up to three articles, keeping populations, formulations,
          measures, and sources visible. Separate studies are not direct
          comparisons; no overall ranking is assigned.
        </p>
      </header>
      <SubstanceSelectors
        catalog={catalog.map(({ slug, name, aliases }) => ({
          slug,
          name,
          aliases,
        }))}
        mode="compare"
        selected={slugs}
        outcomes={concepts
          .filter((c) => c.kind === "outcome")
          .map(({ id, label }) => ({ id, label }))}
      />
      {notices.length > 0 && (
        <div role="status">
          {notices.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      )}
      {selected.length ? (
        <>
          <div className="hidden md:block">
            <Table className="table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-40">Context</TableHead>
                  {selected.map((s) => (
                    <TableHead key={s.slug}>
                      <Link
                        className="underline"
                        href={`/substances/${s.slug}`}
                      >
                        {s.name}
                      </Link>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sections.map((section) => (
                  <TableRow key={section.name}>
                    <TableHead className="align-top whitespace-normal">
                      {section.name}
                    </TableHead>
                    {selected.map((s) => (
                      <TableCell
                        key={s.slug}
                        className="align-top whitespace-normal break-words"
                      >
                        {section.render(s)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col gap-8 md:hidden">
            {sections.map((section) => (
              <section key={section.name} className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium">{section.name}</h2>
                {selected.map((s) => (
                  <Card key={s.slug}>
                    <CardHeader>
                      <CardTitle>
                        <Link href={`/substances/${s.slug}`}>{s.name}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{section.render(s)}</CardContent>
                  </Card>
                ))}
              </section>
            ))}
          </div>
        </>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyDescription>
              Choose substances to compare their published records.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </main>
  );
}
