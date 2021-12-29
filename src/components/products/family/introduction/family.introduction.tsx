import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const FamilyIntroduction: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Keep Families in the loop</h2>
        <p className={styles.content}>
          Secure engagement app that allows care homes to share updates on the
          well-being of residents directly with families. Families only see
          information relevant to their loved one through videos, pictures,
          messages and more.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default FamilyIntroduction
