import Link from "next/link";
import { getObservationPage } from "@/lib/repository";
import {
  observationFilterNames,
  type ObservationFilters,
  type ObservationRow,
} from "@/lib/research-types";
import { ResearchFilters } from "@/components/research-controls";
import { EvidenceButton } from "@/components/evidence";
import { StudyPlots } from "@/components/study-plots";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";
import { Badge } from "@/components/ui/badge";
import { Prose } from "@/components/prose";
export type ResearchSearchParams = Record<
  string,
  string | string[] | undefined
>;
export function ObservationFinding({ row }: { row: ObservationRow }) {
  const o = row.observation;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link
            className="underline underline-offset-4"
            href={`/substances/${row.articleSlug}`}
          >
            {row.articleName}: {o.name}
          </Link>
        </CardTitle>
        <CardDescription>
          {o.evidence} · {o.direction} · {row.editorialStatus}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Prose text={o.description} />
        {row.kind === "effect" && (
          <Badge variant="outline">
            {o.reportType === "measured-assessment"
              ? "Measured subjective assessment"
              : o.reportType === "informal-account"
                ? "Informal account"
                : "Report method not assessed"}
          </Badge>
        )}
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Population", o.population],
            ["Exposure", o.exposure],
            ["Comparator", o.study?.comparator],
            ["Instrument", o.instrument],
            ["Magnitude", o.magnitude],
            ["Assessment time", o.study?.assessmentTime],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd>{value ?? "Not assessed"}</dd>
            </div>
          ))}
        </dl>
        <div>
          <EvidenceButton evidenceKey={row.key} />
        </div>
      </CardContent>
    </Card>
  );
}
export async function ObservationExplorer({
  conceptId,
  kind,
  searchParams,
}: {
  conceptId: string;
  kind: "effect" | "outcome";
  searchParams: ResearchSearchParams;
}) {
  const filters: ObservationFilters = {};
  for (const field of observationFilterNames) {
    const v = searchParams[field];
    if (typeof v === "string" && v.length <= 500) filters[field] = v;
  }
  const result = await getObservationPage(
    conceptId,
    kind,
    filters,
    Number(searchParams.page ?? 1),
  );
  const allowed =
    kind === "outcome" ? ["findings", "table", "plot"] : ["findings", "table"];
  const view =
    typeof searchParams.view === "string" && allowed.includes(searchParams.view)
      ? searchParams.view
      : "findings";
  const pageLink = (page: number) => {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(searchParams))
      if (typeof v === "string" && k !== "evidence") params.set(k, v);
    params.set("page", String(page));
    return `?${params}#observations`;
  };
  return (
    <div className="flex flex-col gap-5">
      <ResearchFilters facets={result.facets} kind={kind} view={view}>
        <p role="status" className="text-sm text-muted-foreground">
          {result.total} matching findings · Page {result.page} of{" "}
          {result.pages}. Filters search the complete published collection.
        </p>
        {!result.rows.length ? (
          <Empty>
            <EmptyHeader>
              <EmptyDescription>
                No matching observations have been assessed. Clear filters to
                broaden the search.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : view === "plot" ? (
          <StudyPlots rows={result.rows} />
        ) : view === "table" ? (
          <Table>
            <TableHeader>
              <TableRow>
                {[
                  "Substance / outcome",
                  "Population / exposure",
                  "Comparator / follow-up",
                  "Instrument / result",
                  "Evidence",
                ].map((h) => (
                  <TableHead key={h}>{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.rows.map((row) => (
                <TableRow key={row.key}>
                  <TableCell>
                    <Link
                      href={`/substances/${row.articleSlug}`}
                      className="underline"
                    >
                      {row.articleName}
                    </Link>
                    <br />
                    {row.observation.name}
                  </TableCell>
                  <TableCell>
                    {row.observation.population}
                    <br />
                    {row.observation.exposure}
                  </TableCell>
                  <TableCell>
                    {row.observation.study?.comparator ??
                      "Comparator not assessed"}
                    <br />
                    {row.observation.study?.assessmentTime ??
                      "Follow-up not assessed"}
                  </TableCell>
                  <TableCell>
                    {row.observation.instrument ?? "Instrument not assessed"}
                    <br />
                    {row.observation.magnitude ?? "Magnitude not quantified"}
                  </TableCell>
                  <TableCell>
                    <EvidenceButton evidenceKey={row.key} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          result.rows.map((row) => (
            <ObservationFinding key={row.key} row={row} />
          ))
        )}
        <nav
          aria-label="Observation pages"
          className="flex justify-between gap-3"
        >
          {result.page > 1 ? (
            <Link className="underline" href={pageLink(result.page - 1)}>
              Previous findings
            </Link>
          ) : (
            <span />
          )}
          {result.page < result.pages && (
            <Link className="underline" href={pageLink(result.page + 1)}>
              Next findings
            </Link>
          )}
        </nav>
      </ResearchFilters>
    </div>
  );
}
