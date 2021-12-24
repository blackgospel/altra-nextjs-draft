import Card from 'components/global/card/index.card'
import List from 'components/global/list/index.list'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const WellbeingHubBenefits: React.FC = () => {
  return (
    <CenteredLayout>
      <Card primary>
        <div className={styles.container}>
          <h2 className={styles.headline}>Benefits</h2>

          <List color="on_primary" title="wellbeing-hub-benefits">
            <span className={styles.list_item}>
              <p className={styles.title}>
                <strong>Always available</strong>
              </p>
              <p className={styles.content}>
                Easy to use is always available to suit your schedule.
              </p>
            </span>
            <span className={styles.list_item}>
              <p className={styles.title}>
                <strong>Learn from the experts</strong>
              </p>
              <p className={styles.content}>
                Or if you prefer, turn the room around and use us as your guide
                to lead new offerings.
              </p>
            </span>
            <span className={styles.list_item}>
              <p className={styles.title}>
                <strong>Variety for every level of care</strong>
              </p>
              <p className={styles.content}>
                With Seated, Supported, Standing and Memory Care classes, you
                have the right content for every resident.
              </p>
            </span>
          </List>
        </div>
      </Card>
    </CenteredLayout>
  )
}

export default WellbeingHubBenefits
