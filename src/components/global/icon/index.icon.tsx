import cn from 'classnames'
import styles from './index.module.sass'

const Icon: React.FC<IconProps> = ({
  icon,
  size = 'sm',
  primary,
  secondary,
}) => {
  return (
    <div
      className={cn([
        styles.container,
        {
          [styles[`icon--${size}`]]: true,
          [styles.primary]: primary,
          [styles.secondary]: secondary,
        },
      ])}
    >
      {icon}
    </div>
  )
}

export default Icon
