"use client";
import { useEffect, useRef, useState } from "react";
import type { Core } from "cytoscape";
import type { KnowledgeGraphData } from "@/lib/types";
import { buildMechanismModel } from "@/lib/mechanism";
import { graphStyle } from "@/lib/graph-style";
import { Button } from "@/components/ui/button";
export default function MechanismCanvas({
  data,
  onSelect,
}: {
  data: KnowledgeGraphData;
  onSelect: (id: string) => void;
}) {
  const host = useRef<HTMLDivElement>(null),
    instance = useRef<Core | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cancelled = false;
    let observer: ResizeObserver | undefined;
    import("cytoscape")
      .then(({ default: cytoscape }) => {
        if (cancelled || !host.current) return;
        const model = buildMechanismModel(data);
        const cy = cytoscape({
          container: host.current,
          elements: model.elements,
          style: [
            ...graphStyle,
            {
              selector: "edge[directed]",
              style: {
                "target-arrow-shape": "triangle",
                label: "data(label)",
                "font-size": 10,
                "text-rotation": "autorotate",
                "line-color": "#315440",
                "target-arrow-color": "#315440",
              },
            },
            {
              selector: 'node[relation = "tag membership"]',
              style: { "border-style": "dashed", "border-width": 1 },
            },
          ],
          layout: { name: "preset", fit: true, padding: 35 },
          minZoom: 0.15,
          maxZoom: 2,
          wheelSensitivity: 0.2,
        });
        instance.current = cy;
        cy.on("tap", "node", (event) => onSelect(event.target.id()));
        cy.on("tap", "edge[directed]", (event) =>
          onSelect(event.target.data("evidenceKey")),
        );
        observer = new ResizeObserver(() => {
          cy.resize();
          cy.fit(undefined, 35);
        });
        observer.observe(host.current);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
      observer?.disconnect();
      instance.current?.destroy();
      instance.current = null;
    };
  }, [data, onSelect]);
  return (
    <div className="flex flex-col gap-3">
      {error ? (
        <p role="status">
          The diagram could not load. The relationship list below remains
          available.
        </p>
      ) : (
        <div
          ref={host}
          className="h-[420px] rounded-lg border"
          role="img"
          aria-label="Mechanistic relationships. Use the accessible list below for keyboard navigation."
        />
      )}
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            instance.current
              ?.layout({
                name: "preset",
                positions: Object.fromEntries(
                  buildMechanismModel(data)
                    .elements.filter((e) => e.position)
                    .map((e) => [e.data.id!, e.position!]),
                ),
              })
              .run();
            instance.current?.fit(undefined, 35);
          }}
        >
          Reset diagram
        </Button>
      </div>
    </div>
  );
}
