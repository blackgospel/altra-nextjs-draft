import Button from 'components/atomic/button/atomic.button'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const InfoCard: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <h1 className={styles.headline}>For the whole team </h1>
        <p className={styles.subtitle}>
          Automation works when it`s built by those who know the workflow best -
          not distant developers. Tines is no-code, giving your frontline team
          members automation superpowers.
        </p>
        <div className={styles[`button-wrapper`]}>
          <Button />
        </div>
      </div>
    </Section>
  )
}

export default InfoCard
