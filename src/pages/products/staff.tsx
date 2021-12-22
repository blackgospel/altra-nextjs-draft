import Page from 'components/global/page/index.page'
import ProductsHero from 'components/products/hero/products.hero'
import StaffIntroduction from 'components/products/staff/introduction/staff.introduction'
import StaffTestimonial from 'components/products/staff/testimonial/staff.testimonial'
import Footer from 'components/shared/footer/index.footer'

const Staff = () => {
  return (
    <Page title="Staff | Altra Products">
      <ProductsHero
        title="Change how you connect with your workforce"
        description="Save time. Communicate effectively. Eliminate back-and-forths."
      />
      <StaffTestimonial />
      <StaffIntroduction />
      <Footer />
    </Page>
  )
}

export default Staff
