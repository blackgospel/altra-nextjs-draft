import { IconBlockquote } from '@tabler/icons'
import Avatar from 'assets/images/home/avatar.jpg'
import Icon from 'components/global/icon/index.icon'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import HomeCustomerData from 'data/home/customer.json'
import Image from 'next/image'
import styles from './index.module.sass'

const StaffTestimonial: React.FC = () => {
  return (
    <Section bubbleRight1>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.quote_icon}>
            <Icon icon={<IconBlockquote />} size="lg" primary />
          </span>

          <Spacing sm />

          <div className={styles.grid_wrapper}>
            <div className={styles.avatar}>
              <Image src={Avatar} alt={HomeCustomerData.avatarAlt} />
            </div>
            <div className={styles.content}>
              <p className={styles.testimonial}>
                {HomeCustomerData.testimonial}
              </p>

              <Spacing sm />

              <div className={styles.info}>
                <p className={styles.info_name}>{HomeCustomerData.name}</p>
                <div className={styles.info_org}>
                  <p className={styles.info_role}>{HomeCustomerData.role}</p>
                  <p className={styles.separator}>
                    {HomeCustomerData.separator}
                  </p>
                  <p className={styles.info_company}>
                    {HomeCustomerData.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default StaffTestimonial
