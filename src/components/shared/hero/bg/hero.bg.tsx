import cn from 'classnames'
import styles from './index.module.sass'

const HeroBg: React.FC<HeroBgProps> = ({ color = 'primary' }) => {
  return (
    <div
      className={cn([
        styles.container,
        {
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.accent]: color === 'accent',
          [styles.red]: color === 'red',
          [styles.violet]: color === 'violet',
          [styles.green]: color === 'green',
        },
      ])}
    >
      <div className={styles.wrapper}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  )
}

export default HeroBg
