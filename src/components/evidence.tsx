"use client";
import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { EvidenceRecord } from "@/lib/research-types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Prose } from "@/components/prose";

type FocusTarget = HTMLElement | SVGElement;
const EvidenceContext = createContext<
  (key: string, trigger?: FocusTarget) => void
>(() => {});
export function EvidenceProvider({ children }: { children: React.ReactNode }) {
  const returnFocus = useRef<FocusTarget | null>(null);
  const open = useCallback((key: string, trigger?: FocusTarget) => {
    returnFocus.current =
      trigger ??
      (document.activeElement instanceof HTMLElement ||
      document.activeElement instanceof SVGElement
        ? document.activeElement
        : null);
    const url = new URL(window.location.href);
    if (url.searchParams.get("evidence") === key) return;
    url.searchParams.set("evidence", key);
    window.history.pushState({ bhwikiEvidence: key }, "", url);
  }, []);
  return (
    <EvidenceContext value={open}>
      {children}
      <Suspense fallback={null}>
        <EvidencePanel returnFocus={returnFocus} />
      </Suspense>
    </EvidenceContext>
  );
}
export function useEvidence() {
  return useContext(EvidenceContext);
}
export function EvidenceButton({
  evidenceKey,
  label = "View evidence",
}: {
  evidenceKey: string;
  label?: string;
}) {
  const open = useEvidence();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={(e) => open(evidenceKey, e.currentTarget)}
    >
      {label}
    </Button>
  );
}
function EvidencePanel({
  returnFocus,
}: {
  returnFocus: React.RefObject<FocusTarget | null>;
}) {
  const params = useSearchParams();
  const key = params.get("evidence");
  const [state, setState] = useState<{
    key: string;
    record?: EvidenceRecord;
    error?: string;
  }>();
  const [attempt, setAttempt] = useState(0);
  const previousKey = useRef<string | null>(null);
  useEffect(() => {
    if (previousKey.current && !key) {
      const target = returnFocus.current;
      setTimeout(() => target?.isConnected && target.focus(), 0);
    }
    previousKey.current = key;
    if (!key) return;
    const controller = new AbortController();
    fetch(`/api/evidence?key=${encodeURIComponent(key)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok)
          throw new Error(
            response.status === 404
              ? "This evidence record is unavailable or has changed."
              : "Evidence could not be loaded.",
          );
        const record: EvidenceRecord = await response.json();
        if (!controller.signal.aborted) setState({ key, record });
      })
      .catch((error) => {
        if (!controller.signal.aborted) setState({ key, error: error.message });
      });
    return () => controller.abort();
  }, [key, attempt, returnFocus]);
  const close = () => {
    if (window.history.state?.bhwikiEvidence === key) {
      window.history.back();
      return;
    }
    const url = new URL(window.location.href);
    url.searchParams.delete("evidence");
    window.history.replaceState({}, "", url);
  };
  const current = state?.key === key ? state : undefined;
  return (
    <Sheet
      open={Boolean(key)}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <SheetContent
        className="data-[side=right]:w-full data-[side=right]:sm:max-w-xl overflow-y-auto"
        finalFocus={() => {
          returnFocus.current?.focus();
          return false;
        }}
      >
        <SheetHeader>
          <SheetTitle>{current?.record?.title ?? "Evidence"}</SheetTitle>
          <SheetDescription>
            Read the finding together with its context and sources.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 px-4 pb-8">
          {!current && (
            <div role="status" className="flex flex-col gap-3">
              <span>Loading evidence…</span>
              <Skeleton className="h-24 w-full" />
            </div>
          )}
          {current?.error && (
            <div role="status" className="flex flex-col gap-3">
              <p>{current.error}</p>
              <Button
                variant="outline"
                onClick={() => {
                  setState(undefined);
                  setAttempt((n) => n + 1);
                }}
              >
                Retry
              </Button>
            </div>
          )}
          {current?.record && <EvidenceContents record={current.record} />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
export function EvidenceContents({ record }: { record: EvidenceRecord }) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">{record.kind}</Badge>
        {record.editorialStatus && (
          <Badge variant="outline">
            {record.editorialStatus === "editorially-reviewed"
              ? "Editorially reviewed"
              : "Sourced draft"}
          </Badge>
        )}
      </div>
      <Prose text={record.assertion} />
      <dl className="grid gap-3 sm:grid-cols-2">
        {record.context.map((c, i) => (
          <div key={`${c.label}-${i}`}>
            <dt className="text-sm text-muted-foreground">{c.label}</dt>
            <dd className="break-words">{c.value}</dd>
          </div>
        ))}
      </dl>
      {record.result && (
        <p>
          <strong>Structured result:</strong> {record.result.estimate}{" "}
          {record.result.unit} ({record.result.measure})
          {record.result.confidenceInterval &&
            `; ${record.result.confidenceInterval.level}% CI ${record.result.confidenceInterval.lower}–${record.result.confidenceInterval.upper}`}
        </p>
      )}
      <p>
        <strong>Limits of this assertion:</strong> {record.limitation}
      </p>
      {(
        [
          ["Sources supporting this record", record.sources],
          ["Conflicting sources", record.conflictingSources],
        ] as const
      ).map(([title, sources]) => (
        <section key={title} className="flex flex-col gap-3">
          <h3 className="font-medium">{title}</h3>
          {sources.length ? (
            sources.map((r) => (
              <article
                key={r.id}
                className="flex flex-col gap-2 rounded-lg border p-3"
              >
                <a
                  className="font-medium underline underline-offset-4"
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {r.title}
                </a>
                {r.authors && (
                  <p>
                    {r.authors}
                    {r.year ? ` · ${r.year}` : ""}
                  </p>
                )}
                {r.kind && (
                  <p className="text-sm text-muted-foreground">{r.kind}</p>
                )}
                {r.insight && <Prose text={r.insight} />}
                <p>
                  <strong>Study limitations:</strong>{" "}
                  {r.limitation ?? "Not assessed"}
                </p>
                <p>
                  <strong>Funding / disclosures:</strong>{" "}
                  {r.funding ?? "Not assessed"}
                </p>
              </article>
            ))
          ) : (
            <p className="text-muted-foreground">
              No conflicting sources have been curated for this record.
            </p>
          )}
        </section>
      ))}
      <p className="text-sm text-muted-foreground">
        Editorial review status does not grade evidence certainty. Unassessed
        information is not evidence of absence.
      </p>
      {record.articleSlug && (
        <Link
          className="underline underline-offset-4"
          href={`/substances/${record.articleSlug}`}
        >
          Read {record.articleName}
        </Link>
      )}
    </>
  );
}
