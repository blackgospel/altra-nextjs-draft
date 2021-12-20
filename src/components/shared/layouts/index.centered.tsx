import Section from 'components/global/section/index.section'
import styles from './index.module.sass'

const CenteredLayout: React.FC = ({ children }) => {
  return (
    <Section>
      <div className={styles.centered_wrapper}>{children}</div>
    </Section>
  )
}

export default CenteredLayout
