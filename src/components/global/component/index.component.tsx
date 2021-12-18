import cn from 'classnames'
import styles from './index.module.sass'

/* Add max-width small, medium, large at breakpoints: 640px 860px 1100px */
const Component: React.FC<ComponentProps> = ({ children, className }) => {
  return <div className={cn([styles.container, className])}>{children}</div>
}

export default Component
