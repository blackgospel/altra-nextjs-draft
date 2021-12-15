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
          <h1 className={styles.headline}>{title}</h1>

          <Spacing />

          <p className={styles.subtitle}>{description}</p>

          <Spacing space="lg" />

          {/* <div className={styles[`button-wrapper`]}>
            <Button>Meet the product</Button>
          </div> */}

          <ol className={styles.list}>
            {list?.map((item) => {
              return (
                <li className={styles[`list-item`]}>
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
