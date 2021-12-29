import List from 'components/global/list/index.list'
import Spacing from 'components/global/spacing/index.spacing'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const FamilySection5: React.FC = () => {
  return (
    <CenteredLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Use on any device, anywhere</h2>
        <p className={styles.content}>
          Managers, carestaff and families can access Altra on any device
          (mobile, tablet or desktop) to post content, respond to messages,
          giving everyone the information they need - anytime, anywhere.
        </p>
      </div>

      <Spacing sm />

      <List
        color="on_surface"
        title="family-section-4-list"
        list={[
          'Add resident details. From your care management system or wherever you store details)',
          'Invite family members. Families will be automatically invited to their loved ones account when you add them to Altra',
          'Start Sharing. Fill your feed, print the newsletters and see the delight on residents faces. We are on hand to help with any queries along the way. ',
        ]}
      />
    </CenteredLayout>
  )
}

export default FamilySection5
