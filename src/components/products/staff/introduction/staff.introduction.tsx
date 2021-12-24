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
          Never second-guess whether your message has been read. Easily track
          engagement rates and responses in one place.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default StaffIntroduction
