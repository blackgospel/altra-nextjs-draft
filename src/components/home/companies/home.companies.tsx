import Company1 from 'assets/images/company/company-beechfield.png'
import Company2 from 'assets/images/company/company-carechoice.jpg'
import Company3 from 'assets/images/company/company-signacare.jpg'
import Company4 from 'assets/images/company/company-tlc.jpg'
import Company5 from 'assets/images/company/company-virtuecare.png'
import Button from 'components/global/button/index.button'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import HomeCompaniesData from 'data/home/companies.json'
import Image from 'next/image'
import styles from './index.module.sass'

const Companies: React.FC = () => {
  return (
    <Section lgWidth>
      <div className={styles.container}>
        <h2 className={styles.title}>{HomeCompaniesData.title}</h2>

        <Spacing />

        <p className={styles.content}>{HomeCompaniesData.description}</p>

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

        <Spacing />

        <div className={styles.button_wrapper}>
          <Button lg>{HomeCompaniesData.button}</Button>
        </div>
      </div>
    </Section>
  )
}

export default Companies