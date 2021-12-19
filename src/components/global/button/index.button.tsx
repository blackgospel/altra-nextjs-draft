import cn from 'classnames'
import Link from 'next/link'
import styles from './index.module.sass'

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  secondary,
  sm,
  lg,
  href,
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href}>
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
      </Link>
    )
  }

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
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
