import cn from 'classnames'
import styles from './index.module.sass'

const Icon: React.FC<IconProps> = ({ icon, size = 'sm' }) => {
  return (
    <div
      className={cn([styles.container, { [styles[`icon--${size}`]]: true }])}
    >
      {icon}
    </div>
  )
}

export default Icon
