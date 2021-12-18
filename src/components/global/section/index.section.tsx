import cn from 'classnames'
import styles from './index.module.sass'

const Section: React.FC<SectionProps> = ({
  children,
  fullWidth,
  lgWidth,
  bubbleRight,
}) => {
  return (
    <section
      className={cn([styles.container, { [styles.bubble_right]: bubbleRight }])}
    >
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
