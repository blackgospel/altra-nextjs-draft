import Button from 'components/global/button/index.button'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const ContactsForm: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <input className={styles.input} placeholder="Your name" />
        <input className={styles.input} placeholder="Your e-mail address" />
        <input
          className={styles.input}
          placeholder="Family member`s name in care home"
        />
        <input
          className={styles.input}
          placeholder="Care home`s email address"
        />
        <textarea className={styles.input} placeholder="Personal message" />
        <Button lg>Submit Details</Button>
      </div>
    </Section>
  )
}

export default ContactsForm
