"use client";
import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { KnowledgeGraphData } from "@/lib/types";
import { buildMechanismModel } from "@/lib/mechanism";
import { EvidenceButton, useEvidence } from "@/components/evidence";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Canvas = dynamic(() => import("./mechanism-canvas"), {
  ssr: false,
  loading: () => <p role="status">Loading diagram…</p>,
});
export function MechanismExplorer({
  data,
  slug,
}: {
  data: KnowledgeGraphData;
  slug: string;
}) {
  const [shown, setShown] = useState(false),
    [selected, setSelected] = useState<string>();
  const open = useEvidence();
  const model = useMemo(() => buildMechanismModel(data), [data]);
  const select = useCallback(
    (id: string) => {
      if (id.startsWith("relationship~")) open(id);
      else if (id.startsWith("relationship:"))
        open(`relationship~${id.slice(13)}`);
      else setSelected(id);
    },
    [open],
  );
  const node = model.nodes.find((n) => n.id === selected);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button
          variant="outline"
          onClick={() => setShown((v) => !v)}
          aria-expanded={shown}
        >
          {shown ? "Hide mechanism diagram" : "Explore mechanism diagram"}
        </Button>
      </div>
      {shown && (
        <>
          <p className="text-sm text-muted-foreground">
            Substances → targets → processes → outcomes. Placement organizes the
            records; arrows appear only for explicitly sourced steps. Diamonds
            retain the participants of a contextual relationship.
          </p>
          <Canvas data={data} onSelect={select} />
          {node && (
            <Card>
              <CardHeader>
                <CardTitle>{node.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p>{node.description}</p>
                {node.href && (
                  <Link className="underline" href={node.href}>
                    Read {node.label}
                  </Link>
                )}
              </CardContent>
            </Card>
          )}
          <section
            className="flex flex-col gap-3"
            aria-label="Mechanism text alternative"
          >
            <h4 className="font-medium">Relationships and participants</h4>
            {model.relationships.length ? (
              model.relationships.map((edge) => (
                <Card key={edge.id}>
                  <CardHeader>
                    <CardTitle>{edge.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p>
                      {edge.relation === "tag membership"
                        ? "Classification membership; no causal step is asserted."
                        : edge.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {edge.members.map((member) => {
                        const entity = model.nodes.find((n) => n.id === member);
                        return (
                          <li key={member}>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => select(member)}
                            >
                              {entity?.label ?? member}
                            </Button>
                            <span className="text-sm text-muted-foreground">
                              {" "}
                              · {edge.memberRoles[member]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    {edge.relation !== "tag membership" && (
                      <div>
                        <EvidenceButton
                          evidenceKey={`relationship~${edge.id}`}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No sourced mechanism relationships have been assessed.</p>
            )}
          </section>
          {data.truncated && (
            <p>
              Some complete relationships exceed this preview’s limit. Open the
              full graph to continue.
            </p>
          )}
          <Link className="underline" href={`/graph?focus=${slug}`}>
            Open full knowledge graph
          </Link>
        </>
      )}
    </div>
  );
}
