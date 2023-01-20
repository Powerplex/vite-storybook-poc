import { useMountedState } from '@ds-name/use-mounted-state'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

export const useCombinedState = (controlledValue: any, defaultValue: any) => {
  const { current: initialValue } = useRef(
    controlledValue === undefined ? defaultValue : controlledValue
  )

  const [value, setValue] = useState(initialValue)
  const isMounted = useMountedState()

  useLayoutEffect(() => {
    if (isMounted()) setValue(controlledValue)
  }, [controlledValue, setValue, isMounted])

  const updater = useCallback(
    (value: any, forceFlag: boolean) => {
      if (controlledValue === undefined || forceFlag) setValue(value)
    },
    [controlledValue, setValue]
  )

  return [value, updater, controlledValue !== undefined, initialValue]
}
