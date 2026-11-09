import { test, expect, type Page } from "@playwright/test";
import type { Core } from "cytoscape";

const graphName = "Interactive knowledge graph connecting substances, concepts, and shared relationships";
type GraphContainer = HTMLElement & { _cyreg?: { cy: Core } };
type GraphResponse = {
  substances: { slug: string }[];
  tags: { id: string; kind: string }[];
  hyperedges: { id: string; members: string[] }[];
};

async function metrics(page: Page) {
  return page.getByRole("img", { name: graphName }).evaluate(element => {
    const cy = (element as GraphContainer)._cyreg?.cy;
    if (!cy) throw new Error("The rendered graph has not initialized");
    const nodes = cy.nodes().filter(node => node.visible()).nodes();
    const entities = nodes.filter(node => node.data("kind") !== "relationship").nodes();
    const positions = entities.map(node => node.renderedPosition());
    const yBands = new Map<number, number>();
    for (const position of positions) {
      const band = Math.round(position.y / 4);
      yBands.set(band, (yBands.get(band) ?? 0) + 1);
    }
    return {
      nodes: cy.nodes().length,
      visible: nodes.length,
      substances: nodes.filter(node => node.data("kind") === "substance").length,
      width: cy.width(), height: cy.height(), zoom: cy.zoom(),
      yBands: yBands.size,
      largestBandShare: Math.max(0, ...yBands.values()) / Math.max(1, entities.length),
      outside: entities.filter(node => {
        const box = node.renderedBoundingBox({ includeLabels: true, includeOverlays: false });
        return box.x1 < -4 || box.y1 < -4 || box.x2 > cy.width() + 4 || box.y2 > cy.height() + 4;
      }).map(node => node.id()),
      effects: entities.filter(node => node.data("tagKind") === "effect").length,
      qualifiers: entities.filter(node => node.data("kind") === "tag" && node.data("tagKind") !== "effect").length,
      relationships: nodes.filter(node => node.data("kind") === "relationship").map(node => node.id()),
    };
  });
}

async function openGraph(page: Page) {
  await page.goto("/graph");
  await expect(page.getByRole("button", { name: "Zoom in", exact: true })).toBeEnabled({ timeout: 90000 });
  await expect(page.getByText("Mapping connections…", { exact: true })).toHaveCount(0);
}

test("the complete evidence graph fits the canvas as a two-dimensional network", async ({ page, request }) => {
  test.setTimeout(120000);
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  const response = await request.get("/api/graph?limit=5000");
  expect(response.ok()).toBeTruthy();
  const catalog = await response.json() as GraphResponse;
  await openGraph(page);
  await page.getByRole("button", { name: "Fit graph to view", exact: true }).click();
  await expect.poll(async () => (await metrics(page)).substances).toBe(catalog.substances.length);
  const result = await metrics(page);
  // Exercise the large-graph path that previously produced horizontal lanes.
  expect(result.nodes).toBeGreaterThan(800);
  expect(result.outside).toEqual([]);
  expect(result.yBands).toBeGreaterThan(24);
  expect(result.largestBandShare).toBeLessThan(0.18);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBeTruthy();
  expect(errors).toEqual([]);
});

test("type filters change rendered nodes and retain complete qualifying relationships", async ({ page, request }) => {
  test.setTimeout(120000);
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  const catalog = await (await request.get("/api/graph?limit=5000")).json() as GraphResponse;
  const effectIds = new Set(catalog.tags.filter(tag => tag.kind === "effect").map(tag => `tag:${tag.id}`));
  const expected = catalog.hyperedges.filter(edge => edge.members.some(member => effectIds.has(member)));
  await openGraph(page);
  const before = await metrics(page);
  await page.getByRole("combobox", { name: "Filter graph by concept type" }).selectOption("effect");
  await expect.poll(async () => (await metrics(page)).relationships.length, { timeout: 60000 }).toBe(expected.length);
  const filtered = await metrics(page);
  expect(filtered.nodes).toBeLessThan(before.nodes);
  expect(filtered.effects).toBeGreaterThan(0);
  expect(filtered.qualifiers).toBeGreaterThan(0);
  const renderedMembers = await page.getByRole("img", { name: graphName }).evaluate(element => {
    const cy = (element as GraphContainer)._cyreg!.cy;
    return Object.fromEntries(cy.nodes().filter(node => node.data("kind") === "relationship").nodes()
      .map(node => [node.id(), node.connectedEdges().targets().map(member => member.id()).sort()]));
  });
  for (const edge of expected) expect(renderedMembers[`relationship:${edge.id}`]).toEqual([...edge.members].sort());
  await page.getByRole("combobox", { name: "Filter graph by concept type" }).selectOption("");
  await expect.poll(async () => (await metrics(page)).substances, { timeout: 60000 }).toBe(catalog.substances.length);
  expect(errors).toEqual([]);
});

