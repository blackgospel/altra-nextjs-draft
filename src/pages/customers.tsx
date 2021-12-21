import CustomersHero from 'components/customers/hero/customers.hero'
import Stories from 'components/customers/stories/customers.stories'
import Page from 'components/global/page/index.page'
import Companies from 'components/shared/companies/index.companies'
import Footer from 'components/shared/footer/index.footer'

const Customers = () => {
  return (
    <Page title="Customers">
      <CustomersHero />
      <Companies />
      <Stories />
      <Footer />
    </Page>
  )
}

export default Customers
