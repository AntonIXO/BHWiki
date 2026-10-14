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
import { SourceDisclosures } from "@/components/source-disclosures";
import {
  Beaker,
  BookOpen,
  CircleAlert,
  FileText,
  FlaskConical,
  Target,
} from "lucide-react";

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
  const studyLabels = new Set([
    "Evidence type",
    "Population",
    "Exposure",
    "Instrument",
  ]);
  const resultLabels = new Set(["Reported magnitude"]);
  const studyContext = record.context.filter((context) =>
    studyLabels.has(context.label),
  );
  const resultContext = record.context.filter((context) =>
    resultLabels.has(context.label),
  );
  const reportingContext = record.context.filter(
    (context) => !studyLabels.has(context.label) && !resultLabels.has(context.label),
  );

  return (
    <div className="evidence-contents">
      <div className="evidence-status-row">
        <Badge variant="secondary">{record.kind}</Badge>
        {record.editorialStatus && (
          <Badge variant="outline">
            {record.editorialStatus === "editorially-reviewed"
              ? "Editorially reviewed"
              : "Sourced draft"}
          </Badge>
        )}
      </div>
      <div className="evidence-assertion"><Prose text={record.assertion} /></div>
      {record.result && (
        <section className="evidence-result">
          <div className="evidence-section-heading"><span className="evidence-section-icon evidence-section-icon--result"><Target size={15} aria-hidden="true" /></span><div><p>Structured result</p><h3>{record.result.estimate} {record.result.unit}</h3></div></div>
          <p>{record.result.measure}{record.result.confidenceInterval && ` · ${record.result.confidenceInterval.level}% CI ${record.result.confidenceInterval.lower}–${record.result.confidenceInterval.upper}`}</p>
        </section>
      )}
      {studyContext.length > 0 && <EvidenceFieldGroup icon={<FlaskConical size={15} aria-hidden="true" />} label="Study context" fields={studyContext} tone="study" />}
      {resultContext.length > 0 && <EvidenceFieldGroup icon={<Target size={15} aria-hidden="true" />} label="Result detail" fields={resultContext} tone="result" />}
      {reportingContext.length > 0 && <EvidenceFieldGroup icon={<FileText size={15} aria-hidden="true" />} label="Reporting details" fields={reportingContext} tone="reporting" />}
      <div className="evidence-limit"><CircleAlert size={17} aria-hidden="true" /><p><strong>Limits of this assertion</strong>{record.limitation}</p></div>
      {(
        [
          ["Sources supporting this record", record.sources, "supporting"],
          ["Conflicting sources", record.conflictingSources, "conflicting"],
        ] as const
      ).filter(([, sources]) => sources.length > 0).map(([title, sources, tone]) => (
        <section key={title} className={`evidence-sources evidence-sources--${tone}`}>
          <div className="evidence-sources-heading"><div><p>{tone === "supporting" ? "Source context" : "Contradictory evidence"}</p><h3>{title}</h3></div><span>{sources.length} {sources.length === 1 ? "source" : "sources"}</span></div>
          {sources.map((r) => (
              <article
                key={r.id}
                className="evidence-source-card"
              >
                <div className="evidence-source-topline"><span><BookOpen size={14} aria-hidden="true" /> Supporting source</span><a href={r.url} target="_blank" rel="noreferrer">Open source <span aria-hidden="true">↗</span></a></div>
                <a className="evidence-source-title" href={r.url} target="_blank" rel="noreferrer">{r.title}</a>
                {(r.authors || r.year || r.kind) && <p className="evidence-source-meta">{[r.authors, r.year && String(r.year), r.kind].filter(Boolean).join(" · ")}</p>}
                {r.insight && <div className="evidence-source-insight"><Beaker size={16} aria-hidden="true" /><Prose text={r.insight} /></div>}
                <div className="evidence-source-limit"><CircleAlert size={16} aria-hidden="true" /><p><strong>Study limitations</strong>{r.limitation ?? "Not assessed"}</p></div>
                <SourceDisclosures reference={r} />
              </article>
          ))}
        </section>
      ))}
      <p className="evidence-footnote">
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
    </div>
  );
}

function EvidenceFieldGroup({
  icon,
  label,
  fields,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  fields: EvidenceRecord["context"];
  tone: "study" | "result" | "reporting";
}) {
  return (
    <section className={`evidence-field-group evidence-field-group--${tone}`}>
      <div className="evidence-section-heading"><span className="evidence-section-icon">{icon}</span><h3>{label}</h3><span className="evidence-field-count">{fields.length} {fields.length === 1 ? "field" : "fields"}</span></div>
      <dl className="evidence-field-grid">
        {fields.map((field, index) => {
          const unknown = /^Not assessed|^Not quantified/.test(field.value);
          return <div key={`${field.label}-${index}`} className={`evidence-field ${unknown ? "evidence-field--unknown" : ""}`}><dt>{field.label}</dt><dd>{field.value}</dd></div>;
        })}
      </dl>
    </section>
  );
}
