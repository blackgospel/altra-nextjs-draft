import Button from 'components/atomic/button/atomic.button'
import Spacing from 'components/atomic/spacing/atomic.spacing'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const InfoCard: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.headline}>For the whole team </h1>

          <Spacing />

          <p className={styles.subtitle}>
            Automation works when it`s built by those who know the workflow best
            - not distant developers. Tines is no-code, giving your frontline
            team members automation superpowers.
          </p>

          <Spacing />

          <div className={styles[`button-wrapper`]}>
            <Button>Meet the product</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default InfoCard
