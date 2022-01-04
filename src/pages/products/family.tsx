import FamilyImage1 from 'assets/images/family/family-section1.png'
import FamilyImage2 from 'assets/images/family/family-section2.png'
import FamilyImage3 from 'assets/images/family/family-section3.png'
import FamilyImage4 from 'assets/images/family/family-section4.png'
import FamilyImage5 from 'assets/images/family/family-section5.png'
import Page from 'components/global/page/index.page'
import ProductsDescription from 'components/products/descriptions/products.descriptions'
import FamilyBenefits from 'components/products/family/benefits/family.benefits'
import FamilyChooseUs from 'components/products/family/choose-us/family.choose-us'
import FamilyTestimonial from 'components/products/family/testimonial/family.testimonial'
import ProductsHero from 'components/products/hero/products.hero'

const Family = () => {
  return (
    <Page title="Family | Altra Products">
      <ProductsHero
        title="Improve connectedness in your care home"
        description="Enhance resident experience in your care home with tools that provide meaningful engagement and keep families, residents and your team connected."
        heroColor="green"
      />
      <ProductsDescription
        title="Keep Families in the loop"
        description="Altra is a secure engagement app that allows care homes to share updates on the
    well-being of residents directly with families. Families only see
    information relevant to their loved one through videos, pictures,
    messages and more."
        image={FamilyImage1}
        color="violet"
      />
      <ProductsDescription
        title="Converting digital content into physical newsletters to the delight of
      your residents"
        description="We’ve created a simple 2-step process so you can print personalised
      newsletters for your residents with content posted by their families
      and your staff on Altra. The Newsletter will also become a new source
      of interaction between your residents and team beyond the “here and
      now”."
        image={FamilyImage2}
        color="red"
        reverse
        bubbleLeft
      />
      <ProductsDescription
        title="Show off all the great activities in your home"
        description="Activities teams can share all the great activities on offer each week in your care home, complete paperwork and capture resident feedback in a fraction of the time. It gives you a live view of what your residents are enjoying and allows you to proactively make changes for individual residents according to their changing habits and needs."
        image={FamilyImage3}
        color="green"
      />
      <FamilyTestimonial />
      <FamilyBenefits />
      <ProductsDescription
        title="Manage visits with ease"
        description="Reduce the administrative burden managing visits to your care home with our visitor booking portal and eGuestbook. Set up alerts if residents have not had a visit for some time."
        image={FamilyImage4}
        color="violet"
      />
      <ProductsDescription
        title="Use on any device, anywhere"
        description="Managers, care staff and families can access Altra on any device (mobile, tablet or desktop) to post content, respond to messages etc., giving everyone the information they need - anytime, anywhere."
        image={FamilyImage5}
        color="red"
        reverse
        bubbleRight
      />

      <FamilyChooseUs />
    </Page>
  )
}

export default Family
