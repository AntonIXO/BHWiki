import { test, expect } from "@playwright/test";

test("concept directories and article lists include evidence and shared-source links", async ({ page }) => {
  await page.goto("/effects?q=acetylcholinesterase");
  await expect(page.getByText("2 linked substances", { exact: true })).toBeVisible();
  await page.getByRole("link", { name: /Acetylcholinesterase inhibition/ }).click();
  await expect(page.locator("#substances")).toContainText("Huperzine A");
  await expect(page.locator("#substances")).toContainText("Galantamine");

  await page.goto("/outcomes?q=digital%20eye%20strain");
  await expect(page.getByText("1 linked substance", { exact: true })).toBeVisible();
  await page.getByRole("link", { name: /Digital eye strain/ }).click();
  await expect(page.locator("#substances")).toContainText("Astaxanthin");
  await expect(page.locator("#connections")).toContainText(/shared source|source mentions/);
  await expect(page.locator("#observations")).toContainText("0 matching findings");
  await page.locator("#connections").getByRole("button", { name: "View evidence" }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).not.toContainText("unavailable or has changed");
});

test("full and focused graphs load the recorded perception connections with working evidence", async ({ page, request }) => {
  const data = await (await request.get("/api/graph?focus=perception&limit=120")).json();
  for (const slug of ["psilocybin", "lsd", "dmt", "mescaline"]) {
    expect(data.substances.some((s: { slug: string }) => s.slug === slug)).toBeTruthy();
    expect(data.hyperedges.some((e: { members: string[]; evidenceKey?: string }) =>
      e.members.includes(`substance:${slug}`) && e.members.includes("tag:perception") && e.evidenceKey)).toBeTruthy();
  }
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/graph");
  await expect(page.getByRole("button", { name: "Zoom in" })).toBeEnabled({ timeout: 30000 });
  await page.goto("/graph?focus=perception");
  await expect(page.getByRole("button", { name: "Zoom in" })).toBeEnabled();
  await page.getByText("Explore an accessible text view", { exact: true }).click();
  await expect(page.getByRole("button", { name: "Locate LSD in graph", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Locate DMT in graph", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "View evidence" }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).not.toContainText("unavailable or has changed");
  expect(errors).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBeTruthy();
});

test("CHDH related concepts and uppercase source evidence are accessible", async ({ request }) => {
  const response = await request.get("/api/graph?focus=chdh&limit=120");
  expect(response.status()).toBe(200);
  const graph = await response.json();
  const related = graph.hyperedges.find((edge: { id: string }) => edge.id === "concept-betaine-one-carbon-metabolism--chdh");
  expect(related).toBeTruthy();
  expect((await request.get(`/api/evidence?key=relationship~${related.id}`)).status()).toBe(200);
  for (const prefix of ["/api/evidence", "/api/mobile/v1/evidence"]) {
    expect((await request.get(`${prefix}?key=lutein~source~S8`)).status()).toBe(200);
  }
});
