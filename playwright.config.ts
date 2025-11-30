import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'https://courier-sync-feature3-frontend.vercel.app',
    headless: false,        // Para ver el navegador durante la demo
    viewport: { width: 1280, height: 720 },
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});