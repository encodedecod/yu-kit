import { defineConfig, Format } from 'tsup';
import fg from 'fast-glob';

const outExtensionFn = ({ format }: { format: string }) => {
  if (format === 'esm') return { js: `.${format}.js` };
  if (format === 'iife') return { js: `.mjs` };
  return { js: `.js` };
};
const baseConfig = {
  dts: true, // 添加 .d.ts 文件
  metafile: true, // 添加 meta 文件
  minify: true, // 压缩
  splitting: false,
  sourcemap: true, // 添加 sourcemap 文件
  clean: true, // 是否先清除打包的目录，例如 dist
  outExtension: outExtensionFn,
  format: ['cjs', 'esm', 'iife'] as Format[],
};
const myReadfile = () => {
  const entries = fg.sync([`packages/**/index.ts`, `packages/**/index.tsx`], {
    onlyFiles: false,
    deep: Infinity,
    ignore: [`**/dist/**`, `**/node_modules/**`, `**/*.test.ts`],
  });
  return defineConfig(
    entries.map((file) => {
      const outDir = file.replace(/(packages\/)(.*?)\//, '$1$2/dist/').replace(/\/index.(ts|tsx)$/, '');
      return {
        entry: [file],
        outDir: outDir,
        ...baseConfig,
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
          '.scss': 'css',
          '.sass': 'css',
          '.less': 'css',
          '.css': 'css',
        },
      };
    }),
  );
};

export default myReadfile();
