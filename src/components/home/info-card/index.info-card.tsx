import Button from 'components/atomic/button/atomic.button'
import Spacing from 'components/atomic/spacing/atomic.spacing'
import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const InfoCard: React.FC<HomeInfoCardProps> = ({
  title,
  description,
  color,
}) => {
  return (
    <Section>
      <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.wrapper}>
          <h1 className={styles.headline}>{title}</h1>

          <Spacing />

          <p className={styles.subtitle}>{description}</p>

          <Spacing />

          <div className={styles[`button-wrapper`]}>
            <Button>Meet the product</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default InfoCard
