import cn from 'classnames'
import styles from './index.module.sass'

const Section: React.FC<SectionProps> = ({ children, fullWidth, lgWidth }) => {
  return (
    <section className={cn(styles.container)}>
      <div
        className={cn([
          styles.wrapper,
          {
            [styles.full_width]: fullWidth,
            [styles.width_section_large]: lgWidth,
          },
        ])}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
