import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const FamilySection4: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Manage visits with ease</h2>
        <p className={styles.content}>
          Reduce the administrative burden managing visits with our visitor
          booking portal and eGuestbook. Visits can be linked to resident
          profiles, alerting you if residents have not had a visit for some
          time.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default FamilySection4
