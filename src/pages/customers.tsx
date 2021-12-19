import CustomersHero from 'components/customers/hero/customers.hero'
import Stories from 'components/customers/stories/home.stories'
import Page from 'components/global/page/index.page'
import Companies from 'components/shared/companies/index.companies'

const Customers = () => {
  return (
    <Page title="Customers">
      <CustomersHero />
      <Companies />
      <Stories />
    </Page>
  )
}

export default Customers
