import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const WellbeingHubIntroduction: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>What is the</h2>
        <h2 className={styles.title}>Wellbeing Hub?</h2>
        <p className={styles.content}>
          Altra provides exercise and wellness videos and resources for older
          adults. We are partnering with experts in active ageing, dementia care
          & more to produce state-of-the-art exercise videos and wellness
          resources specifically designed to improve the lives of older adults
          in care.
        </p>
        <p className={styles.content}>
          Each workshop and class has been created, produced and is led by
          nationally recognized senior wellness experts to provide you a
          purposeful, results driven fitness tool. This one-of-a-kind expert
          programing is available effortlessly to any client, family or
          caregiver.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default WellbeingHubIntroduction
