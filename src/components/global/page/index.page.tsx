import Header from '../header/index.header'
import styles from './page.module.sass'

const Page: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}

export default Page
