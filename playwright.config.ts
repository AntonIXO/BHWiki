import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
 testDir:'./tests/e2e', fullyParallel:false, workers:1, timeout:45000, retries:0,
 reporter:[['list']], use:{baseURL:process.env.PLAYWRIGHT_BASE_URL||'http://127.0.0.1:3086',trace:'retain-on-failure',screenshot:'only-on-failure',launchOptions:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE?{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}:{}},
 projects:[{name:'desktop',use:{...devices['Desktop Chrome'],viewport:{width:1440,height:1000}}},{name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium'}}],
 webServer:process.env.PLAYWRIGHT_BASE_URL?undefined:{command:'bun run start',url:'http://127.0.0.1:3086',reuseExistingServer:!process.env.CI,timeout:120000,env:{BHWIKI_DATA_MODE:'bundled'}},
});
