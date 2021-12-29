import Page from 'components/global/page/index.page'
import FamilyBenefits from 'components/products/family/benefits/family.benefits'
import FamilyIntroduction from 'components/products/family/introduction/family.introduction'
import FamilySection2 from 'components/products/family/section2/family.section2'
import FamilySection3 from 'components/products/family/section3/family.section3'
import FamilySection4 from 'components/products/family/section4/family.section4'
import FamilySection5 from 'components/products/family/section5/family.section5'
import FamilyTestimonial from 'components/products/family/testimonial/family.testimonial'
import ProductsHero from 'components/products/hero/products.hero'
import Footer from 'components/shared/footer/index.footer'

const Family = () => {
  return (
    <Page title="Family | Altra Products">
      <ProductsHero
        title="Improve connectedness of residents, families and your team"
        heroColor="green"
      />
      <FamilyIntroduction />
      <FamilySection2 />
      <FamilySection3 />
      <FamilyTestimonial />
      <FamilyBenefits />
      <FamilySection4 />
      <FamilySection5 />
      <Footer />
    </Page>
  )
}

export default Family
