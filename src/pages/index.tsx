import HeroImage1 from 'assets/images/home/hero-family.png'
import HeroImage3 from 'assets/images/home/hero-staff.png'
import HeroImage2 from 'assets/images/home/hero-wellbeing.png'
import Footer from 'components/global/footer/index.footer'
import Page from 'components/global/page/index.page'
import ChooseUs from 'components/home/choose-us/home.choose-us'
import Customer from 'components/home/customer/home.customer'
import InfoCard from 'components/home/info-card/index.info-card'
import Testimonials from 'components/home/testimonials/home.testimonials'

const Home = () => {
  return (
    <Page>
      <Customer />
      <InfoCard
        title="Family Engagement & Resident Experience"
        description="Improve connectedness of residents, families and your team."
        list={[
          'Secure engagement app that allows care homes to share updates on the well-being of residents directly with families.',
          'Convert digital content from families and your team into personalised physical newsletters for residents to enjoy.',
          'Manage visits, showcase your activities and more.',
        ]}
        color="linear-gradient(135deg, #21D4FD 0%, #B721FF 100%)"
        image={HeroImage1}
      />
      <InfoCard
        title="Wellbeing Hub"
        description="Your very own on-demand wellbeing hub. The tool to provide variety and consistency to your activity/wellbeing programmes."
        list={[
          'Eliminate use of multiple messaging streams like Whatsapp, email and individual texts.',
          'Stay ahead of vacant shifts with our open shift management system.',
          'Variety of content so there`s something to suit every resident.',
        ]}
        color="linear-gradient(135deg, #74EBD5 0%, #9FACE6 100%)"
        image={HeroImage2}
      />
      <InfoCard
        title="Staff Communication"
        description="Consolidate all team messaging into one communication hub. Save time. Communicate effectively. Eliminate back-and-forths."
        list={[
          'Access 100s of ideas and videos for your activities / wellbeing team.',
          'Stay ahead of vacant shifts with our open shift management system.',
          'Simple user experience for managers and staff making communication a breeze!',
        ]}
        color="linear-gradient(142deg, #08AEEA 0%, #2AF598 100%)"
        image={HeroImage3}
      />
      <ChooseUs />
      <Testimonials />
      <Footer />
    </Page>
  )
}

export default Home
