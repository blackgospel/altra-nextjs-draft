import { IconBrandLinkedin } from '@tabler/icons'
import Logo from 'assets/images/logo.png'
import Button from 'components/atomic/button/atomic.button'
import Spacing from 'components/atomic/spacing/atomic.spacing'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.sass'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles[`footer-wrapper`]}>
        <div className={styles.logo}>
          <Image src={Logo} alt="altra logo" />
        </div>

        <Spacing />

        <div className={styles[`schedule-demo-wrapper`]}>
          <p className={styles.content}>
            We’ll use this time to learn about your current processes and show
            you how Altra will save you over 8 hours per week engaging with
            families and communicating with staff.
          </p>
          <Spacing />
          <div className={styles[`button-wrapper`]}>
            <Button>Pick a time</Button>
          </div>
        </div>

        <Spacing space="lg" />

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
          </ul>
        </div>
      </div>

      <Spacing space="lg" />

      <div className={styles[`copyright-wrapper`]}>
        <p className={`${styles.copyright} typography-copyright`}>
          &copy; 2021 Altra
        </p>
        <p className={`${styles[`linked-in-text`]} typography-copyright`}>
          <IconBrandLinkedin style={{ marginRight: 6 }} />
          Connect with us on LinkedIn
        </p>
      </div>
    </footer>
  )
}

export default Footer
