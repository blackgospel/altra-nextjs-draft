import Button from 'components/global/button/index.button'
import SocialLinks from 'data/social-links.json'
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
          <Link href="/products">Products</Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/customers">Customers</Link>
        </li>
        <li className={styles.navbar_item}>
          <Button
            sm
            className={styles.navbar_button}
            href={SocialLinks.calendly}
          >
            Book Demo
          </Button>
        </li>
        <li className={styles.navbar_item}>
          <Button
            sm
            className={styles.navbar_button}
            href={SocialLinks.appLogin}
          >
            Login
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Nav
