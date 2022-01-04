import Company1 from 'assets/images/company/company-beechfield.png'
import Company2 from 'assets/images/company/company-carechoice.jpg'
import Company9 from 'assets/images/company/company-curam.jpg'
import Company10 from 'assets/images/company/company-grace.jpg'
import Company6 from 'assets/images/company/company-marymount.png'
import Company3 from 'assets/images/company/company-signacare.jpg'
import Company8 from 'assets/images/company/company-stluke.png'
import Company7 from 'assets/images/company/company-stmartins.jpg'
import Company4 from 'assets/images/company/company-tlc.jpg'
import Company5 from 'assets/images/company/company-virtuecare.png'
import Button from 'components/global/button/index.button'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import Image from 'next/image'
import { AppRoutes } from 'routes/routes'
import Anime from '../anime/index.anime'
import styles from './index.module.sass'

const Companies: React.FC<CompaniesProps> = ({ readMoreButton }) => {
  return (
    <Section lgWidth>
      <Anime>
        <div className={styles.container}>
          <h3 className={styles.title}>
            We are delighted to be working with fantastic nursing and care homes
            in Ireland and UK
          </h3>

          <Spacing />

          <p className={styles.content}>
            Nursing and care homes of all sizes trust Altra to help them improve
            connectedness of residents, families and their staff.
          </p>

          <Spacing />

          <div className={styles.companies_wrapper}>
            <div className={styles.companies}>
              <Image src={Company1} alt="Beechfield Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company2} alt="Care Choice Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company3} alt="SignaCare Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company4} alt="TLC Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company5} alt="VirtueCare Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company6} alt="MaryMount Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company7} alt="St Martins Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company8} alt="St Luke Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company9} alt="Curam Logo" />
            </div>
            <div className={styles.companies}>
              <Image src={Company10} alt="Grace Logo" />
            </div>
          </div>

          {readMoreButton && (
            <>
              <Spacing />

              <div className={styles.button_wrapper}>
                <Button href={AppRoutes.CUSTOMERS} lg>
                  Read More
                </Button>
              </div>
            </>
          )}
        </div>
      </Anime>
    </Section>
  )
}

export default Companies
