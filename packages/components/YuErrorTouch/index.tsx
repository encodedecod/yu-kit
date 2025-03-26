import React from 'react'
import StackTrace, { StackFrame } from 'stacktrace-js'

const lastError = {
  name: '',
  time: ''
}
function loadScript(url: string, callback: () => void) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null
        callback()
      }
    }
  } else {
    script.onload = function () {
      callback()
    }
  }
  script.src = url
  script.defer = true
  document.getElementsByTagName('head')[0].appendChild(script)
}
loadScript('https://unpkg.com/source-map@0.7.3/dist/source-map.js', () => {
  window.sourceMap.SourceMapConsumer.initialize({
    'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm'
  })
})
const getSourceCodeFromErrorPosition = async (componentStack: string, error: any) => {
  const fileNameMap: Record<string, { line: number; column: number }> = {}
  const stackFrames = await StackTrace.fromError(error, {
    filter: (stackFrame: StackFrame) => !stackFrame?.fileName?.includes('/node_modules/'),
    // @ts-ignore
    ajax: (url) => fetch(`${url}?${Date.now()}`).then((res) => res.text())
  })
  stackFrames.forEach((item) => {
    const { fileName, lineNumber = 0, columnNumber = 0 } = item
    if (fileName) {
      fileNameMap[fileName] = { line: lineNumber, column: columnNumber }
    }
  })

  // @ts-ignore
  const urlList = Array.from(componentStack.matchAll('(http.*?\\.js):([0-9]+):([0-9]+)')) as string[][]
  const result = {
    source: '',
    specificPosition: ''
  }

  let lastFilePath = ''
  let consumer: any
  const loop = async (index: number) => {
    const [, filePath, lineNumber, columnNumber] = urlList[index]
    if (filePath !== lastFilePath) {
      const rawSourceMap = await fetch(`${filePath.replace(/\.js$/, '.js.map')}?${Date.now()}`).then((res) => res.json())
      consumer?.destroy()
      consumer = await new window.sourceMap.SourceMapConsumer(rawSourceMap)
    }
    lastFilePath = filePath
    const originalPosition = consumer.originalPositionFor({
      line: +lineNumber,
      column: +columnNumber
    })

    if ((originalPosition.source?.includes('/node_modules/') || !fileNameMap[originalPosition.source]) && index !== urlList.length - 1) {
      await loop(index + 1)
      return
    }
    const sourceIndex = consumer.sources.findIndex((item: string) => item === originalPosition.source)
    const sourceContent = consumer?.sourcesContent[sourceIndex]
    const contentRowArr = sourceContent?.split('\n')
    const positionInfo = fileNameMap[originalPosition.source] || originalPosition
    result.source = `${originalPosition.source} ${positionInfo.line}:${positionInfo.column}`
    result.specificPosition = contentRowArr?.[(fileNameMap[originalPosition.source]?.line || originalPosition.line) - 1]

    consumer?.destroy()
  }

  await loop(0)

  return result
}

export default class ErrorBoundary extends React.Component<{
  children: React.ReactElement
  ErrorNode?: React.ReactNode
  errorCallback?: (data: { error: Error; source: string; specificPosition: string }) => void
}> {
  state = {
    hasError: false
  }

  constructor(props: { children: React.ReactElement }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true }
  }

  async componentDidCatch(error: any, errorInfo: any) {
    const time = `${Date.now()}`
    // 防止重复报同一时间同一个错误
    if (error?.message === lastError.name && time === lastError.time) {
      return
    }
    lastError.time = time
    lastError.name = error?.message

    const data = await getSourceCodeFromErrorPosition(errorInfo.componentStack, error)
    this.props?.errorCallback?.({ error, ...data })
  }

  render() {
    if (this.state.hasError) {
      // 自定义降级后的 UI 并渲染
      return <div className="flex justify-center items-center h-[100vh]">{this.props?.ErrorNode}</div>
    }

    return this.props.children
  }
}
