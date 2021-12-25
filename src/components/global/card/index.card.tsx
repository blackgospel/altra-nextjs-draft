import cn from 'classnames'
import styles from './index.module.sass'

const Card: React.FC<CardProps> = ({
  children,
  primary,
  secondary,
  accent,
  image,
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
      style={{ backgroundImage: `url(${image?.src || ''})` }}
    >
      {children}
    </div>
  )
}

export default Card
