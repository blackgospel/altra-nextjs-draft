import { IconArrowRight, IconBrandLinkedin, IconMail } from '@tabler/icons'
import FlagIreland from 'assets/images/footer/irish-flag.png'
import FlagUK from 'assets/images/footer/uk-flag.png'
import Logo from 'assets/images/logo-color.png'
import SocialLinks from 'data/social-links.json'
import Image from 'next/image'
import Link from 'next/link'
import { AppRoutes } from 'routes/routes'
import Button from '../../global/button/index.button'
import Spacing from '../../global/spacing/index.spacing'
import styles from './index.module.sass'

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Altra Logo" />
        </div>

        <Spacing />

        <div className={styles.schedule_demo_wrapper}>
          <span>
            <h3 className={styles.content}>See for yourself</h3>
            <p className={styles.content}>
              Our 20 min online demos give you a clear picture of how Altra can
              improve your processes and save you time.
            </p>
          </span>
          <div className={styles.button_wrapper}>
            <Button href={SocialLinks.appLogin} lg>
              Pick a time
              <IconArrowRight style={{ marginLeft: 6 }} />
            </Button>
          </div>
        </div>

        <Spacing />

        <div className={styles.contact_us_wrapper}>
          <div className={styles.content}>
            <h3 className={styles.content}>Get in touch with us:</h3>
            <a href={`tel:+353 83 463 9033`} className={styles.link_wrapper}>
              <div className={styles.icon}>
                <Image src={FlagIreland} alt="Irish Flag" />
              </div>
              +353 83 463 9033
            </a>

            <Spacing />

            <a href={`tel:+44 161 768 4984`} className={styles.link_wrapper}>
              <div className={styles.icon}>
                <Image src={FlagUK} alt="UK Flag" />
              </div>
              +44 161 768 4984
            </a>

            <Spacing />

            <a href={`mailto:hello@altra.ie`} className={styles.link_wrapper}>
              <div className={styles.icon}>
                <IconMail />
              </div>
              hello@altra.ie
            </a>
          </div>
        </div>

        <Spacing />

        <div className={styles.navbar_wrapper}>
          <ul className={styles.navbar_list}>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.HOME}>Home</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.WELLBEING_HUB}>Wellbeing Hub</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.FAMILY}>Family</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.STAFF}>Staff</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.CUSTOMERS}>Customers</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.CONTACT}>Contact</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.PRIVACY_POLICY}>Privacy Policy</Link>
            </li>
            <li className={styles.navbar_item}>
              <Link href={AppRoutes.DATA_SECURITY}>Data Security</Link>
            </li>
          </ul>
        </div>
      </div>

      <Spacing />

      <div className={styles.copyright_wrapper}>
        <p className={styles.copyright}>&copy; 2021 Altra</p>
        <Link href="https://www.linkedin.com/company/altra-ie/">
          <p className={styles.linked_in_text}>
            <IconBrandLinkedin style={{ marginRight: 6 }} />
            Connect with us on LinkedIn
          </p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
