import CustomersHero from 'components/customers/hero/customers.hero'
import Stories from 'components/customers/stories/customers.stories'
import Page from 'components/global/page/index.page'
import Companies from 'components/shared/companies/index.companies'
import Footer from 'components/shared/footer/index.footer'
import TestimonialsData from 'data/testimonial.json'

const Customers = () => {
  return (
    <Page title="Customers">
      <CustomersHero />
      <Companies />
      <Stories
        title="What our customers say about Altra Family"
        list={TestimonialsData.filter(({ type }) => type && type === 'family')}
        bubbleRight2
      />
      <Stories
        title="What our customers say about Altra Staff"
        list={TestimonialsData.filter(({ type }) => type && type === 'staff')}
        bubbleLeft2
      />
      <Footer />
    </Page>
  )
}

export default Customers
