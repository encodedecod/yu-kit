import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@h-devkit/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@h-devkit/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
});
