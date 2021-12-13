import Spacing from 'components/atomic/spacing/atomic.spacing'
import Navbar from '../navbar/index.navbar'
import styles from './index.module.sass'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Navbar />

      <Spacing />

      <div className={styles[`headline-wrapper`]}>
        <article className={styles[`headline-content`]}>
          <h1 className={styles.headline}>Improve resident wellbeing </h1>

          <Spacing space="lg" />

          <p className={styles.mission}>
            Altra`s easy to use platform helps you deliver on your promise of
            providing meaningful, person-centered care.
          </p>
        </article>
      </div>
    </header>
  )
}

export default Header
