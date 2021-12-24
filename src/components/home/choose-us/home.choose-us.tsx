import Button from 'components/global/button/index.button'
import List from 'components/global/list/index.list'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import HomeChooseUsData from 'data/home/choose-us.json'
import styles from './index.module.sass'

const ChooseUs: React.FC = () => {
  return (
    <Section bubbleRight2>
      <div className={styles.container}>
        <h2 className={styles.title}>{HomeChooseUsData.title}</h2>

        <Spacing />

        <p className={styles.content}>{HomeChooseUsData.description}</p>

        <Spacing />

        <h3 className={styles.subtitle}>{HomeChooseUsData.subtitle}</h3>

        <Spacing />

        <List
          color="on_surface"
          title="choose-us"
          list={HomeChooseUsData.list}
        />

        <Spacing />

        <div className={styles.button_wrapper}>
          <Button lg>{HomeChooseUsData.button}</Button>
        </div>
      </div>
    </Section>
  )
}

export default ChooseUs
