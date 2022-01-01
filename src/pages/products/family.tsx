import FamilyImage1 from 'assets/images/family/family-section1.png'
import FamilyImage2 from 'assets/images/family/family-section2.png'
import FamilyImage3 from 'assets/images/family/family-section3.png'
import FamilyImage4 from 'assets/images/family/family-section4.png'
import FamilyImage5 from 'assets/images/family/family-section5.png'
import List from 'components/global/list/index.list'
import Page from 'components/global/page/index.page'
import ProductsDescription from 'components/products/descriptions/products.descriptions'
import FamilyBenefits from 'components/products/family/benefits/family.benefits'
import FamilyTestimonial from 'components/products/family/testimonial/family.testimonial'
import ProductsHero from 'components/products/hero/products.hero'

const Family = () => {
  return (
    <Page title="Family | Altra Products">
      <ProductsHero
        title="Improve connectedness of residents, families and your team"
        heroColor="green"
      />
      <ProductsDescription
        title="Keep Families in the loop"
        description="Secure engagement app that allows care homes to share updates on the
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
        description="Wellbeing and activities teams can share all the great activities on
      offer each week, complete paperwork and capture resident feedback in a
      fraction of the time. It gives administrators a live view of what
      their residents are enjoying and also gives them the ability to
      proactively make changes for individual residents according to their
      changing habits and needs."
        image={FamilyImage3}
        color="green"
      />
      <FamilyTestimonial />
      <FamilyBenefits />
      <ProductsDescription
        title="Manage visits with ease"
        description="Reduce the administrative burden managing visits with our visitor
        booking portal and eGuestbook. Visits can be linked to resident
        profiles, alerting you if residents have not had a visit for some
        time."
        image={FamilyImage4}
        color="green"
      />
      <ProductsDescription
        title="Use on any device, anywhere"
        description="Managers, carestaff and families can access Altra on any device
        (mobile, tablet or desktop) to post content, respond to messages,
        giving everyone the information they need - anytime, anywhere."
        image={FamilyImage5}
        color="green"
        reverse
        bubbleRight
      >
        <List
          color="on_surface"
          title="family-section-4-list"
          list={[
            'Add resident details. From your care management system or wherever you store details)',
            'Invite family members. Families will be automatically invited to their loved ones account when you add them to Altra',
            'Start Sharing. Fill your feed, print the newsletters and see the delight on residents faces. We are on hand to help with any queries along the way. ',
          ]}
        />
      </ProductsDescription>
    </Page>
  )
}

export default Family
