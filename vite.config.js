/// <reference types="vitest/config" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  root: 'src',
  // rootをsrcに変更しても、publicはプロジェクト直下で管理する
  publicDir: '../public',
  build: {
    // distをsrcの中ではなく、プロジェクト直下に出力する
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        dashboard: resolve(process.cwd(), 'src/index.html'),
        menu: resolve(process.cwd(), 'src/menu/index.html'),
        records: resolve(process.cwd(), 'src/records/index.html')
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});