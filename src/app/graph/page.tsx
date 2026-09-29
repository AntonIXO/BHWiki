import KnowledgeGraph from "@/components/knowledge-graph";
import { getKnowledgeGraph } from "@/lib/repository";
import { Breadcrumb } from "@/components/shell";
export const metadata = { title: "Knowledge graph", description: "Explore sourced connections between substances, effects, outcomes and biological mechanisms." };
export const dynamic = "force-dynamic";

export default async function GraphPage({ searchParams }: { searchParams: Promise<{ focus?: string | string[] }> }) {
  const params = await searchParams;
  const focus = typeof params.focus === "string" ? params.focus.slice(0, 120) : undefined;
  const data = await getKnowledgeGraph({ focus, limit: 120 });
  return <main id="main" className="graph-page">
    <Breadcrumb current="Knowledge graph" />
    <div className="section-heading"><div>
      <span className="eyebrow">FOLLOW THE CONNECTIONS</span>
      <h1>The knowledge graph<span className="green-dot">.</span></h1>
      <p>Explore substances, mechanisms, and effects. Select a node to read its article and inspect the evidence.</p>
    </div></div>
    <KnowledgeGraph {...data} initialFocus={focus} />
    <p className="graph-explanation">Relationship nodes connect multiple concepts in one sourced statement. Member roles identify the substance, biological target, measured outcome, or exposure context. Editorial index relationships group classifications. Connections are not recommendations to combine substances.</p>
  </main>;
}
