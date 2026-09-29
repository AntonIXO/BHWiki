import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GitCommitHorizontal } from "lucide-react";
import { getRevisions, getSubstance } from "@/lib/repository";
import { repositoryUrl } from "@/lib/site";
import "../article.css";

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
  return <main id="main" className="article-page article-history-page">
    <Link className="article-context-link" href={`/substances/${slug}`}><ArrowLeft size={17}/>Back to {substance.name}</Link>
    <header className="article-hero"><span className="article-overline">PUBLICATION RECORD</span><h1>{substance.name}<span>Revision history</span></h1><p className="article-summary">Published changes, source commits and editorial attribution. Restoring older content creates a new publication event.</p></header>
    {revisions.length ? <ol className="article-history-list">{revisions.map(revision => <li key={revision.revision}><div className="article-history-marker"><GitCommitHorizontal size={21}/><strong>Revision {revision.revision}</strong></div><div><h2>{revision.summary || "Content publication"}</h2><p><PublicationTimestamp value={revision.publishedAt}/></p><dl className="article-observation-context"><div><dt>Editorial status</dt><dd>{revision.editorialStatus === "editorially-reviewed" ? "Editorially reviewed" : "Sourced draft"}</dd></div><div><dt>Contributors</dt><dd>{revision.contributors.length ? revision.contributors.join(", ") : "Not recorded"}</dd></div><div><dt>Reviewers</dt><dd>{revision.reviewers.length ? revision.reviewers.join(", ") : "No editorial review recorded"}</dd></div><div><dt>Source commit</dt><dd>{revision.sourceCommit ? repository ? <a href={`${repository}/commit/${encodeURIComponent(revision.sourceCommit)}`} target="_blank" rel="noreferrer"><code>{revision.sourceCommit}</code></a> : <code>{revision.sourceCommit}</code> : "Not recorded"}</dd></div></dl><details className="article-smiles"><summary>Content fingerprint</summary><code>{revision.contentHash}</code></details></div></li>)}</ol> : <p className="article-data-empty">No database publication events are available in this content mode. The article’s sourced-draft status does not imply editorial review.</p>}
    <div className="article-history-links"><Link href={`/contribute?article=${slug}`}>Propose a correction</Link><Link href="/about">Editorial methodology</Link></div>
  </main>;
}
