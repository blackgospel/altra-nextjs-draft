import Card from 'components/global/card/index.card'
import List from 'components/global/list/index.list'
import CenteredLayout from 'components/shared/layouts/index.centered'
import styles from './index.module.sass'

const FamilyBenefits: React.FC = () => {
  return (
    <CenteredLayout>
      <Card accent>
        <div className={styles.container}>
          <h2 className={styles.headline}>Benefits</h2>
          <List
            color="on_accent"
            title="family-benefits"
            list={[
              'A joy for residents',
              'Easy to use for families and your team',
              'Fits into your current workflows and saves you time',
              'Greater interaction between all stakeholders (residents families and your staff)',
            ]}
          />
        </div>
      </Card>
    </CenteredLayout>
  )
}

export default FamilyBenefits
