import { IconArrowRight } from '@tabler/icons'
import Logo from 'assets/images/logo.png'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import useNavbar from './hooks/useNavbar'
import styles from './index.module.sass'
import NavMenu from './menu/index.menu'
import Nav from './nav/index.nav'

const Navbar: React.FC = () => {
  const { active, handleToggleActive, subNavActive, handleSubNavToggleActive } =
    useNavbar()

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
            <Nav callback={handleSubNavToggleActive} />
          </div>
        </div>

        <div
          className={cn([
            styles.mobile_navbar_wrapper,
            { [styles.active]: active },
            { [styles.subnav_active]: subNavActive },
          ])}
        >
          <Nav
            callback={handleSubNavToggleActive}
            subNavActive={subNavActive}
          />
        </div>

        <div
          className={cn([
            styles.sub_navbar_wrapper,
            { [styles.active]: subNavActive },
          ])}
        >
          <ul className={styles.sub_navbar_list}>
            <li className={styles.list_item}>
              <Link href="/products/wellbeing-hub">
                <span>
                  Wellbeing Hub <IconArrowRight style={{ marginLeft: 4 }} />
                </span>
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/products/staff">
                <span>
                  Altra Staff <IconArrowRight style={{ marginLeft: 4 }} />
                </span>
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link href="/products/family">
                <span>
                  Altra Family <IconArrowRight style={{ marginLeft: 4 }} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar