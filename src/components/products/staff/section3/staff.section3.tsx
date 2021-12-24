import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const StaffSection3: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Give time back to your managers and teams.
        </h2>
        <p className={styles.content}>
          Altra`s simple user experience makes communication between managers
          and team a breeze. By streamlining previously manual processes, we are
          saving managers hours each day to put back into resident wellbeing.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default StaffSection3
