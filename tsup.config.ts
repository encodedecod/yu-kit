import { defineConfig, Format, Options } from 'tsup'
import fg from 'fast-glob'
import { sassPlugin } from 'esbuild-sass-plugin'
import fs from 'fs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

const baseConfigs = [
  {
    dts: true, // 添加 .d.ts 文件
    metafile: true, // 添加 meta 文件
    minify: true, // 压缩
    splitting: false,
    sourcemap: true, // 添加 sourcemap 文件
    clean: true, // 是否先清除打包的目录，例如 dist
    format: ['cjs'] as Format[],
    target: ['esnext'],
  },
  {
    dts: true, // 添加 .d.ts 文件
    metafile: true, // 添加 meta 文件
    minify: true, // 压缩
    splitting: false,
    sourcemap: true, // 添加 sourcemap 文件
    clean: true, // 是否先清除打包的目录，例如 dist
    format: ['esm'] as Format[],
    target: ['esnext'],
  },
]

const filePaths: { text: string; path: string }[] = []

const myReadfile = () => {
  const entries = fg.sync([`packages/**/index.ts`, `packages/**/index.tsx`], {
    onlyFiles: false,
    deep: Infinity,
    ignore: [`**/dist/**`, `**/node_modules/**`, `**/*.test.ts`],
  })
  const configs: Options[] = []
  baseConfigs.forEach(baseConfig =>
    entries.forEach(file => {
      const outDir = file
        .replace(/(packages\/)(.*?)\//, `cli/$2/${baseConfig.format[0]}/`)
        .replace(/\/index.(ts|tsx)$/, '')
      configs.push({
        entry: [file],
        outDir: outDir,
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
          '.scss': 'css',
          '.sass': 'css',
          '.less': 'css',
          '.css': 'css',
          '.tsx': 'tsx',
        },
        ...baseConfig,
        esbuildPlugins: [
          sassPlugin({
            async transform(source) {
              const { css } = await postcss([autoprefixer]).process(source)
              return css
            },
          }),
          {
            name: 'scss-plugin',
            setup: build => {
              build.onEnd(result => {
                result.outputFiles?.forEach(item => {
                  if (
                    /index.(mjs|js)$/.test(item.path) &&
                    result.outputFiles?.find(
                      outputItem =>
                        outputItem.path === item.path.replace('.js', '.css'),
                    )
                  ) {
                    filePaths.push({ text: item.text, path: item.path })
                  }
                })
              })
            },
          },
        ],
        onSuccess: async () => {
          filePaths?.forEach(item => {
            let data = item.text
            data = `import "./index.css"; ${data}`
            fs.writeFileSync(item.path, data, {
              encoding: 'utf-8',
            })
          })
        },
      })
    }),
  )
  return defineConfig(configs)
}

export default myReadfile()
