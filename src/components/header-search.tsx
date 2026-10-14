"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, FlaskConical, GitBranch, Search } from "lucide-react";
import type { CatalogSubstance } from "@/lib/types";
import { ActionSearchBar, type Action } from "@/components/action-search-bar";

type SearchResponse = {
  items: CatalogSubstance[];
};

const navigationActions: Action[] = [
  {
    id: "substances",
    label: "Browse substances",
    description: "Substances, effects, mechanisms",
    icon: <Search className="size-4" />,
    end: "Library",
    href: "/",
  },
  {
    id: "effects",
    label: "Browse effects",
    description: "Subjective and measured effects",
    icon: <BookOpen className="size-4" />,
    end: "Effects",
  },
  {
    id: "graph",
    label: "Open knowledge graph",
    description: "Connected concepts and substances",
    icon: <GitBranch className="size-4" />,
    end: "Graph",
  },
  {
    id: "methods",
    label: "Read the methods",
    description: "How BHWiki is written",
    icon: <FlaskConical className="size-4" />,
    end: "Methods",
  },
];

export function HeaderSearch() {
  const router = useRouter();
  const actions = useMemo(() => navigationActions, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const isJumpShortcut = event.ctrlKey && event.key.toLowerCase() === "s";
      const isSlashShortcut = event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey;
      if (!isJumpShortcut && !isSlashShortcut) return;
      const target = event.target;
      if (!isJumpShortcut && target instanceof HTMLElement && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      event.preventDefault();
      document.querySelector<HTMLInputElement>("[role=search] input")?.focus();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const searchLibrary = useCallback(async (query: string): Promise<Action[]> => {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=6`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error("Search request failed");
    const payload = (await response.json()) as SearchResponse;
    return payload.items.map((item) => ({
      id: `substance:${item.slug}`,
      label: item.name,
      description: item.summary,
      icon: <FlaskConical className="size-4" />,
      end: item.category,
      href: `/substances/${item.slug}`,
    }));
  }, []);

  function selectAction(action: Action) {
    if (action.href) {
      router.push(action.href);
      return;
    }
    const destinations: Record<string, string> = {
      effects: "/effects",
      graph: "/graph",
      methods: "/about",
    };
    const destination = destinations[action.id];
    if (destination) router.push(destination);
  }

  function submit(query: string) {
    router.push(`/?q=${encodeURIComponent(query)}#library`);
  }

  return (
    <div className="w-[clamp(20rem,30vw,30rem)] max-[640px]:w-[min(20rem,calc(100vw-13rem))] max-[480px]:w-36">
      <ActionSearchBar
        actions={actions}
        onSearch={searchLibrary}
        onActionSelect={selectAction}
        onSubmit={submit}
      />
      <span className="sr-only">Press Ctrl+S to jump to search, or / to focus search</span>
    </div>
  );
}
