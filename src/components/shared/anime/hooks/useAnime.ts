import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useWindowSize from 'src/hooks/useWindowSize'
import {
  DEFAULT_MOBILE_ROOT_MARGIN,
  DEFAULT_ROOT_MARGIN,
} from 'src/variants/tools'

const useAnime = () => {
  const { width } = useWindowSize()
  const animation = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: width > 500 ? DEFAULT_ROOT_MARGIN : DEFAULT_MOBILE_ROOT_MARGIN,
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return {
    ref,
    animation,
  }
}

export default useAnime
