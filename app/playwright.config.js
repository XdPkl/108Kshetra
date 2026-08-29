import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  retries: 1,
  use: {
    // must match the Vite `base` (GitHub Pages sub-path)
    baseURL: 'http://localhost:4173/108Kshetra/',
  },
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173/108Kshetra/',
    reuseExistingServer: !process.env.CI,
  },
});
