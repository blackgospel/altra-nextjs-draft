import { useRef } from 'react'
import useEventListener from 'src/hooks/useEventListener'

const useNav = (callback?: () => void): UseNavType => {
  const subNavRef = useRef<HTMLDivElement>(null)

  const handleSubNavToggleActive = () => {
    if (callback) {
      callback()
    }
  }

  const handleMouseEnter = () => handleSubNavToggleActive()

  const handleMouseLeave = () => handleSubNavToggleActive()

  useEventListener('mouseenter', handleMouseEnter, subNavRef)

  useEventListener('mouseleave', handleMouseLeave, subNavRef)

  return {
    subNavRef,
  }
}

export default useNav
