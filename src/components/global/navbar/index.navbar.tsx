import { IconMenu } from '@tabler/icons'
import styles from './index.module.sass'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles[`logo-wrapper`]}>Logo</div>
      <div className={styles[`menu-icon`]}>
        <IconMenu />
      </div>
    </nav>
  )
}

export default Navbar
