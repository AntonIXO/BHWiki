"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  observationFilterNames,
  type ObservationPage,
  type ObservationFilter,
} from "@/lib/research-types";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
export function useQueryControls() {
  const router = useRouter(),
    params = useSearchParams(),
    pathname = usePathname();
  return {
    params,
    update: (changes: Record<string, string | null>) => {
      const q = new URLSearchParams(params);
      q.delete("page");
      q.delete("evidence");
      for (const [k, v] of Object.entries(changes)) {
        if (v) q.set(k, v);
        else q.delete(k);
      }
      router.push(`${pathname}${q.size ? `?${q}` : ""}`, { scroll: false });
    },
  };
}
const labels: Record<ObservationFilter, string> = {
  substance: "Substance",
  population: "Population",
  design: "Study design",
  duration: "Exposure duration",
  route: "Route",
  formulation: "Formulation",
  evidence: "Evidence type",
  context: "Reported context",
};
export function ResearchFilters({
  facets,
  kind,
  view,
  children,
}: {
  facets: ObservationPage["facets"];
  kind: "effect" | "outcome";
  view: string;
  children: React.ReactNode;
}) {
  const { params, update } = useQueryControls();
  const fields =
    kind === "effect"
      ? (["substance", "evidence", "context"] as const)
      : observationFilterNames.filter(
          (f) => !["evidence", "context"].includes(f),
        );
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {fields.map((field) => (
          <Field key={field}>
            <FieldLabel htmlFor={`filter-${field}`}>{labels[field]}</FieldLabel>
            <Select
              items={[
                { value: "__all", label: "All" },
                ...facets[field],
                ...(params.has(field) &&
                !facets[field].some((f) => f.value === params.get(field))
                  ? [
                      {
                        value: params.get(field)!,
                        label: "Unavailable selection",
                      },
                    ]
                  : []),
              ]}
              value={params.get(field) ?? "__all"}
              onValueChange={(v) =>
                update({ [field]: v === "__all" ? null : v })
              }
            >
              <SelectTrigger id={`filter-${field}`} className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="__all">All</SelectItem>
                  {facets[field].map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                  {params.has(field) &&
                    !facets[field].some(
                      (f) => f.value === params.get(field),
                    ) && (
                      <SelectItem value={params.get(field)!}>
                        Unavailable selection
                      </SelectItem>
                    )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        ))}
      </FieldGroup>
      <Tabs value={view} onValueChange={(v) => update({ view: v })}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <TabsList variant="line">
            <TabsTrigger value="findings">Findings</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
            {kind === "outcome" && <TabsTrigger value="plot">Plot</TabsTrigger>}
          </TabsList>
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              update(
                Object.fromEntries(
                  observationFilterNames.map((f) => [f, null]),
                ),
              )
            }
          >
            Clear filters
          </Button>
        </div>
        <TabsContent value={view} className="flex flex-col gap-5">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  );
}
