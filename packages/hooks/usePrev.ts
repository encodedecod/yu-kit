/*
 * @Date: 2022-10-20 14:29:02
 * @Description: usePrev 拿到上一次的值
 */

import { useRef } from 'react'

export default function usePrev<T>(value: T): T {
  const prev = useRef<T>(value)
  const current = useRef<T>(value)

  if (value !== current.current) {
    prev.current = current.current
  }

  current.current = value

  return prev.current
}
