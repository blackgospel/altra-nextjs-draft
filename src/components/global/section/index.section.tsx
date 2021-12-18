import cn from 'classnames'
import styles from './index.module.sass'

const Section: React.FC<SectionProps> = ({
  children,
  fullWidth,
  lgWidth,
  bubbleRight1,
  bubbleRight2,
  bubbleRightSmall,
  bubbleLeft1,
  bubbleLeft2,
  bubbleLeftSmall,
}) => {
  return (
    <section
      className={cn([
        styles.container,
        {
          [styles.bubble_right_1]: bubbleRight1,
          [styles.bubble_right_2]: bubbleRight2,
          [styles.bubble_right_small]: bubbleRightSmall,
          [styles.bubble_left_1]: bubbleLeft1,
          [styles.bubble_left_2]: bubbleLeft2,
          [styles.bubble_left_small]: bubbleLeftSmall,
        },
      ])}
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
