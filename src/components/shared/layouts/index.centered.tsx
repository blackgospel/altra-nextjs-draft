import Section from 'components/global/section/index.section'
import Anime from '../anime/index.anime'
import styles from './index.module.sass'

const CenteredLayout: React.FC<CenteredLayoutProps> = ({
  children,
  bubbleLeft,
  bubbleRight,
}) => {
  return (
    <Section bubbleLeft1={bubbleLeft} bubbleRight1={bubbleRight}>
      <Anime>
        <div className={styles.centered_wrapper}>{children}</div>
      </Anime>
    </Section>
  )
}

export default CenteredLayout
