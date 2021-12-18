import Button from 'components/global/button/index.button'
import List from 'components/global/list/index.list'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import HomeChooseUsData from 'data/home/choose-us.json'
import styles from './index.module.sass'

const ChooseUs: React.FC = () => {
  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.title}>{HomeChooseUsData.title}</h2>

        <Spacing />

        <p className={styles.content}>{HomeChooseUsData.description}</p>

        <Spacing />

        <h3 className={styles.subtitle}>{HomeChooseUsData.subtitle}</h3>

        <Spacing />

        <List title="choose-us" list={HomeChooseUsData.list} />

        <Spacing />

        <div>
          <Button lg>{HomeChooseUsData.button}</Button>
        </div>
      </div>
    </Section>
  )
}

export default ChooseUs
