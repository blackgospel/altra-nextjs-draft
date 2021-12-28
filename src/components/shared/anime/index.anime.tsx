import { motion } from 'framer-motion'
import FadeInUpVariant from 'src/variants/fade-in-up'
import useAnime from './hooks/useAnime'
import styles from './index.module.sass'

const Anime: React.FC = ({ children }) => {
  const { ref, animation } = useAnime()

  return (
    <motion.div
      initial="hidden"
      animate={animation}
      variants={FadeInUpVariant}
      ref={ref}
      className={styles.container}
    >
      {children}
    </motion.div>
  )
}

export default Anime
