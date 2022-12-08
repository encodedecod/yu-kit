import { defineConfig, Format } from 'tsup';
// import fs from 'fs'

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
// const myReadfile =  () => {
// const dirs =  fs.readdirSync("./packages")
//  return defineConfig(dirs.map(file=>({entry:[`packages/${file}/index.ts`],outDir:`packages/${file}/dist`,...baseConfig})))
// }

export default defineConfig([
  {
    entry: ['packages/core/index.ts'],
    outDir: 'packages/core/dist',
    ...baseConfig,
  },
  {
    entry: ['packages/shared/index.ts'],
    outDir: 'packages/shared/dist',
    ...baseConfig,
  },
]);
