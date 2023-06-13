/*
 * @Date: 2022-10-20 14:14:53
 * @Description: 方法前后执行loading
 */

import { useState } from 'react'


export default function useLoading<V>(fn: (...arg:V[])=>Promise<void>): [boolean, (...arg:V[])=>Promise<void>] {
  const [loading, setLoading] = useState(false);
  const call = async function call(...args:V[]) {
    if (loading) {
      return
    }
    setLoading(true)
    try {
      await fn(...args)
    } finally {
      setLoading(false)
    }
  }

  return [loading, call]
}
