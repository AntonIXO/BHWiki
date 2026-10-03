"use client";
import { useState } from "react";
import { useQueryControls } from "@/components/research-controls";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export type SubstanceOption = { slug: string; name: string; aliases: string[] };
export function SubstanceSelectors({
  catalog,
  mode,
  selected,
  outcomes = [],
}: {
  catalog: SubstanceOption[];
  mode: "compare" | "interactions";
  selected: string[];
  outcomes?: { id: string; label: string }[];
}) {
  const { params, update } = useQueryControls();
  const [search, setSearch] = useState("");
  const visible = catalog.filter(
    (s) =>
      selected.includes(s.slug) ||
      [s.name, s.slug, ...s.aliases].some((v) =>
        v.toLowerCase().includes(search.toLowerCase()),
      ),
  );
  const count = mode === "compare" ? 3 : 2;
  const change = (index: number, value: string | null) => {
    if (mode === "interactions") update({ [index === 0 ? "a" : "b"]: value });
    else {
      const next = [...selected];
      next[index] = value ?? "";
      update({ substances: next.filter(Boolean).join(",") || null });
    }
  };
  const options = [
    { value: "__none", label: "Choose a substance" },
    ...visible.map((s) => ({ value: s.slug, label: s.name })),
  ];
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="substance-picker-search">
            Filter substance choices
          </FieldLabel>
          <Input
            id="substance-picker-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Name or alias"
          />
        </Field>
      </FieldGroup>
      <FieldGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }, (_, index) => (
          <Field key={index}>
            <FieldLabel htmlFor={`substance-${index}`}>
              Substance {index + 1}
              {mode === "compare" && index === 2 ? " (optional)" : ""}
            </FieldLabel>
            <Select
              items={options}
              value={selected[index] || "__none"}
              onValueChange={(value) =>
                change(index, value === "__none" ? null : value)
              }
            >
              <SelectTrigger id={`substance-${index}`} className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((s) => (
                    <SelectItem
                      key={s.value}
                      value={s.value}
                      disabled={
                        s.value !== selected[index] &&
                        selected.includes(s.value)
                      }
                    >
                      {s.label}
                    </SelectItem>
                  ))}
                  {selected[index] &&
                    !catalog.some((s) => s.slug === selected[index]) && (
                      <SelectItem value={selected[index]}>
                        Unknown: {selected[index]}
                      </SelectItem>
                    )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        ))}
        {mode === "compare" && (
          <Field>
            <FieldLabel htmlFor="compare-outcome">
              Focus on an outcome
            </FieldLabel>
            <Select
              items={[
                { value: "__all", label: "All outcomes" },
                ...outcomes.map((o) => ({ value: o.id, label: o.label })),
              ]}
              value={params.get("outcome") ?? "__all"}
              onValueChange={(v) =>
                update({ outcome: v === "__all" ? null : v })
              }
            >
              <SelectTrigger id="compare-outcome" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="__all">All outcomes</SelectItem>
                  {outcomes.map((o) => (
                    <SelectItem key={o.id} value={o.id}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        )}
      </FieldGroup>
      <div className="flex gap-3">
        {mode === "interactions" && (
          <Button
            variant="outline"
            onClick={() =>
              update({ a: selected[1] ?? null, b: selected[0] ?? null })
            }
          >
            Swap substances
          </Button>
        )}
        <Button
          variant="ghost"
          onClick={() =>
            update(
              mode === "compare"
                ? { substances: null, outcome: null }
                : { a: null, b: null },
            )
          }
        >
          Clear selections
        </Button>
      </div>
    </div>
  );
}
