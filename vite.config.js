import { resolve } from 'node:path';
import { defineConfig } from 'vite';

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
        records: resolve(process.cwd(), 'src/records/index.html'),
      },
    },
  },
});