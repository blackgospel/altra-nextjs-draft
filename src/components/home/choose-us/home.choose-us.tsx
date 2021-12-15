import Button from 'components/atomic/button/atomic.button'
import Spacing from 'components/atomic/spacing/atomic.spacing'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const ChooseUs: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Choose the modules that suit your needs
        </h2>

        <Spacing />

        <p className={styles.content}>
          Whether you’re interested in one or all of our modules, you can mix
          and match to suit your requirements. Add or remove modules with ease.
        </p>

        <Spacing />

        <h3 className={styles.subtitle}>Get set up in 20 mins</h3>

        <Spacing />

        <ul className={styles.list}>
          <li className={styles[`list-item`]}>
            <p>
              Choose the modules for you, be it Altra Family, Wellbeing Hub,
              Altra Staff, some or all.
            </p>
          </li>
          <li className={styles[`list-item`]}>
            <p>
              Collate the relevant information and upload to Altra (Staff
              details, Resident details - connect with your care management
              system for easy onboarding).
            </p>
          </li>
          <li className={styles[`list-item`]}>
            <p>
              We will train your staff and provide ongoing support so Altra
              works seamlessly alongside your existing processes and saves you
              time.
            </p>
          </li>
        </ul>

        <Spacing space="lg" />

        <Button filled primary large>
          Check out our products
        </Button>
      </div>
    </Section>
  )
}

export default ChooseUs
