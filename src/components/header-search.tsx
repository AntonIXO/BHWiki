"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Search, X } from "lucide-react";
import type { CatalogSubstance } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type SearchResponse = {
  items: CatalogSubstance[];
  total: number;
  nextOffset: number | null;
};

type SearchState = "idle" | "loading" | "ready" | "error";

export function HeaderSearch() {
  const router = useRouter();
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<CatalogSubstance[]>([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState<SearchState>("idle");

  useEffect(() => {
    if (open) document.getElementById("header-search-input")?.focus();
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return;
      }
      event.preventDefault();
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const trimmed = query.trim();
    if (!open || !trimmed) {
      setItems([]);
      setTotal(0);
      setStatus("idle");
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setStatus("loading");
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}&limit=8`, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("Search request failed");
        const payload = (await response.json()) as SearchResponse;
        setItems(payload.items);
        setTotal(payload.total);
        setStatus("ready");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setItems([]);
        setTotal(0);
        setStatus("error");
      }
    }, 150);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [open, query]);

  function close() {
    setOpen(false);
    setQuery("");
    setItems([]);
    setTotal(0);
    setStatus("idle");
    window.setTimeout(() => document.getElementById("header-search-trigger")?.focus(), 0);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    close();
    router.push(`/?q=${encodeURIComponent(trimmed)}#library`);
  }

  return (
    <Popover open={open} onOpenChange={(nextOpen) => (nextOpen ? setOpen(true) : close())}>
      <PopoverTrigger
        render={
          <Button
            id="header-search-trigger"
            variant="ghost"
            size="icon"
            aria-label="Search substances"
            aria-expanded={open}
            aria-controls={listId}
            title="Search substances"
          />
        }
      >
        <Search aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-[min(26rem,calc(100vw-2rem))] gap-3 p-3 duration-0 data-open:animate-none data-closed:animate-none"
      >
        <form id="header-search-form" onSubmit={submit}>
          <InputGroup>
            <InputGroupAddon>
              <Search aria-hidden="true" />
            </InputGroupAddon>
            <InputGroupInput
              id="header-search-input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Caffeine, alertness, adenosine…"
              aria-label="Search the substance database"
              aria-autocomplete="list"
              aria-controls={listId}
              aria-expanded={items.length > 0}
              autoComplete="off"
            />
            <InputGroupAddon align="inline-end">
              {query ? (
                <InputGroupButton type="button" size="icon-xs" aria-label="Clear search" onClick={() => setQuery("")}>
                  <X aria-hidden="true" />
                </InputGroupButton>
              ) : null}
            </InputGroupAddon>
          </InputGroup>
        </form>

        <div id={listId} role="listbox" aria-label="Substance search results" className="flex max-h-80 flex-col gap-1 overflow-y-auto">
          {status === "loading" && <p className="px-2 py-2 text-sm text-muted-foreground" role="status">Searching…</p>}
          {status === "error" && <p className="px-2 py-2 text-sm text-destructive" role="status">Search is temporarily unavailable.</p>}
          {status === "ready" && items.length === 0 && <p className="px-2 py-2 text-sm text-muted-foreground" role="status">No substances found.</p>}
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/substances/${item.slug}`}
              role="option"
              onClick={close}
              className="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate font-medium">{item.name}</span>
                <span className="truncate text-xs text-muted-foreground">{item.summary}</span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <Badge variant="secondary">{item.category}</Badge>
                <ArrowUpRight aria-hidden="true" className="text-muted-foreground" />
              </span>
            </Link>
          ))}
          {status === "ready" && total > items.length && (
            <Link
              href={`/?q=${encodeURIComponent(query.trim())}#library`}
              onClick={close}
              className="px-2.5 py-2 text-left text-xs text-muted-foreground underline underline-offset-4"
            >
              View all {total} matches
            </Link>
          )}
        </div>
        <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
          {status === "idle" ? "Search names, aliases, effects, and mechanisms." : status === "loading" ? "Updating results…" : status === "ready" ? `${total} ${total === 1 ? "match" : "matches"}` : ""}
        </p>
      </PopoverContent>
    </Popover>
  );
}
