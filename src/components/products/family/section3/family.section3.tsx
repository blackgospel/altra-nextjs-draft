import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const FamilySection3: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Show off all the great activities in your home
        </h2>
        <p className={styles.content}>
          Wellbeing and activities teams can share all the great activities on
          offer each week, complete paperwork and capture resident feedback in a
          fraction of the time. It gives administrators a live view of what
          their residents are enjoying and also gives them the ability to
          proactively make changes for individual residents according to their
          changing habits and needs.
        </p>
      </div>
    </CenteredLayout>
  )
}

export default FamilySection3
