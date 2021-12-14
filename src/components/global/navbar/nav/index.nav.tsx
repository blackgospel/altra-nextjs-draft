import Link from 'next/link'
import styles from '../index.module.sass'

const Nav = () => {
  return (
    <div className={styles[`navbar-wrapper`]}>
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
    </div>
  )
}

export default Nav
