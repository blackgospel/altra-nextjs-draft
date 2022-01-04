import { IconBlockquote } from '@tabler/icons'
import Avatar from 'assets/images/home/avatar.jpg'
import Icon from 'components/global/icon/index.icon'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import Anime from 'components/shared/anime/index.anime'
import Image from 'next/image'
import styles from './index.module.sass'

const Customer: React.FC = () => {
  return (
    <Section bubbleRight1>
      <Anime>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <span className={styles.quote_icon}>
              <Icon icon={<IconBlockquote />} size="lg" primary />
            </span>

            <Spacing sm />

            <div className={styles.grid_wrapper}>
              <div className={styles.avatar}>
                <Image src={Avatar} alt="Jaison John image" />
              </div>
              <div className={styles.content}>
                <p className={styles.testimonial}>
                  It is simple to use for both staff and families. It`s a great
                  tool to keep residents connected with their families as well,
                  sharing photos of good memories in their life.
                </p>

                <Spacing sm />

                <div className={styles.info}>
                  <p className={styles.info_name}>Jaison John</p>
                  <div className={styles.info_org}>
                    <p className={styles.info_role}>Director of Nursing</p>
                    <p className={styles.separator}>@</p>
                    <p className={styles.info_company}>SignaCare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Anime>
    </Section>
  )
}

export default Customer
