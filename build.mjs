import { build } from 'tsup'
import fg from 'fast-glob'
import { sassPlugin } from 'esbuild-sass-plugin'
import fs from 'fs'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

// 异步执行函数，控制同步执行数量
async function executeAsyncTasks(tasks, concurrency) {
  let promises = []

  // 并行执行指定数量的任务
  for (let i = 0; i < concurrency; i++) {
    if (tasks.length === 0) break
    const task = tasks.shift()
    if (task) {
      promises.push(task)
    }
  }

  // 如果还有未执行的任务，递归执行剩余任务
  while (tasks.length > 0) {
    await Promise.all(
      promises.map(async (p) => {
        await p()
        promises.shift()
      })
    )
    for (let i = 0; i < concurrency; i++) {
      const task = tasks.shift()
      if (task) {
        promises.push(task)
      }
    }
  }
  await Promise.all(promises)
}
const baseConfigs = [
  {
    dts: true, // 添加 .d.ts 文件
    metafile: false, // 添加 meta 文件
    minify: true, // 压缩
    splitting: false,
    sourcemap: false, // 添加 sourcemap 文件
    clean: true, // 是否先清除打包的目录，例如 dist
    format: ['cjs']
  },
  {
    dts: true, // 添加 .d.ts 文件
    metafile: false, // 添加 meta 文件
    minify: true, // 压缩
    splitting: false,
    sourcemap: false, // 添加 sourcemap 文件
    clean: true, // 是否先清除打包的目录，例如 dist
    format: ['esm']
  }
]
const filePaths = []
const hasHandlePath = []

const myReadfile = async () => {
  const entries = fg.sync([`./packages/**/index.ts`, `./packages/**/index.tsx`], {
    onlyFiles: false,
    deep: Infinity,
    ignore: [`**/cli/**`, `**/node_modules/**`, `**/*.test.ts`]
  })
  const configs = []
  baseConfigs.forEach((baseConfig) =>
    entries.forEach((file) => {
      const outDir = file.replace(/(packages\/)(.*?)\//, `./packages/$2/cli/${baseConfig.format[0]}/`).replace(/\/index.(ts|tsx)$/, '')
      configs.push({
        target: ['esnext'],
        entry: [file],
        outDir: outDir,
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
          '.scss': 'css',
          '.sass': 'css',
          '.less': 'css',
          '.css': 'css',
          '.tsx': 'tsx'
        },
        ...baseConfig,
        esbuildPlugins: [
          sassPlugin({
            async transform(source) {
              const { css } = await postcss([autoprefixer]).process(source)
              return css
            }
          }),
          {
            name: 'scss-plugin',
            setup: (build) => {
              build.onEnd((result) => {
                result.outputFiles?.forEach((item) => {
                  if (
                    /index.(mjs|js)$/.test(item.path) &&
                    result.outputFiles?.find((outputItem) => outputItem.path === item.path.replace(/(.js|.mjs)$/, '.css'))
                  ) {
                    filePaths.push({ text: item.text, path: item.path })
                  }
                })
              })
            }
          }
        ],
        onSuccess: async () => {
          filePaths.forEach((item) => {
            if (!hasHandlePath.find((val) => val === item.path)) {
              fs.access(item.path, (err) => {
                if (!err) {
                  let data = item.text
                  data = `import "./index.css"; ${data}`
                  fs.writeFile(
                    item.path,
                    `import "./index.css"; ${item.text}`,
                    {
                      encoding: 'utf-8'
                    },
                    (fileError) => {
                      if (!fileError) {
                        hasHandlePath.push(item.path)
                      }
                    }
                  )
                }
              })
            }
          })
        }
      })
    })
  )
  executeAsyncTasks(
    configs.map((item) => () => build(item)),
    3
  )
}
;(async () => {
  await myReadfile()
})()
