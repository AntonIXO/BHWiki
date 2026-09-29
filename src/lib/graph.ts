import type { ElementDefinition } from "cytoscape";
import { conceptPath, type Hyperedge, type Substance, type Tag, type TagKind } from "./types";

type GraphSubstance = Pick<Substance, "slug" | "name" | "summary" | "aliases" | "tags">;
export type GraphInput = { substances: GraphSubstance[]; tags: Tag[]; hyperedges: Hyperedge[] };
export type GraphNode = {
  id: string;
  label: string;
  kind: "substance" | "tag" | "relationship";
  description: string;
  slug?: string;
  href?: string;
  tagKind?: TagKind;
  relation?: string;
  sourceUrl?: string;
  sourceUrls?: string[];
  searchText: string;
};
export type GraphModel = { nodes: GraphNode[]; relationships: (Hyperedge & { nodeId: string })[]; elements: ElementDefinition[] };

/** A hyperedge is a node in the incidence graph, never an invented pairwise claim. */
export function buildKnowledgeGraph(input: GraphInput, tagKind?: TagKind): GraphModel {
  const ids = new Set<string>();
  const register = (id: string) => {
    if (ids.has(id)) throw new Error(`Duplicate graph identifier: ${id}`);
    ids.add(id);
  };
  for (const substance of input.substances) register(`substance:${substance.slug}`);
  for (const tag of input.tags) register(`tag:${tag.id}`);
  for (const substance of input.substances) {
    for (const tag of substance.tags) {
      if (!ids.has(`tag:${tag}`)) throw new Error(`Unknown tag ${tag} on ${substance.slug}`);
    }
  }
  const relationshipIds = new Set<string>();
  for (const edge of input.hyperedges) {
    if (relationshipIds.has(edge.id)) throw new Error(`Duplicate relationship identifier: ${edge.id}`);
    relationshipIds.add(edge.id);
    for (const member of edge.members) {
      if (!ids.has(member)) throw new Error(`Unknown member ${member} in relationship ${edge.id}`);
    }
    if (new Set(edge.members).size < 2) throw new Error(`Relationship ${edge.id} needs at least two distinct members`);
    if (new Set(edge.members).size !== edge.members.length) throw new Error(`Duplicate member in relationship ${edge.id}`);
    for (const member of edge.members) {
      if (!edge.memberRoles[member]?.trim()) throw new Error(`Missing role for ${member} in relationship ${edge.id}`);
    }
  }

  const allNodes: GraphNode[] = [
    ...input.substances.map((substance): GraphNode => ({
      id: `substance:${substance.slug}`, label: substance.name, kind: "substance", slug: substance.slug,
      href: `/substances/${substance.slug}`, description: substance.summary,
      searchText: [`substance:${substance.slug}`, substance.name, ...substance.aliases].join(" ").toLowerCase(),
    })),
    ...input.tags.map((tag): GraphNode => ({
      id: `tag:${tag.id}`, label: tag.label, kind: "tag", tagKind: tag.kind,
      href: conceptPath(tag), sourceUrls: tag.sourceUrls,
      description: tag.description, searchText: [`tag:${tag.id}`, tag.label, tag.kind, ...(tag.aliases ?? [])].join(" ").toLowerCase(),
    })),
  ];
  const selectedTags = input.tags.filter((tag) => !tagKind || tag.kind === tagKind);
  const tagIds = new Set(selectedTags.map((tag) => tag.id));
  const visibleIds = new Set(allNodes.filter((node) => !tagKind || (node.kind === "tag" && tagIds.has(node.id.slice(4)))).map((node) => node.id));
  for (const substance of input.substances) {
    if (!tagKind || substance.tags.some((id) => tagIds.has(id))) visibleIds.add(`substance:${substance.slug}`);
  }
  const relationships: GraphModel["relationships"] = [];
  for (const tag of selectedTags) {
    const members = input.substances.filter((substance) => substance.tags.includes(tag.id)).map((substance) => `substance:${substance.slug}`);
    if (!members.length) continue;
    relationships.push({
      id: `tag-membership:${tag.id}`, nodeId: `membership:${tag.id}`, label: tag.label,
      relation: "tag membership", description: `Editorial index: substances classified under ${tag.label.toLowerCase()}. This index does not assert a combined effect. ${tag.description}`,
      members: [`tag:${tag.id}`, ...members], sourceUrl: "", sourceUrls: tag.sourceUrls,
      memberRoles: Object.fromEntries([[`tag:${tag.id}`, "index concept"], ...members.map((member) => [member, "indexed substance"])]),
    });
  }
  for (const edge of input.hyperedges) {
    // Select a complete assertion by its concept type. Qualification members of
    // other types remain visible; removing them would change the claim.
    if (tagKind && !edge.members.some((member) => member.startsWith("tag:") && tagIds.has(member.slice(4)))) continue;
    relationships.push({ ...edge, nodeId: `relationship:${edge.id}` });
    for (const member of edge.members) visibleIds.add(member);
  }
  const nodes = allNodes.filter((node) => visibleIds.has(node.id));
  for (const edge of relationships) {
    nodes.push({
      id: edge.nodeId, label: edge.label, kind: "relationship", relation: edge.relation,
      description: edge.description, sourceUrl: edge.sourceUrl, sourceUrls: edge.sourceUrls,
      searchText: `${edge.id} ${edge.label} ${edge.relation} ${edge.description}`.toLowerCase(),
    });
  }
  const elements: ElementDefinition[] = [
    ...nodes.map((node) => ({ data: node })),
    ...relationships.flatMap((edge) => edge.members.map((member, index) => ({
      data: { id: `incidence:${edge.nodeId}:${index}`, source: edge.nodeId, target: member, role: edge.memberRoles[member] },
    }))),
  ];
  return { nodes, relationships, elements };
}

/** Search keeps whole incident relationships, so a visible relation keeps its meaning. */
export function searchKnowledgeGraph(model: GraphModel, query: string): GraphModel {
  const term = query.trim().toLowerCase();
  if (!term) return model;
  const matches = new Set(model.nodes.filter((node) => node.searchText.includes(term)).map((node) => node.id));
  const relationships = model.relationships.filter((edge) => matches.has(edge.nodeId) || edge.members.some((member) => matches.has(member)));
  const visible = new Set(matches);
  for (const edge of relationships) {
    visible.add(edge.nodeId);
    for (const member of edge.members) visible.add(member);
  }
  return {
    nodes: model.nodes.filter((node) => visible.has(node.id)), relationships,
    elements: model.elements.filter((element) => {
      const data = element.data;
      return data.source ? visible.has(data.source) && visible.has(data.target) : visible.has(data.id!);
    }),
  };
}

/** Keep a small, complete piece of the graph legible inside an article card. */
export function previewKnowledgeGraph(model: GraphModel): GraphModel {
  const curated = model.relationships.filter((edge) => edge.relation !== "tag membership");
  const relationships = (curated.length ? curated : model.relationships).slice(0, 2);
  const visible = new Set(relationships.flatMap((edge) => [edge.nodeId, ...edge.members]));
  if (!visible.size) model.nodes.filter((node) => node.kind === "substance").slice(0, 4).forEach((node) => visible.add(node.id));
  return {
    nodes: model.nodes.filter((node) => visible.has(node.id)), relationships,
    elements: model.elements.filter((element) => element.data.source
      ? visible.has(element.data.source) && visible.has(element.data.target)
      : visible.has(element.data.id!)),
  };
}
