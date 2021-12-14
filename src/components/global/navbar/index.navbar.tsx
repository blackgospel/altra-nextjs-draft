import { IconMenu } from '@tabler/icons'
import Link from 'next/link'
import styles from './index.module.sass'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles[`logo-wrapper`]}>Logo</div>
      <div className={styles[`mobile-navbar-wrapper`]}>
        <div className={styles[`menu-icon`]}>
          <IconMenu />
        </div>
      </div>
      <div className={styles[`desktop-navbar-wrapper`]}>
        <nav className={styles[`navbar-wrapper`]}>
          <ul className={styles[`navbar-list`]}>
            <li className={styles[`navbar-item`]}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles[`navbar-item`]}>
              <Link href="/">Products</Link>
            </li>
            <li className={styles[`navbar-item`]}>
              <Link href="/">Customers</Link>
            </li>
            <li className={styles[`navbar-item`]}>
              <button className={styles[`navbar-button`]}>Book Demo</button>
            </li>
            <li className={styles[`navbar-item`]}>
              <button className={styles[`navbar-button`]}>Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
