import { IconLink } from '@tabler/icons'
import Spacing from 'components/atomic/spacing/atomic.spacing'
import Section from 'components/global/section/index.section'
import Image from 'next/image'
import styles from './index.module.sass'

const InfoCard: React.FC<HomeInfoCardProps> = ({
  title,
  description,
  color,
  image,
  list,
}) => {
  return (
    <Section>
      <div className={styles.container} style={{ background: color }}>
        <div className={styles.wrapper}>
          <div className={styles[`button-wrapper`]}>
            <button className={styles[`link-button`]}>
              <IconLink />
            </button>
          </div>

          <h1 className={styles.headline}>{title}</h1>

          <Spacing />

          <p className={styles.subtitle}>{description}</p>

          <Spacing space="lg" />

          <ol className={styles.list}>
            {list?.map((item, index) => {
              return (
                <li key={`info-card-${index}`} className={styles[`list-item`]}>
                  <p>{item}</p>
                </li>
              )
            })}
          </ol>

          <Spacing />

          <div className={styles[`image-wrapper`]}>
            <Image src={image} alt={title} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default InfoCard
