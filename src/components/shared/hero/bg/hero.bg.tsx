import cn from 'classnames'
import styles from './index.module.sass'

const HeroBg: React.FC<HeroBgProps> = ({ color = 'primary' }) => {
  return (
    <div
      className={cn([
        styles.container,
        {
          ...(color && { [styles[color]]: true }),
        },
      ])}
    >
      <div className={styles.wrapper}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default HeroBg
