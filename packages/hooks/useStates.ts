/*
 * @Date: 2023-05-25 20:00:25
 * @Description: 可以用于存储对象的 useState
 */

import { useCallback, useState } from 'react'


function useStates<T extends object,V>(initState: T): [T, (values: V[]) => void] {
  const [state, updateState] = useState(initState)

  const setState = useCallback((values:V[]) => {
    updateState((state: T) => {
      return { ...state, ...values }
    })
  }, [])

  return [state, setState]
}

export default useStates
