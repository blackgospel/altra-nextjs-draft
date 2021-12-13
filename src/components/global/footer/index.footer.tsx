import Spacing from 'components/atomic/spacing/atomic.spacing'
import Navbar from '../navbar/index.navbar'
import styles from './index.module.sass'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Navbar />

      <Spacing />
    </footer>
  )
}

export default Footer
