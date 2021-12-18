import cn from 'classnames'
import styles from './index.module.sass'

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  secondary,
  sm,
  lg,
}) => {
  return (
    <button
      className={cn([
        styles.container,
        className,
        {
          [styles.secondary]: secondary,
          [styles.small]: sm,
          [styles.large]: lg,
        },
      ])}
    >
      {children}
    </button>
  )
}

export default Button
