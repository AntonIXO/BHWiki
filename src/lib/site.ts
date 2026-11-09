export function repositoryUrl(): string | undefined {
  const value = process.env.BHWIKI_REPOSITORY_URL;
  if (!value) return undefined;
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.toString().replace(/\/$/, '') : undefined; } catch { return undefined; }
}
/** Public canonical identity, never inferred from a request host or preview environment. */
export function siteUrl(): string {
  return "https://bhwiki.devpins.org";
}
