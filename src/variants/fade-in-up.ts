import { DEFAULT_DURATION, DEFAULT_EASING } from './tools'

const FadeInUpVariant = {
  hidden: {
    opacity: 0,
    y: 72,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DEFAULT_DURATION, ease: DEFAULT_EASING },
  },
}

export default FadeInUpVariant
