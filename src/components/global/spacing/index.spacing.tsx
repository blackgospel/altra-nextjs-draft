import cn from 'classnames'
import styles from './index.module.sass'

const Spacing: React.FC<SpacingProps> = ({ children, space = 'md' }) => {
  return (
    <div className={cn({ [styles[`${space}-spacing`]]: true })}>{children}</div>
  )
}

export default Spacing
