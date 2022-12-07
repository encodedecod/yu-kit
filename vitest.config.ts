import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@vmejs/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@vmejs/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
});
