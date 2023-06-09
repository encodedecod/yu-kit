import { useEffect } from 'react'

export enum Orientation {
  horizontal,
  vertical,
}

export interface DraggableOptions {
  /**
   * @description 排序方向, 默认是横排
   * @default Orientation.horizontal
   */
  orientation?: Orientation

  /**
   * @description
   */
  container: HTMLElement
}

/**
 * NOTE - Draggable for Sort
 *  */
const useDraggable = function _draggable(opts: DraggableOptions) {
  const { container } = opts
  if (typeof container === 'undefined') {
    throw new Error('Referrence Error: Unexpected option.')
  }

  useEffect(() => {
    // 获取计算样式表，初始化拖拽容器样式
    const computedStyle = window.getComputedStyle(container)
    if (!computedStyle.getPropertyValue('position') || computedStyle.getPropertyValue('position') !== 'none') {
      // 设置主节点position
      computedStyle.setProperty('position', 'relative')
    }

    // 获取拖拽元素
    if (container) {
      const length = container.childNodes.length
      let offset = 0

      while (offset < length) {
        const currentChild = <HTMLElement>container.childNodes.item(offset)
        currentChild.setAttribute('data-index', offset.toString())
        offset++
      }
    }
  }, [])

  return {}
}

function merge(source1: DraggableOptions, source2: DraggableOptions) {
  // do somethings
  return { ...source1, ...source2 }
}

useDraggable.merge = merge

export default useDraggable
