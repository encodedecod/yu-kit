import React, { useEffect, useImperativeHandle, useState } from 'react'
import ReactDom from 'react-dom/client'

export type ElementHandlerProps = <T>(ReactComponent: React.ComponentType<T>) => {
  /**
   * @description: 组件的显示
   */
  show: (props: T) => void
  /**
   * @description: 组件隐藏
   */
  hide: () => void
  /**
   * @description: 组件在展示一段延时后消失
   */
  info: (props: T & { duration?: number }) => void
}
const ElementHandler: ElementHandlerProps = (ReactComponent) => {
  const rootArr = [] as ReactDom.Root[]
  const containers = [] as HTMLDivElement[]
  const refArr = [] as React.RefObject<{
    handleClose: () => void
  }>[]
  let timer: NodeJS.Timeout

  /**
   * @description: 去除对应的新增节点
   * @param {HTMLDivElement} container
   */
  const unmount = (root: ReactDom.Root, container: HTMLDivElement) => {
    if (!container || !root) {
      return
    }
    root.unmount()
    container.parentNode?.removeChild(container)
  }

  /**
   * @description: 隐藏所有的属性
   */
  const hide = () => {
    while (containers.length > 0) {
      const container = containers.pop()
      const root = rootArr.pop()
      const ref = refArr.pop()
      ref?.current?.handleClose()
      if (!container || !root) {
        break
      }
      setTimeout(() => {
        unmount(root, container)
      }, 500)
    }
  }

  return {
    show: (props) => {
      const containerDiv = document.createElement('div')
      document.body.appendChild(containerDiv)
      hide()
      containers.push(containerDiv)
      const createdRoot = ReactDom.createRoot(containerDiv)
      rootArr.push(createdRoot)
      const SureReactComponent: React.ForwardRefRenderFunction<{
        handleClose: () => void
      }> = (componentProps, componentRef) => {
        const [visible, setVisible] = useState(false)
        useEffect(() => {
          // 这里处理是为了展示开启动画 false置为true 才会有开启动画
          setVisible(true)
        }, [])
        // 这里处理是为了展示关闭动画 true置为false 才会有关闭动画
        const handleClose = () => {
          setVisible(false)
        }
        useImperativeHandle(
          componentRef,
          () => ({
            handleClose
          }),
          []
        )
        return <ReactComponent visible={visible} {...props} />
      }
      const RefReactComponent = React.forwardRef(SureReactComponent)
      const componentRef = React.createRef<{ handleClose: () => void }>()
      refArr.push(componentRef)
      // 这里默认传值visible
      createdRoot.render(<RefReactComponent ref={componentRef} />)
    },
    hide,
    info: (props) => {
      const containerDiv = document.createElement('div')
      document.body.appendChild(containerDiv)
      hide()
      containers.push(containerDiv)
      const { duration = 1500 } = props
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(hide, duration)
      const createdRoot = ReactDom.createRoot(containerDiv)
      rootArr.push(createdRoot)
      const SureReactComponent: React.ForwardRefRenderFunction<{
        handleClose: () => void
      }> = (componentProps, componentRef) => {
        const [visible, setVisible] = useState(false)
        useEffect(() => {
          // 这里处理是为了展示开启动画 false置为true 才会有开启动画
          setVisible(true)
        }, [])
        // 这里处理是为了展示关闭动画 true置为false 才会有关闭动画
        const handleClose = () => {
          setVisible(false)
        }
        useImperativeHandle(
          componentRef,
          () => ({
            handleClose
          }),
          []
        )
        return <ReactComponent visible={visible} {...props} />
      }
      const RefReactComponent = React.forwardRef(SureReactComponent)
      const componentRef = React.createRef<{ handleClose: () => void }>()
      refArr.push(componentRef)
      // 这里默认传值visible
      createdRoot.render(<RefReactComponent ref={componentRef} />)
    }
  }
}

export default ElementHandler
