import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true
  },
  resolve: {
    alias: {
      '@yu-kit/utils': resolve(__dirname, 'packages/utils/index.ts'),
      '@yu-kit/kit': resolve(__dirname, 'packages/kit/index.ts'),
      '@yu-kit/components': resolve(__dirname, 'packages/components/index.ts'),
      '@yu-kit/hooks': resolve(__dirname, 'packages/hooks/index.ts')
    }
  }
})
