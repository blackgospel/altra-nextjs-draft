import List from 'components/global/list/index.list'
import Spacing from 'components/global/spacing/index.spacing'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const StaffIntroduction: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Consolidate all team messaging into one communication hub
        </h2>
        <p className={styles.content}>
          Sending messages across WhatsApp, email and individual texts is
          tedious to manage. Altra`s communication hub allows you to send group
          or individual messages via SMS that convert to 1:1 conversations.
        </p>
        <p className={styles.content}>
          Never second-guess whether your message has been read. Easily track
          engagement rates and responses in one place.
        </p>

        <Spacing />

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

        <Spacing />

        <h2 className={styles.title}>
          Give time back to your managers and teams.
        </h2>
        <p className={styles.content}>
          Altra’s simple user experience makes communication between managers
          and team a breeze. By streamlining previously manual processes, we are
          saving managers hours each day to put back into resident wellbeing.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default StaffIntroduction
