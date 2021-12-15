import { IconArrowRight, IconBrandLinkedin } from '@tabler/icons'
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
          <div className={styles.content}>
            <h3 className={styles.content}>
              Ready to improve care through Altra?
            </h3>
            <p className={styles.content}>Schedule a demo now</p>
          </div>
          <div className={styles[`button-wrapper`]}>
            <Button>
              Pick a time <IconArrowRight style={{ marginLeft: 8 }} />
            </Button>
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
