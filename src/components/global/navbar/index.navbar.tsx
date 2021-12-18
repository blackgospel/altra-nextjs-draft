import Logo from 'assets/images/logo.png'
import cn from 'classnames'
import Image from 'next/image'
import useNavbar from './hooks/useNavbar'
import styles from './index.module.sass'
import NavMenu from './menu/index.menu'
import Nav from './nav/index.nav'

const Navbar: React.FC = () => {
  const { active, handleToggleActive } = useNavbar()

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.nav_wrapper}>
          <div className={styles.logo_wrapper}>
            <Image src={Logo} />
          </div>
          <div className={styles.mobile_content}>
            <div className={styles.menu_icon}>
              <NavMenu active={active} onClick={handleToggleActive} />
            </div>
          </div>
          <div className={styles.desktop_content}>
            <Nav />
          </div>
        </div>

        <div
          className={cn([
            styles.mobile_navbar_wrapper,
            { [styles.active]: active },
          ])}
        >
          <Nav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
