import { IconArrowRight, IconBrandLinkedin, IconMail } from '@tabler/icons'
import FlagIreland from 'assets/images/footer/irish-flag.png'
import FlagUSA from 'assets/images/footer/usa-flag.png'
import Logo from 'assets/images/logo-color.png'
import FooterData from 'data/footer.json'
import Image from 'next/image'
import Link from 'next/link'
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
          <div className={styles.content}>
            <h3 className={styles.content}>{FooterData.demoTitle}</h3>
            <p className={styles.content}>{FooterData.demoMission}</p>
          </div>
          <div className={styles.button_wrapper}>
            <Button lg>
              {FooterData.demoButton}
              <IconArrowRight style={{ marginLeft: 6 }} />
            </Button>
          </div>
        </div>

        <Spacing />

        <div className={styles.contact_us_wrapper}>
          <div className={styles.content}>
            <h3 className={styles.content}>{FooterData.title}</h3>
            <a
              href={`tel:${FooterData.irelandNumber}`}
              className={styles.link_wrapper}
            >
              <div className={styles.icon}>
                <Image src={FlagIreland} alt="Irish Flag" />
              </div>
              {FooterData.irelandNumber}
            </a>

            <Spacing />

            <a
              href={`tel:${FooterData.usaNumber}`}
              className={styles.link_wrapper}
            >
              <div className={styles.icon}>
                <Image src={FlagUSA} alt="USA Flag" />
              </div>
              {FooterData.usaNumber}
            </a>

            <Spacing />

            <a
              href={`mailto:${FooterData.email}`}
              className={styles.link_wrapper}
            >
              <div className={styles.icon}>
                <IconMail />
              </div>
              {FooterData.email}
            </a>
          </div>
        </div>

        <Spacing />

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
          </ul>
        </div>
      </div>

      <Spacing />

      <div className={styles.copyright_wrapper}>
        <p className={styles.copyright}>&copy; {FooterData.copyright}</p>
        <Link href={FooterData.linkedInLink}>
          <p className={styles.linked_in_text}>
            <IconBrandLinkedin style={{ marginRight: 6 }} />
            {FooterData.linkedIn}
          </p>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
