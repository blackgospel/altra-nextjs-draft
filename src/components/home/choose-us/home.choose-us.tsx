import Button from 'components/global/button/index.button'
import List from 'components/global/list/index.list'
import Section from 'components/global/section/index.section'
import Spacing from 'components/global/spacing/index.spacing'
import Anime from 'components/shared/anime/index.anime'
import styles from './index.module.sass'

const ChooseUs: React.FC = () => {
  return (
    <Section bubbleRight2>
      <Anime>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Choose the modules that suit your needs
          </h2>

          <Spacing />

          <p className={styles.content}>
            Whether you`re interested in one or all of our modules, you can mix
            and match to suit your requirements. Add or remove modules with
            ease.
          </p>

          <Spacing />

          <h3 className={styles.subtitle}>
            Get set up in minutes, not days or months
          </h3>

          <Spacing />

          <List
            color="on_surface"
            title="choose-us"
            list={[
              'Choose the modules that are right for you.',
              'Collate relevant information or connect with your care management systems for easy onboarding.',
              'We will train your staff and provide ongoing support so Altra works seamlessly alongside your existing processes and saves you time.',
            ]}
          />

          <Spacing />

          <div className={styles.button_wrapper}>
            <Button lg>Check out our products</Button>
          </div>
        </div>
      </Anime>
    </Section>
  )
}

export default ChooseUs
