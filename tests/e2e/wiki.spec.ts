import { test, expect } from '@playwright/test';

test('imported preparation has a source trail without a fabricated molecule', async ({ page }) => {
 await page.goto('/substances/cerebrolysin');
 await expect(page.getByRole('heading', { level: 1, name: /^Cerebrolysin/ })).toBeVisible();
 await expect(page.getByText('Structure not established', { exact: true }).first()).toBeVisible();
 await expect(page.locator('a[href*="pubchem.ncbi.nlm.nih.gov/compound/"]')).toHaveCount(0);
 await expect(page.locator('img[src="/molecules/cerebrolysin.png"]')).toHaveCount(0);
 await expect(page.locator('a[href="https://molekul.io/compounds/cerebrolysin"]')).toBeVisible();
 await expect(page.locator('a[href="https://pubmed.ncbi.nlm.nih.gov/37818733/"]')).toBeVisible();
 const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
 expect(overflow).toBe(false);
});

test('library search, aliases, typed filters and empty state',async({page})=>{
 await page.goto('/');await expect(page.locator('.substance-card').first()).toBeVisible();expect(await page.locator('.substance-card').count()).toBeGreaterThanOrEqual(10);
 await expect(page.locator('body')).not.toContainText(/OptiHealth|vendor|established evidence/i);
 const search=page.getByRole('textbox',{name:'Search the substance library'});
 await search.fill('hystamine');await expect(page.locator('.substance-card')).toContainText(['Diphenhydramine']);
 await search.fill('not-an-article');await expect(page.getByRole('heading',{name:'No substances found'})).toBeVisible();
 await page.getByRole('button',{name:'Clear search & filters'}).click();
 await page.getByRole('button',{name:'Filters',exact:true}).click();
 await page.getByRole('checkbox',{name:'CYP1A2',exact:true}).check();
 await expect(page.locator('.substance-card')).toHaveCount(1);await expect(page.locator('.substance-card')).toContainText('Caffeine');
 await page.getByRole('button',{name:'List view'}).click();await expect(page.locator('.substance-grid')).toHaveClass(/list-view/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
});
test('articles preserve sourced contexts and the correct modeled analyte',async({page})=>{
 await page.goto('/substances/psilocybin');
 await expect(page.locator('.article-hero h1')).toContainText('Psilocybin');
 await expect(page.locator('.kinetics-svg title')).toContainText(/psilocin/i);
 await expect(page.locator('.kinetics-slider')).toHaveCount(0);
 await page.goto('/substances/caffeine');
 await expect(page.locator('.article-hero')).toContainText('Sourced draft');
 const slider=page.getByRole('slider');await expect(slider).toBeVisible();
 await page.waitForFunction(()=>{const slider=document.querySelector('.kinetics-slider');return !!slider&&Object.getOwnPropertyNames(slider).some(key=>key.startsWith('__reactProps'));});
 await slider.fill('6');await expect(page.locator('.kinetics-slider-heading output')).toContainText('6');
 await expect(page.locator('#effects')).toBeVisible();await expect(page.locator('#measured-outcomes')).toBeVisible();
 await page.locator('.article-citation').first().click();
 expect(new URL(page.url()).hash).toMatch(/^#reference-/);
 const broken=await page.locator('a[href^="#reference-"]').evaluateAll(links=>links.filter(a=>!document.getElementById(a.getAttribute('href')!.slice(1))).length);expect(broken).toBe(0);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
});
test('concepts and effects link back to sourced articles',async({page})=>{
 await page.goto('/effects');await expect(page.getByRole('heading',{level:1})).toBeVisible();
 await page.goto('/concepts/histamine');await expect(page.getByRole('heading',{level:1})).toContainText('Histamine');
 await expect(page.locator('main a[href="/substances/diphenhydramine"]').first()).toBeVisible();
 await page.goto('/outcomes/attention');await expect(page.getByRole('heading',{level:1})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
});
test('graph controls and text alternative preserve complete context',async({page})=>{
 await page.goto('/graph?focus=caffeine');await expect(page.getByRole('button',{name:'Zoom in'})).toBeEnabled();
 await page.getByLabel('Filter graph by concept type').selectOption('enzyme');
 await page.getByText('Explore an accessible text view',{exact:true}).click();
 await expect(page.getByRole('button',{name:'Locate Tobacco-smoke exposure in graph'})).toBeVisible();
 await page.getByRole('button',{name:'Locate CYP1A2 in graph'}).click();
 await page.getByRole('button',{name:'Zoom in'}).click();await page.getByRole('button',{name:'Fit graph to view'}).click();
 const search=page.getByRole('textbox',{name:'Search the knowledge graph'});await search.fill('no-such-entity');await expect(page.getByText(/No connections found/)).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
});
test('history, keyboard skip link and invalid routes are honest',async({page})=>{
 await page.goto('/substances/caffeine/history');await expect(page.locator('main')).not.toContainText('Invalid Date');await expect(page.locator('main')).toContainText('Sourced draft');
 await page.goto('/');await page.keyboard.press('Tab');await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();
 const response=await page.goto('/substances/not-a-substance');expect(response?.status()).toBe(404);
});
test('read APIs are compact and validate parameters',async({request})=>{
 const search=await request.get('/api/search?q=caffeine&limit=1');expect(search.status()).toBe(200);const body=await search.json();expect(body.items).toHaveLength(1);expect(body.items[0].references).toBeUndefined();
 expect((await request.get('/api/search?limit=1000')).status()).toBe(400);
 const response=await request.get('/api/graph?focus=caffeine&limit=20');expect(response.status()).toBe(200);const graph=await response.json();expect(graph.substances[0].references).toBeUndefined();
 expect((await request.get('/api/graph?limit=-1')).status()).toBe(400);
});

test('class index, a stub, and a sourced interaction hold on desktop and a phone width',async({page})=>{
 await page.setViewportSize({width:1280,height:800});
 await page.goto('/');
 await page.getByRole('link',{name:'Opioid',exact:true}).click();
 await expect(page.locator('.substance-card').first()).toBeVisible();
 await expect(page.locator('.substance-card').filter({hasText:'Caffeine'})).toHaveCount(0);
 await page.goto('/substances/ketamine');
 await expect(page.locator('#safety')).toContainText(/opioid analgesics/i);
 await page.locator('#safety .article-citation').first().click();
 expect(new URL(page.url()).hash).toMatch(/^#reference-/);
 await page.goto('/substances/lsd');
 await expect(page.getByRole('link',{name:'LSD on PsychonautWiki'})).toHaveAttribute('href','https://psychonautwiki.org/wiki/LSD');
 await expect(page.locator('#main')).not.toContainText(/Time reversal|trip report/i);
 await page.setViewportSize({width:390,height:844});
 await page.goto('/');
 await page.getByRole('link',{name:'Opioid',exact:true}).click();
 await expect(page.locator('.substance-card').first()).toBeVisible();
 await expect(page.locator('.substance-card').filter({hasText:'Caffeine'})).toHaveCount(0);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
 await page.goto('/substances/2c-b');
 await expect(page.locator('#effects')).toContainText('Not assessed');
 await expect(page.locator('#safety')).toContainText('Not assessed');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBeTruthy();
});
test('reading surfaces meet automated accessibility checks',async({page})=>{
 const {default:AxeBuilder}=await import('@axe-core/playwright');
 for(const path of ['/','/substances/caffeine','/effects/alertness','/graph?focus=caffeine']){
  await page.goto(path);await page.waitForLoadState('networkidle');
  const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  expect(result.violations,`${path}: ${JSON.stringify(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})))}`).toEqual([]);
 }
});
