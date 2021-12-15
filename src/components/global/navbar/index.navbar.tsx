import { IconMenu2 } from '@tabler/icons'
import Logo from 'assets/images/logo.png'
import Image from 'next/image'
import useNavbar from './hooks/useNavbar'
import styles from './index.module.sass'
import Nav from './nav/index.nav'

const Navbar: React.FC = () => {
  const { active, handleToggleActive } = useNavbar()

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles[`nav-wrapper`]}>
          <div className={styles[`logo-wrapper`]}>
            <Image src={Logo} />
          </div>
          <div className={styles[`mobile-content`]}>
            <div className={styles[`menu-icon`]}>
              <IconMenu2 onClick={handleToggleActive} />
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
