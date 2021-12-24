import Page from 'components/global/page/index.page'
import FamilyBenefits from 'components/products/family/benefits/family.benefits'
import FamilyIntroduction from 'components/products/family/introduction/family.introduction'
import FamilySection4 from 'components/products/family/section4/family.section4'
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
      <FamilyTestimonial />
      <FamilyBenefits />
      <FamilySection4 />
      <Footer />
    </Page>
  )
}

export default Family
