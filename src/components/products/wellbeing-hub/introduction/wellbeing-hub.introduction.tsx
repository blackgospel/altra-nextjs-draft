import List from 'components/global/list/index.list'
import Spacing from 'components/global/spacing/index.spacing'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const WellbeingHubIntroduction: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>What is the Wellbeing Hub?</h2>
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

        <Spacing lg />

        <h2>Benefits</h2>

        <List title="wellbeing-hub-benefits">
          <span className={styles.list_item}>
            <p>
              <strong>Always available</strong>
            </p>
            <p>Easy to use is always available to suit your schedule.</p>
          </span>
          <span className={styles.list_item}>
            <p>
              <strong>Learn from the experts</strong>
            </p>
            <p>
              Or if you prefer, turn the room around and use us as your guide to
              lead new offerings.
            </p>
          </span>
          <span className={styles.list_item}>
            <p>
              <strong>Variety for every level of care</strong>
            </p>
            <p>
              With Seated, Supported, Standing and Memory Care classes, you have
              the right content for every resident.
            </p>
          </span>
        </List>
      </div>
    </CenteredLayout>
  )
}

export default WellbeingHubIntroduction
