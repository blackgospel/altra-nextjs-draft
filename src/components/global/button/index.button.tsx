import cn from 'classnames'
import Link from 'next/link'
import styles from './index.module.sass'

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  textColor,
  sm,
  lg,
  href,
  onClick,
}) => {
  const buttonClassNames = cn([
    styles.container,
    className,
    {
      [styles.secondary]: color === 'secondary',
      [styles.white]: color === 'white',
      [styles.small]: sm,
      [styles.large]: lg,
      ...(textColor && { [styles[`text-${textColor}`]]: true }),
    },
  ])

  if (href) {
    return (
      <Link href={href}>
        <button className={buttonClassNames}>{children}</button>
      </Link>
    )
  }

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
