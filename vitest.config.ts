import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@yu-kit/shared': resolve(__dirname, 'packages/shared/index.ts'),
    },
  },
});
