"use client";

import { useEffect, useId, useMemo, useRef, useState, type ChangeEvent, type ReactNode } from "react";
import { Search, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

export type Action = {
  id: string;
  label: string;
  icon: ReactNode;
  description?: string;
  short?: string;
  end?: string;
  href?: string;
};

type ActionSearchBarProps = {
  actions: Action[];
  label?: string;
  placeholder?: string;
  onSearch?: (query: string) => Promise<Action[]>;
  onActionSelect?: (action: Action) => void;
  onSubmit?: (query: string) => void;
};

function useDebounce<T>(value: T, delay = 180) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedValue(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export function ActionSearchBar({
  actions,
  label = "Search BHWiki",
  placeholder = "Search substances, effects, or mechanisms…",
  onSearch,
  onActionSelect,
  onSubmit,
}: ActionSearchBarProps) {
  const inputId = useId();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<Action[]>(actions);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const debouncedQuery = useDebounce(query);

  const matchingActions = useMemo(() => {
    const normalized = debouncedQuery.trim().toLowerCase();
    if (!normalized) return actions;
    return actions.filter((action) =>
      `${action.label} ${action.description ?? ""}`.toLowerCase().includes(normalized),
    );
  }, [actions, debouncedQuery]);

  useEffect(() => {
    if (!isFocused) return;

    let active = true;
    const trimmed = debouncedQuery.trim();
    setResults(matchingActions);
    setSearchError(false);
    if (!trimmed || !onSearch) {
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setIsLoading(true);
    onSearch(trimmed)
      .then((searchResults) => {
        if (active) {
          setSearchError(false);
          setResults([...matchingActions, ...searchResults]);
        }
      })
      .catch(() => {
        if (active) {
          setSearchError(true);
          setResults([]);
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [debouncedQuery, isFocused, matchingActions, onSearch]);

  useEffect(() => {
    setActiveIndex((current) => (current >= 0 && current < results.length ? current : -1));
  }, [results]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [debouncedQuery]);

  useEffect(() => {
    if (activeIndex < 0) return;
    optionRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  useEffect(() => {
    function onDocumentPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsFocused(false);
        setQuery("");
      }
    }

    document.addEventListener("pointerdown", onDocumentPointerDown);
    return () => document.removeEventListener("pointerdown", onDocumentPointerDown);
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    setIsFocused(true);
  }

  function selectAction(action: Action) {
    setQuery("");
    setActiveIndex(-1);
    onActionSelect?.(action);
    setIsFocused(false);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      setQuery("");
      setActiveIndex(-1);
      setIsFocused(false);
      onSubmit?.(trimmed);
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative w-full max-w-none"
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
          setQuery("");
        }
      }}
    >
      <form onSubmit={submit} role="search">
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
        <div className="relative">
          <Input
            id={inputId}
            type="text"
            role="combobox"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                if (results.length === 0) return;
                event.preventDefault();
                setActiveIndex((current) => {
                  const direction = event.key === "ArrowDown" ? 1 : -1;
                  return current < 0
                    ? direction === 1 ? 0 : results.length - 1
                    : (current + direction + results.length) % results.length;
                });
                return;
              }
              if (event.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
                event.preventDefault();
                selectAction(results[activeIndex]);
                return;
              }
              if (event.key === "Escape") {
                setIsFocused(false);
                setQuery("");
                setActiveIndex(-1);
              }
            }}
            placeholder={placeholder}
            autoComplete="off"
            aria-controls={listId}
            aria-haspopup="listbox"
            aria-expanded={isFocused}
            aria-autocomplete="list"
            aria-activedescendant={activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined}
            aria-keyshortcuts="Control+S"
            className="h-10 rounded-lg pe-24 ps-3 text-sm focus-visible:ring-offset-0"
          />
          {!isFocused && !query ? (
            <kbd className="pointer-events-none absolute end-9 top-1/2 -translate-y-1/2 rounded border border-border/80 bg-muted/70 px-1.5 py-0.5 text-[0.62rem] font-medium text-muted-foreground">
              Ctrl+S
            </kbd>
          ) : null}
          <span className="pointer-events-none absolute end-3 top-1/2 grid size-4 -translate-y-1/2 place-items-center text-muted-foreground" aria-hidden="true">
            {query ? <Send className="size-4" /> : <Search className="size-4" />}
          </span>
        </div>
      </form>

      {isFocused ? (
        <div
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute inset-x-0 top-[calc(100%+0.4rem)] z-50 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg"
        >
          <div className="max-h-80 overflow-y-auto p-1">
            {searchError ? (
              <p className="px-2.5 py-3 text-sm text-destructive" role="status">Search is temporarily unavailable.</p>
            ) : results.length > 0 ? (
              results.map((action, index) => (
                <button
                  key={action.id}
                  type="button"
                  role="option"
                  id={`${listId}-option-${index}`}
                  ref={(element) => { optionRefs.current[index] = element; }}
                  aria-selected={index === activeIndex}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectAction(action)}
                  className={`grid w-full grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_auto] items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none ${index === activeIndex ? "bg-muted" : ""}`}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="grid size-5 shrink-0 place-items-center text-muted-foreground" aria-hidden="true">
                      {action.icon}
                    </span>
                    <span className="min-w-0 truncate font-medium">{action.label}</span>
                  </span>
                  <span className="min-w-0 truncate text-xs text-muted-foreground">{action.description ?? ""}</span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                    {action.short ?? action.end}
                  </span>
                </button>
              ))
            ) : (
              <p className="px-2.5 py-3 text-sm text-muted-foreground" role="status">
                No matches found.
              </p>
            )}
            {isLoading ? <p className="px-2.5 py-1.5 text-xs text-muted-foreground" role="status">Searching…</p> : null}
          </div>
          <div className="flex items-center justify-between border-t border-border px-3 py-2 text-[0.68rem] text-muted-foreground">
            <span>Search the BHWiki library</span>
            <span className="flex items-center gap-2">
              <span><kbd className="rounded border border-border px-1 py-0.5 font-mono">↑</kbd><kbd className="ms-0.5 rounded border border-border px-1 py-0.5 font-mono">↓</kbd> navigate</span>
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono">ESC</kbd>
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
