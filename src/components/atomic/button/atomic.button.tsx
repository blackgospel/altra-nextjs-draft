import styles from './index.module.sass'

const Button: React.FC = ({ children }) => {
  return <button className={styles.container}>{children}</button>
}

export default Button
