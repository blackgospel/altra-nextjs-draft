import { IconBlockquote } from '@tabler/icons'
import Avatar from 'assets/images/family/keith.jpg'
import Icon from 'components/global/icon/index.icon'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import Image from 'next/image'
import styles from './index.module.sass'

const FamilyTestimonial: React.FC = () => {
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
              <Image src={Avatar} alt="Keith Martin Portrait" />
            </div>
            <div className={styles.content}>
              <p className={styles.testimonial}>
                You can`t put a price on the smiles on the faces of residents
                when they see these pictures and comments from their families
              </p>

              <Spacing sm />

              <div className={styles.info}>
                <p className={styles.info_name}>Keith Milton</p>
                <div className={styles.info_org}>
                  <p className={styles.info_role}>CEO</p>
                  <p className={styles.separator}>@</p>
                  <p className={styles.info_company}>St Martins Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FamilyTestimonial
