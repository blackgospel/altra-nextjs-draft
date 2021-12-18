import { IconBlockquote } from '@tabler/icons'
import styles from './index.module.sass'

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  company,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.quote_box}>
          <div className={styles.quote}>
            <IconBlockquote />
          </div>
        </div>
        <div className={styles.testimonial}>{testimonial}</div>
        <div className={styles.clients}>
          {name && <p className={styles.client_name}>{name}</p>}
          {role && <p className={styles.client_role}>{role}</p>}
          {company && <p className={styles.client_company}>{company}</p>}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
