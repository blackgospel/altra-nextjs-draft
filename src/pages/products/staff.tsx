import Page from 'components/global/page/index.page'
import ProductsHero from 'components/products/hero/products.hero'
import StaffHeadline from 'components/products/staff/headline/staff.headline'
import StaffIntroduction from 'components/products/staff/introduction/staff.introduction'
import StaffSection2 from 'components/products/staff/section2/staff.section2'
import StaffSection3 from 'components/products/staff/section3/staff.section3'
import StaffTestimonial from 'components/products/staff/testimonial/staff.testimonial'
import Footer from 'components/shared/footer/index.footer'

const Staff = () => {
  return (
    <Page title="Staff | Altra Products">
      <ProductsHero
        title="Change how you connect with your workforce"
        description="Save time. Communicate effectively. Eliminate back-and-forths."
        heroColor="red"
      />
      <StaffHeadline />
      <StaffTestimonial />
      <StaffIntroduction />
      <StaffSection2 />
      <StaffSection3 />
      <Footer />
    </Page>
  )
}

export default Staff
