import { useEffect, useState } from 'react'
import useEventListener from './useEventListener'

const useWindowSize = (): UseWindowSizeType => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEventListener('resize', handleSize)

  useEffect(() => {
    handleSize()
  }, [])

  return windowSize
}

export default useWindowSize
