import type { CatalogSubstance, Tag } from './types';
export type CatalogFilters = { q?: string; category?: string; tags?: string[]; sort?: 'name'|'updated' };
/** All selected concepts must apply. Aliases include source-checked common spellings. */
export function searchCatalog(substances:CatalogSubstance[],concepts:Tag[],filters:CatalogFilters={}) {
  const query=(filters.q||'').trim().toLocaleLowerCase('en');
  const names=new Map(concepts.map(t=>[t.id,[t.label,...(t.aliases||[])].join(' ')]));
  return substances.filter(s=>(!filters.category||s.category===filters.category)&&(filters.tags||[]).every(t=>s.tags.includes(t))&&(!query||[s.name,...s.aliases,...s.tags.map(t=>names.get(t)||t)].join(' ').toLocaleLowerCase('en').includes(query))).sort((a,b)=>filters.sort==='updated'?b.reviewedAt.localeCompare(a.reviewedAt)||a.name.localeCompare(b.name):a.name.localeCompare(b.name));
}
