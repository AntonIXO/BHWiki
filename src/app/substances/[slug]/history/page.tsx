import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GitCommitHorizontal } from "lucide-react";
import { Breadcrumb } from "@/components/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { getRevisions, getSubstance } from "@/lib/repository";
import { repositoryUrl } from "@/lib/site";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const substance = await getSubstance((await params).slug);
  return { title: substance ? `${substance.name} — revision history` : "Substance not found" };
}

function PublicationTimestamp({ value }: { value: string }) {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) return <span>Bundled snapshot — no database publication timestamp</span>;
  return <time dateTime={date.toISOString()}>{date.toLocaleString("en", { dateStyle: "long", timeStyle: "short", timeZone: "UTC" })} UTC</time>;
}

export default async function HistoryPage({ params }: Props) {
  const { slug } = await params;
  const substance = await getSubstance(slug);
  if (!substance) notFound();
  const revisions = await getRevisions(slug);
  const repository = repositoryUrl();
  return (
    <main id="main" className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 py-10 sm:px-8">
      <Breadcrumb items={[{ href: "/", label: "Library" }, { href: `/substances/${slug}`, label: substance.name }, { label: "Revision history" }]} />
      <Link href={`/substances/${slug}`} className="inline-flex w-fit items-center gap-1.5 text-sm underline underline-offset-4">
        <ArrowLeft aria-hidden="true" size={16} />
        Back to {substance.name}
      </Link>
      <header className="article-hero flex flex-col gap-3">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Publication record</p>
        <h1 className="text-4xl font-medium">{substance.name}<span className="mt-2 block text-lg font-normal text-muted-foreground">Revision history</span></h1>
        <p className="text-lg text-muted-foreground">Published changes, source commits and editorial attribution. Restoring older content creates a new publication event.</p>
      </header>
      {revisions.length ? (
        <ol className="flex flex-col gap-4">
          {revisions.map(revision => (
            <li key={revision.revision}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h2 className="flex items-center gap-2 text-base">
                      <GitCommitHorizontal aria-hidden="true" size={18} />
                      Revision {revision.revision}
                    </h2>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="font-medium">{revision.summary || "Content publication"}</p>
                  <p><PublicationTimestamp value={revision.publishedAt} /></p>
                  <dl className="grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <dt className="text-sm text-muted-foreground">Editorial status</dt>
                      <dd><Badge variant="secondary">{revision.editorialStatus === "editorially-reviewed" ? "Editorially reviewed" : "Sourced draft"}</Badge></dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-sm text-muted-foreground">Contributors</dt>
                      <dd>{revision.contributors.length ? revision.contributors.join(", ") : "Not recorded"}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="text-sm text-muted-foreground">Reviewers</dt>
                      <dd>{revision.reviewers.length ? revision.reviewers.join(", ") : "No editorial review recorded"}</dd>
                    </div>
                    <div className="flex min-w-0 flex-col gap-1">
                      <dt className="text-sm text-muted-foreground">Source commit</dt>
                      <dd className="break-all">
                        {revision.sourceCommit ? repository ? <a href={`${repository}/commit/${encodeURIComponent(revision.sourceCommit)}`} target="_blank" rel="noreferrer" className="underline underline-offset-4"><code>{revision.sourceCommit}</code></a> : <code className="break-all">{revision.sourceCommit}</code> : "Not recorded"}
                      </dd>
                    </div>
                  </dl>
                  <details className="flex flex-col gap-2">
                    <summary className="cursor-pointer text-sm">Content fingerprint</summary>
                    <code className="block break-all text-xs text-muted-foreground">{revision.contentHash}</code>
                  </details>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      ) : (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon"><GitCommitHorizontal /></EmptyMedia>
            <EmptyDescription>No database publication events are available in this content mode. The article’s sourced-draft status does not imply editorial review.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
      <div className="flex flex-wrap gap-3">
        <Button nativeButton={false} variant="outline" render={<Link href={`/contribute?article=${slug}`} />}>Propose a correction</Button>
        <Button nativeButton={false} variant="outline" render={<Link href="/about" />}>Editorial methodology</Button>
      </div>
    </main>
  );
}
