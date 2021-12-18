import Button from 'components/global/button/index.button'
import Link from 'next/link'
import styles from '../index.module.sass'

const Nav = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/">Products</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/">Customers</Link>
        </li>
        <li className={styles.navbar_item}>
          <Button sm className={styles.navbar_button}>
            Book Demo
          </Button>
        </li>
        <li className={styles.navbar_item}>
          <Button sm className={styles.navbar_button}>
            Login
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Nav
