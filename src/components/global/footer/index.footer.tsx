import { IconArrowRight, IconBrandLinkedin, IconMail } from '@tabler/icons'
import FlagIreland from 'assets/images/footer/irish-flag.png'
import FlagUSA from 'assets/images/footer/usa-flag.png'
import Logo from 'assets/images/logo-color.png'
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
            <Button primary>
              Pick a time <IconArrowRight style={{ marginLeft: 8 }} />
            </Button>
          </div>
        </div>

        <Spacing />

        <div className={styles[`contact-us-wrapper`]}>
          <div className={styles.content}>
            <h3 className={styles.content}>Get in touch with us:</h3>
            <a href="tel:+353 83 463 9033" className={styles[`link-wrapper`]}>
              <div className={styles.icon}>
                <Image src={FlagIreland} alt="irish flag" />
              </div>
              +353 83 463 9033
            </a>

            <Spacing space="sm" />

            <a href="tel:+1 321-275-3587" className={styles[`link-wrapper`]}>
              <div className={styles.icon}>
                <Image src={FlagUSA} alt="usa flag" />
              </div>
              +1 321-275-3587
            </a>

            <Spacing space="sm" />

            <a href="mailto:hello@altra.ie" className={styles[`link-wrapper`]}>
              <div className={styles.icon}>
                <IconMail />
              </div>
              hello@altra.ie
            </a>
          </div>
        </div>

        <Spacing />

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

      <Spacing />

      <div className={styles[`copyright-wrapper`]}>
        <p className={`${styles.copyright} typography-copyright`}>
          &copy; 2021 Altra
        </p>
        <Link href="https://www.linkedin.com/company/altra-ie/">
          <p className={`${styles[`linked-in-text`]} typography-copyright`}>
            <IconBrandLinkedin style={{ marginRight: 6 }} />
            Connect with us on LinkedIn
          </p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