test("focused graph glyphs do not overlap and retain every relationship endpoint", async ({ page, request }) => {
  test.setTimeout(120000);
  const response = await request.get("/api/graph?focus=chdh&limit=120");
  expect(response.ok()).toBeTruthy();
  const focused = await response.json() as GraphResponse;
  await page.goto("/graph?focus=chdh");
  await expect(page.getByRole("button", { name: "Zoom in", exact: true })).toBeEnabled({ timeout: 90000 });
  await page.getByRole("button", { name: "Fit graph to view", exact: true }).click();
  const rendered = await page.getByRole("img", { name: graphName }).evaluate(element => {
    const cy = (element as GraphContainer)._cyreg!.cy;
    const entities = cy.nodes().filter(node => node.visible() && node.data("kind") !== "relationship").nodes();
    const overlaps: string[] = [];
    for (let left = 0; left < entities.length; left += 1) {
      const a = entities[left].renderedBoundingBox({ includeLabels: false, includeOverlays: false });
      for (let right = left + 1; right < entities.length; right += 1) {
        const b = entities[right].renderedBoundingBox({ includeLabels: false, includeOverlays: false });
        if (a.x1 < b.x2 - 0.5 && a.x2 > b.x1 + 0.5 && a.y1 < b.y2 - 0.5 && a.y2 > b.y1 + 0.5) {
          overlaps.push(`${entities[left].id()} / ${entities[right].id()}`);
        }
      }
    }
    return {
      entities: entities.length,
      overlaps,
      relationships: Object.fromEntries(cy.nodes('[kind = "relationship"]').map(node =>
        [node.id(), node.connectedEdges().targets().map(member => member.id()).sort()])),
    };
  });
  expect(rendered.entities).toBeGreaterThan(1);
  expect(rendered.overlaps).toEqual([]);
  for (const edge of focused.hyperedges) {
    expect(rendered.relationships[`relationship:${edge.id}`]).toEqual([...edge.members].sort());
  }
});

test("search, node selection, zoom and fullscreen remain usable on the full graph", async ({ page, request }) => {
  test.setTimeout(120000);
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  const catalog = await (await request.get("/api/graph?limit=5000")).json() as GraphResponse;
  await openGraph(page);
  const search = page.getByRole("textbox", { name: "Search the knowledge graph" });
  await search.fill("substance:caffeine");
  await expect.poll(async () => page.getByRole("img", { name: graphName }).evaluate(element => {
    const cy = (element as GraphContainer)._cyreg!.cy;
    return cy.getElementById("substance:caffeine").hasClass("search-match");
  })).toBeTruthy();
  const canvas = page.getByRole("img", { name: graphName });
  const caffeine = await canvas.evaluate(element => (element as GraphContainer)._cyreg!.cy.getElementById("substance:caffeine").renderedPosition());
  await canvas.click({ position: caffeine });
  await expect(page.getByRole("button", { name: "Close node details" })).toBeVisible();
  await expect(page.locator(".knowledge-graph-details h3")).toHaveText("Caffeine");
  await page.getByRole("button", { name: "Close node details" }).click();
  await page.getByRole("button", { name: "Clear graph search" }).click();
  await expect.poll(async () => (await metrics(page)).substances).toBe(catalog.substances.length);
  await search.fill("zz-no-such-graph-node-qq");
  await expect(page.getByText("No connections found. Try another search or concept type.", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Clear graph search" }).click();
  await expect.poll(async () => (await metrics(page)).substances).toBe(catalog.substances.length);

  await page.getByRole("button", { name: "Fit graph to view", exact: true }).click();
  const zoom = (await metrics(page)).zoom;
  await page.getByRole("button", { name: "Zoom in", exact: true }).click();
  await expect.poll(async () => (await metrics(page)).zoom).toBeGreaterThan(zoom);
  await page.getByRole("button", { name: "Zoom out", exact: true }).click();
  await expect.poll(async () => (await metrics(page)).zoom).toBeCloseTo(zoom, 4);
  await page.getByRole("button", { name: "Enter fullscreen" }).click();
  await expect(page.getByRole("button", { name: "Exit fullscreen" })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Exit fullscreen" }).click();
  await expect(page.getByRole("button", { name: "Enter fullscreen" })).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: "Fit graph to view", exact: true }).click();
  await expect.poll(async () => (await metrics(page)).outside).toEqual([]);
  expect(errors).toEqual([]);
});
