import Card from 'components/global/card/index.card'
import List from 'components/global/list/index.list'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const WellbeingHubBenefits: React.FC = () => {
  return (
    <CenteredLayout>
      <Card accent>
        <div className={styles.container}>
          <h2 className={styles.headline}>Benefits</h2>

          <List color="on_accent" title="wellbeing-hub-benefits">
            <span className={styles.list_item}>
              <p className={styles.title}>
                <strong>Always available</strong>
              </p>
              <p className={styles.content}>
                Easy to use and always available to suit your schedule.
              </p>
            </span>
            <span className={styles.list_item}>
              <p className={styles.title}>
                <strong>Learn from the experts</strong>
              </p>
              <p className={styles.content}>
                Our partnerships with active ageing experts ensure you have
                access to the best wellness content for older adults in your
                care home.
              </p>
            </span>
            <span className={styles.list_item}>
              <p className={styles.title}>
                <strong>Variety for every level of care</strong>
              </p>
              <p className={styles.content}>
                With seated, supported, standing and memory care resources, you
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
