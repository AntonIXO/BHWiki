import { test } from 'node:test';
import assert from 'node:assert/strict';
import { substances, tags, hyperedges } from '../src/lib/content';
import { validateContent, validateSubstance } from '../src/lib/validate-content';
import { buildKnowledgeGraph } from '../src/lib/graph';
import { toCatalogSubstance } from '../src/lib/types';
import { searchCatalog } from '../src/lib/search';
import { existsSync } from 'node:fs';
const bundle={substances,tags,hyperedges};

test('the ten-article release validates all observations, primary identities and sources',()=>{
 validateContent(bundle);assert.equal(substances.length,10);
 for(const s of substances)assert.ok(existsSync(`public/molecules/${s.slug}.png`),`${s.slug} structure`);
 assert.ok(buildKnowledgeGraph(bundle).nodes.length>substances.length);
});
test('a dangling source is rejected before publication',()=>{const s=structuredClone(substances[0]);s.doses[0].sourceId='missing';assert.throws(()=>validateSubstance(s),/unknown source/);});
test('negative and unknown half-lives cannot become numeric models',()=>{const s=structuredClone(substances[0]);s.pkObservations[0].low=-2;assert.throws(()=>validateSubstance(s),/nonnegative/);s.pkObservations[0].low=null;s.pkObservations[0].statistic='not-established';assert.throws(()=>validateSubstance(s),/cannot be modeled/);});
test('a measured outcome cannot masquerade as a subjective effect',()=>{const b=structuredClone(bundle);b.substances[0].effects[0].conceptId='attention';assert.throws(()=>validateContent(b),/must be a effect/);});
test('roles cannot disappear from a contextual relationship',()=>{const b=structuredClone(bundle);delete b.hyperedges[0].memberRoles[b.hyperedges[0].members[0]];assert.throws(()=>validateContent(b),/role/);});
test('caffeine smoking is a metabolic context and psilocin is the modeled analyte',()=>{
 const c=substances.find(s=>s.slug==='caffeine')!;assert.ok(c.modifiers.some(m=>m.factorType==='smoking'));assert.ok(c.doses.every(d=>!/smok/i.test(d.route)));
 const edge=hyperedges.find(h=>h.members.includes('tag:tobacco-smoke'))!;assert.ok(edge.members.includes('substance:caffeine'));assert.ok(edge.members.includes('tag:cyp1a2'));
 const p=substances.find(s=>s.slug==='psilocybin')!;const pk=p.pkObservations.find(o=>o.id===p.halfLife.observationId)!;assert.match(pk.analyte,/psilocin/i);assert.equal(pk.statistic,'study-mean');
});
test('compact catalog never includes article projections or citations',()=>{for(const s of substances){const item=toCatalogSubstance(s);assert.ok(!('references' in item));assert.ok(!('claims' in item));assert.ok(!('doses' in item));}});
test('catalog supports aliases, concept aliases and combined filters',()=>{
 const catalog=substances.map(toCatalogSubstance);
 assert.ok(searchCatalog(catalog,tags,{q:'hystamine'}).some(s=>s.slug==='diphenhydramine'));
 const match=searchCatalog(catalog,tags,{tags:['stimulant','cyp1a2']});assert.deepEqual(match.map(s=>s.slug),['caffeine']);
 assert.equal(searchCatalog(catalog,tags,{q:'no-such-compound'}).length,0);
});
