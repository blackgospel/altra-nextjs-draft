import cn from 'classnames'
import styles from './index.module.sass'

const Section: React.FC<SectionProps> = ({ children, altColor }) => {
  return (
    <section className={cn(styles.container, { [`section-alt`]: altColor })}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  )
}

export default Section
