import { test, expect } from '@playwright/test';

test('library search, aliases, typed filters and empty state',async({page})=>{
 await page.goto('/');await expect(page.locator('.substance-card')).toHaveCount(10);
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
 await expect(page.locator('.kinetics-svg title')).toContainText('Psilocin');
 await expect(page.locator('.kinetics-slider')).toHaveCount(0);
 await page.goto('/substances/caffeine');
 await expect(page.locator('.article-hero')).toContainText('Sourced draft');
 const slider=page.getByRole('slider');await expect(slider).toBeVisible();await slider.fill('6');await expect(page.locator('.kinetics-slider-heading output')).toContainText('6');
 await expect(page.locator('#effects')).toBeVisible();await expect(page.locator('#outcomes')).toBeVisible();
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
