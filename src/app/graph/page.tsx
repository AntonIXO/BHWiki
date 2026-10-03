import KnowledgeGraph from "@/components/knowledge-graph";
import { Breadcrumb } from "@/components/shell";
import { getKnowledgeGraph } from "@/lib/repository";

export const metadata = { title: "Knowledge graph", description: "Explore sourced connections between substances, effects, outcomes and biological mechanisms." };
export const dynamic = "force-dynamic";

export default async function GraphPage({ searchParams }: { searchParams: Promise<{ focus?: string | string[] }> }) {
  const params = await searchParams;
  const focus = typeof params.focus === "string" ? params.focus.slice(0, 120) : undefined;
  const data = await getKnowledgeGraph({ focus, limit: 120 });
  return (
    <main id="main" className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:px-8">
      <Breadcrumb current="Knowledge graph" />
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Follow the connections</p>
        <h1 className="text-4xl font-medium">The knowledge graph.</h1>
        <p className="max-w-2xl text-muted-foreground">Explore substances, mechanisms, and effects. Select a node to read its article and inspect the evidence.</p>
      </div>
      <KnowledgeGraph {...data} initialFocus={focus} />
      <p className="max-w-3xl text-sm text-muted-foreground">Relationship nodes connect multiple concepts in one sourced statement. Member roles identify the substance, biological target, measured outcome, or exposure context. Editorial index relationships group classifications. Connections are not recommendations to combine substances.</p>
    </main>
  );
}
