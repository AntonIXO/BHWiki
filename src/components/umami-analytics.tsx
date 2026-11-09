/** Anonymous pageviews and client-side navigation only; no recorder or identity. */
export function UmamiAnalytics() {
  return (
    <script
      defer
      src="/s/script.js"
      data-website-id="5d56677b-1acf-4cc0-97b5-d0d543f5860a"
      data-domains="bhwiki.devpins.org"
      data-do-not-track="true"
      data-exclude-search="true"
      data-exclude-hash="true"
    />
  );
}
