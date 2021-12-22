import Company1 from 'assets/images/company/company-beechfield.png'
import Company2 from 'assets/images/company/company-carechoice.jpg'
import Company3 from 'assets/images/company/company-signacare.jpg'
import Company4 from 'assets/images/company/company-tlc.jpg'
import Company5 from 'assets/images/company/company-virtuecare.png'
import Button from 'components/global/button/index.button'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import CompaniesData from 'data/companies.json'
import Image from 'next/image'
import styles from './index.module.sass'

const Companies: React.FC<CompaniesProps> = ({ readMoreButton }) => {
  return (
    <Section lgWidth>
      <div className={styles.container}>
        <h3 className={styles.title}>{CompaniesData.title}</h3>

        <Spacing />

        <p className={styles.content}>{CompaniesData.description}</p>

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
        </div>

        {readMoreButton && (
          <>
            <Spacing />

            <div className={styles.button_wrapper}>
              <Button href={AppRoutes.CUSTOMERS} lg>
                {CompaniesData.button}
              </Button>
            </div>
          </>
        )}
      </div>
    </Section>
  )
}

export default Companies
