import { IconBlockquote } from '@tabler/icons'
import Spacing from 'components/atomic/spacing/atomic.spacing'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const Customer: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles[`quote-icon`]}>
            <IconBlockquote />
          </span>

          <Spacing space="sm" />

          <div className={styles[`customer-wrapper`]}>
            <div className={styles[`customer-avatar`]}>
              <img
                src="https://herefish.com/wp-content/uploads/2019/08/brian-cunningham.jpg"
                alt="customer-avatar"
              />
            </div>
            <div className={styles[`customer-content`]}>
              <p className={styles[`customer-testimonial`]}>
                It is simple to use for both staff and families. It&apos;s a
                great tool to keep residents connected with their families as
                well, sharing photos of good memories in their life.
              </p>

              <Spacing space="sm" />

              <div className={styles[`customer-info`]}>
                <p className={styles[`customer-name`]}>Jaison John</p>
                <div className={styles[`customer-org`]}>
                  <p className={styles[`customer-role`]}>Director of Nursing</p>
                  <p className={styles.separator}>@</p>
                  <p className={styles[`customer-company`]}>SignaCare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Customer
