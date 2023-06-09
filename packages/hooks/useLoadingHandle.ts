import { useState } from 'react'

const useLoadingHandle = <T>(fn: (...args:T[])=>Promise<void>):[boolean, (...args:T[])=>Promise<void>] => {
  const [loading, setLoading] = useState<boolean>(false)
  const handle = async (...args:T[]) => {
    try {
      setLoading(true)
      return await fn(...args)
    } catch (error) {
      throw new Error(error as string)
    } finally {
      setLoading(false)
    }
  }
  return [loading, handle]
}

export default useLoadingHandle
