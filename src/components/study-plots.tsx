"use client";
import { useId } from "react";
import type { ObservationRow } from "@/lib/research-types";
import { isRatio, plotGroups } from "@/lib/research";
import { EvidenceButton, useEvidence } from "@/components/evidence";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader } from "@/components/ui/empty";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ResultPlot({ rows }: { rows: ObservationRow[] }) {
  const id = useId(),
    open = useEvidence(),
    result = rows[0].observation.result!;
  const ratio = isRatio(result),
    transform = (n: number) => (ratio ? Math.log(n) : n);
  const nullValue = result.measure === "mean" ? null : ratio ? 1 : 0;
  const values = rows.flatMap((r) => {
    const v = r.observation.result!;
    return [
      v.estimate,
      ...(v.confidenceInterval
        ? [v.confidenceInterval.lower, v.confidenceInterval.upper]
        : []),
    ];
  });
  if (nullValue !== null) values.push(nullValue);
  const transformed = values.map(transform);
  let min = Math.min(...transformed),
    max = Math.max(...transformed);
  const pad = (max - min || Math.max(Math.abs(min), 1)) * 0.12;
  min -= pad;
  max += pad;
  const x = (v: number) => 68 + ((transform(v) - min) / (max - min)) * 440;
  const height = rows.length * 40 + 62;
  const format = (v: number) =>
    new Intl.NumberFormat("en", { maximumSignificantDigits: 3 }).format(v);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{rows[0].observation.name}</CardTitle>
        <CardDescription>
          {result.instrument} · {result.measure} · {result.unit}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>
          {result.population} · Comparator: {result.comparator} · Assessment:{" "}
          {result.assessmentTime}
        </p>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 560 ${height}`}
            className="min-w-[480px] w-full"
            role="group"
            aria-labelledby={`${id}-title`}
          >
            <title
              id={`${id}-title`}
            >{`Study estimates and reported confidence intervals for ${rows[0].observation.name}. ${ratio ? "Logarithmic" : "Linear"} horizontal axis.`}</title>
            {nullValue !== null && (
              <line
                x1={x(nullValue)}
                x2={x(nullValue)}
                y1={10}
                y2={height - 38}
                stroke="currentColor"
                strokeDasharray="3 5"
                opacity=".4"
              />
            )}
            {rows.map((row, index) => {
              const r = row.observation.result!,
                y = 25 + index * 40;
              return (
                <g
                  key={row.key}
                  role="button"
                  tabIndex={0}
                  aria-label={`View evidence: ${row.articleName}, ${r.estimate} ${r.unit}`}
                  onClick={() => open(row.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      open(row.key);
                    }
                  }}
                  className="cursor-pointer focus:outline-auto"
                >
                  <text x={10} y={y + 4} fill="currentColor" fontSize="12">
                    {index + 1}
                  </text>
                  {r.confidenceInterval && (
                    <>
                      <line
                        x1={x(r.confidenceInterval.lower)}
                        x2={x(r.confidenceInterval.upper)}
                        y1={y}
                        y2={y}
                        stroke="currentColor"
                      />
                      <path
                        d={`M${x(r.confidenceInterval.lower)} ${y - 5}v10 M${x(r.confidenceInterval.upper)} ${y - 5}v10`}
                        stroke="currentColor"
                      />
                    </>
                  )}
                  <circle cx={x(r.estimate)} cy={y} r={6} fill="currentColor" />
                </g>
              );
            })}
            {[0, 1, 2, 3, 4].map((i) => {
              const value = min + (i / 4) * (max - min);
              return (
                <text
                  key={i}
                  x={68 + (i / 4) * 440}
                  y={height - 15}
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="12"
                >
                  {format(ratio ? Math.exp(value) : value)}
                </text>
              );
            })}
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">
          Each point is one reported estimate. Intervals are displayed only when
          recorded. No pooled estimate is calculated.{" "}
          {nullValue !== null &&
            `The dashed line marks the no-effect value (${nullValue}).`}
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Study / substance</TableHead>
              <TableHead>Estimate</TableHead>
              <TableHead>Interval</TableHead>
              <TableHead>Evidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => {
              const r = row.observation.result!;
              return (
                <TableRow key={row.key}>
                  <TableCell>
                    {index + 1}. {row.articleName}
                    <br />
                    {row.observation.study?.id ??
                      row.reference?.title ??
                      "Study not assessed"}
                  </TableCell>
                  <TableCell>
                    {r.estimate} {r.unit}
                  </TableCell>
                  <TableCell>
                    {r.confidenceInterval
                      ? `${r.confidenceInterval.level}% CI ${r.confidenceInterval.lower}–${r.confidenceInterval.upper}`
                      : "Interval not reported"}
                  </TableCell>
                  <TableCell>
                    <EvidenceButton evidenceKey={row.key} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export function StudyPlots({ rows }: { rows: ObservationRow[] }) {
  const groups = plotGroups(rows),
    excluded = rows.filter((r) => !r.observation.result).length;
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        {excluded} of {rows.length} findings in this selection lack structured
        estimates. Different measures, populations, instruments, comparators, or
        assessment times are shown separately.
      </p>
      {groups.length ? (
        groups.map((g) => <ResultPlot key={g.key} rows={g.rows} />)
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyDescription>
              No structured estimates are available to plot. Reported findings
              remain available in the findings and table views.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
