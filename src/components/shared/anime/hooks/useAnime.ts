import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { DEFAULT_ROOT_MARGIN } from 'src/variants/tools'

const useAnime = () => {
  const animation = useAnimation()
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: DEFAULT_ROOT_MARGIN,
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
