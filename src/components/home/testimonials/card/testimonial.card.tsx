import { IconBlockquote } from '@tabler/icons'
import styles from './index.module.sass'

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles[`quote-box`]}>
          <div className={styles.quote}>
            <IconBlockquote />
          </div>
        </div>
        <div className={styles.testimonial}>{testimonial}</div>
        <div className={styles.clients}>
          <p className={styles[`client-name`]}>{name}</p>
          <p className={styles[`client-role`]}>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
