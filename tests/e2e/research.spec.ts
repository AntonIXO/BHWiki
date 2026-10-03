import { test, expect } from "@playwright/test";

test("evidence opens, survives a direct link, restores focus, and follows browser history", async ({
  page,
}) => {
  await page.goto("/substances/caffeine");
  const trigger = page
    .locator("#measured-outcomes")
    .getByRole("button", { name: "View evidence" })
    .first();
  await trigger.click();
  const sheet = page.getByRole("dialog");
  await expect(sheet).toBeVisible();
  await expect(
    sheet.getByRole("heading", {
      name: "Attention-task accuracy",
      exact: true,
    }),
  ).toBeVisible();
  await expect(sheet).toContainText("Comparator");
  await expect(sheet).toContainText("Funding / disclosures");
  const direct = page.url();
  await page.keyboard.press("Escape");
  await expect(sheet).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.goBack();
  await expect(sheet).not.toBeVisible();
  await page.goForward();
  await expect(sheet).toBeVisible();
  await page.goto(direct);
  await expect(sheet).toContainText("Attention-task accuracy");
  await sheet.getByRole("button", { name: "Close", exact: true }).click();
  await expect(sheet).not.toBeVisible();
  await page.goto("/substances/caffeine?evidence=caffeine~outcome~missing");
  await expect(sheet).toContainText("unavailable or has changed");
});

test("outcome and effect explorers preserve filters, views, and empty states", async ({
  page,
}) => {
  await page.goto("/outcomes/attention");
  await expect(
    page.getByText(/Filters search the complete published collection/),
  ).toBeVisible();
  await page.getByRole("combobox", { name: "Substance", exact: true }).click();
  await page.getByRole("option", { name: "Caffeine", exact: true }).click();
  await expect(page).toHaveURL(/substance=caffeine/);
  await page.getByRole("tab", { name: "Table", exact: true }).click();
  await expect(page.locator("#observations table")).toContainText("Caffeine");
  await page.reload();
  await expect(
    page.getByRole("tab", { name: "Table", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.getByRole("tab", { name: "Plot", exact: true }).click();
  if (!process.env.BHWIKI_RICH_FIXTURE_TESTS)
    await expect(
      page.getByText("No structured estimates are available to plot.", {
        exact: false,
      }),
    ).toBeVisible();
  await page.goto("/outcomes/attention?substance=does-not-exist");
  await expect(
    page.getByText(/No matching observations have been assessed/),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.getByText(/matching findings · Page/)).toBeVisible();
  await page.goto("/effects/alertness");
  await expect(
    page.getByRole("combobox", { name: "Reported context" }),
  ).toBeVisible();
  await page.goto("/substances/caffeine");
  await page
    .locator("#effects")
    .getByRole("button", { name: "Preview effect" })
    .first()
    .click();
  await expect(
    page.getByRole("link", { name: "Explore subjective alertness" }),
  ).toBeVisible();
});

test("comparison and interaction pages handle URL selections and incomplete records", async ({
  page,
}) => {
  await page.goto("/compare?substances=caffeine,l-theanine,caffeine");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Compare substances",
  );
  await expect(
    page.getByRole("combobox", { name: "Substance 1", exact: true }),
  ).toContainText("Caffeine");
  await expect(
    page.getByRole("combobox", { name: "Substance 2", exact: true }),
  ).toContainText("L-theanine");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBeTruthy();
  await page.goto("/compare?substances=not-a-substance,2c-b");
  await expect(
    page.getByText("Unknown substance: not-a-substance"),
  ).toBeVisible();
  await expect(page.locator("main")).toContainText("Not assessed");
  await page.goto("/interactions?a=delta-9-thc&b=ethanol");
  await expect(
    page.getByText(/may increase dizziness, confusion/).first(),
  ).toBeVisible();
  await page.getByRole("button", { name: "Swap substances" }).click();
  await expect(page).toHaveURL(/a=ethanol/);
  await expect(
    page.getByText(/may increase dizziness, confusion/).first(),
  ).toBeVisible();
  await page.goto("/interactions?a=caffeine&b=l-theanine");
  await expect(
    page.getByText("No assessed interaction record for this pair."),
  ).toBeVisible();
  await page.goto("/interactions?a=caffeine&b=caffeine");
  await expect(
    page.getByText("Choose two different substances."),
  ).toBeVisible();
});

test("timing selection changes the sourced model and mechanism diagram exposes evidence", async ({
  page,
}) => {
  await page.goto("/substances/methylphenidate");
  await expect(page.locator(".kinetics-slider")).toHaveCount(0);
  await page.getByRole("combobox", { name: "Elimination observation" }).click();
  await page.getByRole("option", { name: /reported-range/ }).click();
  await expect(page.locator(".kinetics-svg")).toHaveCount(0);
  await expect(
    page.getByText(
      "An elimination model is not established for this observation.",
    ),
  ).toBeVisible();
  await page.goto("/substances/caffeine");
  await page.getByRole("button", { name: "Explore mechanism diagram" }).click();
  await expect(
    page.getByRole("button", { name: "Reset diagram" }),
  ).toBeVisible();
  await expect(
    page.getByRole("region", { name: "Mechanism text alternative" }),
  ).toContainText("Tobacco-smoke exposure");
  await page
    .getByRole("region", { name: "Mechanism text alternative" })
    .getByRole("button", { name: "View evidence" })
    .first()
    .click();
  await expect(page.getByRole("dialog")).toContainText(
    "Participants and their roles",
  );
  await page.keyboard.press("Escape");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBeTruthy();
});

test("evidence API rejects malformed and missing keys", async ({ request }) => {
  expect((await request.get("/api/evidence?key=../bad")).status()).toBe(400);
  expect(
    (await request.get("/api/evidence?key=caffeine~claim~missing")).status(),
  ).toBe(404);
  const response = await request.get(
    "/api/evidence?key=caffeine~source~pubchem",
  );
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.sources.length).toBeGreaterThan(0);
  expect(data.articleSlug).toBe("caffeine");
});

test("new reading surfaces and open evidence meet accessibility checks", async ({
  page,
}) => {
  const { default: AxeBuilder } = await import("@axe-core/playwright");
  for (const path of [
    "/compare?substances=caffeine,l-theanine",
    "/interactions?a=delta-9-thc&b=ethanol",
    "/outcomes/attention?view=table",
  ]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations,
      JSON.stringify(
        result.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ),
    ).toEqual([]);
  }
  await page
    .locator("#observations")
    .getByRole("button", { name: "View evidence" })
    .first()
    .click();
  await expect(
    page
      .getByRole("dialog")
      .getByText("Study limitations:", { exact: false })
      .first(),
  ).toBeVisible();
  await expect(page.getByRole("dialog")).toHaveCSS("opacity", "1");
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
});

