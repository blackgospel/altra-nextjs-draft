import List from 'components/global/list/index.list'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const StaffSection2: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Fill more shifts, save more time.</h2>
        <p className={styles.content}>
          We know that rosters are constantly changing. Now managers can stay
          ahead of these changes and act when inevitable vacancies occur. Fill
          shifts in two easy steps:
        </p>
        <List
          title="staff-section-2"
          list={[
            'Managers post vacant shifts on Altra.',
            'Staff receive notification via SMS and accept or dismiss with a click of a button.',
          ]}
        />
      </div>
    </CenteredLayout>
  )
}

export default StaffSection2
