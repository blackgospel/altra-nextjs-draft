import cn from 'classnames'
import styles from './index.module.sass'

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  filled,
  large,
}) => {
  return (
    <button className={cn([styles.container, { primary, filled, large }])}>
      {children}
    </button>
  )
}

export default Button