test("isolated rich fixtures activate plots, timing semantics, variations, and media", async ({
  page,
}) => {
  test.skip(
    !process.env.BHWIKI_RICH_FIXTURE_TESTS,
    "Requires the isolated fixture corpus",
  );
  await page.goto("/outcomes/attention?view=plot&population=Fixture%20adults");
  const plot = page.getByRole("group", { name: /Study estimates/ });
  await expect(plot).toBeVisible();
  await expect(page.locator("#observations table")).toContainText(
    "95% CI -3–-1",
  );
  await plot.getByRole("button").first().focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toContainText("fixture-trial");
  await page.keyboard.press("Escape");
  await page.goto("/substances/caffeine");
  await expect(
    page.getByRole("img", {
      name: "Sourced elapsed-time ranges since exposure",
    }),
  ).toBeVisible();
  await page.getByRole("combobox", { name: "Timing context" }).click();
  await page.getByRole("option", { name: /Fixture liquid/ }).click();
  await expect(
    page.getByRole("img", {
      name: "Sourced elapsed-time ranges since exposure",
    }),
  ).toHaveCount(0);
  await expect(page.getByText("Peak · Phase duration")).toBeVisible();
  await page.goto("/effects/alertness");
  await expect(
    page.getByRole("heading", { name: "Fixture variation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Fixture account" }),
  ).toBeVisible();
  await expect(
    page.locator('img[src="https://example.org/illustration.png"]'),
  ).toHaveCount(0);
  await page.route("https://example.org/illustration.png", (route) =>
    route.fulfill({
      contentType: "image/svg+xml",
      body: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10"/></svg>',
    }),
  );
  await page.getByRole("button", { name: "Show illustration" }).click();
  await expect(
    page.getByRole("img", { name: "Illustrative test image" }),
  ).toBeVisible();
});
