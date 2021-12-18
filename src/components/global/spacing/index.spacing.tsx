import cn from 'classnames'
import styles from './index.module.sass'

const Spacing: React.FC<SpacingProps> = ({ children, sm, md, lg }) => {
  const defaultSpace = !sm && !lg

  return (
    <div
      className={cn({
        [styles[`md-spacing`]]: md || defaultSpace,
        [styles[`sm-spacing`]]: sm,
        [styles[`lg-spacing`]]: lg,
      })}
    >
      {children}
    </div>
  )
}

export default Spacing
