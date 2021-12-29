import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const FamilySection2: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Converting digital content into physical newsletters to the delight of
          your residents
        </h2>
        <p className={styles.content}>
          We’ve created a simple 2-step process so you can print personalised
          newsletters for your residents with content posted by their families
          and your staff on Altra. The Newsletter will also become a new source
          of interaction between your residents and team beyond the “here and
          now”.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default FamilySection2
