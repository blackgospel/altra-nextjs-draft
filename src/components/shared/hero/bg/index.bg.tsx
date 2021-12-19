import cn from 'classnames'
import styles from './index.module.sass'

const HeroBg: React.FC<HeroBgProps> = ({ color }) => {
  return (
    <div
      className={cn([
        styles.background,
        {
          [styles.secondary]: color === 'secondary',
          [styles.accent]: color === 'accent',
        },
      ])}
    >
      <ul className={styles.wrapper}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default HeroBg
