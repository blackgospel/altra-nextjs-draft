import Footer from 'components/global/footer/index.footer'
import Page from 'components/global/page/index.page'
import Customer from 'components/home/customer/home.customer'
import InfoCard from 'components/home/info-card/index.info-card'
import Testimonials from 'components/home/testimonials/home.testimonials'

const Home = () => {
  return (
    <Page>
      <Customer />
      <InfoCard
        title="For the whole team"
        description="Automation works when it’s built by those who know the workflow best – not distant developers. Tines is no-code, giving your frontline team members automation superpowers."
        color="#f48eba"
      />
      <InfoCard
        title="For the whole team"
        description="Automation works when it’s built by those who know the workflow best – not distant developers. Tines is no-code, giving your frontline team members automation superpowers."
        color="#8578e6"
      />
      <InfoCard
        title="For the whole team"
        description="Automation works when it’s built by those who know the workflow best – not distant developers. Tines is no-code, giving your frontline team members automation superpowers."
      />
      <Testimonials />
      <Footer />
    </Page>
  )
}

export default Home
