import { IconMenu } from '@tabler/icons'
import useNavbar from './hooks/useNavbar'
import styles from './index.module.sass'
import Nav from './nav/index.nav'

const Navbar: React.FC = () => {
  const { active, handleToggleActive } = useNavbar()

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles[`nav-wrapper`]}>
          <div className={styles[`logo-wrapper`]}>Logo</div>
          <div className={styles[`mobile-content`]}>
            <div className={styles[`menu-icon`]}>
              <IconMenu onClick={handleToggleActive} />
            </div>
          </div>
          <div className={styles[`desktop-content`]}>
            <Nav />
          </div>
        </div>

        <div className={styles[`mobile-navbar-wrapper`]}>
          {active && <Nav />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
