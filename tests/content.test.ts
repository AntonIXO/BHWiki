import { test } from 'node:test';
import assert from 'node:assert/strict';
import { substances, tags, hyperedges } from '../src/lib/content';
import { validateContent, validateSubstance } from '../src/lib/validate-content';
import { buildKnowledgeGraph } from '../src/lib/graph';
import { toCatalogSubstance } from '../src/lib/types';
import { searchCatalog } from '../src/lib/search';
import { existsSync } from 'node:fs';
const bundle={substances,tags,hyperedges};

test('the library validates identities, sources, and the added records',()=>{
 validateContent(bundle);assert.ok(substances.length>=22);
 for(const s of substances)if(s.pubchemCid!==null)assert.ok(existsSync(`public/molecules/${s.slug}.png`),`${s.slug} structure`);
 assert.ok(buildKnowledgeGraph(bundle).nodes.length>substances.length);
});
test('class tags cite the inspected papers',()=>{
 const portalTags=['dissociative','deliriant','cannabinoid','opioid','benzodiazepine','depressant','lysergamide','tryptamine','phenethylamine','arylcyclohexylamine'].map(id=>{
  const tag=tags.find(item=>item.id===id);
  assert.ok(tag,id);
  return tag;
 });
 const blob=portalTags.flatMap(tag=>tag.sourceUrls??[]).join(' ');
 assert.doesNotMatch(blob,/27982573|26516546|24781744|28861491/);
 assert.match(portalTags.find(tag=>tag.id==='opioid')!.sourceUrls!.join(' '),/26516461/);
 assert.match(portalTags.find(tag=>tag.id==='benzodiazepine')!.description,/central nervous system/i);
 assert.doesNotMatch(portalTags.find(tag=>tag.id==='benzodiazepine')!.description,/GABA-A/);
 const live=tags.flatMap(tag=>tag.sourceUrls??[]).join(' ');
 assert.doesNotMatch(live,/27982573|26516546|24781744|28861491/);
 assert.match(tags.find(tag=>tag.id==='opioid')!.sourceUrls!.join(' '),/26516461/);
});
test('identity stubs stay empty and experience links stay on one PsychonautWiki page',()=>{
 const stubs=substances.filter(substance=>substance.subtitle==='Identity record.');
 assert.ok(stubs.length>0);
 for(const substance of stubs){
  assert.equal(substance.effects.length,0);
  assert.equal(substance.claims.length,0);
  assert.equal(substance.interactions.length,0);
  assert.equal(substance.doses.length,0);
  assert.ok(substance.experienceLinks.length<=1);
  for(const link of substance.experienceLinks){
   const url=new URL(link.url);
   assert.equal(link.publisher,'PsychonautWiki');
   assert.equal(url.hostname,'psychonautwiki.org');
   assert.equal(url.search,'');
   assert.match(url.pathname,/^\/wiki\/[^/]+$/);
  }
 }
});
test('a deep-article interaction cites a reference on that article',()=>{
 const ketamine=substances.find(substance=>substance.slug==='ketamine')!;
 assert.ok(ketamine.interactions.length>=1);
 for(const interaction of ketamine.interactions)assert.ok(ketamine.references.some(reference=>reference.id===interaction.sourceId));
 const lsd=substances.find(substance=>substance.slug==='lsd')!;
 assert.equal(lsd.experienceLinks.length,1);
 const url=new URL(lsd.experienceLinks[0].url);
 assert.equal(url.hostname,'psychonautwiki.org');
 assert.equal(url.pathname,'/wiki/LSD');
 const delta=substances.find(substance=>substance.slug==='delta-9-thc')!;
 assert.equal(delta.interactions[0].otherSlug,'ethanol');
});
test('a dangling source is rejected before publication',()=>{const s=structuredClone(substances[0]);s.doses[0].sourceId='missing';assert.throws(()=>validateSubstance(s),/unknown source/);});
test('intake and identification records are optional but strictly typed and sourced',()=>{
 const s=structuredClone(substances[0]);
 s.doses[0].foodRelation='with-food';s.doses[0].solubility='fat-soluble';s.doses[0].absorptionNote='Fixture context.';
 s.identificationTests=[{name:'Ehrlich',kind:'presumptive-reagent',target:s.name,expectedResult:'Fixture color change',interpretation:'Presumptive only.',limitations:'Does not establish purity.',sourceId:s.references[0].id}];
 validateSubstance(s);
 s.doses[0].foodRelation='invalid' as never;assert.throws(()=>validateSubstance(s),/foodRelation/);
});
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
