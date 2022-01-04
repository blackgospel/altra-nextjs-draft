import { IconBlockquote } from '@tabler/icons'
import Avatar from 'assets/images/staff/miracline.jpg'
import Icon from 'components/global/icon/index.icon'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
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
              <Image src={Avatar} alt="Miracline Samuel image" />
            </div>
            <div className={styles.content}>
              <p className={styles.testimonial}>
                I see huge improvements with very little effort from managers.
                It allows them to focus their time on clinical governance
              </p>

              <Spacing sm />

              <div className={styles.info}>
                <p className={styles.info_name}>Miracline Samuel</p>
                <div className={styles.info_org}>
                  <p className={styles.info_role}>Director of Nursing</p>
                  <p className={styles.separator}>@</p>
                  <p className={styles.info_company}>TLC</p>
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
