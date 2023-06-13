/*
 * @Date: 2022-10-20 13:59:49
 * @Description: useCallback 实现
 */

import { useRef, useState } from 'react'

/** useCallback 实现 */
export default function useCallback<T extends Function, U>(fn: T, deps?: U[]): T {
  const [value] = useState<T>(() => {
    return fn
  })
  const prev = useRef(value)
  const prevDeps = useRef(deps)

  if (typeof fn !== 'function') {
    throw new Error('需要传入一个函数')
  }

  /** 如果传的空数组就不在计算，直接返回最初的值 */
  if (deps?.length === 0) {
    return value
  }

  /** 如果没有传依赖就每次计算 */
  if (deps === undefined) {
    prevDeps.current = deps
    prev.current = fn
  }

  /** 依赖变化就缓存并重新计算值 */
  if (!deps?.every((item, index) => prevDeps?.current?.[index] === item)) {
    prevDeps.current = deps
    prev.current = fn
  }

  return prev.current
}
