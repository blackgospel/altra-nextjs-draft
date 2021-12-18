import cn from 'classnames'
import styles from './index.module.sass'

const Card: React.FC<CardProps> = ({
  children,
  primary,
  secondary,
  accent,
}) => {
  return (
    <div
      className={cn([
        styles.container,
        {
          [styles.primary]: primary,
          [styles.secondary]: secondary,
          [styles.accent]: accent,
        },
      ])}
    >
      {children}
    </div>
  )
}

export default Card
