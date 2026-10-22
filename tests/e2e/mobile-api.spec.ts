import { expect, test } from "@playwright/test";

test("mobile catalog API returns a compact versioned page", async ({ request }) => {
  const response = await request.get("/api/mobile/v1/catalog?q=caffeine&limit=1");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.version).toBe(1);
  expect(body.items).toHaveLength(1);
  expect(body.items[0].slug).toBe("caffeine");
  expect(body.items[0].references).toBeUndefined();
  expect(body.items[0].effects).toBeUndefined();
});

test("mobile catalog API validates bounds", async ({ request }) => {
  expect((await request.get("/api/mobile/v1/catalog?limit=501")).status()).toBe(400);
  expect((await request.get("/api/mobile/v1/catalog?offset=-1")).status()).toBe(400);
});

test("mobile article API returns the full published article", async ({ request }) => {
  const response = await request.get("/api/mobile/v1/substances/caffeine");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.version).toBe(1);
  expect(body.item.name).toBe("Caffeine");
  expect(body.item.editorialStatus).toBe("sourced-draft");
  expect(body.item.effects.length).toBeGreaterThan(0);
  expect(body.item.references.length).toBeGreaterThan(0);
  expect(Array.isArray(body.related)).toBe(true);
});

test("mobile evidence API validates missing and malformed records", async ({ request }) => {
  expect((await request.get("/api/mobile/v1/evidence?key=../bad")).status()).toBe(400);
  expect((await request.get("/api/mobile/v1/evidence?key=caffeine~claim~missing")).status()).toBe(404);
  const response = await request.get("/api/mobile/v1/evidence?key=caffeine~source~pubchem");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.version).toBe(1);
  expect(body.item.sources.length).toBeGreaterThan(0);
});
