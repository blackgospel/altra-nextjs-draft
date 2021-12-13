import { IconBlockquote } from '@tabler/icons'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const Customer: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <span className={styles[`quote-icon`]}>
          <IconBlockquote />
        </span>
        <div className={styles[`customer-wrapper`]}>
          <div className={styles[`customer-avatar`]}>
            <img alt="customer-avatar" />
          </div>
          <div className={styles[`customer-content`]}>
            <div className={styles[`customer-testimonial`]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              officiis commodi tempore perspiciatis numquam repudiandae quas cum
              sequi blanditiis. Ipsum ab a nostrum odio doloribus rerum dolore
              illo maxime doloremque!
            </div>
            <div className={styles[`customer-info`]}>
              <p className={styles[`customer-name`]}>Brian Cunningham</p>
              <div className={styles[`customer-org`]}>
                <p className={styles[`customer-role`]}>Managing Director</p>@
                <p className={styles[`customer-company`]}>Allen Recruitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Customer
