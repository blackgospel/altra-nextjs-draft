import Footer from 'components/global/footer/index.footer'
import Page from 'components/global/page/index.page'
import Customer from 'components/home/customer/home.customer'
import InfoCard from 'components/home/info-card/index.info-card'
import Testimonials from 'components/home/testimonials/home.testimonials'

const Home = () => {
  return (
    <Page>
      <Customer />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <Testimonials />
      <Footer />
    </Page>
  )
}

export default Home
