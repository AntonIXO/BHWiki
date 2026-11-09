import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { UmamiAnalytics } from "../src/components/umami-analytics";

test("basic analytics uses the existing BHWiki registration without replay or URL searches", () => {
  const html = renderToStaticMarkup(createElement(UmamiAnalytics));
  assert.match(html, /src="\/s\/script\.js"/);
  assert.match(html, /data-website-id="5d56677b-1acf-4cc0-97b5-d0d543f5860a"/);
  assert.match(html, /data-domains="bhwiki\.devpins\.org"/);
  assert.match(html, /data-do-not-track="true"/);
  assert.match(html, /data-exclude-search="true"/);
  assert.match(html, /data-exclude-hash="true"/);
  assert.match(html, /defer=""/);
  assert.doesNotMatch(html, /recorder|replay|data-distinct-id|data-performance/);
});
