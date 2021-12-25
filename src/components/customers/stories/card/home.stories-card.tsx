import { IconBlockquote } from '@tabler/icons'
import TestimonialBg from 'assets/images/customers/testimonial-bg.png'
import Card from 'components/global/card/index.card'
import Spacing from 'components/global/spacing/index.spacing'
import styles from './index.module.sass'

const StoriesCard: React.FC<CustomerStoriesCardType> = ({
  title,
  story,
  role,
  company,
}) => {
  return (
    <Card image={TestimonialBg}>
      <div className={styles.container}>
        <div className={styles.quote}>
          <IconBlockquote />
        </div>

        <Spacing sm />

        <div className={styles.client_info}>
          <span className={styles.client_info_name}>
            {role && <p className={styles.client_role}>{role}</p>}
          </span>
          {company && <span className={styles.separator}>|</span>}
          <span className={styles.client_info_name}>
            {company && <p className={styles.client_company}>{company}</p>}
          </span>
        </div>

        <Spacing sm />

        <div className="">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.content}>{story}</p>
        </div>
      </div>
    </Card>
  )
}

export default StoriesCard
