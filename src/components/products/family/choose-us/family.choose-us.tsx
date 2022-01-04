import List from 'components/global/list/index.list'
import Spacing from 'components/global/spacing/index.spacing'
import CenteredLayout from 'components/shared/layouts/index.centered'

const FamilyChooseUs: React.FC = () => {
  return (
    <CenteredLayout>
      <h3>Get setup in minutes!</h3>

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

export default FamilyChooseUs
