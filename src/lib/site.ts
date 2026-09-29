export function repositoryUrl(): string | undefined {
  const value = process.env.BHWIKI_REPOSITORY_URL;
  if (!value) return undefined;
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.toString().replace(/\/$/, '') : undefined; } catch { return undefined; }
}
export function siteUrl(): string | undefined {
  const value = process.env.BHWIKI_SITE_URL;
  if (!value) return undefined;
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.origin : undefined; } catch { return undefined; }
}
